import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
}

export async function POST(req: NextRequest) {
  try {
    const { pdfBase64, clientEmail, clientName, techEmail, sendTips } = await req.json()

    if (!pdfBase64 || !clientEmail) {
      return NextResponse.json(
        { error: 'Faltan pdfBase64 o clientEmail' },
        { status: 400 }
      )
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        { error: 'RESEND_API_KEY no configurado' },
        { status: 500 }
      )
    }

    const resend = new Resend(apiKey)

    const emailSubject = `Recibo para ${clientName || 'cliente'}`

    const { data, error } = await resend.emails.send({
      from: `${process.env.FROM_NAME || 'Trazzo Recibo'} <${process.env.FROM_EMAIL || 'noreply@elantimetodo.com'}>`,
      to: [clientEmail],
      subject: emailSubject,
      html: `
        <div style="font-family: Inter, system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #fbf8fc; border: 1px solid #e4e1e6;">
          <h2 style="font-family: 'Hanken Grotesk', Inter, sans-serif; font-size: 24px; font-weight: 700; line-height: 32px; color: #1b1b1e; margin: 0 0 16px; letter-spacing: -0.01em;">Tu recibo está listo</h2>
          <p style="font-size: 16px; line-height: 24px; color: #1b1b1e; margin: 0 0 24px;">Hola ${clientName || 'cliente'},</p>
          <p style="font-size: 16px; line-height: 24px; color: #1b1b1e; margin: 0 0 24px;">Adjunto encontrarás tu recibo en PDF.</p>

          <hr style="margin: 32px 0; border: none; border-top: 1px solid #e4e1e6;">

          <p style="font-size: 14px; line-height: 20px; color: #4c4546; margin: 0 0 24px;">
            Enviado desde <strong>Trazzo Recibo</strong> — Recibos profesionales en segundos.
          </p>

          <hr style="margin: 32px 0; border: none; border-top: 1px solid #e4e1e6;">

          <p style="font-family: 'JetBrains Mono', monospace; font-size: 12px; line-height: 16px; color: #7e7576; margin: 0; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase;">
            ¿Necesitas recibos con tu logo y sin marca de agua?
          </p>
        </div>
      `,
      attachments: [
        {
          filename: `recibo-${clientName || 'cliente'}-${Date.now()}.pdf`,
          content: pdfBase64.includes('base64,') ? pdfBase64.split('base64,')[1] : pdfBase64,
        },
      ],
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    // Capture lead for nurturing if techEmail provided and sendTips is true
    if (techEmail && sendTips && techEmail.includes('@')) {
      try {
        const leadRes = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/capture-lead`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: techEmail,
            name: clientName || 'Cliente',
            source: 'receipt_email_upsell'
          })
        })
        const leadData = await leadRes.json()
        console.log('Lead captured:', leadData)
      } catch (leadErr) {
        console.error('Lead capture failed (non-blocking):', leadErr)
      }
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (err) {
    console.error('API error:', err)
    return NextResponse.json({ error: 'Error interno' }, { status: 500 })
  }
}