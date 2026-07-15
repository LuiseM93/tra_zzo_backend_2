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

    // Enviar email inmediato con Guía rápida (Lead Magnet inline)
    const resendApiKey = process.env.RESEND_API_KEY
    if (resendApiKey) {
      try {
        const resend = new Resend(resendApiKey)
        await resend.emails.send({
          from: 'Trazzo Recibo <noreply@elantimetodo.com>',
          to: [email],
          subject: '✅ Tu guía rápida: 3 claves para cobrar mejor',
          html: `
            <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <h2 style="color: #6b21a8;">Guía rápida: 3 claves para cobrar mejor desde hoy</h2>
              <p>Hola ${name || 'profesional'},</p>
              <p>Gracias por confiar en Trazzo Recibo. Aquí tienes tu guía inmediata:</p>
              
              <ol style="line-height: 2;">
                <li><strong>Puntualidad = dinero:</strong> Ofrece $20 descuento si llegas antes de las 2pm. Los técnicos puntuales cobran 40% más.</li>
                <li><strong>Seguimiento 24h:</strong> Un email "¿Todo funcionando bien?" al día siguiente genera 60% más recomendaciones.</li>
                <li><strong>Presentación Pro:</strong> Recibos sin "Generado gratis" transmiten confianza y justifican tickets altos.</li>
              </ol>

              <hr style="margin: 24px 0; border-color: #e5e7eb;">
              
              <p style="color: #6b7280; font-size: 14px;">
                ¿Quieres automatizar esto y quitar la marca de agua de tus recibos?
              </p>
              <p style="text-align: center; margin: 24px 0;">
                <a href="https://trazzoapp.online/pro" style="background: #6b21a8; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 600;">
                  Ver Pro $99 →
                </a>
              </p>

              <hr style="margin: 24px 0; border-color: #e5e7eb;">
              <p style="color: #9ca3af; font-size: 12px;">
                Si no quieres más tips, responde "stop" a este email.
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