import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { createClient } from '@supabase/supabase-js'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-06-24.dahlia',
})

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(req: Request) {
  if (!webhookSecret) {
    console.error('[Webhook] STRIPE_WEBHOOK_SECRET not configured')
    return new NextResponse('Webhook secret not configured', { status: 500 })
  }

  const body = await req.text()
  const signature = req.headers.get('Stripe-Signature') as string

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
  } catch (err: any) {
    console.error('[Webhook] Signature verification failed:', err.message)
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session

    const userId = session.metadata?.userId

    if (userId) {
      console.log(`[Webhook] Updating user ${userId} to pro plan`)
      // Use service role key to bypass RLS for webhook updates
      const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
      )

      if (!process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY === 'RELLENA_CON_TU_SERVICE_ROLE_KEY') {
        console.warn('[Webhook] WARNING: SUPABASE_SERVICE_ROLE_KEY is not set or invalid. RLS might block this update.')
      }

      const { data, error } = await supabaseAdmin
        .from('profiles')
        .update({ plan: 'pro' })
        .eq('id', userId)
        .select()

      if (error) {
        console.error('[Webhook] Supabase update error:', error)
        return new NextResponse('Database update failed', { status: 500 })
      } else {
        console.log('[Webhook] Supabase update success:', data)
      }
    } else {
      console.warn('[Webhook] No userId found in session metadata')
    }
  }

  return new NextResponse('Webhook processed', { status: 200 })
}