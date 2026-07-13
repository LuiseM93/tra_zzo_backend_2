import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  try {
    const { pdfBase64, clientEmail, clientName, subject } = await req.json()

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

    const base64Data = pdfBase64.includes('base64,')
      ? pdfBase64.split('base64,')[1]
      : pdfBase64

    const emailSubject = subject || `Recibo para ${clientName || 'cliente'}`

    const { data, error } = await resend.emails.send({
      from: `${process.env.FROM_NAME || 'Trazzo Recibo'} <${process.env.FROM_EMAIL || 'noreply@elantimetodo.com'}>`,
      to: [clientEmail],
      subject: emailSubject,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6b21a8;">Tu recibo está listo</h2>
          <p>Hola ${clientName || 'cliente'},</p>
          <p>Adjunto encontrarás tu recibo en PDF.</p>
          <p style="color: #666; font-size: 14px;">
            Enviado desde <strong>Trazzo Recibo</strong> — Recibos profesionales en segundos.
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

    return NextResponse.json({ success: true, id: data?.id })
  } catch (err) {
    console.error('API error:', err)
    return NextResponse.json({ error: 'Error interno' }, { status: 500 })
  }
}
