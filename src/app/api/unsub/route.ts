import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const email = req.nextUrl.searchParams.get('email')

  if (!email || !email.includes('@')) {
    return new NextResponse('Email inválido', { status: 400 })
  }

  const { createClient } = await import('@supabase/supabase-js')
  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  // Marca como desuscrito
  const { error } = await supabase
    .from('leads')
    .update({
      status: 'unsubscribed',
      unsubscribed_at: new Date().toISOString()
    })
    .eq('email', email)

  if (error) {
    console.error('Unsub error:', error)
    return new NextResponse('Error interno', { status: 500 })
  }

  // Página de confirmación brand-compliant
  return new NextResponse(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Desuscrito - Trazzo Recibo</title>
      <style>
        body { font-family: Inter, system-ui, sans-serif; background: #fbf8fc; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; color: #1b1b1e; }
        .card { background: #fff; border: 1px solid #e4e1e6; padding: 48px; max-width: 400px; text-align: center; }
        h1 { font-family: 'Hanken Grotesk', sans-serif; font-size: 28px; font-weight: 700; color: #1b1b1e; margin: 0 0 16px; }
        p { color: #4c4546; line-height: 1.6; margin: 0 0 24px; }
        .btn { display: inline-block; padding: 14px 28px; background: #1b1b1e; color: #fff; font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; text-decoration: none; border: 1px solid #1b1b1e; }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>✅ Te has desuscrito</h1>
        <p>Ya no recibirás más emails de Trazzo Recibo.<br>Tu email <strong>${email}</strong> ha sido eliminado de nuestra lista.</p>
        <a href="https://trazzoapp.online" class="btn">Volver a Trazzo</a>
      </div>
    </body>
    </html>
  `, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' }
  })
}