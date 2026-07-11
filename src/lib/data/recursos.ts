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
    category: 'CASO DE ÉXITO', // Ajuste para usar las categorías globales sugeridas
    content: `
      <h2>Comparativa Directa</h2>
      <p>Elegir la herramienta correcta para mandar tus cotizaciones puede definir cómo te perciben tus clientes.</p>
      
      <h3>Cotizadora Online</h3>
      <p>Es una excelente opción gratuita. No requiere registro y no pone marca de agua. Su debilidad es que es muy genérica: está hecha para cualquier tipo de negocio en cualquier país, por lo que no entiende las necesidades específicas de un plomero o electricista en México (como calcular por metro lineal o por destajo).</p>
      
      <h3>Trazzo Recibo</h3>
      <p>Es un modelo Freemium. Generar recibos es 100% gratis pero incluye una pequeña marca de agua. Su mayor ventaja es la velocidad (diseñado para usarse en el celular mientras estás en la obra) y que por un único pago de $99 MXN de por vida, puedes poner el logotipo de tu negocio y dar una imagen nivel premium a tus clientes. Además, Trazzo se especializa en oficios mexicanos.</p>
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
  }
]
