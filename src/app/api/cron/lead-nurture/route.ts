import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Nurture emails day 2 and day 5
const NURTURE_SEQUENCES = [
  {
    day: 2,
    subject: '💡 Tip #2: Cómo cobrar 40% más con bonos por puntualidad',
    html: `
      <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #6b21a8;">Tip #2: Bonos por puntualidad</h2>
        <p>Los técnicos que ofrecen bonos por puntualidad cobran un 40% más.</p>
        <p>Ejemplo: "$20 de descuento si llegas antes de las 2pm".</p>
        <hr>
        <p style="color: #666; font-size: 12px;">¿No quieres más tips? Responde "stop".</p>
      </div>
    `
  },
  {
    day: 5,
    subject: '💡 Tip #3: Email de seguimiento = 60% más recomendaciones',
    html: `
      <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #6b21a8;">Tip #3: Email de seguimiento</h2>
        <p>Un email 24h después: "¿Todo funcionando bien?" genera 60% más recomendaciones.</p>
        <hr>
        <p style="color: #666; font-size: 12px;">¿No quieres más tips? Responde "stop".</p>
      </div>
    `
  }
]

export async function GET(req: NextRequest) {
  // Verificar auth - debe venir de Vercel Cron
  const authHeader = req.headers.get('authorization')
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const supabaseUrl = process.env.SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY
    
    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json({ error: 'Supabase no configurado' }, { status: 500 })
    }

    // Import dinámico
    const { createClient } = await import('@supabase/supabase-js')
    const supabase = createClient(supabaseUrl, supabaseKey)

    // Obtener leads que necesitan nurturing
    const { data: leads, error } = await supabase
      .from('leads')
      .select('id, email, created_at, metadata')
      .eq('status', 'new')
      .or('nurture_day.eq.0,nurture_day.is.null')

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    if (!leads || leads.length === 0) {
      return NextResponse.json({ message: 'No leads to nurture' })
    }

    const resend = new Resend(process.env.RESEND_API_KEY!)
    
    let sentCount = 0
    
    for (const lead of leads) {
      const daysSinceCreated = Math.floor(
        (Date.now() - new Date(lead.created_at).getTime()) / (1000 * 60 * 60 * 24)
      )
      
      let sequenceIndex = -1
      
      if (daysSinceCreated >= 2 && daysSinceCreated < 3) {
        sequenceIndex = 0 // Day 2
      } else if (daysSinceCreated >= 5 && daysSinceCreated < 6) {
        sequenceIndex = 1 // Day 5
      }
      
      if (sequenceIndex >= 0) {
        const sequence = NURTURE_SEQUENCES[sequenceIndex]
        
        try {
          await resend.emails.send({
            from: 'Trazzo Recibo <noreply@elantimetodo.com>',
            to: [lead.email],
            subject: sequence.subject,
            html: sequence.html,
            tags: [
              { name: 'feature', value: 'lead_nurture' },
              { name: 'day', value: String(sequence.day) }
            ]
          })
          
          // Actualizar lead
          await supabase
            .from('leads')
            .update({ nurture_day: sequence.day })
            .eq('id', lead.id)
          
          sentCount++
        } catch (err) {
          console.error(`Error sending to ${lead.email}:`, err)
        }
      }
    }

    return NextResponse.json({ success: true, sent: sentCount })
  } catch (err) {
    console.error('Cron error:', err)
    return NextResponse.json({ error: 'Error interno' }, { status: 500 })
  }
}