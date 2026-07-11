export type Tarea = {
  id: string
  slug: string
  oficioId: string
  name: string
  title: string
  description: string
  priceRange: string
  estimatedTime: string
  tips: string[]
}

export const tareas: Tarea[] = [
  // Plomería
  {
    id: 'fuga-agua',
    slug: 'fuga-agua',
    oficioId: 'plomero',
    name: 'Reparación de Fuga de Agua',
    title: 'Cómo Cotizar y Cobrar una Fuga de Agua',
    description: 'Guía para presupuestar la detección y reparación de fugas de agua ocultas y expuestas.',
    priceRange: '$500 - $2,500 MXN',
    estimatedTime: '2 a 5 horas',
    tips: [
      'Si la fuga es oculta, aclara que el resane de la pared/piso puede o no estar incluido en el costo.',
      'Cobra la visita de detección si el cliente decide no reparar en ese momento.',
      'Detalla en el recibo el material a usar (ej. Tubería CPVC, soldadura, codos) para justificar el precio.'
    ]
  },
  {
    id: 'instalacion-calentador',
    slug: 'instalacion-calentador',
    oficioId: 'plomero',
    name: 'Instalación de Calentador (Boiler)',
    title: 'Cotizador para Instalación de Calentador de Agua',
    description: 'Cómo cobrar por la instalación de un calentador de paso, depósito o solar.',
    priceRange: '$800 - $3,500 MXN',
    estimatedTime: '3 a 6 horas',
    tips: [
      'Diferencia el precio si es reemplazo (quitar el viejo e instalar el nuevo) vs instalación desde cero.',
      'Si hay que modificar tuberías de gas o agua, cóbralo como concepto adicional por metro lineal.',
      'Incluye una nota de garantía de instalación (ej. 30 días contra fugas en conexiones nuevas).'
    ]
  },
  // Electricidad
  {
    id: 'instalacion-electrica',
    slug: 'instalacion-electrica',
    oficioId: 'electricista',
    name: 'Instalación Eléctrica Nueva',
    title: 'Cómo Cotizar una Instalación Eléctrica desde Cero',
    description: 'Aprende a presupuestar cableado, salidas y centros de carga para proyectos nuevos.',
    priceRange: '$15,000 - $50,000+ MXN (Casa habitación estándar)',
    estimatedTime: '1 a 3 semanas',
    tips: [
      'El método más seguro es cobrar "por salida" (cada enchufe, foco o apagador).',
      'Pide un anticipo fuerte (50-60%) porque el cable de cobre es el material más caro del proyecto.',
      'Especifica qué marca de pastillas termomagnéticas usarás; la calidad justifica un presupuesto más alto.'
    ]
  },
  {
    id: 'cortocircuito',
    slug: 'cortocircuito',
    oficioId: 'electricista',
    name: 'Reparación de Cortocircuito',
    title: 'Cuánto Cobrar por Revisar un Cortocircuito',
    description: 'Guía para cobrar diagnóstico y reparación de fallas eléctricas de emergencia.',
    priceRange: '$600 - $2,000 MXN',
    estimatedTime: '1 a 4 horas',
    tips: [
      'Cobra siempre una tarifa de "Revisión y Diagnóstico". Buscar la falla suele tomar más tiempo que arreglarla.',
      'Si el servicio es de urgencia o nocturno, aplica un recargo del 30% al 50%.',
      'Usa tu recibo para recomendar el reemplazo de cableado viejo o centros de carga saturados para prevenir futuros cortos.'
    ]
  },
  // Carpintería
  {
    id: 'fabricacion-closet',
    slug: 'fabricacion-closet',
    oficioId: 'carpintero',
    name: 'Fabricación de clóset a medida',
    title: 'Cómo Presupuestar la Fabricación de un Clóset',
    description: 'Guía paso a paso para cotizar clósets en MDF, melamina o madera sólida, considerando herrajes y acabados.',
    priceRange: '$8,000 - $35,000 MXN',
    estimatedTime: '1 a 3 semanas',
    tips: [
      'Separa siempre el costo del material (tableros) del costo de los herrajes (bisagras de cierre lento, correderas telescópicas).',
      'Pide un anticipo del 60% al 70% para cubrir los materiales antes de empezar a cortar.',
      'Si el cliente cambia el diseño o el color de la melamina después de firmado el recibo, cóbralo como concepto extra.'
    ]
  },
  // Pintor
  {
    id: 'pintura-interior',
    slug: 'pintura-interior',
    oficioId: 'pintor',
    name: 'Pintura interior de casa',
    title: 'Cuánto Cobrar por Pintar Interiores',
    description: 'Aprende a calcular los metros cuadrados de pared (no de piso) para pintar interiores de casas.',
    priceRange: '$35 - $80 MXN por metro cuadrado (Mano de obra)',
    estimatedTime: '2 a 7 días',
    tips: [
      'Si la pared tiene humedad, salitre o requiere ser resanada profundamente, cobra eso como un concepto de "Preparación de superficie" separado.',
      'Especifica en el presupuesto cuántas "manos" de pintura están incluidas (normalmente dos).',
      'Aclara que la pintura no está incluida en la tarifa por metro cuadrado si cobras solo mano de obra.'
    ]
  },
  // Albañilería
  {
    id: 'impermeabilizacion',
    slug: 'impermeabilizacion-azoteas',
    oficioId: 'albanil',
    name: 'Impermeabilización de azoteas',
    title: 'Cómo Cotizar la Impermeabilización de un Techo',
    description: 'Guía de precios para limpiar, sellar e impermeabilizar techos con membrana o productos acrílicos.',
    priceRange: '$70 - $150 MXN por metro cuadrado (Mano de obra y Material)',
    estimatedTime: '2 a 4 días',
    tips: [
      'Cobra por metro cuadrado. Visita siempre el techo antes de dar el precio para medir tú mismo.',
      'Si el techo tiene impermeabilizante viejo y agrietado, incluye un cargo extra por "Retiro de material existente y preparación".',
      'Desglosa el material en el recibo (ej. Sellador, Cemento plástico para grietas, Impermeabilizante 5 años) para que el cliente entienda por qué cobras esa cantidad.'
    ]
  },
  // Herrería
  {
    id: 'fabricacion-porton',
    slug: 'fabricacion-porton',
    oficioId: 'herrero',
    name: 'Fabricación e instalación de portón',
    title: 'Cuánto Cobrar por un Portón de Herrería',
    description: 'Cómo presupuestar un zaguán o portón metálico considerando diseño, peso y automatización.',
    priceRange: '$12,000 - $40,000+ MXN',
    estimatedTime: '2 a 4 semanas',
    tips: [
      'Si el portón será automatizado, cotiza el motor y la instalación eléctrica como un rubro completamente aparte de la herrería.',
      'El acabado importa mucho: especifica si entregarás en fondo (primer) o con pintura de esmalte terminada.',
      'Calcula bien el flete; transportar un portón grande requiere equipo especial y ayudantes. Inclúyelo en la cotización.'
    ]
  }
]
