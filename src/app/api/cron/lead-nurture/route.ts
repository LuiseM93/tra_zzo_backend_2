import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Secuencia completa 7 emails - Brand TRAZZO: monocromático, sharp, Inter, 0px radius, 1px borders
// Días: 0 (inmediato via capture-lead), 2, 4, 7 (bucket-specific), 10, 14, 21
const NURTURE_SEQUENCES = [
  {
    day: 2,
    subject: '3 errores que te hacen perder dinero al cotizar',
    html: `
      <div style="font-family: Inter, system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #fbf8fc; border: 1px solid #e4e1e6;">
        <h2 style="font-family: 'Hanken Grotesk', Inter, sans-serif; font-size: 24px; font-weight: 700; line-height: 32px; color: #1b1b1e; margin: 0 0 16px;">3 errores que te hacen perder dinero al cotizar</h2>
        <p style="font-size: 16px; line-height: 24px; color: #1b1b1e; margin: 0 0 24px;">Hola,</p>
        <p style="font-size: 16px; line-height: 24px; color: #1b1b1e; margin: 0 0 24px;">La mayoría de técnicos cometen estos 3 errores sin darse cuenta:</p>
        
        <ol style="margin: 0 0 24px; padding-left: 24px; line-height: 2;">
          <li style="font-size: 16px; line-height: 28px; color: #1b1b1e;"><strong>No desglosar:</strong> "Instalación $2,500" vs "Materiales $1,200 + Mano de obra $1,300". El desglose justifica el precio y reduce regateo 50%.</li>
          <li style="font-size: 16px; line-height: 28px; color: #1b1b1e;"><strong>No dar opciones:</strong> Presenta 3 opciones (Básico / Estándar / Premium). El 60% elige la del medio.</li>
          <li style="font-size: 16px; line-height: 28px; color: #1b1b1e;"><strong>No poner fecha de validez:</strong> "Válido 7 días" crea urgencia y evita que vuelvan en 3 meses al mismo precio.</li>
        </ol>

        <hr style="margin: 32px 0; border: none; border-top: 1px solid #e4e1e6;">
        
        <p style="font-size: 14px; line-height: 20px; color: #4c4546; margin: 0 0 24px;">
          ¿Automatizar cotizaciones profesionales en segundos?
        </p>
        <p style="text-align: center; margin: 32px 0;">
          <a href="https://trazzoapp.online/pro" style="font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; background: #000000; color: #ffffff; padding: 16px 32px; border-radius: 0; text-decoration: none; border: 1px solid #000000; display: inline-block;">
            Ver Pro $99
          </a>
        </p>

      </div>
    `
  },
  {
    day: 4,
    subject: 'Email de seguimiento = 60% más recomendaciones',
    html: `
      <div style="font-family: Inter, system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #fbf8fc; border: 1px solid #e4e1e6;">
        <h2 style="font-family: 'Hanken Grotesk', Inter, sans-serif; font-size: 24px; font-weight: 700; line-height: 32px; color: #1b1b1e; margin: 0 0 16px;">Email de seguimiento = 60% más recomendaciones</h2>
        <p style="font-size: 16px; line-height: 24px; color: #1b1b1e; margin: 0 0 24px;">Hola,</p>
        <p style="font-size: 16px; line-height: 24px; color: #1b1b1e; margin: 0 0 24px;">Un hábito simple que cambia todo:</p>
        
        <div style="background: #f0edf1; border: 1px solid #e4e1e6; padding: 24px; margin: 0 0 24px; font-style: italic; font-size: 16px; line-height: 24px; color: #1b1b1e;">
          "Hola [Cliente], ¿todo funcionando bien con la [reparación/instalación]? Cualquier cosa, aquí estoy."
        </div>
        
        <p style="font-size: 16px; line-height: 24px; color: #1b1b1e; margin: 0 0 12px;">Enviado a las <strong>24 horas</strong> termina el trabajo.</p>
        <p style="font-size: 16px; line-height: 24px; color: #1b1b1e; margin: 0 0 24px;">Resultado: 60% más recomendaciones, 40% menos reclamos, clientes que vuelven.</p>

        <hr style="margin: 32px 0; border: none; border-top: 1px solid #e4e1e6;">
        
        <p style="font-size: 14px; line-height: 20px; color: #4c4546; margin: 0 0 24px;">
          ¿Quieres que Trazzo lo haga automático por ti?
        </p>
        <p style="text-align: center; margin: 32px 0;">
          <a href="https://trazzoapp.online/pro" style="font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; background: #000000; color: #ffffff; padding: 16px 32px; border-radius: 0; text-decoration: none; border: 1px solid #000000; display: inline-block;">
            Ver Pro $99
          </a>
        </p>

      </div>
    `
  },
  {
    day: 7,
    subject: 'Cómo un técnico como tú subió 40% su ticket',
    // Template base - el contenido específico se inyecta según bucket
    html: ''
  },
  {
    day: 10,
    subject: '¿Viste "Generado gratis..." en tu recibo? Quítalo por $99',
    html: `
      <div style="font-family: Inter, system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #fbf8fc; border: 1px solid #e4e1e6;">
        <h2 style="font-family: 'Hanken Grotesk', Inter, sans-serif; font-size: 24px; font-weight: 700; line-height: 32px; color: #1b1b1e; margin: 0 0 16px;">¿Viste "Generado gratis..." en tu recibo?</h2>
        <p style="font-size: 16px; line-height: 24px; color: #1b1b1e; margin: 0 0 24px;">Hola,</p>
        <p style="font-size: 16px; line-height: 24px; color: #1b1b1e; margin: 0 0 24px;">Esa frase le dice a tu cliente: <strong>"Este técnico usa herramientas gratis, quizás su trabajo también es barato."</strong></p>
        
        <p style="font-size: 16px; line-height: 24px; color: #1b1b1e; margin: 0 0 16px;">Por <strong>$99 una sola vez</strong> (sin mensualidades):</p>
        <ul style="margin: 0 0 24px; padding-left: 24px; line-height: 2;">
          <li style="font-size: 16px; line-height: 28px; color: #1b1b1e;">✅ Recibos SIN marca de agua</li>
          <li style="font-size: 16px; line-height: 28px; color: #1b1b1e;">✅ Tu logo, tus colores, tu marca</li>
          <li style="font-size: 16px; line-height: 28px; color: #1b1b1e;">✅ Cotizador automático por oficio</li>
          <li style="font-size: 16px; line-height: 28px; color: #1b1b1e;">✅ Emails de seguimiento automáticos</li>
          <li style="font-size: 16px; line-height: 28px; color: #1b1b1e;">✅ Historial ilimitado de clientes</li>
        </ul>

        <p style="font-size: 14px; line-height: 20px; color: #4c4546; margin: 0 0 24px;">
          Un ticket Pro te paga la inversión. Los siguientes son ganancia pura.
        </p>

        <hr style="margin: 32px 0; border: none; border-top: 1px solid #e4e1e6;">
        
        <p style="text-align: center; margin: 32px 0;">
          <a href="https://trazzoapp.online/pro" style="font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; background: #000000; color: #ffffff; padding: 16px 32px; border-radius: 0; text-decoration: none; border: 1px solid #000000; display: inline-block;">
            Actualizar a Pro $99
          </a>
        </p>

      </div>
    `
  },
  {
    day: 14,
    subject: '3 dudas antes de dar el salto a Pro',
    html: `
      <div style="font-family: Inter, system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #fbf8fc; border: 1px solid #e4e1e6;">
        <h2 style="font-family: 'Hanken Grotesk', Inter, sans-serif; font-size: 24px; font-weight: 700; line-height: 32px; color: #1b1b1e; margin: 0 0 16px;">3 dudas antes de dar el salto a Pro</h2>
        <p style="font-size: 16px; line-height: 24px; color: #1b1b1e; margin: 0 0 24px;">Hola,</p>
        <p style="font-size: 16px; line-height: 24px; color: #1b1b1e; margin: 0 0 24px;">Te entiendo. Respondo las 3 más frecuentes:</p>
        
        <ol style="margin: 0 0 24px; padding-left: 24px; line-height: 2.5;">
                  <li style="font-size: 16px; line-height: 28px; color: #1b1b1e;"><strong>"¿Es suscripción mensual?"</strong> No. <strong>$99 una sola vez</strong>. Acceso mientras exista el servicio.</li>
                  <li style="font-size: 16px; line-height: 28px; color: #1b1b1e;"><strong>"¿Y si no me gusta?"</strong> Tienes 7 días de garantía. Te devolvemos el dinero, sin preguntas.</li>
                  <li style="font-size: 16px; line-height: 28px; color: #1b1b1e;"><strong>"¿Tengo que aprender software nuevo?"</strong> No. Es la misma herramienta que ya usas, pero sin límites ni marca de agua.</li>
                </ol>

        <hr style="margin: 32px 0; border: none; border-top: 1px solid #e4e1e6;">
        
        <p style="text-align: center; margin: 32px 0;">
          <a href="https://trazzoapp.online/pro" style="font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; background: #000000; color: #ffffff; padding: 16px 32px; border-radius: 0; text-decoration: none; border: 1px solid #000000; display: inline-block;">
            Ver Pro sin riesgo
          </a>
        </p>

      </div>
    `
  },
  {
    day: 21,
    subject: 'Último tip: Automatiza tus cobros y olvida el estrés',
    html: `
      <div style="font-family: Inter, system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #fbf8fc; border: 1px solid #e4e1e6;">
        <h2 style="font-family: 'Hanken Grotesk', Inter, sans-serif; font-size: 24px; font-weight: 700; line-height: 32px; color: #1b1b1e; margin: 0 0 16px;">Último tip: Automatiza tus cobros</h2>
        <p style="font-size: 16px; line-height: 24px; color: #1b1b1e; margin: 0 0 24px;">Hola,</p>
        <p style="font-size: 16px; line-height: 24px; color: #1b1b1e; margin: 0 0 16px;">Llevas 3 semanas recibiendo tips. El patrón es claro:</p>
        <ul style="margin: 0 0 24px; padding-left: 24px; line-height: 2;">
          <li style="font-size: 16px; line-height: 28px; color: #1b1b1e;">Profesionales que automatizan → cobran más, trabajan menos, duermen tranquilos</li>
          <li style="font-size: 16px; line-height: 28px; color: #1b1b1e;">Los que no → siguen regateando, perdiendo tiempo en papel, dudando de sus precios</li>
        </ul>

        <p style="font-size: 16px; line-height: 24px; color: #1b1b1e; margin: 0 0 24px;">Trazzo Pro cuesta <strong>$99 una vez</strong>. Un solo trabajo Pro te lo paga.</p>

        <hr style="margin: 32px 0; border: none; border-top: 1px solid #e4e1e6;">
        
        <p style="text-align: center; margin: 32px 0;">
          <a href="https://trazzoapp.online/pro" style="font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; background: #000000; color: #ffffff; padding: 16px 32px; border-radius: 0; text-decoration: none; border: 1px solid #000000; display: inline-block;">
            Automatizar ahora
          </a>
        </p>
        
        <p style="font-size: 14px; line-height: 20px; color: #4c4546; text-align: center; margin: 0 0 24px;">
          ¿Prefieres seguir gratis? Sigues recibiendo tips semanales. Sin presión.
        </p>

      </div>
    `
  }
]

