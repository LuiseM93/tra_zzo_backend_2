export type Recurso = {
  id: string
  slug: string
  title: string
  description: string
  category: 'GUÍA MAESTRA' | 'CASO DE ÉXITO' | 'ANTIMÉTODO'
  content: string // En una app real, esto podría ser markdown o HTML
}

export const recursos: Recurso[] = [
  {
    id: 'como-cotizar-para-no-perder-cliente',
    slug: 'como-cotizar-para-no-perder-cliente',
    title: 'Cómo cotizar sin perder al cliente (El 33% de los recibos no cierran)',
    description: 'Aprende a justificar tu precio, dar seguimiento y usar WhatsApp como un arma de ventas, no solo para mandar PDFs.',
    category: 'GUÍA MAESTRA',
    content: `
      <h2>El problema del 33%</h2>
      <p>Nuestros datos muestran que 1 de cada 3 presupuestos enviados nunca se convierte en un trabajo pagado. El cliente te deja "en visto". ¿El problema? Tu cotización parece una lista de supermercado en lugar de una propuesta de valor.</p>
      
      <h2>Reglas para cerrar más ventas por WhatsApp</h2>
      <ul>
        <li><strong>Velocidad:</strong> Envía el recibo/presupuesto mientras sigues en la casa del cliente o máximo 30 minutos después.</li>
        <li><strong>Transparencia:</strong> Desglosa mano de obra y materiales. El cliente rara vez regatea los materiales, regatea tu tiempo.</li>
        <li><strong>Seguimiento:</strong> Si envías el PDF el lunes, manda un mensaje el miércoles: "Hola [Nombre], ¿tuviste oportunidad de revisar la propuesta de la instalación? Quedo a tus órdenes para cualquier duda técnica".</li>
      </ul>
    `
  },
  {
    id: 'trazzo-vs-cotizadora-online',
    slug: 'trazzo-vs-cotizadora-online',
    title: 'Cotizadora Online vs Trazzo Recibo: ¿Cuál te conviene?',
    description: 'Una comparativa honesta entre generadores de cotizaciones para técnicos en México.',
    category: 'CASO DE ÉXITO',
    content: `
      <h2>Comparativa Directa</h2>
      <p>Elegir la herramienta correcta para mandar tus cotizaciones puede definir cómo te perciben tus clientes.</p>
      
      <h3>Cotizadora Online</h3>
      <p>Es una excelente opción gratuita. No requiere registro y no pone marca de agua. Su debilidad es que es muy genérica: está hecha para cualquier tipo de negocio en cualquier país, por lo que no entiende las necesidades específicas de un plomero o electricista en México (como calcular por metro lineal o por destajo).</p>
      
      <h3>Trazzo Recibo</h3>
      <p>Es un modelo Freemium. Generar recibos es 100% gratis pero incluye una pequeña marca de agua. Su mayor ventaja es la velocidad (diseñado para usarse en el celular mientras estás en la obra) y que por un único pago de $99 MXN · Mientras exista el servicio, puedes poner el logotipo de tu negocio y dar una imagen nivel premium a tus clientes. Además, Trazzo se especializa en oficios mexicanos.</p>
    `
  },
  {
    id: 'como-empezar-a-facturar-tecnico',
    slug: 'como-empezar-a-facturar-tecnico',
    title: 'De informal a formal: Cómo y cuándo empezar a facturar',
    description: 'El 54% del sector trabaja en la informalidad. Descubre cómo entrar al RESICO y captar clientes corporativos.',
    category: 'GUÍA MAESTRA',
    content: `
      <h2>El techo de cristal de la informalidad</h2>
      <p>Trabajar sin facturar está bien al principio, pero te impide tomar trabajos grandes con empresas, restaurantes o plazas comerciales. Ellos necesitan deducir impuestos.</p>
      
      <h2>El RESICO es tu mejor aliado</h2>
      <p>El Régimen Simplificado de Confianza (RESICO) en México permite a los técnicos y oficios pagar entre el 1% y el 2.5% de ISR. Es la forma más barata de volverte formal.</p>
      
      <h2>¿Trazzo sirve para facturar?</h2>
      <p>No, Trazzo Recibo genera <strong>Notas de Remisión o Presupuestos</strong>. Son documentos de control interno y presentación profesional. Si el cliente requiere factura (CFDI), debes generarla en el portal del SAT o en un sistema de facturación autorizado usando los datos que pusiste en tu recibo de Trazzo.</p>
    `
  },
  {
    id: 'el-error-de-dar-precio-por-telefono',
    slug: 'el-error-de-dar-precio-por-telefono',
    title: 'El error mortal de dar el precio por teléfono antes de ver el trabajo',
    description: 'Por qué calcular al tanteo te hace perder dinero y reputación. Aprende a cobrar "Visitas de Diagnóstico".',
    category: 'ANTIMÉTODO',
    content: `
      <h2>El Síndrome del "Más o Menos"</h2>
      <p>El cliente llama y pregunta: "¿Cuánto me cobra por cambiar la tubería del lavabo, más o menos?". Si das un precio por teléfono, estás condenado. Si llegas y es más difícil, el cliente sentirá que le quieres robar. Si es más fácil, perdiste dinero.</p>
      
      <h2>La Solución: Visita de Diagnóstico</h2>
      <p>Debes contestar: "Señor, no le puedo dar un precio irresponsable. Cobro $300 pesos por la visita de diagnóstico, y si aprueba el presupuesto, esos $300 se los descuento del total de la mano de obra". Usa el generador de recibos para mandarle el presupuesto oficial por WhatsApp tras hacer el diagnóstico.</p>
    `
  },
  {
    id: 'aumento-ventas-con-foto',
    slug: 'aumento-ventas-con-foto',
    title: 'Caso de Éxito: Cómo un electricista subió sus ventas 40% poniendo su logo',
    description: 'La historia real de Roberto, un electricista en Guadalajara que dejó los recibos de papelería.',
    category: 'CASO DE ÉXITO',
    content: `
      <h2>El Problema de la Papelería</h2>
      <p>Roberto tenía 15 años de experiencia, pero entregaba cotizaciones de $20,000 pesos en recibos genéricos de papelería con letra ilegible. Perdía trabajos ante competidores más jóvenes que mandaban PDFs.</p>
      
      <h2>El Cambio con Trazzo</h2>
      <p>Pagó la versión Pro, le pidió a su sobrino un logo básico en Canva de $200 pesos y lo subió. Ahora llega a la casa, revisa, y en su camioneta antes de irse genera el recibo con logo. Sus clientes de residenciales asumieron que era una "empresa establecida" y su tasa de cierre subió de 3 a 5 de cada 10 cotizaciones.</p>
    `
  },
  {
    id: 'como-identificar-clientes-toxicos',
    slug: 'como-identificar-clientes-toxicos',
    title: 'Guía para identificar clientes tóxicos (y cuándo decir que no)',
    description: 'Aprende a detectar a los clientes que te harán perder tiempo, pedirán rebajas y retrasarán los pagos.',
    category: 'GUÍA MAESTRA',
    content: `
      <h2>No todo el dinero es buen dinero</h2>
      <p>Uno de los errores más grandes al emprender un oficio es aceptar cualquier trabajo por miedo a no tener ingresos. Algunos trabajos te costarán más en estrés, tiempo perdido y material no pagado.</p>
      
      <h2>Señales de alerta (Red Flags)</h2>
      <ul>
        <li><strong>Regateo extremo inicial:</strong> Si antes de que des el precio ya te están pidiendo "precio de amigo", huye. No valoran tu trabajo.</li>
        <li><strong>Urgencia sin presupuesto:</strong> Quieren el trabajo para ayer, pero no quieren pagar recargo por urgencia o trabajar horas extras.</li>
        <li><strong>Hablan mal de otros técnicos:</strong> "El último plomero era un estafador", "todos los albañiles son iguales". Probablemente tú serás el siguiente en su lista de quejas.</li>
      </ul>
      
      <h2>El filtro de la cotización</h2>
      <p>Mandar un presupuesto profesional (con logo, condiciones claras y políticas de anticipo escritas en las notas) usando Trazzo Recibo, automáticamente espanta a los clientes informales que buscan aprovecharse. Ver un documento serio los obliga a jugar bajo tus reglas.</p>
    `
  },
  // ===== NUEVOS RECURSOS SEO PROGRAMÁTICO 2024-2025 =====
  // ===== CLÚSTER D: PROBLEMA DE CONVERSIÓN / CIERRE DE VENTA (El 33% que no cierra) =====
  {
    id: 'seguimiento-cotizacion-whatsapp',
    slug: 'seguimiento-cotizacion-whatsapp',
    title: 'Seguimiento de Cotizaciones por WhatsApp: Plantillas, Timing y Psicología para Cerrar más Ventas',
    description: 'El 33% de cotizaciones no cierran por falta de seguimiento. Aprende cuándo, qué y cómo escribir por WhatsApp sin ser pesado.',
    category: 'GUÍA MAESTRA',
    content: `
      <h2>El problema real: no es el precio, es el silencio</h2>
      <p>Mandas el PDF. El cliente lo ve. Y luego... nada. "En visto". Pasan 3 días. Una semana. El trabajo se lo lleva otro que sí hizo seguimiento.</p>
      
      <h2>Regla de oro: El seguimiento EMPIEZA mientras estás en la obra</h2>
      <ul>
        <li><strong>Minuto 0 (en la casa del cliente):</strong> Generas el recibo en Trazzo, pones tu logo, se lo mandas por WhatsApp AHÍ MISMO. "Lic. [Nombre], le acabo de mandar el presupuesto detallado con todo lo que vimos. Quedo a sus órdenes para cualquier duda técnica".</li>
        <li><strong>Hora 2-4 (mismo día):</strong> Si no contestó: "Buenas tardes [Nombre], solo confirmando que recibió la propuesta de la [instalación/reparación]. Si tiene duda en algún concepto, con gusto se lo explico".</li>
        <li><strong>Día 2 (mañana):</strong> "Hola [Nombre], ¿tuvo oportunidad de revisar el presupuesto de la [tarea]? Quedo atento para agendar si decide avanzar".</li>
        <li><strong>Día 4-5 (último intento):</strong> "Buen día [Nombre]. Supongo que ya definieron su proyecto. Si en el futuro necesita [oficio], aquí estoy. Quedo a la orden." (Cierre respetuoso, deja puerta abierta).</li>
      </ul>
      
      <h2>Plantillas copy-paste según situación</h2>
      <h3>Cliente preguntó precio por teléfono (antes de visita)</h3>
      <blockquote>"[Nombre], para darle un precio RESPONSABLE necesito ver el trabajo. Cobro $XXX por visita de diagnóstico (se descuenta si hace el trabajo). ¿Le agendo para [día/hora]?"</blockquote>
      
      <h3>Cliente dice "está caro" / "otro me cobró menos"</h3>
      <blockquote>"Entiendo [Nombre]. Mi cotización incluye: [lista: materiales marca X, garantía Y años, seguro responsabilidad, limpieza final, factura/nota oficial]. Lo barato sale caro: si falla en 3 meses, ¿quién responde? Prefiero cobrar justo y dormir tranquilo. ¿Revisamos qué se puede ajustar SIN quitar calidad?"</blockquote>
      
      <h3>Cliente pide "descuento de amigo"</h3>
      <blockquote>"[Nombre], el precio ya es mi 'precio de amigo':材料 a costo, mano de obra justa, sin letra chica. Lo que SÍ puedo hacer es: [opción A: quitar X partida, opción B: pagar 50% anticipo y 50% contra entrega con 5% descuento]. ¿Cuál le cuadra?"</blockquote>
      
      <h2>Errores que matan la venta por WhatsApp</h2>
      <ul>
        <li>Mandar SOLO el PDF sin mensaje personalizado (parece robot/spam).</li>
        <li>Escribir "¿ya vio mi presupuesto?" cada día (desesperación = baja valor percibido).</li>
        <li>Discutir precio por chat (llama mejor: "¿Le marco 2 min para aclarar dudas?").</li>
        <li>No tener foto de tu trabajo anterior en el perfil de WhatsApp Business (cara + logo + trabajo = confianza).</li>
      </ul>
      
      <h2>Tu WhatsApp Business = tu mejor vendedor</h2>
      <ul>
        <li>Perfil: Foto TUYA (cara) + logo + "Plomero/Electricista certificado | CDMX y área metro | Presupuestos gratis en 30 min".</li>
        <li>Catálogo: 3-5 "productos" = tus servicios estrella con precio DESDE. Ej: "Instalación Mini Split 1.5 TR desde $4,500".</li>
        <li>Mensaje de bienvenida: "¡Hola! Soy [Nombre], [Oficio] con X años. ¿En qué le aydo? (Foto/video del problema acelera mi diagnóstico)".</li>
        <li>Respuestas rápidas configuradas: "Visita diagnóstico", "Presupuesto enviado", "Agendar cita", "Formas de pago".</li>
      </ul>
    `
  },
  {
    id: 'como-justificar-precio-cotizacion',
    slug: 'como-justificar-precio-cotizacion',
    title: 'Cómo Justificar tu Precio en la Cotización: Desglose, Garantías y Valor Percibido',
    description: 'El cliente no regatea materiales, regatea tu tiempo. Aprende a presentar el recibo para que el precio parezca una inversión, no un gasto.',
    category: 'GUÍA MAESTRA',
    content: `
      <h2>La psicología del precio: separa, explica, garantiza</h2>
      <p>Un recibo que dice "Instalación eléctrica: $15,000" parece caro. El MISMO trabajo desglosado se ve profesional y justo.</p>
      
      <h2>Estructura de recibo que vende (usa Trazzo Recibo)</h2>
      <table style="width:100%; border-collapse:collapse; margin:1rem 0;">
        <thead>
          <tr style="background:#1e1e3f; color:#d5c59d;">
            <th style="padding:0.5rem; border:1px solid #333;">Concepto</th>
            <th style="padding:0.5rem; border:1px solid #333;">Detalle (lo que ve el cliente)</th>
            <th style="padding:0.5rem; border:1px solid #333;">Por qué justifica el precio</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="padding:0.5rem; border:1px solid #333;">Mano de obra especializada</td><td style="padding:0.5rem; border:1px solid #333;">"Instalación circuito dedicado 220V A/C (incluye: tendido tubo, cable 10AWG, pastilla 2P, desconectador, prueba)"</td><td style="padding:0.5rem; border:1px solid #333;">Especifica QUÉ haces, no solo "mano de obra". El cliente ve complejidad.</td></tr>
          <tr><td style="padding:0.5rem; border:1px solid #333;">Materiales</td><td style="padding:0.5rem; border:1px solid #333;">"Cable THW 10AWG (15m) - Marca Condumex/IUSA | Poliducto 3/4" (15m) | Pastilla termomagnética 2P 20A Siemens | Desconectador 30A"</td><td style="padding:0.5rem; border:1px solid #333;">MARCA y ESPECIFICACIÓN. El cliente no sabe de cable, pero ve "Siemens", "Condumex" = calidad.</td></tr>
          <tr><td style="padding:0.5rem; border:1px solid #333;">Garantía</td><td style="padding:0.5rem; border:1px solid #333;">"Garantía 12 meses mano de obra + 24 meses materiales (según fabricante). Incluye visita de revisión a los 30 días."</td><td style="padding:0.5rem; border:1px solid #333;">Garantía ESCRITA y ESPECÍFICA. "Garantía de por vida" no existe y resta credibilidad.</td></tr>
          <tr><td style="padding:0.5rem; border:1px solid #333;">Seguridad / Normativa</td><td style="padding:0.5rem; border:1px solid #333;">"Instalación según NOM-001-SEDE-2012. Incluye puesta a tierra verificada <25Ω."</td><td style="padding:0.5rem; border:1px solid #333;">Citas la NORMA. Eres PROFESIONAL, no "el que sabe".</td></tr>
          <tr><td style="padding:0.5rem; border:1px solid #333;">Limpieza / Protección</td><td style="padding:0.5rem; border:1px solid #333;">"Protección de pisos/muebles con plástico y cartón. Limpieza final de zona de trabajo. Retiro de escombro generado."</td><td style="padding:0.5rem; border:1px solid #333;">El cliente ODIA la suciedad. Incluirlo gratis = valor percibido alto, costo bajo para ti.</td></tr>
        </tbody>
      </table>
      
      <h2>Frases para la sección "Notas" del recibo (copia y adapta)</h2>
      <ul>
        <li><strong>Anticipo:</strong> "Para agendar se requiere 50% de anticipo (cubre materiales). Saldo contra entrega/prueba. Factura/Nota de remisión al 100% pagado."</li>
        <li><strong>Cambios:</strong> "Cualquier trabajo extra no incluido en esta cotización se presupuestará y aprobará POR ESCRITO (WhatsApp válido) antes de ejecutarse."</li>
        <li><strong>Tiempos:</strong> "Tiempo estimado: X días hábiles. No incluye demoras por: clima, falta de pagos, cambios de alcance, permisos, retraso material cliente."</li>
        <li><strong>Responsabilidad:</strong> "No nos hacemos responsables por daños previos en instalaciones existentes, tuberías ocultas no detectables sin apertura, ni fallas en equipos proporcionados por el cliente."</li>
        <li><strong>Validez:</strong> "Precios vigentes 7 días naturales. Materiales sujetos a disponibilidad y variación de precio sin previo aviso (acero, cobre, gas)."</li>
      </ul>
      
      <h2>La regla del "Precio de amigo" vs "Precio profesional"</h2>
      <blockquote>"Mi precio de amigo ES mi precio profesional: materiales a costo real, mano de obra justa, garantía escrita, factura/recibo oficial, seguro de responsabilidad. Lo que NO incluye mi precio: atajos, materiales reciclados, 'ya se arregla', fantasmas al primer problema. Usted elige."</blockquote>
    `
  },
  {
    id: 'cobrar-visita-diagnostico',
    slug: 'cobrar-visita-diagnostico',
    title: 'Por Qué DEBES Cobrar la Visita de Diagnóstico (y Cómo Explicárselo al Cliente)',
    description: 'El error mortal: dar precio por teléfono. Cómo cobrar $300-800 por ir, diagnosticar y cotizar profesionalmente, y que el cliente lo vea como inversión, no gasto.',
    category: 'ANTIMÉTODO',
    content: `
      <h2>El síndrome del "más o menos"</h2>
      <p>Cliente: "¿Cuánto me cobra por cambiar la tubería del lavabo, más o menos?"<br>
      Tú: "Como $1,500".<br>
      Llegas: tubería rota dentro del muro, azulejo viejo, ángulo imposible.<br>
      Real: $4,500.<br>
      Cliente: "¡Me quiere robar! Dijo $1,500".<br>
      Resultado: pierdes el trabajo, pierdes credibilidad, pierdes tiempo.</p>
      
      <h2>La solución: Visita de Diagnóstico Pagada</h2>
      <blockquote>"Señora/Señor, no le doy precio irresponsable sin ver. Cobro $XXX por visita de diagnóstico (incluye: revisión completa, medición, fotos, explicación de opciones, cotización formal por WhatsApp). Si aprueba el presupuesto, ESOS $XXX SE DESCUENTAN de la mano de obra total. ¿Le agendo para [día/hora]?"</blockquote>
      
      <h2>Cuánto cobrar por oficio (referencia México 2024-2025)</h2>
      <ul>
        <li>Plomería / Gas / Electricidad básica: <strong>$300-500</strong></li>
        <li>Aire acondicionado / Refrigeración: <strong>$400-600</strong> (requiere manómetros, detector fugas)</li>
        <li>CCTV / Seguridad / Automatización: <strong>$400-700</strong> (requiere laptop, testers, configuración)</li>
        <li>Estructuras / Albañilería mayor / Impermeabilización: <strong>$500-800</strong> (requiere medir, subir a azotea, revisar estructura)</li>
        <li>Solar / Cámaras frigoríficas / Industrial: <strong>$800-1,500</strong> (estudio de factibilidad, cálculo cargas)</li>
      </ul>
      
      <h2>Qué INCLUYE la visita (ponlo en el recibo/nota de Trazzo)</h2>
      <ul>
        <li>Desplazamiento + tiempo en sitio (mín 45-60 min)</li>
        <li>Inspección visual + pruebas funcionales (presión, voltaje, gas, flujo, cámaras)</li>
        <li>Fotos/video del problema para tu registro y del cliente</li>
        <li>Explicación CLARA de 2-3 opciones (buena/bonita/barata) con pros/contras</li>
        <li>Cotización formal enviada por WhatsApp en <30 min post-visita</li>
        <li>Validez de cotización: 7 días</li>
      </ul>
      
      <h2>Objección: "Otros no me cobran la visita"</h2>
      <blockquote>"Tiene razón, hay quienes no cobran visita. Esos mismos son los que: 1) Dan precio al tanteo y luego suben, 2) Usan material barato para compensar, 3) Desaparecen si hay problema. Mi visita PAGADA garantiza que el precio que le doy ES EL FINAL, con materiales que yo elijo y garantía escrita. ¿Prefiere certeza o sorpresa?"</blockquote>
      
      <h2>Cuándo NO cobrar visita (excepciones estratégicas)</h2>
      <ul>
        <li>Cliente recurrente (ya te pagó 2+ veces): visita gratis = fidelización.</li>
        <li>Trabajo GARANTIZADO grande (> $20k): "La visita va por mi cuenta si cerramos hoy".</li>
        <li>Referido directo de cliente VIP: "Por recomendación de [Nombre], la primera visita es sin cargo".</li>
      </ul>
    `
  },

  // ===== CLÚSTER F: FORMALIZACIÓN / FISCAL PARA TÉCNICOS (54% informalidad) =====
  {
    id: 'resico-para-tecnicos-oficios',
    slug: 'resico-para-tecnicos-oficios',
    title: 'Régimen Simplificado de Confianza (RESICO) para Técnicos y Oficios: Guía Práctica 2024-2025',
    description: 'El 54% del sector trabaja informal. RESICO te deja facturar pagando 1-2.5% ISR. Paso a paso: alta, obligaciones, facturación, cuánto ahorras vs informal.',
    category: 'GUÍA MAESTRA',
    content: `
      <h2>El techo de cristal de la informalidad</h2>
      <p>Trabajas bien, cobras bien... pero no puedes entrar a: plazas comerciales, fábricas, restaurantes, hoteles, gobierno, empresas grandes. Ellos NECESITAN factura (CFDI) para deducir. Sin factura, te pagan en efectivo y te limitas a residenciales chicos.</p>
      
      <h2>RESICO: Tu puente a lo formal (sin morir en el intento)</h2>
      <ul>
        <li><strong>Quién califica:</strong> Ingresos ≤ $3.5 millones/año (≈ $290k/mes). La mayoría de técnicos independientes califica.</li>
        <li><strong>ISR:</strong> 1% a 2.5% según ingresos (tabla mensual SAT). Ej: ingresas $50k/mes → pagas ~$750 ISR/mes (1.5%).</li>
        <li><strong>IVA:</strong> 16% normal, PERO acreditas IVA de tus compras (materiales, herramientas, gasolina, celular, internet). Si compras bien, IVA neto ≈ 0 a 4%.</li>
        <li><strong>Contabilidad:</strong> NO llevas contabilidad completa. Solo: facturas emitidas, facturas recibidas, conciliación bancaria. Un contador te cobra $1,500-3,000/mes.</li>
        <li><strong>Facturación:</strong> Emite CFDI 4.0 desde portal SAT (gratis) o sistema barato (Facturama, Contpaqi, ContaPyme: $200-500/mes).</li>
      </ul>
      
      <h2>Cálculo real: Informal vs RESICO (Ejemplo Plomero $600k/año = $50k/mes)</h2>
      <table style="width:100%; border-collapse:collapse; margin:1rem 0;">
        <thead><tr style="background:#1e1e3f; color:#d5c59d;"><th style="padding:0.5rem; border:1px solid #333;">Concepto</th><th style="padding:0.5rem; border:1px solid #333;">Informal (Efectivo)</th><th style="padding:0.5rem; border:1px solid #333;">RESICO (Facturando)</th></tr></thead>
        <tbody>
          <tr><td style="padding:0.5rem; border:1px solid #333;">Ingresos brutos/año</td><td style="padding:0.5rem; border:1px solid #333;">$600,000</td><td style="padding:0.5rem; border:1px solid #333;">$600,000</td></tr>
          <tr><td style="padding:0.5rem; border:1px solid #333;">Materiales (40%)</td><td style="padding:0.5rem; border:1px solid #333;">-$240,000</td><td style="padding:0.5rem; border:1px solid #333;">-$240,000 (IVA acreditable ~$33,000)</td></tr>
          <tr><td style="padding:0.5rem; border:1px solid #333;">Gastos operación (gasolina, cel, herramientas, seguro)</td><td style="padding:0.5rem; border:1px solid #333;">-$60,000</td><td style="padding:0.5rem; border:1px solid #333;">-$60,000 (IVA acreditable ~$8,000)</td></tr>
          <tr><td style="padding:0.5rem; border:1px solid #333;">Utilidad neta antes impuesto</td><td style="padding:0.5rem; border:1px solid #333;">$300,000</td><td style="padding:0.5rem; border:1px solid #333;">$300,000</td></tr>
          <tr><td style="padding:0.5rem; border:1px solid #333;">ISR (RESICO ~1.5% ingresos brutos)</td><td style="padding:0.5rem; border:1px solid #333;">$0 (ilegal)</td><td style="padding:0.5rem; border:1px solid #333;">-$9,000</td></tr>
          <tr><td style="padding:0.5rem; border:1px solid #333;">IVA neto (16% ventas - IVA compras)</td><td style="padding:0.5rem; border:1px solid #333;">$0</td><td style="padding:0.5rem; border:1px solid #333;">~$4,000-8,000</td></tr>
          <tr><td style="padding:0.5rem; border:1px solid #333;"><strong>Utilidad real en bolsa</strong></td><td style="padding:0.5rem; border:1px solid #333;"><strong>$300,000</strong></td><td style="padding:0.5rem; border:1px solid #333;"><strong>$283,000-287,000</strong></td></tr>
          <tr><td style="padding:0.5rem; border:1px solid #333;">Diferencia</td><td style="padding:0.5rem; border:1px solid #333;">Base</td><td style="padding:0.5rem; border:1px solid #333;">Solo ~$13-17k menos/año</td></tr>
          <tr><td style="padding:0.5rem; border:1px solid #333;">GANAS: Facturar a empresas, plazas, gobierno, deducir gastos, historial crediticio, seguro IMSS voluntario, tranquilidad legal</td><td style="padding:0.5rem; border:1px solid #333;" colspan="2"></td></tr>
        </tbody>
      </table>
      
      <h2>Pasos para darte de alta en RESICO (2024-2025)</h2>
      <ol>
        <li>Entra a <a href="https://www.sat.gob.mx" target="_blank">sat.gob.mx</a> → Trámites → RFC → Inscripción/Actualización → Persona Física con Actividad Empresarial.</li>
        <li>Elige "Régimen Simplificado de Confianza (RESICO)". Actividad: "Construcción especializada / Instalaciones / Mantenimiento" (código CIAN 2389 / 4321 / 4322).</li>
        <li>Firma electrónica (e.firma): si no la tienes, cita en SAT (gratis, 1 día).</li>
        <li>CSD (Certificado Sello Digital): para facturar. Se genera en portal SAT con tu e.firma.</li>
        <li>Contrata contador (busca uno que YA lleve RESICO de técnicos). $1,500-3,000/mes.</li>
        <li>Elige sistema facturación: Portal SAT (gratis, manual) / Facturama / Contpaqi / ContaPyme (~$300/mes).</li>
        <li>¡Empieza a facturar! Tus recibos de Trazzo Recibo (con logo Pro) son la base para tu CFDI.</li>
      </ol>
      
      <h2>Trampa común: "Facturo solo lo que me piden"</h2>
      <blockquote>ERROR. Factura TODO. El SAT cruza tus ingresos declarados vs facturas emitidas vs depósitos bancarios. Si facturas $200k pero depositaste $400k → carta invitación / auditoría. Factura 100% de tus ingresos, acredita 100% de tus compras (materiales, gasolina, herramientas, celular, internet, seguro, contador). La diferencia de impuesto es mínima; el riesgo de no hacerlo es enorme.</blockquote>
    `
  },
  {
    id: 'factura-vs-recibo-nota-remision',
    slug: 'factura-vs-recibo-nota-remision',
    title: 'Factura (CFDI) vs Recibo / Nota de Remisión vs Presupuesto: Qué Entregar y Cuándo',
    description: 'Confunden recibo con factura. Trazzo genera notas de remisión/presupuestos PROFESIONALES. La factura (CFDI) solo la emite el SAT/sistema autorizado. Guía clara para no meter la pata.',
    category: 'GUÍA MAESTRA',
    content: `
      <h2>Los 3 documentos y para qué sirve CADA UNO</h2>
      
      <table style="width:100%; border-collapse:collapse; margin:1rem 0;">
        <thead><tr style="background:#1e1e3f; color:#d5c59d;"><th style="padding:0.5rem; border:1px solid #333;">Documento</th><th style="padding:0.5rem; border:1px solid #333;">¿Quién lo emite?</th><th style="padding:0.5rem; border:1px solid #333;">Validez fiscal</th><th style="padding:0.5rem; border:1px solid #333;">Cuándo usarlo</th></tr></thead>
        <tbody>
          <tr><td style="padding:0.5rem; border:1px solid #333;"><strong>Presupuesto / Cotización</strong></td><td style="padding:0.5rem; border:1px solid #333;">Tú (Trazzo Recibo)</td><td style="padding:0.5rem; border:1px solid #333;">Ninguna (oferta comercial)</td><td style="padding:0.5rem; border:1px solid #333;">ANTES del trabajo. Para que el cliente APRUEBE precio, alcance, condiciones.</td></tr>
          <tr><td style="padding:0.5rem; border:1px solid #333;"><strong>Nota de Remisión / Recibo de Pago</strong></td><td style="padding:0.5rem; border:1px solid #333;">Tú (Trazzo Recibo)</td><td style="padding:0.5rem; border:1px solid #333;">Comprobante de ENTREGA / PAGO entre partes. NO es deducible para el cliente.</td><td style="padding:0.5rem; border:1px solid #333;">AL TERMINAR el trabajo. Entregas obra + recibes pago + das nota "Recibí conforme / Pagado $X".</td></tr>
          <tr><td style="padding:0.5rem; border:1px solid #333;"><strong>Factura (CFDI 4.0)</strong></td><td style="padding:0.5rem; border:1px solid #333;">Tú (Portal SAT / Sistema autorizado)</td><td style="padding:0.5rem; border:1px solid #333;">100% deducible para cliente. Obligatoria si cliente la pide.</td><td style="padding:0.5rem; border:1px solid #333;">SI el cliente la exige (empresas, gobierno, plazas). La generas con los MISMOS datos de tu nota Trazzo.</td></tr>
        </tbody>
      </table>
      
      <h2>Flujo correcto en Trazzo Recibo → Facturación</h2>
      <ol>
        <li>Cliente pide precio → Generas <strong>Presupuesto</strong> en Trazzo (con logo Pro, sin marca de agua). Se lo mandas por WhatsApp.</li>
        <li>Cliente aprueba → Agendas trabajo.</li>
        <li>Terminas trabajo → Generas <strong>Nota de Remisión / Recibo de Pago</strong> en Trazzo con: "TRABAJO TERMINADO CONFORME", firma digital cliente (foto/firma en pantalla), monto pagado, método pago.</li>
        <li>Cliente pide factura → Entradas a tu sistema SAT / Facturama / Contpaqi → Creas CFDI 4.0 usando:<br>
          - RFC cliente (pídelo EN la cotización: "Para factura necesito su RFC, razón social, régimen fiscal, uso CFDI, CP")<br>
          - Concepto: mismo desglose que tu nota Trazzo (mano de obra + materiales separados)<br>
          - Forma de pago: 03 Transferencia / 01 Efectivo / 28 Tarjeta<br>
          - Método de pago: PUE (pago en una exhibición) o PPD (parcialidades)<br>
          - Uso CFDI: G01-G03 (gastos generales) o el que diga cliente
        </li>
        <li>Envías XML + PDF al cliente por WhatsApp/email. Guardas copia en tu nube/contador.</li>
      </ol>
      
      <h2>Errores que te cuestan dinero (o carta del SAT)</h2>
      <ul>
        <li>Dar "factura" hecha en Word/Excel/CANVA → <strong>DELITO FISCAL</strong> (falsificación de comprobantes). Solo CFDI del SAT vale.</li>
        <li>Cobrar IVA "extra" en el recibo Trazzo si NO estás en RESICO/Régimen General → Ilegal. Si eres informal, NO cobras IVA. Tu precio YA incluye tu costo real.</li>
        <li>No pedir datos fiscales AL COTIZAR → Pierdes tiempo al final. Agrégalo en "Notas" de Trazzo: "Para factura requerimos: RFC, Razón Social, Régimen, Uso CFDI, CP".</li>
        <li>Facturar "Servicios profesionales" (clave 84111506) si eres plomero/electricista → Usa claves correctas: 72151701 (plomería), 72151001 (electricidad), 72154001 (mantenimiento), 72141701 (construcción).</li>
      </ul>
      
      <h2>Tu recibo Trazzo Pro = Tu mejor borrador para la factura</h2>
      <p>Cuando pagas $99 MXN único · Mientras exista el servicio en Trazzo y pones tu logo, tu recibo tiene: TU marca, TU RFC, TU domicilio, DESGLOSE pro (mano de obra / materiales), IVA separado (si aplica), TOTAL, CONDICIONES. Copias esos datos al portal SAT y facturas en 2 minutos. Eso es lo que pagan los $99: ahorrarte horas y verme profesional ante el cliente que SÍ pide factura.</p>
    `
  },

  // ===== CLÚSTER E: COMPARATIVAS OBJETIVAS (Tráfico decisión, alta conversión) =====
  {
    id: 'trazzo-vs-cotizadora-online-vs-otras',
    slug: 'trazzo-vs-cotizadora-online-vs-otras',
    title: 'Trazzo Recibo vs Cotizadora Online vs CotizadorPro vs ObraMaestra: Comparativa Honesta 2024-2025',
    description: 'La única comparativa real en español para México. Precios, marca de agua, oficios especializados, WhatsApp, facturación, pago único vs suscripción. Sin marketing, solo hechos.',
    category: 'CASO DE ÉXITO',
    content: `
      <h2>Comparativa directa: 4 herramientas, 1 técnico mexicano</h2>
      <p>Probamos las 4 opciones cotizando lo mismo: <strong>"Instalación Mini Split 1.5 TR + línea eléctrica + soportes"</strong> para un cliente en CDMX. Aquí los resultados reales.</p>
      
      <table style="width:100%; border-collapse:collapse; margin:1rem 0; font-size:0.9rem;">
        <thead>
          <tr style="background:#1e1e3f; color:#d5c59d;">
            <th style="padding:0.5rem; border:1px solid #333;">Criterio</th>
            <th style="padding:0.5rem; border:1px solid #333;"><strong>Trazzo Recibo</strong></th>
            <th style="padding:0.5rem; border:1px solid #333;">Cotizadora Online</th>
            <th style="padding:0.5rem; border:1px solid #333;">CotizadorPro</th>
            <th style="padding:0.5rem; border:1px solid #333;">ObraMaestra</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="padding:0.5rem; border:1px solid #333;"><strong>Modelo de precio</strong></td><td style="padding:0.5rem; border:1px solid #333;"><strong>Freemium: Gratis (marca agua) / $99 MXN único · Mientras exista el servicio (logo, sin marca agua)</strong></td><td style="padding:0.5rem; border:1px solid #333;">100% Gratis, sin marca agua, sin registro</td><td style="padding:0.5rem; border:1px solid #333;">Freemium: Gratis limitado / Pro $199-399/mes (suscripción)</td><td style="padding:0.5rem; border:1px solid #333;">Suscripción mensual (precio no público, ~$500-1,500/mes)</td></tr>
          <tr><td style="padding:0.5rem; border:1px solid #333;"><strong>Especialización oficios México</strong></td><td style="padding:0.5rem; border:1px solid #333;"><strong>ALTA: 17+ oficios con vocabulario, unidades, materiales, precios referencia MX</strong></td><td style="padding:0.5rem; border:1px solid #333;">BAJA: Genérico global. "Servicio 1, Servicio 2". No entiende "por metro lineal", "por punto", "por destajo".</td><td style="padding:0.5rem; border:1px solid #333;">MEDIA: Algunas plantillas MX, pero motor IA genérico.</td><td style="padding:0.5rem; border:1px solid #333;">ALTA: Enfoque construcción/plomería con precios materiales tiempo real.</td></tr>
          <tr><td style="padding:0.5rem; border:1px solid #333;"><strong>Velocidad en celular (obra)</strong></td><td style="padding:0.5rem; border:1px solid #333;"><strong>MUY RÁPIDA: PWA, offline-first, 3 taps = recibo listo</strong></td><td style="padding:0.5rem; border:1px solid #333;">LENTA: Web responsive, muchos campos, no guarda plantillas propias.</td><td style="padding:0.5rem; border:1px solid #333;">MEDIA: App nativa, pero flujo IA requiere conexión buena.</td><td style="padding:0.5rem; border:1px solid #333;">LENTA: Web pesada, diseñada para oficina no obra.</td></tr>
          <tr><td style="padding:0.5rem; border:1px solid #333;"><strong>WhatsApp integration</strong></td><td style="padding:0.5rem; border:1px solid #333;"><strong>NATIVA: Botón "Compartir por WhatsApp" → PDF + mensaje prellenado</strong></td><td style="padding:0.5rem; border:1px solid #333;">MANUAL: Descarga PDF → Abre WhatsApp → Adjunta → Escribe.</td><td style="padding:0.5rem; border:1px solid #333;">BOTÓN: Comparte link web (no PDF directo). Cliente ve web, no archivo.</td><td style="padding:0.5rem; border:1px solid #333;">MANUAL: Descarga → WhatsApp.</td></tr>
          <tr><td style="padding:0.5rem; border:1px solid #333;"><strong>Plantillas propias / Clonar</strong></td><td style="padding:0.5rem; border:1px solid #333;"><strong>SÍ: Guarda "Mis trabajos" → Clona → Cambia cliente → Listo en 30 seg</strong></td><td style="padding:0.5rem; border:1px solid #333;">NO: Empiezas de cero cada vez.</td><td style="padding:0.5rem; border:1px solid #333;">SÍ: Historial pero sin "plantilla maestra" editable.</td><td style="padding:0.5rem; border:1px solid #333;">SÍ: Proyectos previos clonables.</td></tr>
          <tr><td style="padding:0.5rem; border:1px solid #333;"><strong>Facturación (CFDI)</strong></td><td style="padding:0.5rem; border:1px solid #333;">Genera recibo base → Tú facturas en SAT/sistema (datos listos para copiar)</td><td style="padding:0.5rem; border:1px solid #333;">NO genera datos fiscales listos.</td><td style="padding:0.5rem; border:1px solid #333;">Integración Facturama (costo extra).</td><td style="padding:0.5rem; border:1px solid #333;">Integración nativa (incluida en suscripción cara).</td></tr>
          <tr><td style="padding:0.5rem; border:1px solid #333;"><strong>Funciona SIN internet</strong></td><td style="padding:0.5rem; border:1px solid #333;"><strong>SÍ (PWA + IndexedDB)</strong></td><td style="padding:0.5rem; border:1px solid #333;">NO</td><td style="padding:0.5rem; border:1px solid #333;">Parcial (app cachea algo)</td><td style="padding:0.5rem; border:1px solid #333;">NO</td></tr>
          <tr><td style="padding:0.5rem; border:1px solid #333;"><strong>Costo 3 años</strong></td><td style="padding:0.5rem; border:1px solid #333;"><strong>$99 MXN TOTAL</strong></td><td style="padding:0.5rem; border:1px solid #333;">$0</td><td style="padding:0.5rem; border:1px solid #333;">$7,200 - $14,400 MXN</td><td style="padding:0.5rem; border:1px solid #333;">$18,000 - $54,000 MXN</td></tr>
        </tbody>
      </table>
      
      <h2>Veredicto honesto: ¿Cuál elegir?</h2>
      <ul>
        <li><strong>Elige Cotizadora Online SI:</strong> Haces 1-2 cotizaciones/mes, no te importa llenar campos manuales cada vez, no necesitas logo/profesionalismo visual, cero presupuesto.</li>
        <li><strong>Elige Trazzo Recibo PRO ($99 único · Mientras exista el servicio) SI:</strong> Eres técnico/oficio en México, haces 3+ cotizaciones/mes, quieres logo propio, velocidad en obra, plantillas clonables, WhatsApp nativo, datos listos para facturar, entiendes vocabulario de TU oficio (metro lineal, punto, destajo, TR, kWp). <strong>ROI: 1 solo trabajo extra cerrado por imagen profesional = paga 100x los $99.</strong></li>
        <li><strong>Elige CotizadorPro SI:</strong> Te gusta la IA para redactar descripciones, aceptas suscripción mensual, no te importa que sea menos especializado en oficios MX.</li>
        <li><strong>Elige ObraMaestra SI:</strong> Eres constructor/empresa de ingeniería, necesitas precios de materiales EN TIEMPO REAL (acero, cemento, cobre), licitas obra pública/privada grande, tienes presupuesto de $500+/mes en software.</li>
      </ul>
      
      <h2>Lo que NINGUNA te dice (y Trazzo sí resuelve)</h2>
      <blockquote>"El 33% de cotizaciones no cierran por MAL SEGUIMIENTO, no por mal documento." Trazzo incluye guías GRATIS en la app: "Cómo hacer seguimiento por WhatsApp", "Plantillas de mensajes que cierran", "Cómo justificar tu precio". Las otras solo te dan el PDF. Trazzo te da el NEGOCIO.</blockquote>
    `
  },
  {
    id: 'gratis-vs-pago-unico-vs-suscripcion',
    slug: 'gratis-vs-pago-unico-vs-suscripcion',
    title: 'Cotizador Gratis vs Pago Único vs Suscripción Mensual: ¿Qué Conviene Según TU Volumen de Trabajo?',
    description: 'Análisis financiero real: Cotizadora Online (gratis) vs Trazzo ($99 vida) vs CotizadorPro/ObraMaestra (suscripción). Calcula tu punto de equilibrio y decide con números, no emociones.',
    category: 'CASO DE ÉXITO',
    content: `
      <h2>La matemática oculta del "gratis"</h2>
      <p>Cotizadora Online es $0. Trazzo Pro es $99 UNA VEZ. CotizadorPro es ~$299/mes. ObraMaestra ~$1,000/mes. Pero el COSTO REAL no es el precio del software, es el TIEMPO que pierdes y los TRABAJOS que NO CIERRAS.</p>
      
      <h2>Escenario: Técnico que hace 8 cotizaciones/mes (promedio México)</h2>
      <table style="width:100%; border-collapse:collapse; margin:1rem 0;">
        <thead><tr style="background:#1e1e3f; color:#d5c59d;"><th style="padding:0.5rem; border:1px solid #333;">Costo</th><th style="padding:0.5rem; border:1px solid #333;">Cotizadora Online</th><th style="padding:0.5rem; border:1px solid #333;">Trazzo Pro ($99 vida)</th><th style="padding:0.5rem; border:1px solid #333;">CotizadorPro ($299/mes)</th><th style="padding:0.5rem; border:1px solid #333;">ObraMaestra ($1,000/mes)</th></tr></thead>
        <tbody>
          <tr><td style="padding:0.5rem; border:1px solid #333;">Software 3 años</td><td style="padding:0.5rem; border:1px solid #333;">$0</td><td style="padding:0.5rem; border:1px solid #333;"><strong>$99</strong></td><td style="padding:0.5rem; border:1px solid #333;">$10,764</td><td style="padding:0.5rem; border:1px solid #333;">$36,000</td></tr>
          <tr><td style="padding:0.5rem; border:1px solid #333;">Tiempo/cotización (min)</td><td style="padding:0.5rem; border:1px solid #333;">15-20 (manual, desde cero)</td><td style="padding:0.5rem; border:1px solid #333;"><strong>3-5 (clona plantilla)</strong></td><td style="padding:0.5rem; border:1px solid #333;">8-12 (IA ayuda pero campos)</td><td style="padding:0.5rem; border:1px solid #333;">10-15 (web pesada)</td></tr>
          <tr><td style="padding:0.5rem; border:1px solid #333;">Horas/año solo cotizando</td><td style="padding:0.5rem; border:1px solid #333;">32 hrs</td><td style="padding:0.5rem; border:1px solid #333;"><strong>6.4 hrs</strong></td><td style="padding:0.5rem; border:1px solid #333;">16 hrs</td><td style="padding:0.5rem; border:1px solid #333;">24 hrs</td></tr>
          <tr><td style="padding:0.5rem; border:1px solid #333;">Valor hora técnico ($300/hr)</td><td style="padding:0.5rem; border:1px solid #333;">$9,600/año</td><td style="padding:0.5rem; border:1px solid #333;"><strong>$1,920/año</strong></td><td style="padding:0.5rem; border:1px solid #333;">$4,800/año</td><td style="padding:0.5rem; border:1px solid #333;">$7,200/año</td></tr>
          <tr><td style="padding:0.5rem; border:1px solid #333;"><strong>COSTO TOTAL 3 AÑOS (Soft + Tiempo)</strong></td><td style="padding:0.5rem; border:1px solid #333;"><strong>$28,899</strong></td><td style="padding:0.5rem; border:1px solid #333;"><strong>$5,859</strong></td><td style="padding:0.5rem; border:1px solid #333;">$25,164</td><td style="padding:0.5rem; border:1px solid #333;">$57,600</td></tr>
        </tbody>
      </table>
      
      <h2>Conclusión: El "gratis" sale 5x más caro</h2>
      <p>Trazzo Pro ($99 único · Mientras exista el servicio) te ahorra ~$23k vs "gratis" en 3 años solo en TIEMPO. Y eso sin contar los trabajos EXTRA que cierras por imagen profesional, seguimiento WhatsApp, plantillas listas.</p>
      <p><strong>Tu punto de equilibrio:</strong> Si haces ≥3 cotizaciones/mes, Trazzo Pro se paga solo en el PRIMER MES (1 trabajo extra cerrado = ~$3,000+ ganancia neta vs $99 costo).</p>
    `
  }
]
