import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  try {
    const { email, name, source = 'receipt_email_upsell' } = await req.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      )
    }

    const supabaseUrl = process.env.SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json(
        { error: 'Supabase no configurado' },
        { status: 500 }
      )
    }

    const { createClient } = await import('@supabase/supabase-js')
    const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)

    const { data, error } = await supabase
      .from('leads')
      .upsert({
        email,
        name: name || null,
        source,
        status: 'new',
        nurture_day: 0,
        metadata: {}
      }, { onConflict: 'email' })
      .select()
      .single()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    // Enviar email inmediato con Guía rápida (Lead Magnet inline) - Brand Trazzo
    const resendApiKey = process.env.RESEND_API_KEY
    if (resendApiKey) {
      try {
        const resend = new Resend(resendApiKey)
        await resend.emails.send({
          from: 'Trazzo Recibo <noreply@elantimetodo.com>',
          headers: {
            'List-Unsubscribe': `<mailto:unsub@elantimetodo.com?subject=unsubscribe>, <https://trazzoapp.online/api/unsub?email=${encodeURIComponent(email)}>`
          },
          to: [email],
          subject: 'Tu guía rápida: 3 claves para cobrar mejor',
          html: `
            <div style="font-family: Inter, system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #fbf8fc; border: 1px solid #e4e1e6;">
              <h2 style="font-family: 'Hanken Grotesk', Inter, sans-serif; font-size: 28px; font-weight: 700; line-height: 36px; color: #1b1b1e; margin: 0 0 16px; letter-spacing: -0.01em;">Guía rápida: 3 claves para cobrar mejor desde hoy</h2>
              <p style="font-size: 16px; line-height: 24px; color: #4c4546; margin: 0 0 24px;">Hola ${name || 'profesional'},</p>
              <p style="font-size: 16px; line-height: 24px; color: #4c4546; margin: 0 0 24px;">Gracias por confiar en Trazzo Recibo. Aquí tienes tu guía inmediata:</p>
              
              <ol style="margin: 0 0 32px; padding-left: 24px; line-height: 2.4;">
                <li style="font-size: 16px; line-height: 24px; color: #1b1b1e; margin-bottom: 12px;"><strong style="font-weight: 600;">Puntualidad = dinero:</strong> Ofrece $20 descuento si llegas antes de las 2pm. Los técnicos puntuales cobran 40% más.</li>
                <li style="font-size: 16px; line-height: 24px; color: #1b1b1e; margin-bottom: 12px;"><strong style="font-weight: 600;">Seguimiento 24h:</strong> Un email "¿Todo funcionando bien?" al día siguiente genera 60% más recomendaciones.</li>
                <li style="font-size: 16px; line-height: 24px; color: #1b1b1e;"><strong style="font-weight: 600;">Presentación Pro:</strong> Recibos sin "Generado gratis" transmiten confianza y justifican tickets altos.</li>
              </ol>

              <hr style="margin: 32px 0; border: none; border-top: 1px solid #e4e1e6;">
              
              <p style="font-size: 14px; line-height: 20px; color: #4c4546; margin: 0 0 24px;">¿Quieres automatizar esto y quitar la marca de agua de tus recibos?</p>
              <p style="text-align: center; margin: 0 0 32px;">
                <a href="https://trazzoapp.online/pro" style="font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; background: #000000; color: #ffffff; padding: 14px 28px; border-radius: 0; text-decoration: none; display: inline-block; border: 1px solid #000000;">
                  Ver Pro $99
                </a>
              </p>

              </div>
          `,
          tags: [
            { name: 'feature', value: 'lead_welcome' },
            { name: 'day', value: '0' }
          ]
        })
        console.log('Email inmediato enviado a:', email)
      } catch (emailErr) {
        console.error('Error enviando email inmediato (no bloqueante):', emailErr)
      }
    }

    return NextResponse.json({ success: true, lead: data })
  } catch (err) {
    console.error('Capture lead error:', err)
    return NextResponse.json({ error: 'Error interno' }, { status: 500 })
  }
}