// Contenido específico día 7 por bucket
const BUCKET_DAY7_CONTENT: Record<string, { subject: string; html: string }> = {
  instalaciones: {
    subject: 'Cómo un electricista subió 40% su ticket promedio',
    html: `
      <div style="font-family: Inter, system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #fbf8fc; border: 1px solid #e4e1e6;">
        <h2 style="font-family: 'Hanken Grotesk', Inter, sans-serif; font-size: 24px; font-weight: 700; line-height: 32px; color: #1b1b1e; margin: 0 0 16px;">Cómo un electricista subió 40% su ticket promedio</h2>
        <p style="font-size: 16px; line-height: 24px; color: #1b1b1e; margin: 0 0 24px;">Hola,</p>
        <p style="font-size: 16px; line-height: 24px; color: #1b1b1e; margin: 0 0 24px;"><strong>Roberto, electricista en CDMX</strong>, cotizaba por WhatsApp. Perdía tiempo, le regateaban, y sus recibos decían "Generado gratis".</p>
        
        <p style="font-size: 16px; line-height: 24px; color: #1b1b1e; margin: 0 0 16px;">Cambió a Trazzo Pro ($99 una vez). En 30 días:</p>
        <ul style="margin: 0 0 24px; padding-left: 24px; line-height: 2;">
          <li style="font-size: 16px; line-height: 28px; color: #1b1b1e;">Ticket promedio: <strong>$1,200 → $1,680</strong> (+40%)</li>
          <li style="font-size: 16px; line-height: 28px; color: #1b1b1e;">Tiempo cotizando: <strong>20 min → 3 min</strong></li>
          <li style="font-size: 16px; line-height: 28px; color: #1b1b1e;">Clientes que aceptan sin regatear: <strong>65% → 88%</strong></li>
        </ul>

        <p style="font-size: 16px; line-height: 24px; color: #1b1b1e; margin: 0 0 24px;">"El recibo profesional hace el trabajo de vender por mí. El cliente ve el desglose, ve que no hay marca de agua, y confía. Ahora cobro lo que vale mi trabajo."</p>

        <hr style="margin: 32px 0; border: none; border-top: 1px solid #e4e1e6;">
        
        <p style="text-align: center; margin: 32px 0;">
          <a href="https://trazzoapp.online/pro" style="font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; background: #000000; color: #ffffff; padding: 16px 32px; border-radius: 0; text-decoration: none; border: 1px solid #000000; display: inline-block;">
            Quiero esos resultados
          </a>
        </p>

      </div>
    `
  },
  reparaciones: {
    subject: 'Cómo un cerrajero cierra 80% sin regateo',
    html: `
      <div style="font-family: Inter, system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #fbf8fc; border: 1px solid #e4e1e6;">
        <h2 style="font-family: 'Hanken Grotesk', Inter, sans-serif; font-size: 24px; font-weight: 700; line-height: 32px; color: #1b1b1e; margin: 0 0 16px;">Cómo un cerrajero cierra 80% sin regateo</h2>
        <p style="font-size: 16px; line-height: 24px; color: #1b1b1e; margin: 0 0 24px;">Hola,</p>
        <p style="font-size: 16px; line-height: 24px; color: #1b1b1e; margin: 0 0 24px;"><strong>Miguel, cerrajero en Guadalajara</strong>, llegaba y le decían "¿tanto por abrir una puerta?". Sus cotizaciones eran un mensaje de texto.</p>
        
        <p style="font-size: 16px; line-height: 24px; color: #1b1b1e; margin: 0 0 16px;">Con Trazzo Pro ($99 una vez):</p>
        <ul style="margin: 0 0 24px; padding-left: 24px; line-height: 2;">
          <li style="font-size: 16px; line-height: 28px; color: #1b1b1e;">Cierre sin regateo: <strong>45% → 82%</strong></li>
          <li style="font-size: 16px; line-height: 28px; color: #1b1b1e;">Tiempo en papel: <strong>0 min</strong> (todo en celular)</li>
          <li style="font-size: 16px; line-height: 28px; color: #1b1b1e;">Clientes que repiten: <strong>3x más</strong></li>
        </ul>

        <p style="font-size: 16px; line-height: 24px; color: #1b1b1e; margin: 0 0 24px;">"Antes me veían como el de la llave. Ahora me ven como el profesional que resuelve su seguridad. El recibo con mi logo y sin marca de agua lo cambia todo."</p>

        <hr style="margin: 32px 0; border: none; border-top: 1px solid #e4e1e6;">
        
        <p style="text-align: center; margin: 32px 0;">
          <a href="https://trazzoapp.online/pro" style="font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; background: #000000; color: #ffffff; padding: 16px 32px; border-radius: 0; text-decoration: none; border: 1px solid #000000; display: inline-block;">
            Quiero cerrar sin regateo
          </a>
        </p>

      </div>
    `
  },
  construccion: {
    subject: 'Cómo un carpintero subió 35% su ticket en obra',
    html: `
      <div style="font-family: Inter, system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #fbf8fc; border: 1px solid #e4e1e6;">
        <h2 style="font-family: 'Hanken Grotesk', Inter, sans-serif; font-size: 24px; font-weight: 700; line-height: 32px; color: #1b1b1e; margin: 0 0 16px;">Cómo un carpintero subió 35% su ticket en obra</h2>
        <p style="font-size: 16px; line-height: 24px; color: #1b1b1e; margin: 0 0 24px;">Hola,</p>
        <p style="font-size: 16px; line-height: 24px; color: #1b1b1e; margin: 0 0 24px;"><strong>Carlos, carpintero en Monterrey</strong>, hacía presupuestos en cuaderno. El cliente le cambiaba cosas a mitad de obra y no sabía cuánto cobrar extra.</p>
        
        <p style="font-size: 16px; line-height: 24px; color: #1b1b1e; margin: 0 0 16px;">Con Trazzo Pro ($99 una vez):</p>
        <ul style="margin: 0 0 24px; padding-left: 24px; line-height: 2;">
          <li style="font-size: 16px; line-height: 28px; color: #1b1b1e;">Ticket promedio: <strong>$15,000 → $20,250</strong> (+35%)</li>
          <li style="font-size: 16px; line-height: 28px; color: #1b1b1e;">Cambios en obra: <strong>cotizados al momento</strong> desde celular</li>
          <li style="font-size: 16px; line-height: 28px; color: #1b1b1e;">Pagos: <strong>50% anticipo, 50% entrega</strong> (sin perseguir)</li>
        </ul>

        <p style="font-size: 16px; line-height: 24px; color: #1b1b1e; margin: 0 0 24px;">"La obra limpia empieza con el precio claro. El cliente firma el presupuesto Pro y no hay sorpresas. Yo me dedico a carpinterear, Trazzo se encarga del papel."</p>

        <hr style="margin: 32px 0; border: none; border-top: 1px solid #e4e1e6;">
        
        <p style="text-align: center; margin: 32px 0;">
          <a href="https://trazzoapp.online/pro" style="font-family: 'JetBrains Mono', monospace; font-size: 12px; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; background: #000000; color: #ffffff; padding: 16px 32px; border-radius: 0; text-decoration: none; border: 1px solid #000000; display: inline-block;">
            Obra limpia, precio claro
          </a>
        </p>

      </div>
    `
  }
}

