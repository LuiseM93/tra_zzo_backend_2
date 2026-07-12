import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { createClient } from '@/lib/supabase/server'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-06-24.dahlia',
})

export async function POST(req: Request) {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { data: profile } = await supabase
      .from('profiles')
      .select('plan')
      .eq('id', user.id)
      .single()

    if (profile?.plan === 'pro') {
      return NextResponse.json({ error: 'User is already PRO' }, { status: 400 })
    }

    // Price ID hardcoded — no es un dato secreto, es el ID público del producto en Stripe
    const priceId = process.env.STRIPE_PRICE_ID || 'price_1Ts0wW1E63kseKcz1GRx2c6q'

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://trazzoapp.online'

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${siteUrl}/?success=true`,
      cancel_url: `${siteUrl}/?canceled=true`,
      metadata: {
        userId: user.id,
      },
      customer_email: user.email,
      allow_promotion_codes: true,
    })

    return NextResponse.json({ url: session.url })
  } catch (err: any) {
    // Log the full error to Vercel logs
    console.error('[checkout] Stripe error:', err?.message, err?.type, err?.code)
    return NextResponse.json(
      { error: err?.message || 'Internal server error', type: err?.type },
      { status: 500 }
    )
  }
}
