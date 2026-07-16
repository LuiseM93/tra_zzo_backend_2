import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { createClient } from '@supabase/supabase-js'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const revalidate = 0
export const fetchCache = 'force-no-store'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-06-24.dahlia',
})

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(req: Request) {
  const signature = req.headers.get('Stripe-Signature')

  if (!signature) {
    return new NextResponse('No signature', { status: 401 })
  }

  const body = await req.text()

  if (!webhookSecret) {
    console.error('[Webhook] STRIPE_WEBHOOK_SECRET not configured')
    return new NextResponse('Server misconfigured', { status: 500 })
  }

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
      const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
      )

      if (!process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY === 'RELLENA_CON_TU_SERVICE_ROLE_KEY') {
        console.warn('[Webhook] WARNING: SUPABASE_SERVICE_ROLE_KEY is not set or invalid.')
      }

      const { error } = await supabaseAdmin
        .from('profiles')
        .update({ plan: 'pro' })
        .eq('id', userId)

      if (error) {
        console.error('[Webhook] Supabase update error:', error)
      }
    }
  }

  return new NextResponse('OK', { status: 200 })
}