export async function GET(req: NextRequest) {
  // Verificar auth - debe venir de GitHub Actions / Vercel Cron
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

    const { createClient } = await import('@supabase/supabase-js')
    const supabase = createClient(supabaseUrl, supabaseKey)

    // Obtener leads que necesitan nurturing (status new, cualquier nurture_day)
    const { data: leads, error } = await supabase
      .from('leads')
      .select('id, email, created_at, nurture_day, metadata')
      .eq('status', 'new')

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
      
      // Buscar secuencia que coincida exactamente con los días transcurridos
      let sequence = NURTURE_SEQUENCES.find(s => s.day === daysSinceCreated)
      
      // Día 7 especial: usar contenido por bucket
      if (daysSinceCreated === 7) {
        const bucket = lead.metadata?.bucket as string | undefined
        const bucketContent = bucket && BUCKET_DAY7_CONTENT[bucket] 
          ? BUCKET_DAY7_CONTENT[bucket] 
          : BUCKET_DAY7_CONTENT.instalaciones // default
        sequence = { day: 7, ...bucketContent }
      }
      
      if (sequence && lead.nurture_day !== sequence.day) {
        try {
          await resend.emails.send({
            from: 'Trazzo Recibo <noreply@elantimetodo.com>',
            headers: {
              'List-Unsubscribe': `<mailto:unsub@elantimetodo.com?subject=unsubscribe>, <https://trazzoapp.online/api/unsub?email=${encodeURIComponent(lead.email)}>`
            },
            to: [lead.email],
            subject: sequence.subject,
            html: sequence.html,
            tags: [
              { name: 'feature', value: 'lead_nurture' },
              { name: 'day', value: String(sequence.day) }
            ]
          })
          
          // Actualizar nurture_day del lead
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