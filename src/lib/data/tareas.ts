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
  },
  // ===== NUEVAS TAREAS LONG-TAIL SEO PROGRAMÁTICO 2024-2025 =====
  // ===== PLOMERÍA - tareas faltantes =====
  {
    id: 'destape-drenaje',
    slug: 'destape-drenaje',
    oficioId: 'plomero',
    name: 'Destape de Drenaje y Desazolvado',
    title: 'Cuánto Cobrar por Destapar Drenaje: Coladera, Bajada, Línea Principal',
    description: 'Guía de precios para desazolvar drenajes con máquina eléctrica, hidrojeteo y cámara de inspección.',
    priceRange: '$400 - $3,500 MXN',
    estimatedTime: '1 a 4 horas',
    tips: [
      'Diferencia: coladera accesible ($400-800) vs bajada de cocina/lavabo ($800-1,500) vs línea principal a calle ($1,500-3,500 con máquina grande).',
      'Si usas cámara de inspección, cobra $500-1,000 extra y entrega video al cliente: justifica el precio y detecta roturas/raíces.',
      'Hidrojeteo (agua alta presión) para grasas/raíces: $2,000-4,000 por visita. Más caro que varilla pero limpia de verdad, no solo hace agujero.'
    ]
  },
  {
    id: 'instalacion-bomba-presion',
    slug: 'instalacion-bomba-presion',
    oficioId: 'plomero',
    name: 'Instalación de Bomba de Presión / Hidroneumático',
    title: 'Cómo Cotizar Instalación de Bomba de Presión para Casa de 2-3 Baños',
    description: 'Presupuesto llave en mano: bomba, tanque, presostato, base, válvulas, cableado y prueba de presión.',
    priceRange: '$7,000 - $15,000 MXN',
    estimatedTime: '4 a 8 horas',
    tips: [
      'Cotiza por "kit completo instalado" no por piezas. El cliente quiere presión buena en todas las regaderas al mismo tiempo.',
      'Incluye en la cotización: "Prueba de presión en 3 puntos simultáneos + ajuste de presostato". Eso demuestra que sabes lo que haces.',
      'Si la cisterna está sucia, añade partida "Limpieza y desinfección de cisterna previa": $1,500-3,000. La bomba nueva no debe chupar lodo.'
    ]
  },
  {
    id: 'reparacion-fuga-gas',
    slug: 'reparacion-fuga-gas',
    oficioId: 'plomero',
    name: 'Detección y Reparación de Fuga de Gas LP / Natural',
    title: 'Cuánto Cobrar por Detectar y Reparar Fuga de Gas con Certificado',
    description: 'Precios para búsqueda con detector electrónico, reparación de tubería cobre/policapileno, prueba de hermeticidad y dictamen.',
    priceRange: '$800 - $5,000+ MXN',
    estimatedTime: '2 a 6 horas',
    tips: [
      'Cobra SIEMPRE "Visita de detección con detector electrónico certificado": $500-800. Si encuentras y reparas, lo descuentas del total.',
      'Reparación por punto (unión, válvula, flexible): $800-1,500. Re-tramo de tubería (cobre/policapileno): $300-500/m lineal + accesorios.',
      'Incluye "Prueba de hermeticidad con manómetro + acta firmada" en el recibo. Sin eso, la gasera no reconecta. Cobro típico: $500-1,000.'
    ]
  },

  // ===== ELECTRICIDAD - tareas faltantes =====
  {
    id: 'centro-carga',
    slug: 'centro-carga',
    oficioId: 'electricista',
    name: 'Cambio / Instalación de Centro de Carga',
    title: 'Cómo Cotizar Cambio de Centro de Carga: 12, 24, 36, 48 Circuitos',
    description: 'Presupuesto para centro de carga nuevo, pastillas termomagnéticas, barra neutra/tierra, alimentación y puesta a tierra.',
    priceRange: '$3,500 - $18,000+ MXN',
    estimatedTime: '4 a 12 horas',
    tips: [
      'Cotiza por "centro de carga X circuitos instalado + pastillas + alimentación 3x10/16mm² + barra tierra + prueba": precio cerrado.',
      'Centro 12 ckt: $3,500-5,500. 24 ckt: $5,000-8,000. 36-48 ckt: $7,500-12,000. Marca (Siemens, Schneider, GE, IUSA) mueve 20-30%.',
      'Si la instalación vieja no tiene puesta a tierra física (varilla), añade "Instalación de pozo a tierra + medición ohmios": $1,500-3,000. Obligatorio por NOM-001.'
    ]
  },
  {
    id: 'instalacion-aire-acondicionado-electrica',
    slug: 'instalacion-aire-acondicionado-electrica',
    oficioId: 'electricista',
    name: 'Instalación Eléctrica Dedicada para Mini Split / Aire Acondicionado',
    title: 'Cuánto Cobrar por Línea Eléctrica Exclusiva para Aire Acondicionado',
    description: 'Presupuesto para circuito dedicado 220V: cable, poliducto, pastilla 2P, desconectador, canaletas y conexión al centro de carga.',
    priceRange: '$1,800 - $4,500 MXN',
    estimatedTime: '2 a 5 horas',
    tips: [
      'Cobra por "línea dedicada 220V hasta 15m lineal instalada": $1,800-2,800 (cable 10/12 AWG, poliducto 3/4", pastilla 2P 15-20A, desconectador).',
      'Metro extra de cable + poliducto: $80-120/m. Si pasa por losa/techo difícil, +$500-1,000 por complejidad.',
      'Muchos "técnicos de aire" no saben electricidad. Tu recibo dice "Eléctrica certificada NOM-001" y cobras premium. El cliente duerme tranquilo.'
    ]
  },
  {
    id: 'puesta-tierra',
    slug: 'puesta-tierra',
    oficioId: 'electricista',
    name: 'Instalación y Medición de Pozo a Tierra (Puesta a Tierra)',
    title: 'Cómo Cotizar Pozo a Tierra: Varilla, Caja Registro, Medición y Certificado',
    description: 'Presupuesto para sistema de puesta a tierra residencial/comercial: varilla 5/8" x 2.44m, caja, cable, medición óhmica y acta.',
    priceRange: '$1,500 - $4,500 MXN',
    estimatedTime: '3 a 6 horas',
    tips: [
      'Pozo simple (1 varilla + caja + cable 8AWG + medición): $1,500-2,500. Pozo multiple (3 varillas en triángulo + malla) industrial: $4,000-8,000.',
      'SIEMPRE incluye "Medición con telurómetro + acta con valor óhmico (<25Ω residencial, <10Ω industrial)" en el recibo. Sin medición, no sirve.',
      'Si el terreno es rocoso o concreto, la hinca cuesta más. Cotiza "Excavación manual/neumática en zona difícil" como partida aparte.'
    ]
  },

  // ===== CARPINTERÍA - tareas faltantes =====
  {
    id: 'cocina-integral',
    slug: 'cocina-integral',
    oficioId: 'carpintero',
    name: 'Fabricación e Instalación de Cocina Integral',
    title: 'Cómo Presupuestar una Cocina Integral: Módulos Bajos, Altos, Torre, Encimera',
    description: 'Guía paso a paso para cotizar cocina completa en melamina/MDF: diseño, materiales, herrajes, encimera, instalación.',
    priceRange: '$25,000 - $120,000+ MXN',
    estimatedTime: '2 a 6 semanas',
    tips: [
      'Cotiza por metro lineal de cocina (bajos + altos + torre): $4,500-9,000 MXN/ml según melamina (nacional vs importada), herrajes (cierre lento sí/no), encimera (cuarzo/granito/laminado).',
      'SIEMPRE separa en el recibo: 1) Muebles (melamina + herrajes), 2) Encimera (material + corte + fregadero + instalación), 3) Instalación total. El cliente ve dónde va su dinero.',
      'Pide 60% anticipo (materiales), 30% a entrega de muebles en obra, 10% contra instalación final. Nunca 100% al final: la encimera tarda y el cliente retrasa pago.'
    ]
  },
  {
    id: 'puertas-madera',
    slug: 'puertas-madera',
    oficioId: 'carpintero',
    name: 'Instalación de Puertas de Madera (Interiores / Exteriores)',
    title: 'Cuánto Cobrar por Instalar Puerta de Madera: Marco, Hoja, Herrajes y Cerradura',
    description: 'Precios para colocar puerta sólida, hueca, pivotante: marco, bisagras, chapa, chapetón, resane y ajuste final.',
    priceRange: '$1,200 - $5,500 MXN por puerta',
    estimatedTime: '2 a 5 horas por puerta',
    tips: [
      'Puerta interior hueca + marco + bisagras + chapa tubular + instalada: $1,200-2,000. Puerta sólida (cedro/pino/roble) + chapa de seguridad: $2,500-5,500.',
      'Si el marco existente está podrido/torcido, cobra "Fabricación e instalación de marco nuevo": $800-1,500 extra. No claves hoja nueva en marco malo.',
      'Exterior: incluye "Sellado perimetral con poliuretano + umbral de aluminio + pintura/laca 3 manos" en la cotización. Eso evita filtraciones y reclamos.'
    ]
  },

  // ===== ALBAÑILERÍA - tareas faltantes =====
  {
    id: 'construccion-muro-block',
    slug: 'construccion-muro-block',
    oficioId: 'albanil',
    name: 'Construcción de Muro de Block / Ladrillo',
    title: 'Cuánto Cobrar por Metro Cuadrado de Muro de Block (Levantado + Aplanado)',
    description: 'Precios por m² para muro divisor, bardas, cerramientos: block 10/12/15cm, aplanado dos caras, cadenas y castillos.',
    priceRange: '$280 - $550 MXN/m²',
    estimatedTime: 'Según metros lineales',
    tips: [
      'Muro block 12cm + aplanado 2 caras (1:4 + 1:3) + cadena cimentación + castillos cada 3m: $320-450/m². Block 15cm (carga): $380-520/m².',
      'Incluye en el recibo: "Block humedecido previo + mortero tipo II + aplanado en 2 capas + curado 3 días". El cliente no sabe esto, pero evita grietas y reclamos.',
      'Barda perimetral: cotiza por m lineal (alto fijo 2.20-2.50m) no por m². Más fácil para el cliente: "Barda 2.40m alto: $850-1,200/ml todo incluido".'
    ]
  },
  {
    id: 'colado-losa',
    slug: 'colado-losa',
    oficioId: 'albanil',
    name: 'Colado de Losa de Concreto (Entrepiso / Azotea / Cimentación)',
    title: 'Cómo Cotizar Colado de Losa: Concreto, Varilla, Cimbra, Vibrado y Curado',
    description: 'Presupuesto por m² de losa: diseño estructural, varilla, concreto f\'c=200-250, cimbra, vibrado, curado 7 días.',
    priceRange: '$450 - $850 MXN/m²',
    estimatedTime: '3 a 10 días',
    tips: [
      'Losa maciza 10-12cm (entrepiso): $550-750/m². Losa nervada / vigueta + bovedilla: $480-650/m² (menos concreto/varilla, más mano de obra). Azotea + impermeabilizante: +$150-250/m².',
      'SIEMPRE pide "Cálculo estructural y planos" como partida separada ($8,000-25,000). Sin planos, no cotices a ciegas: es tu responsabilidad civil.',
      'Concreto bombeado vs revolvedora: bombeado +$50-80/m³ pero llega a 4to piso sin grúa. Incluye "Bombeo incluido hasta X m vertical" en la cotización.'
    ]
  },

  // ===== PINTURA - tareas faltantes =====
  {
    id: 'impermeabilizacion-azotea-pintor',
    slug: 'impermeabilizacion-azotea-pintor',
    oficioId: 'pintor',
    name: 'Impermeabilización de Azoteas y Techos Planos',
    title: 'Cuánto Cobrar por Impermeabilizar Azotea: Acrílico, Asfáltico, Poliuretano',
    description: 'Guía de precios por m² según sistema: acrílico 5-10 años, membrana asfáltica, poliuretano transitable. Incluye preparación y garantía.',
    priceRange: '$180 - $500 MXN/m²',
    estimatedTime: '2 a 5 días',
    tips: [
      'Acrílico 7 años (sellador + malla en juntas + 3 manos): $180-280/m². Acrílico 10 años / elastomérico: $250-380/m². Poliuretano (transitable): $350-500/m².',
      'La preparación ES el 60% del trabajo: lavado a presión, reparación grietas con malla + sellador elástico, imprimante. Cotízalo separado: "Preparación de sustrato: $40-70/m²".',
      'Garantía escrita por años (no "garantía de por vida" que no existe). Entrega acta de entrega con fotos, ficha técnica del producto y tu responsabilidad civil.'
    ]
  },
  {
    id: 'pintura-exterior-fachada',
    slug: 'pintura-exterior-fachada',
    oficioId: 'pintor',
    name: 'Pintura de Fachadas y Exteriores',
    title: 'Cómo Cotizar Pintura de Fachada: Lavado, Sellado, Fondo y Acabado Vinílico/Acrilico',
    description: 'Presupuesto por m² de fachada: hidrolavado, sellado grietas, fondo sellador, 2 manos pintura vinílica/acrílica 10 años.',
    priceRange: '$150 - $350 MXN/m²',
    estimatedTime: '3 a 10 días',
    tips: [
      'Fachada 2 niveles (incluye andamio/escalera): $180-280/m². Fachada 3+ niveles (requiere andamio certificado): $250-350/m² + renta andamio ($3,000-6,000/semana).',
      'Diferencia tu cotización: "Incluye hidrolavado 3000 PSI + sellado grietas con malla + fondo sellador 100% acrílico + 2 manos vinílico 10 años". El barato solo echa pintura sobre polvo.',
      'Si hay salitre/humedad: añade "Tratamiento antisalitre + fondo bloqueador" $30-50/m² extra. Sin eso, la pintura revienta en 6 meses.'
    ]
  },

  // ===== CERRAJERÍA - tareas faltantes =====
  {
    id: 'apertura-automotriz',
    slug: 'apertura-automotriz',
    oficioId: 'cerrajero',
    name: 'Apertura de Vehículos (Autos, Camiones, Motos) sin Daño',
    title: 'Cuánto Cobrar por Abrir Carro: Llaves Dentro, Perdidas, Chip / Transponder',
    description: 'Precios por apertura diurna/nocturna, programación de llaves con chip, extracción de llave rota, reparación de cilindro.',
    priceRange: '$400 - $3,500 MXN',
    estimatedTime: '15 min a 2 horas',
    tips: [
      'Apertura simple (llaves dentro, sin chip): $400-700 día / $700-1,200 noche. Con chip/transponder (programación): $1,200-3,500 según marca (Toyota/Nissan/Honda vs BMW/Mercedes).',
      'SIEMPRE firma de exención: "No responsable por daños previos en cilindro/cerradura/sistema eléctrico". Foto del vehículo antes/de después. Evita reclamaciones falsas.',
      'Llave rota en cilindro: extracción $500-1,000 + nueva llave. Si el cilindro queda dañado, cotiza "Cambio de cilindro + llaves" aparte. No lo regales.'
    ]
  },
  {
    id: 'instalacion-chapa-electronica',
    slug: 'instalacion-chapa-electronica',
    oficioId: 'cerrajero',
    name: 'Instalación de Chapas Electrónicas / Biométricas / Smart Locks',
    title: 'Cómo Cotizar Chapa Electrónica: Huella, Código, Tarjeta, App, Bluetooth',
    description: 'Precios para cerraduras inteligentes residenciales/oficinas: equipo, instalación, programación usuarios, integración WiFi/Zigbee.',
    priceRange: '$2,500 - $12,000+ MXN',
    estimatedTime: '1 a 3 horas',
    tips: [
      'Chapa código/huella básica (Yale, Samsung, genérica buena): $2,500-4,500 instalada. Smart Lock WiFi/Bluetooth + app (Nuki, Yale, August, Aqara): $4,000-8,000. Biométrica oficina/acceso controlado: $6,000-15,000.',
      'Incluye: "Instalación en puerta madera/metal + programación 5-10 usuarios + tutorial app + 5 tarjetas/códigos + pila alcalina duracell". El cliente valora que se la dejes LISTA.',
      'Puerta de vidrio/hermética: requiere herraje especial (abrazadera, electroimán). Cotiza +$1,500-3,000. No improvises: se cae el vidrio.'
    ]
  },

  // ===== AIRE ACONDICIONADO - tareas faltantes =====
  {
    id: 'instalacion-minisplit',
    slug: 'instalacion-minisplit',
    oficioId: 'aire-acondicionado',
    name: 'Instalación de Mini Split (Equipo Nuevo / Reubicación)',
    title: 'Cuánto Cobrar por Instalar Mini Split: 1, 1.5, 2, 3 Toneladas',
    description: 'Presupuesto llave en mano: equipo, tubería cobre, cableado, drenaje, soportes, vacío, carga de gas, prueba y garantía.',
    priceRange: '$3,500 - $9,000 MXN (solo mano de obra + materiales instalación, SIN equipo)',
    estimatedTime: '4 a 8 horas',
    tips: [
      'Mano de obra + materiales instalación (tubería 3-5m, cable, drenaje, soportes, vacío, gas R410A): 1-1.5 TR $3,500-4,500. 2 TR $4,000-5,500. 3 TR $5,000-7,000. Metro extra tubería: $180-250/m (cobre 1/4+3/8/1/2 + armaflex + cable).',
      'Reubicación (desinstalar + mover + reinstalar): cobra 70% de instalación nueva. Incluye "Recuperación de gas R410A + vacío nuevo + prueba". No ventiles gas a la atmósfera: es delito y mala práctica.',
      'SIEMPRE cotiza "Soportes condensadora tipo muro/techo + protección antihurto (candado/tornillo seguridad)" $300-600. El cliente no lo pide, pero evita robos y vibraciones.'
    ]
  },
  {
    id: 'mantenimiento-preventivo-minisplit',
    slug: 'mantenimiento-preventivo-minisplit',
    oficioId: 'aire-acondicionado',
    name: 'Mantenimiento Preventivo de Mini Split (Limpieza Profunda)',
    title: 'Cuánto Cobrar por Limpieza de Mini Split: Filtros, Serpentín, Turbina, Drenaje, Presiones',
    description: 'Precios por equipo: limpieza completa, revisión de gas, capacitores, compresor, drenaje. Paquetes multi-equipo.',
    priceRange: '$350 - $800 MXN por equipo',
    estimatedTime: '45 min a 1.5 horas por equipo',
    tips: [
      'Limpieza básica (filtros + bandeja + drenaje): $350-500. Limpieza PROFUNDA (desarme evaporadora, cepillado serpentín, lavado turbina, revisión presiones/gas, capacitores): $550-800.',
      'Ofrece "Paquete 3 equipos: $1,500" o "Contrato semestral 2 visitas/año: 15% descuento". Recurrente = flujo de caja estable.',
      'Entrega reporte: "Presiones alta/baja: X/Y psi. Delta T: 14-18°C. Capacitores: OK. Drenaje: libre. Filtros: limpios". El cliente ve que HICISTE algo, no solo pasaste trapo.'
    ]
  },

  // ===== JARDINERÍA - tareas faltantes =====
  {
    id: 'poda-arboles-altos',
    slug: 'poda-arboles-altos',
    oficioId: 'jardinero',
    name: 'Poda y Derribo de Árboles Altos / de Alto Riesgo',
    title: 'Cómo Cotizar Poda de Árbol Grande: Palma, Eucalipto, Ficus, Árbol Frutal',
    description: 'Precios por árbol según altura, diámetro, acceso, riesgo (cables CFE, techos, piscina). Incluye subida, poda selectiva, retiro de ramas y escombro.',
    priceRange: '$1,500 - $15,000+ MXN por árbol',
    estimatedTime: '2 horas a 1 día',
    tips: [
      'Árbol 6-10m (acceso fácil, sin riesgos): $1,500-3,500. 10-15m (requiere arnés/cuerdas): $3,000-7,000. 15m+ / cerca cables CFE / techo: $7,000-20,000+ (grúa/canasta + seguro + permiso).',
      'SIEMPRE incluye "Retiro y acarreo de escombro verde a tiradero autorizado" en el precio. Dejar ramas en la banqueta = multa municipal y cliente enojado.',
      'Poda de formación (árbol joven, cada año): $500-1,200. Poda de rejuvenecimiento / saneamiento (quita seca, cruce, malade): 1.5-2x precio base. Explica la diferencia en el recibo.'
    ]
  },
  {
    id: 'instalacion-riego-automatizado',
    slug: 'instalacion-riego-automatizado',
    oficioId: 'jardinero',
    name: 'Instalación de Riego Automatizado (Aspersores / Goteo / Programador)',
    title: 'Cómo Cotizar Sistema de Riego Automático: Zonas, Aspersores, Electroválvulas, Programador WiFi',
    description: 'Presupuesto por m² o por zona: diseño hidráulico, tubería PVC, aspersores emergentes/goteo, electroválvulas, programador, sensores lluvia.',
    priceRange: '$180 - $450 MXN/m²',
    estimatedTime: '1 a 4 días',
    tips: [
      'Riego por aspersión (pasto): $200-350/m² (tubería PVC 1/2-1", aspersores Hunter/RainBird, electroválvulas, programador 4-8 zonas). Riego por goteo (macetas/jardineras): $150-280/m².',
      'Diseño hidráulico (cálculo caudal/presión, zonificación) = $1,500-3,000. SIEMPRE cotízalo: sin diseño, pones aspersores "al tanteo" y hay zonas secas/encharcadas.',
      'Programador WiFi (Hunter Hydrawise, RainBird, Orbit B-hyve): +$1,500-3,500. El cliente lo controla desde el celular. Upsell fácil si se lo explicas en la cotización.'
    ]
  },

  // ===== NUEVOS OFICIOS - tareas específicas (Eje 2: tipo de trabajo) =====

  // Tablaroca
  {
    id: 'plafon-tablaroca',
    slug: 'plafon-tablaroca',
    oficioId: 'tablaroca',
    name: 'Instalación de Plafón de Tablaroca / Drywall',
    title: 'Cuánto Cobrar por Plafón de Tablaroca: Planos, Curvos, Acústicos, con Aislamiento',
    description: 'Precios por m² de plafón: perfilería, tablaroca 1/2", cinta, pasta 3 capas, lijado. Extra: aislamiento lana mineral, luminarias, ventilación.',
    priceRange: '$280 - $550 MXN/m²',
    estimatedTime: 'Según m²',
    tips: [
      'Plafón plano estándar (altura ≤2.70m): $280-380/m². Plafón curvo / escalonado / con cajones LED: $450-650/m² (más perfilería, más cortes, más desperdicio).',
      'Aislamiento acústico (lana mineral 2.5" 48kg/m³ entre perfiles): +$70-120/m² material + mano de obra. Vendelo: "Dejas de escuchar al vecino de arriba".',
      'Incluye "Colocación de luminarias recessed / ventiladores / difusores" como partida aparte por punto: $150-300 c/u. No lo regales: requiere medir, cortar, cablear.'
    ]
  },
  {
    id: 'muro-divisorio-tablaroca',
    slug: 'muro-divisorio-tablaroca',
    oficioId: 'tablaroca',
    name: 'Muro Divisorio de Tablaroca / Drywall',
    title: 'Cómo Cotizar Muro de Tablaroca: Simple, Doble, Acústico, con Puerta',
    description: 'Presupuesto por m²: perfilería montante/canal, tablaroca 1/2" o 5/8", una/dos caras, cinta, pasta, lijado, puerta, instalaciones.',
    priceRange: '$320 - $650 MXN/m²',
    estimatedTime: 'Según m²',
    tips: [
      'Muro simple (una cara tablaroca, otra vista/block): $220-320/m². Muro doble cara (tablaroca ambos lados): $320-450/m². Doble pared + lana mineral (acústico alto): $500-650/m².',
      'Puerta instalada en muro tablaroca: marco madera/acero + hoja + herrajes + corte refuerzo perfiles: $2,500-5,000 extra. Cotízala aparte, no la "incluyas" en el m².',
      'Instalaciones (eléctrica, datos, voz) dentro del muro: cobra "Paso de tubería corrugada + cajas registro" por punto: $120-200. El electricista te lo agradecerá.'
    ]
  },

  // Refrigeración Comercial
  {
    id: 'camara-frigorifica',
    slug: 'camara-frigorifica',
    oficioId: 'refrigeracion-comercial',
    name: 'Instalación de Cámara Frigorífica / Congelación Llave en Mano',
    title: 'Cuánto Cobrar por Cámara Fría: Conservación (0-5°C) vs Congelación (-18°C)',
    description: 'Presupuesto por m³: panel sándwich, piso aislado, puerta, equipo refrigeración, controles, instalación, puesta en marcha, garantía.',
    priceRange: '$3,500 - $7,500 MXN/m³',
    estimatedTime: '1 a 3 semanas',
    tips: [
      'Conservación (frutas, verduras, lácteos 0-5°C): $3,500-5,500/m³. Congelación (carnes, helados -18 a -25°C): $4,500-7,500/m³. Diferencia: espesor panel (80 vs 100-150mm), equipo mayor potencia, piso reforzado.',
      'SIEMPRE cotiza "Piso aislado + rampa acceso + guarnición sanitaria" incluido. Sin piso aislado, el frío se va por abajo y el equipo no para. Error de novato.',
      'Puerta: batiente estándar 80x190cm incluida. Corredera / hermética / con visor / con cortina PVC: +$3,000-12,000. Pregunta al cliente ANTES de cotizar.'
    ]
  },
  {
    id: 'mantenimiento-preventivo-refrigeracion',
    slug: 'mantenimiento-preventivo-refrigeracion',
    oficioId: 'refrigeracion-comercial',
    name: 'Contrato de Mantenimiento Preventivo Mensual de Refrigeración Comercial',
    title: 'Cómo Cotizar Mantenimiento Mensual de Cámaras Frío / Racks / Equipos',
    description: 'Precios por visita mensual: revisión presiones, amperajes, limpieza condensadores, detección fugas, contactores, reporte fotográfico, garantía de respuesta.',
    priceRange: '$800 - $3,500 MXN/mes por equipo/rack',
    estimatedTime: '1 a 3 horas por visita',
    tips: [
      'Equipo independiente (condensadora + evaporadora): $800-1,500/mes. Rack múltiples compresores: $2,000-4,000/mes. Incluye: 1 visita/mes + atención prioritaria urgencias (4h) + 10% descuento refacciones.',
      'Entrega reporte digital con fotos: "Presión succión/descarga: X/Y psi. Supercalentamiento: Z°K. Condensadores: limpios. Contactores: OK. Fugas: NINGUNA detectada." Cliente corporativo EXIGE esto.',
      'Cláusula en recibo: "No incluye: recarga gas (fuga), cambio compresor, reparación eléctrica mayor, refacciones. Mano de obra urgencia fuera de horario: $800/hr + viáticos". Protégete.'
    ]
  },

  // CCTV / Seguridad
  {
    id: 'kit-cctv-residencial',
    slug: 'kit-cctv-residencial',
    oficioId: 'cctv-seguridad',
    name: 'Kit CCTV Residencial Llave en Mano (4 / 8 / 16 Cámaras)',
    title: 'Cuánto Cobrar por Kit de Cámaras de Seguridad para Casa: 4, 8, 16 Canales',
    description: 'Paquetes completos: cámaras IP 2MP/4MP, NVR PoE, disco duro, cableado, instalación, configuración app, capacitación cliente.',
    priceRange: '$12,000 - $45,000+ MXN',
    estimatedTime: '1 a 3 días',
    tips: [
      'Kit 4 cámaras 2MP + NVR 4ch + 2TB + 120m cable + instalado: $12,000-18,000. Kit 8 cámaras 4MP + NVR 8ch + 4TB + 300m cable + instalado: $22,000-35,000. Kit 16 cámaras: $35,000-55,000.',
      'Diferencia en la cotización: "Cámaras IP PoE (un cable para video+alimentación) + NVR con PoE integrado + Disco vigilancia (Purple/SkyHawk) + Configuración app remota + 1 año garantía mano de obra".',
      'Upsell: "Cámara adicional: $1,800-2,500 instalada". "Micrófono ambiental por cámara: +$300". "Almacenamiento en nube 30 días: $150-300/mes por cámara".'
    ]
  },
  {
    id: 'control-acceso-biometrico',
    slug: 'control-acceso-biometrico',
    oficioId: 'cctv-seguridad',
    name: 'Control de Acceso: Biométrico (Huella/Rostro), Tarjeta, Teclado, App',
    title: 'Cómo Cotizar Control de Acceso: Oficina, Bodega, Condominio, Torniquete',
    description: 'Precios por punto de acceso: lector, controladora, cerradura electrónica, software, instalación, capacitación, alta usuarios.',
    priceRange: '$4,500 - $25,000+ MXN por acceso',
    estimatedTime: '4 horas a 2 días por acceso',
    tips: [
      'Acceso simple (lector huella/tarjeta + controladora + chapa magnética/eléctrica + software básico 500 usuarios): $4,500-8,000. Facial/Palma (ZKTeco, Hikvision, Anviz): $7,000-12,000. Torniquete + lector: $18,000-35,000.',
      'Software en la nube (ZKBioTime, HikCentral, cloud): $50-150/mes por dispositivo. Incluye: reportes entrada/salda, horarios, alertas, app móvil. Cotízalo como "Suscripción anual" en el recibo.',
      'Cableado: UTP Cat6 a cada lector + alimentación 12V. Si no hay red, cotiza "Punto de red PoE + switch" por acceso: $800-1,500.'
    ]
  },

  // Paneles Solares
  {
    id: 'sistema-fotovoltaico-residencial',
    slug: 'sistema-fotovoltaico-residencial',
    oficioId: 'paneles-solares',
    name: 'Sistema Fotovoltaico Residencial On-Grid Llave en Mano (CFE)',
    title: 'Cuánto Cuesta un Sistema Solar para Casa: 2, 3, 5, 10 kWp con Trámite CFE',
    description: 'Presupuesto completo: paneles, inversor, estructura, cableado, protecciones, medidor bidireccional, trámite interconexión CFE, monitoreo, garantía.',
    priceRange: '$36,000 - $260,000+ MXN',
    estimatedTime: '1 a 3 semanas',
    tips: [
      'Precio llave en mano 2024-2025: $18,000-26,000 MXN/kWp. Sistema 3 kWp (6-7 paneles): $55,000-75,000. 5 kWp: $90,000-125,000. 10 kWp: $180,000-250,000. Incluye TODO: equipo, estructura, inversor, trámite CFE, puesta en marcha.',
      'PARTIDAS OBLIGATORIAS en tu recibo: 1) Módulos FV (marca, modelo, potencia, garantía 25 años). 2) Inversor on-grid (marca, garantía 10-12 años). 3) Estructura (aluminio/acero, garantía 20 años). 4) Cableado/conectores/protecciones DC/AC. 5) TRÁMITE CFE (contrato interconexión, dictamen, medidor bidireccional). 6) Monitoreo app/web. 7) Puesta en marcha + capacitación.',
      'NO cotices "solo paneles". El cliente NO sabe instalar, tramitar CFE, ni configurar inversor. Vende "Sistema llave en mano que CFE aprueba y te baja el recibo a $0\".'
    ]
  },
  {
    id: 'mantenimiento-paneles-solares',
    slug: 'mantenimiento-paneles-solares',
    oficioId: 'paneles-solares',
    name: 'Mantenimiento y Limpieza de Paneles Solares + Revisión Inversor',
    title: 'Cómo Cotizar Mantenimiento Anual de Sistema Solar: Limpieza, Torqueo, Mediciones, Garantía',
    description: 'Precios por kWp o por sistema: limpieza paneles, torqueo conexiones, medición IV curves, revisión inversor, reporte rendimiento, limpieza inversor.',
    priceRange: '$1,500 - $8,000 MXN por visita',
    estimatedTime: '2 a 6 horas',
    tips: [
      'Limpieza + revisión básica (hasta 5 kWp): $1,500-2,500. 5-15 kWp: $2,500-4,500. 15+ kWp: $4,000-8,000. Incluye: agua desionizada, cepillo suave, medidor IV curve tester, torqueo DC/AC, limpieza ventilación inversor.',
      'Entrega reporte: "Potencia pico medida: X kWp (esperado Y kWp = Z% rendimiento). Temperatura celdas: °C. Aislamiento DC: >1MΩ. Torqueo: OK. Inversor: sin fallas. Producción acumulada: kWh." Cliente ve ROI real.',
      'Contrato anual 2 visitas (pre/post temporada lluvias): 15% descuento. Incluye "Limpieza inversor gratis" y "Atención prioritaria falla inversor (24h)". Recurrente = dinero seguro.'
    ]
  },

  // Gas LP / Natural
  {
    id: 'tanque-estacionario-gas',
    slug: 'tanque-estacionario-gas',
    oficioId: 'gas-lp-natural',
    name: 'Instalación de Tanque Estacionario de Gas LP (120L a 5000L)',
    title: 'Cuánto Cobrar por Tanque Estacionario: Tanque, Base, Reguladores, Tubería, Dictamen, Alta',
    description: 'Presupuesto llave en mano: tanque nuevo/reacondicionado, base concreto, regulador 1ra/2da etapa, tubería a consumo, prueba hermeticidad, dictamen, trámite alta.',
    priceRange: '$8,000 - $60,000+ MXN',
    estimatedTime: '1 a 3 días',
    tips: [
      'Tanque 120-180L (casa 2-3 baños): tanque $4,500-7,000 + base $1,500-2,500 + reguladores/tubería $2,000-4,000 + dictamen/alta $2,000-4,000 = $10,000-17,000. Tanque 300-500L (restaurante/hotel): $25,000-50,000+. Tanque 1000L+: $40,000-80,000.',
      'SIEMPRE cotiza "Tanque NUEVO certificado (no reacondicionado sin papeles) + Base concreto armado 15cm + Regulador 1ra etapa (tanque) + 2da etapa (línea) + Válvula exceso flujo + Prueba hermeticidad 1.5x presión trabajo + Dictamen RI + Tramite alta gasera".',
      'Reacondicionado (más barato): exige "Certificado de rehidroprueba vigente + pintura epóxica + válvulas nuevas". Si no tiene papeles, NO lo instales: es tu responsabilidad penal si explota.'
    ]
  },
  {
    id: 'conversion-gas-natural',
    slug: 'conversion-gas-natural',
    oficioId: 'gas-lp-natural',
    name: 'Conversión de Equipos de Gas LP a Gas Natural (Estufa, Calentador, Secadora, Boiler)',
    title: 'Cómo Cotizar Conversión a Gas Natural: Inyectores, Regulador, Válvulas, Dictamen, Prueba',
    description: 'Precios por equipo: cambio de inyectores/orificios, regulador de presión, válvula de seguridad, prueba de combustión, dictamen de conversión.',
    priceRange: '$800 - $3,500 MXN por equipo',
    estimatedTime: '1 a 3 horas por equipo',
    tips: [
      'Estufa 4-6 quemadores: $800-1,500 (inyectores + regulador 2da etapa + ajuste llama + prueba). Calentador paso/boiler: $1,000-2,000. Secadora: $1,200-2,200. Horno comercial: $2,000-4,000.',
      'SIEMPRE incluye "Prueba de combustión (CO <100ppm, CO2 8-10%) + Acta de conversión firmada por RI" en el recibo. La gasera lo pide para cambiar el medidor. Sin acta, no te pagan.',
      'Si la tubería existente es para LP (presión alta), puede necesitar cambio a diámetro mayor para GN (presión baja). Cotiza "Re-tubería a consumo" aparte si aplica. No asumas.'
    ]
  },

  // Impermeabilización
  {
    id: 'impermeabilizacion-cisterna',
    slug: 'impermeabilizacion-cisterna',
    oficioId: 'impermeabilizacion',
    name: 'Impermeabilización de Cisternas, Aljibes y Tinacos (Cementoso / Epóxico)',
    title: 'Cuánto Cobrar por Impermeabilizar Cisterna: Cementoso Cristalizante vs Epóxico Alimentario',
    description: 'Precios por m² interno: preparación, reparación fisuras, sistema cementoso cristalizante o epóxico certificado agua potable, curado, llenado prueba.',
    priceRange: '$350 - $850 MXN/m² interno',
    estimatedTime: '3 a 7 días',
    tips: [
      'Cementoso cristalizante (Xypex, Penetron, nacional bueno): $350-550/m². Epóxico alimentario (certificado NSF/ANSI 61): $600-850/m². Epóxico dura 15-20 años vs 10-15 cementoso. Para agua POTABLE: solo epóxico certificado.',
      'Preparación CRÍTICA: hidrolavado 3000+ PSI + picado zonas sueltas + reparación fisuras con mortero reparador + llaves de expansión en juntas frías. Cobra "Preparación sustrato": $80-150/m². Sin esto, falla en 1 año.',
      'Incluye "Llenado prueba 72h + análisis agua (bacteriológico + fisicoquímico) + acta de entrega" en la cotización. Cliente corporativo/municipal LO EXIGE. Diferénciate.'
    ]
  },
  {
    id: 'impermeabilizacion-muros-enterrados',
    slug: 'impermeabilizacion-muros-enterrados',
    oficioId: 'impermeabilizacion',
    name: 'Impermeabilización de Muros Enterrados / Sótanos / Cimentación (Lado Positivo / Negativo)',
    title: 'Cómo Cotizar Impermeabilizar Muro Enterrado: Membrana Asfáltica, Bentonita, Cementoso, Poliuretano',
    description: 'Precios por m²: excavación (si aplica), limpieza, sistema según presión hidrostática, protección mecánica, relleno, drenaje perimetral.',
    priceRange: '$450 - $1,200 MXN/m²',
    estimatedTime: '1 a 2 semanas',
    tips: [
      'Lado positivo (antes de rellenar): Membrana asfáltica 4mm + geotextil + drenaje: $450-700/m². Bentonita (Volclay): $550-800/m² (auto-cicatriza). Poliuretano 2 comp: $700-1,000/m² (puentes grietas).',
      'Lado negativo (interior, ya rellenado): SOLO cementoso cristalizante o inyección poliuretano alta presión. $600-1,200/m². Más caro, menos efectivo. Advierte al cliente: "Mejor hacerlo ANTES de rellenar".',
      'Drenaje perimetral (tubería dren 4" + grava + geotextil + pozo de bombeo): $300-500/ml. SIEMPRE cotízalo: sin drenaje, la presión hidrostática rompe CUALQUIER impermeabilizante.'
    ]
  },

  // Pisos / Cerámicos
  {
    id: 'porcelanato-formato-grande',
    slug: 'porcelanato-formato-grande',
    oficioId: 'pisos-ceramicos',
    name: 'Instalación de Porcelanato Formato Grande (80x80, 100x100, 120x120, 120x240, 160x320)',
    title: 'Cuánto Cobrar por Porcelanato Grande: Nivelado, Cortes, Sistema Nivelación, Juntas Mínimas',
    description: 'Precios por m²: autonivelante previo, adhesivo C2S2, sistema nivelación clips/cuñas, juntas 1-2mm, lechada epóxica, limpieza final.',
    priceRange: '$280 - $550 MXN/m²',
    estimatedTime: 'Según m²',
    tips: [
      'Formatos 80x80 a 100x100: $280-400/m². 120x120 a 120x240: $350-500/m². 160x320 (láminas): $450-650/m² (requiere 2 personas + ventosas + mesa corte grande). Incluye adhesivo C2S2 + clips/cuñas + lechada epóxica.',
      'AUTONIVELANTE OBLIGATORIO: variación >3mm en 2m = cabo suelto. Cotiza "Autonivelante cementicio 3-5mm": $120-180/m² material + mano de obra. Si no lo haces, el grande "tamborenea" y revienta.',
      'Cortes en L / U / redondos (regaderas, columnas, islas): +$150-300 por corte complejo. Desperdicio formato grande: 8-12% vs 5% estándar. Explícalo en la cotización: "Incluye 10% merma por formato\".'
    ]
  },
  {
    id: 'piso-vinilico-spc-wpc',
    slug: 'piso-vinilico-spc-wpc',
    oficioId: 'pisos-ceramicos',
    name: 'Instalación de Piso Vinílico SPC / WPC / LVT (Click / Pegado)',
    title: 'Cómo Cotizar Piso Vinílico: SPC Click, WPC, LVT Pegado, Zócalo, Transiciones',
    description: 'Precios por m²: base nivelada, subsuelo (si click), adhesivo (si pegado), zócalo PVC/MDF, perfiles transición, umbrales, retiro anterior.',
    priceRange: '$180 - $380 MXN/m²',
    estimatedTime: '1 a 3 días',
    tips: [
      'SPC Click (rigido, 4-5.5mm): $180-280/m² instalado (incluye subsuelo 1.5-2mm + zócalo PVC). WPC (más grueso, cómodo): $220-320/m². LVT Pegado (2.5-3mm, comercial): $200-300/m² + adhesivo $30-50/m².',
      'Retiro piso anterior + acarreo: $80-150/m². Regularización/autonivelante si base mala: $120-180/m². Zócalo MDF blanco/color: $80-150/ml. Perfil transición: $120-200/ml.',
      'VENTAJA vs cerámico: se instala SOBRE piso existente (si está bien), 1 día casa 60m², sin polvo, sin fragüe, cálido. Pon en la cotización: "Instalación limpia, rápida, sin escombro, lista para usar INMEDIATAMENTE\".'
    ]
  },

  // Albercas
  {
    id: 'apertura-temporada-alberca',
    slug: 'apertura-temporada-alberca',
    oficioId: 'mantenimiento-albercas',
    name: 'Apertura de Temporada de Alberca (Limpieza, Químicos, Equipos, Puesta en Marcha)',
    title: 'Cuánto Cobrar por Abrir la Alberca: Limpieza Fondo, Filtros, Químicos Inicio, Programación',
    description: 'Presupuesto anual: vaciado parcial/total, cepillado, aspirado, limpieza filtros, carga química inicial, programación bomba, revisión fugas, certificado agua.',
    priceRange: '$2,500 - $8,000 MXN',
    estimatedTime: '4 a 8 horas',
    tips: [
      'Alberca 30-50m³ (residencial estándar): $2,500-4,000. 50-100m³: $3,500-5,500. 100m³+ (comercial/hotel): $5,000-10,000. Incluye: químicos inicio (cloro choque, alguicida, pH, alcalinidad), limpieza filtro, programación bomba, test kit.',
      'Si el agua está VERDE/NEGRA (abandono >6 meses): NO la vacíes (riesgo estructural). Tratamiento choque + floculante + aspirado a desechos + múltiples retro lavados: $4,000-8,000 extra. Explica en cotización: "Recuperación agua verde\".',
      'Entrega "Acta de apertura": parámetros agua (Cl libre 1-3ppm, pH 7.2-7.6, Alcalinidad 80-120ppm, Dureza 200-400ppm), estado equipos, fotos. Cliente ve profesionalismo.'
    ]
  },
  {
    id: 'cambio-arena-filtro',
    slug: 'cambio-arena-filtro',
    oficioId: 'mantenimiento-albercas',
    name: 'Cambio de Arena / Vidrio Filtrante en Filtro de Alberca',
    title: 'Cómo Cotizar Cambio de Arena del Filtro: Arena Sílice vs Vidrio Filtrante, Laterales, Purga',
    description: 'Precios por filtro: vaciado, retiro arena vieja, limpieza laterales, carga nueva, armado, purga, lavado, enjuague, prueba presión.',
    priceRange: '$1,500 - $5,000 MXN',
    estimatedTime: '2 a 4 horas',
    tips: [
      'Filtro 24" (4-5 costales arena 25kg): $1,500-2,200 mano de obra + $1,000-1,500 arena. Filtro 30" (7-9 costales): $2,000-3,000 mano de obra + $1,800-2,500 arena. Vidrio filtrante (dura 2x): material 2.5x precio arena.',
      'SIEMPRE revisa laterales (brazo colector): si están rotos/agrietados, el filtro pasa arena a la alberca. Cambio laterales: $300-800 c/u + mano de obra. Cotízalo en la visita previa o como "Si se detectan dañados\".',
      'Incluye "Lavado y enjuague hasta agua clara + prueba presión 0.5-1.5 bar + programación válvula selectora" en el recibo. Cliente no sabe que el filtro debe lavarse CADA SEMANA. Edúcalo en la nota.'
    ]
  },

  // Cancelería / Ventanas
  {
    id: 'ventanas-pvc-oscilobatiente',
    slug: 'ventanas-pvc-oscilobatiente',
    oficioId: 'canceleria-ventanas',
    name: 'Ventanas PVC Oscilobatientes (Serie Europea) - Precio por m² Instalado',
    title: 'Cuánto Cuesta Ventana PVC Oscilobatiente: Perfil 70mm, DVH, Herraje Roto/Siegenia, Instalada',
    description: 'Precio por m² de vano: perfil PVC clase A, doble vidrio hermético 4/12/4 o 6/12/6, herraje oscilobatiente 15 años, instalación con espuma PU, sellado perimetral, garantía.',
    priceRange: '$3,800 - $6,500 MXN/m²',
    estimatedTime: 'Según m²',
    tips: [
      'PVC gama media (perfil 70mm, 5 cámaras, DVH 4/12/4 Argon, herraje Roto NT/Siegenia TITAN, 2 manijas, microventilación): $3,800-4,800/m². Gama alta (82mm, 7 cámaras, triple vidrio, herraje oculto): $5,500-7,500/m².',
      'EXTRAS que el cliente NO conoce y debes cotizar aparte: Mosquitero enrollable $350-500/hoja. Persiana integrada (veneciana entre vidrios): +$1,200-1,800/m². Vidrio bajo emisivo (Low-E) + Argón: +$300-500/m². Vidrio laminado seguridad: +$400-700/m².',
      'Instalación = 30% del valor. Tu recibo debe decir: "Instalación con espuma PU expansiva baja presión + cinta precomprimida perimetral + sellado silicona neutra interior/exterior + ajuste herrajes + limpieza vidrios + protección marcos". El barato usa solo espuma y silicona barata.'
    ]
  },
  {
    id: 'puertas-entrada-seguridad',
    slug: 'puertas-entrada-seguridad',
    oficioId: 'canceleria-ventanas',
    name: 'Puertas de Entrada de Seguridad (Acero Blindado / Madera Maciza / PVC Reforzado)',
    title: 'Cómo Cotizar Puerta Principal: Nivel Seguridad, Cerradura Multipunto, Marco, Instalación',
    description: 'Precios por hoja: chapa multipunto 3-5 puntos, cilindro anti-bumping/ganzúa, escudo protector, bisagras antipalanca, marco acero/madera, instalación, llaves.',
    priceRange: '$8,000 - $35,000+ MXN',
    estimatedTime: '4 a 8 horas',
    tips: [
      'Puerta acero blindado Nivel 3 (chapa 3 puntos, cilindro seguridad, marco acero): $8,000-14,000. Nivel 4-5 (chapa 5 puntos, cilindro alta seguridad, marco reforzado, bisagras antipalanca): $14,000-25,000. Madera maciza + blindaje interno + chapa multipunto: $18,000-35,000.',
      'Cilindro: DIFERENCIA TU COTIZACIÓN. "Cilindro perfil europeo anti-bumping, anti-ganzúa, anti-taladro, anti-extracción (Clase 6 EN1303) + Escudo magnético/acero manganeso + 5 llaves con tarjeta de propiedad". El barato pone cilindro $150 que abren en 30 seg.',
      'Instalación: marco anclado a estructura (tornillos 8x100mm cada 30cm) + espuma PU + sellado perimetral + ajuste 3D bisagras + prueba llave suave. Si el marco vieje no aguanta, cotiza "Marco nuevo acero reforzado": $2,500-4,000.'
    ]
  },

  // Automatización
  {
    id: 'motor-porton-corredizo',
    slug: 'motor-porton-corredizo',
    oficioId: 'automatizacion-portones',
    name: 'Motor para Portón Corredizo Residencial / Comercial (400kg a 2000kg)',
    title: 'Cuánto Cobrar por Motorizar Portón Corredizo: Motor, Creatas, Fotocélulas, Controles, Batería',
    description: 'Kit completo: motor + cremallera + 2 controles + fotocélulas + destellador + batería respaldo + instalación + programación + garantía.',
    priceRange: '$6,500 - $22,000 MXN',
    estimatedTime: '4 a 8 horas',
    tips: [
      'Residencial 400-600kg (Nice ROAD, BFT DEIMOS, Rossi, Genérico bueno): $6,500-10,000 kit instalado. 800-1000kg: $9,000-14,000. 1500-2000kg (industrial/bodega): $14,000-25,000. Incluye cremallera nylon/acero 1m c/u (4-6m total).',
      'ANTES de cotizar motor: revisa riel, ruedas, guías. Si portón NO corre suave a mano, NO pongas motor: lo quema en 3 meses. Cotiza "Acondicionamiento portón (riel nuevo, ruedas, guías, soldadura, pintura)": $1,500-5,000. Sé honesto: te ganas la confianza.',
      'Batería respaldo 12V 7-18Ah: +$400-800 (obligatorio si corte CFE frecuente). Módulo WiFi (app celular): +$500-1,000. Teclado numérico exterior: +$800-1,500. Lector tarjeta/Tag: +$1,000-2,000.'
    ]
  },
  {
    id: 'persianas-motorizadas',
    slug: 'persianas-motorizadas',
    oficioId: 'automatizacion-portones',
    name: 'Persianas Enrollables Motorizadas (Blackout / Screen / Translúcida / Exterior)',
    title: 'Cómo Cotizar Persiana Motorizada: Motor Tubular, Tubo, Tela, Control, App, Instalación',
    description: 'Precio por m²: motor tubular Ø45/58mm (Somfy/Nice/Genérico), tubo aluminio, tela, soportes, control remoto, instalación, programación límites.',
    priceRange: '$1,800 - $3,500 MXN/m²',
    estimatedTime: '1 a 3 horas por persiana',
    tips: [
      'Motor genérico (Dooya, Genoa, Chino bueno): $1,800-2,400/m². Somfy / Nice (premium, silencioso, 5 años garantía, app Tahoma/Connexoon): $2,500-3,500/m². Ancho >2.5m = motor Ø58mm + tubo reforzado 70mm: +$300-500/m².',
      'Tela: Blackout (100% bloqueo): $350-550/m². Screen (5-10% apertura, vista exterior): $400-600/m². Translúcida: $300-450/m². Exterior (guías laterales, resistencia viento): +$200-400/m².',
      'Upsell fácil: "Módulo WiFi + App (Somfy Tahoma, Nice Yubii, Tuya, Home Assistant): +$800-1,500 por persiana". "Sensor sol/viento (sube/baja automático): +$1,200-2,000". "Integración Alexa/Google Home: incluida en app\".'
    ]
  },

  // Estructuras Metálicas
  {
    id: 'nave-industrial',
    slug: 'nave-industrial',
    oficioId: 'estructuras-metalicas',
    name: 'Nave Industrial / Bodega / Taller Llave en Mano (Estructura + Cubierta + Cerramientos)',
    title: 'Cuánto Cuesta Nave Industrial por m²: Estructura, Lámina, Panel Sándwich, Cimentación, Montaje',
    description: 'Presupuesto por m²: ingeniería, cimentación, estructura primaria/secundaria, cubierta (KR-18 / panel sándwich), cerramientos, canaletas, bajantes, montaje, pintura/galvanizado.',
    priceRange: '$2,800 - $5,500 MXN/m²',
    estimatedTime: '2 a 6 meses',
    tips: [
      'Nave ligera (PTR, lámina KR-18, sin aislamiento): $2,800-3,800/m². Nave estándar (perfiles W/IPR, panel sándwich 40mm PUR/PIR, cerramiento block/panel): $3,800-4,800/m². Nave premium (grúa pórtico, panel 60-80mm, ventilación natural, mezzanine): $4,800-6,500/m².',
      'PARTIDAS OBLIGATORIAS EN RECIBO: 1) Cálculo estructural + planos firma DRO ($15k-50k). 2) Cimentación (zapatas, trabes, losa). 3) Estructura (primaria W/IPR, secundaria PTR/ángulo, tornillería A325). 4) Cubierta (tipo, aislamiento, fijaciones, sellos). 5) Cerramientos. 6) Canaletas/bajantes. 7) Montaje (grúa, andamios, seguridad). 8) Pintura/Galvanizado. 9) LIMPIEZA Y ENTREGA.',
      'PAGOS POR HITOS (no por % vago): 1) 30% firma contrato + planos. 2) 30% llegada acero a obra. 3) 20% estructura montada. 4) 15% cubierta/cerramientos listos. 5) 5% entrega final + acta. NUNCA 50% al inicio ni 50% al final sin hitos medibles.'
    ]
  },
  {
    id: 'mezannine-estructura',
    slug: 'mezannine-estructura',
    oficioId: 'estructuras-metalicas',
    name: 'Mezannine / Entrepiso Metálico (Estructura + Losa + Barandal + Escalera)',
    title: 'Cómo Cotizar Mezannine Industrial: Carga 250-500 kg/m², Luces, Altura Libre, Acceso',
    description: 'Presupuesto por m²: estructura metálica (primaria/secundaria), losa colaborante/entablado, barandal 1.10m, escalera, pintura, conexiones, cálculo estructural.',
    priceRange: '$2,800 - $4,800 MXN/m²',
    estimatedTime: '2 a 6 semanas',
    tips: [
      'Carga 250 kg/m² (oficina/almacén ligero): $2,800-3,500/m². Carga 350-500 kg/m² (maquinaria, tarimas): $3,500-4,800/m². Incluye: vigas primaria W/IPR, secundarias PTR/ángulo, lámina colaborante (Losacero/Deck) + concreto 6-8cm + malla 6x6/10x10 + barandal tubo 2" + escalera marinera/estándar.',
      'ALTURA LIBRE CRÍTICA: cliente pide "máxima altura abajo". Tu cotización: "Altura libre neta bajo viga: X cm". Si pone maquinaria alta, sube vigas = más acero = más $. Define ANTES.',
      'Cálculo estructural + planos DRO: $10,000-25,000 PARTIDA SEPARADA. No lo regales. Incluye "Memoria de cálculo, planos estructurales, detalle conexiones, lista materiales, acta entrega". Municipio lo pide para licencia.'
    ]
  },

  // Bombeo / Presurización
  {
    id: 'hidroneumatico-vfd',
    slug: 'hidroneumatico-vfd',
    oficioId: 'bombeo-presurizacion',
    name: 'Sistema de Presurización Constante VFD (Variador de Frecuencia) vs Hidroneumático Tradicional',
    title: 'Cuánto Cobrar por Presurización VFD: Bomba + Variador + Sensor + Tanque Pequeño vs Hidroneumático',
    description: 'Comparativa de precios y beneficios: VFD (presión constante, ahorro energía, silencio, espacio) vs Hidroneumático (tanque grande, presostato, ciclos bomba).',
    priceRange: '$14,000 - $35,000 MXN (VFD) vs $7,500 - $15,000 MXN (Hidroneumático)',
    estimatedTime: '4 a 8 horas',
    tips: [
      'VFD 1-2 bombas 0.5-2HP (casa 2-4 baños): $14,000-22,000. VFD 2-3 bombas 2-5HP (edificio/hotel): $25,000-50,000. Incluye: bomba(s) + variador(es) + transductor presión + tanque expansión 24-50L + panel control + instalación + programación curvas.',
      'VENTAJAS VFD para vender en cotización: "Presión CONSTANTE en todas las regaderas simultáneas (no baja al abrir 2da). Ahorro 30-50% energía vs presostato. Silencio total (bomba modula RPM). Tanque 80% menor. Arranque suave = vida bomba 3x. Protección: seco, sobrecarga, fase, fuga\".',
      'Hidroneumático tradicional: tanque 100-500L + presostato + bomba. Más barato inicial pero: presión fluctúa (corta/prende), ruido, espacio, energía, desgaste. Cotiza AMBOS y deja elegir. El informado elige VFD.'
    ]
  },
  {
    id: 'pozo-profundo-equipamiento',
    slug: 'pozo-profundo-equipamiento',
    oficioId: 'bombeo-presurizacion',
    name: 'Equipamiento de Pozo Profundo (Bomba Sumergible + Columna + Panel + Arrancador/VFD)',
    title: 'Cómo Cotizar Equipamiento de Pozo: Bomba, Cable, Tubería, Head, Panel, Variador, Prueba Caudal',
    description: 'Presupuesto por metros de profundidad y caudal: bomba sumergible 4"/6", cable sumergible, tubería columna, head descarga, panel protección, arrancador/VFD, prueba escalón.',
    priceRange: '$35,000 - $120,000+ MXN',
    estimatedTime: '1 a 3 días',
    tips: [
      'Bomba 4" 1-3HP (caudal 2-8 L/s, prof 30-100m): $35,000-60,000. Bomba 6" 5-15HP (caudal 10-30 L/s, prof 50-200m): $60,000-120,000. Incluye: bomba Franklin/Grundfos/Pedrollo + cable 3x/4x mm² + tubería columna PVC/acero + head + panel (protección térmica, sequía, fases) + VFD/arrancador suave + PRUEBA ESCALÓN (caudal vs nivel dinámico).',
      'PRUEBA ESCALÓN OBLIGATORIA: 3-4 puntos caudal vs nivel + recuperación. Entrega gráfica. Sin prueba, NO sabes si la bomba sirve. Cotízala: $3,000-5,000. Cliente profesional (agrícola/industrial) la exige. Doméstico: edúcalo.',
      'Caseta + losa + descarga + conexión red + medidor: $15,000-30,000 PARTIDA SEPARADA. No la incluyas en "equipamiento": son obras civiles distintas.'
    ]
  },

  // Aislante Térmico / Acústico
  {
    id: 'poliuretano-proyectado-techo',
    slug: 'poliuretano-proyectado-techo',
    oficioId: 'aislante-termico-acustico',
    name: 'Poliuretano Proyectado en Techos / Azoteas / Bajos Cubierta (Alta / Baja Densidad)',
    title: 'Cuánto Cobrar por Pulgada de Poliuretano Proyectado: Densidad 40 vs 60 kg/m³, Techo Frío',
    description: 'Precio por m² por pulgada (25mm): preparación, proyección, corte excesos, limpieza, protección UV (si expuesto), certificado densidad.',
    priceRange: '$380 - $750 MXN/m² por pulgada',
    estimatedTime: 'Según m²',
    tips: [
      'Densidad 40 kg/m³ (techos, azoteas, no transitable): $380-550/m²/pulgada. 2 pulgadas (50mm) = $760-1,100/m². Densidad 60 kg/m³ (muros, fachadas, transitable ligero): $550-750/m²/pulgada. MÍNIMO obra 30-50m² o cargo movilización $8k-12k.',
      'TECHO FRÍO: poliuretano + recubrimiento elastomérico blanco reflectivo (SunShield, nacional bueno): +$180-280/m². Reduce temp interior 5-8°C. Ahorro A/C 30-40%. Vende: "Techo fresco + impermeabilizado + aislado EN UNA SOLA APLICACIÓN\".',
      'Protección UV OBLIGATORIA si expuesto al sol: poliuretano se degrada en 6-12 meses sin recubrimiento. Incluye "Recubrimiento acrílico/elastomérico blanco 2 manos + malla en encuentros" en la cotización. Si no, el cliente te reclama a los 8 meses.'
    ]
  },
  {
    id: 'sate-fachada-ventilada',
    slug: 'sate-fachada-ventilada',
    oficioId: 'aislante-termico-acustico',
    name: 'Sistema SATE (Aislamiento Exterior) vs Fachada Ventilada: Comparativa y Precios',
    title: 'Cómo Cotizar SATE vs Fachada Ventilada: EPS/XPS/Lana, Acabado, Subestructura, Revestimiento',
    description: 'Comparativa precios m²: SATE (pegado+mecánico, malla, acabado) vs Fachada Ventilada (subestructura, aislamiento, cámara aire, revestimiento cerámico/HPL/fibrocemento).',
    priceRange: '$1,200 - $3,500 MXN/m²',
    estimatedTime: '2 a 6 semanas',
    tips: [
      'SATE (EPS grafito 80-100mm + mortero pegante + malla + acabado acrílico/siliconado): $1,200-1,800/m². Lana mineral 100mm (transpirable, ignífugo A1): $1,500-2,200/m². Ventaja: no quita m² interior, elimina puentes térmicos totales, protege estructura.',
      'Fachada Ventilada (subestructura aluminio/acero inox + lana mineral/EPS 80-120mm + cámara 3-5cm + revestimiento): $1,800-3,500/m². Revestimiento: fibrocemento $300-500/m², HPL $600-1,000/m², cerámico $400-700/m², piedra natural $800-1,500/m². Ventaja: estética premium, durabilidad 50+ años, reemplazo fácil paneles.',
      'COTIZA AMBOS en el mismo recibo (pestañas/hojas separadas). Cliente ve opciones. SATE = mejor costo/beneficio aislamiento. Ventilada = mejor estética/valor inmueble. Tú ganas de cualquier forma.'
    ]
  },

  // Mantenimiento Industrial
  {
    id: 'soldadura-tig-inox',
    slug: 'soldadura-tig-inox',
    oficioId: 'mantenimiento-industrial',
    name: 'Soldadura TIG Acero Inoxidable / Aluminio (Alimentos, Farmacéutica, Química, Naval)',
    title: 'Cuánto Cobrar por Pulgada-Día Soldadura TIG Inox 304/316 / Aluminio 6061/5083',
    description: 'Precios por pulgada-diámetro: preparación juntas, gas argón/He, varilla ER308L/316L/4043, soldador certificado, inspección visual/PT, documentación WPS/PQR.',
    priceRange: '$35 - $85 MXN/pulg-día',
    estimatedTime: 'Según pulgadas',
    tips: [
      'TIG Inox 304/316 (1G-2G, sch 10-40): $35-55/pulg-día. TIG Aluminio (más difícil, más gas, más tiempo): $50-75/pulg-día. TIG Inox sanitario (pulido interior, electro-pulido): $55-85/pulg-día. Incluye: gas argón 99.996%, varilla certificado, purgado raíz (interno), limpieza cepillo inox dedicado.',
      'WPS/PQR: si el cliente no tiene, cotiza "Desarrollo WPS + Calificación PQR (tensión, doblado, macro/micro)": $8,000-15,000 por procedimiento. SIN WPS, no sueldes en industria regulada (ASME, API, AWS). Tu responsabilidad.',
      'NDT (Ensayos No Destructivos): Visual (VT) incluido. Penetrantes (PT): +$8-15/pulg. Ultrasónico (UT): +$15-25/pulg. Radiografía (RT): +$25-40/pulg + seguridad radiológica. Cotiza NDT APARTE. No lo regales: es especialista certificado Nivel 2/3.'
    ]
  },
  {
    id: 'parada-planta-mantenimiento',
    slug: 'parada-planta-mantenimiento',
    oficioId: 'mantenimiento-industrial',
    name: 'Parada de Planta Programada (Turnaround / Shutdown): Planificación, Ejecución, Puesta en Marcha',
    title: 'Cómo Cotizar Parada de Planta: Alcance, Horas Hombre, Materiales, Grúas, Andamios, NDT, Seguridad, Permisos',
    description: 'Presupuesto llave en mano por paquete: ingeniería planificación, mano de obra (turnos), materiales/consumibles, equipos/herramentales, NDT, gestión residuos/seguridad/permisos, puesta en marcha.',
    priceRange: '$150,000 - $5,000,000+ MXN',
    estimatedTime: '3 días a 4 semanas',
    tips: [
      'NUNCA cotices por "hora hombre" sola en parada. Cotiza PAQUETE CERRADO con ALCANCE DEFINIDO (lista equipos, isotermos, WPS, NDT, grúas, andamios, permisos PTAR/altura/espacio confinado). Partidas: 1) Planificación ($20k-100k). 2) Mano de obra (turnos x hombres x tarifa). 3) Materiales (suministro propio + 15% o reembolso + 15%). 4) Equipos/herramentales. 5) NDT. 6) Seguridad/permisos/residuos. 7) Puesta en marcha + pruebas.',
      'PAGOS: 30% firma + planificación. 40% movilización inicio parada. 20% mitad parada. 10% entrega acta final + pruebas. PENALIZACIONES por días extra (fuerza mayor excluida): $50k-200k/día. BONO por terminación anticipada: 5% valor contrato. Alinea incentivos.',
      'SEGURO: exige "Seguro RC general $10M+ + Seguro equipo contratado + Seguro vida personal". Cliente grande (Pemex, CFE, automotriz, acero) LO EXIGE. Si no lo tienes, no entras. Cotízalo en tus costos fijos.'
    ]
  },
// ===== NUEVOS OFICIOS - TAREAS ESPECÍFICAS (LOTE 2) =====
  
  // Domótica / Smart Home
  {
    id: 'domotica-iluminacion',
    slug: 'domotica-iluminacion',
    oficioId: 'domotica-smart-home',
    name: 'Automatización de Iluminación Inteligente (Dimmer, RGBW, Escenas, Horarios)',
    title: 'Cuánto Cobrar por Iluminación Smart Home: Módulos, Interruptores, Tiras LED, Escenas',
    description: 'Precios por punto de luz inteligente: módulo relé/dimmer Zigbee/Matter, interruptor pulsador, tira LED RGBW + controlador, programación escenas/horarios, integración Alexa/Google/HomeKit.',
    priceRange: '$400 - $1,200 MXN por punto',
    estimatedTime: '30-60 min por punto',
    tips: [
      'Módulo relé/dimmer Zigbee/Matter + interruptor pulsador básico + cableado + configuración hub + 1 escena: $400-$600/punto. Interruptor táctil diseño (Gira/Jung/Berker): +$300-$600. Tira LED RGBW 5m + controlador DMX/0-10V/PWM + fuente + perfilería + configuración: $1,500-$3,000/ambiente.',
      'Escenas típicas incluidas: "Buenos días" (subida gradual), "Cine" (baja + tira LED bias lighting), "Fuera de casa" (apaga todo + simula presencia), "Noche" (luces pasillo/baño 10%). Cobrar "Programación escenas personalizadas": $500-$1,000 por 5-10 escenas.',
      'Integración voz (Alexa/Google/HomeKit): incluida en configuración hub. Entrega: "Manual usuario + credenciales hub + respaldo configuración (YAML/JSON)". Upsell: "Sensor presencia + luz diurna = encendido/apagado automático": +$300-$500/punto.'
    ]
  },
  {
    id: 'domotica-climatizacion',
    slug: 'domotica-climatizacion',
    oficioId: 'domotica-smart-home',
    name: 'Climatización Inteligente (Termostatos, Válvulas, Suelo Radiante, VRV/VRF)',
    title: 'Cómo Cotizar Termostato Inteligente + Válvulas Termostáticas + Integración Mini Split/VRF',
    description: 'Presupuesto por zona: termostato cableado/inalámbrico, válvulas termostáticas radiadores, gateway Mini Split/VRF, sensores temperatura/humedad/CO2, horarios, geofencing, informes consumo.',
    priceRange: '$1,200 - $4,500 MXN por zona',
    estimatedTime: '1-3 horas por zona',
    tips: [
      'Termostato inteligente (Netatmo, Tado, Shelly, Genérico Zigbee/Matter) + instalación + configuración horarios + geofencing: $1,200-$2,000/zona. Válvulas termostáticas radiador (Sonoff, Shelly, Danfoss, Zigbee/Matter): $600-$1,000/cada (incluye adaptador rosca + instalación + calibración).',
      'Gateway Mini Split/VRF (Daikin, Mitsubishi, LG, Samsung, Gree, Midea) + integración hub + control app nativa + voz: $1,500-$3,000/equipo. Suelo radiante (actuadores electrotérmicos 230V/24V en colector + termostato ambiente): $800-$1,500/zona + $400/actuador.',
      'Sensores T/H/CO2 (Aqara, Shelly, Netatmo, Zigbee/Matter): $300-$600 c/u. Informes consumo energético mensual + alertas anomalía: +$300-$500/mes (suscripción opcional). Entrega: "App configurada + horarios + geocerca + exportación CSV consumo".'
    ]
  },
  {
    id: 'domotica-seguridad-acceso',
    slug: 'domotica-seguridad-acceso',
    oficioId: 'domotica-smart-home',
    name: 'Seguridad y Acceso Inteligente (Cámaras, Sensores, Cerraduras, Timbres, Alarmas)',
    title: 'Cuánto Cobrar por Seguridad Smart Home: Cámaras, Sensores Puerta/Ventana, Cerraduras, Timbre Video, Sirena',
    description: 'Presupuesto por dispositivo: cámara IP PoE/WiFi/batería, sensor apertura/movimiento/ruptura cristal, cerradura electrónica/código/huella/app, timbre video, sirena interior/exterior, panel alarma, monitoreo 24/7 opcional.',
    priceRange: '$800 - $8,000 MXN por dispositivo',
    estimatedTime: '1-4 horas por dispositivo',
    tips: [
      'Cámara IP PoE (Hikvision, Dahua, Uniview, 2MP/4MP/8MP) + cableado UTP + NVR/grabación + configuración app: $1,500-$3,500/cámara. Cámara WiFi/batería (Ring, Arlo, Eufy, Reolink, Xiaomi): $800-$2,500/cámara (sin cableado, pero batería/carga).',
      'Sensor apertura puerta/ventana (Zigbee/Matter, Aqara, Sonoff, Shelly): $300-$500 c/u. Sensor movimiento/PIR: $350-$600. Sensor rotura cristal (acústico/vibración): $400-$700. Sirena interior/exterior (Zigbee/Matter, 100dB+): $500-$1,200.',
      'Cerradura electrónica (Yale, August, Nuki, Ultraloq, Aqara, Samsung, código/huella/app/tarjeta): $3,000-$8,000 instalada. Timbre video (Ring, Arlo, Eufy, Aqara, Hikvision, PoE/WiFi): $1,500-$4,000. Panel alarma + teclado + comunicador GSM/IP: $2,500-$5,000. Monitoreo 24/7 (central receptora): $300-$800/mes.'
    ]
  },
  {
    id: 'domotica-audio-multiroom',
    slug: 'domotica-audio-multiroom',
    oficioId: 'domotica-smart-home',
    name: 'Audio Multiroom y Cine en Casa (Altavoces, Amplificadores, Proyectores, Pantallas)',
    title: 'Cómo Cotizar Audio Multiroom: Sonos, WiiM, Arylic, DLNA, Amplificadores, Altavoces Empotrados, Cine',
    description: 'Presupuesto por zona de audio: altavoz WiFi/PoE, amplificador streaming, preamplificador, subwoofer, altavoces empotrados techo/pared, proyector + pantalla, receptor AV, calibración Dirac/ARC/Audyssey.',
    priceRange: '$3,000 - $50,000+ MXN por zona/sistema',
    estimatedTime: '2 horas a 2 días',
    tips: [
      'Altavoz WiFi multiroom (Sonos Era 100/300, WiiM Pro/Pro Plus, Arylic S50/BP50, Denon Home): $3,000-$8,000/zona (altavoz + configuración agrupación + ecualización). Amplificador streaming (WiiM Amp, Arylic A50+, Sonos Amp) + altavoces pasivos empotrados (Polk, Yamaha, Monitor Audio, KEF, nacional): $6,000-$15,000/zona.',
      'Cine en casa 5.1/7.1/Atmos: receptor AV (Denon, Marantz, Yamaha, Onkyo, Sony) + altavoces (frontal, central, surround, height/Atmos) + subwoofer + calibración Dirac Live/ARC/Audyssey: $25,000-$100,000+. Proyector (Epson, Sony, JVC, BenQ, 4K/HDR/laser) + pantalla motorizada/tensionada (Elite, Screen Innovations, nacional): $15,000-$60,000.',
      'Cableado: altavoz 16/14 AWG (empotrado/conduit), HDMI 2.1 fibra óptica 10-30m, red Cat6a PoE++ a cada zona. Cotiza "Infraestructura cableada oculta" PARTIDA SEPARADA: $150-$300/ml. Entrega: "App única control todo + escenas cine/música/fiesta + calibración certificada".'
    ]
  },
  
  // Mantenimiento Fachadas / Limpieza Altura
  {
    id: 'hidrolavado-fachada',
    slug: 'hidrolavado-fachada',
    oficioId: 'mantenimiento-fachadas-limpieza-altura',
    name: 'Hidrolavado de Fachadas (Agua Fría/Caliente, Químicos, Protección, Recogida Agua)',
    title: 'Cuánto Cobrar por Hidrolavado de Fachada m²: Presión, Químicos, Andamio, Trabajo Vertical',
    description: 'Precios por m² según suciedad, material fachada (concreto, ladrillo, piedra, panel, vidrio), acceso (andamio, plataforma, cuerdas), químicos (desengrasante, antihongos, hidrofugante), normativa agua residual.',
    priceRange: '$35 - $80 MXN/m² + andamio/plataforma',
    estimatedTime: 'Según m² y acceso',
    tips: [
      'Hidrolavado 3000+ PSI agua fría: $35-$50/m². Agua caliente (desengrasa): $50-$70/m². Químico especializado (anticorrosivo, antihongos/algas, hidrofugante): +$15-$30/m². Protección ventanas/marcos/vegetación + recogida agua sucia (bombeo a cisterna/camión): $5-$10/m².',
      'Andamio certificado (europeo, montaje/desmontaje): $3,000-$8,000/semana. Plataforma articulada/tijera (12-40m): $2,500-$5,000/día + operador certificado. Trabajo vertical IRATA (cuerdas, sin andamio): $1,500-$3,000/día/hombre (Nivel 1/2/3 + supervisor + rescate).',
      'Reporte entrega: fotos ANTES/DESPUES por sector + ficha técnica químicos usados + certificado disposición agua residual + acta recepción cliente. Mantenimiento preventivo anual: 15% descuento sobre precio base. Contrato 3 años: 25% descuento + prioridad urgencias.'
    ]
  },
  {
    id: 'limpieza-canaletas-bajantes',
    slug: 'limpieza-canaletas-bajantes',
    oficioId: 'mantenimiento-fachadas-limpieza-altura',
    name: 'Limpieza de Canaletas, Bajantes y Desagües Pluviales en Edificios',
    title: 'Cómo Cotizar Limpieza de Canaletas: Metro Lineal, Altura, Retiro Escombro, Prueba Flujo',
    description: 'Precios por ml de canaleta/bajante: retiro sedimentos/hojas/nidos, hidrolavado interior, prueba flujo agua, reinstalación rejillas, protección peatones/vehículos, reporte fotográfico, permiso vial si aplica.',
    priceRange: '$40 - $70 MXN/ml canaleta + $25 - $40 MXN/ml bajante',
    estimatedTime: 'Según ml y altura',
    tips: [
      'Canaleta: $40-$70/ml (retiro manual + hidrolavado 1500 PSI + prueba flujo + rejilla). Bajante: $25-$40/ml (sonda/hidrolavado desde azotea + prueba). Edificio 10 niveles (≈200ml canaleta + 80ml bajantes): $10,000-$18,000 total.',
      'Equipo 2 hombres + plataforma/andamio: $4,000-$7,000/día. Trabajo vertical cuerdas (IRATA): $1,500-$3,000/día/hombre. Protección vial/peatonal (conos, cinta, señalamiento, banderín): $1,500-$3,000/día. Permiso vial municipal: $2,000-$5,000/trámite + 3-5 días.',
      'Upsell: "Instalación rejilla antihojas/protector canaleta": $150-$300/ml. "Inspección cámara bajante + reporte video": $2,000-$4,000. "Mantenimiento semestral contrato": 20% descuento + prioridad lluvias.'
    ]
  },
  {
    id: 'inspeccion-dron-fachada',
    slug: 'inspeccion-dron-fachada',
    oficioId: 'mantenimiento-fachadas-limpieza-altura',
    name: 'Inspección de Fachadas y Cubiertas con Dron (Fotogrametría, Termografía, Modelo 3D)',
    title: 'Cómo Cotizar Inspección con Dron: Vuelo, Fotos 4K, Termografía, Nube Puntos, Reporte Daños',
    description: 'Precios por fachada/edificio: planificación vuelo (permiso, seguridad, clima), captura nadir/oblicua 4K, termografía (fugas agua, puentes térmicos, humedad), procesamiento nube puntos/modelo 3D, reporte anotado (fisuras, desprendimientos, humedad, vegetación, anclajes).',
    priceRange: '$3,000 - $8,000 MXN por fachada/edificio',
    estimatedTime: '2-6 horas (vuelo + procesamiento)',
    tips: [
      'Vuelo estándar (fotos 4K nadir/oblicua + video 4K + reporte PDF anotado): $3,000-$5,000/fachada. Termografía (Zenmuse H20T / Mavic 3T / Matrice 30T): +$1,500-$3,000 (detecta: humedad oculta, puentes térmicos, fugas agua, delaminación revestimientos).',
      'Fotogrametría + modelo 3D (Pix4D, DroneDeploy, Agisoft) + nube puntos + ortomosaico + mediciones precisas (área, longitud, volumen): +$2,000-$4,000. Entrega: enlace nube (visor 3D) + PDF reporte + archivos fuente (LAS/LAZ, OBJ, GeoTIFF).',
      'DESCUENTO: "Inspección dron se DESCUENTA si contrata limpieza/reparación". Seguro responsabilidad civil dron: $5,000-$10,000/año (cotízalo en tus fijos). Permiso AFAC/DGAC (vuelo zona urbana/edificio >25kg o nocturno): $3,000-$8,000/trámite + 10-15 días.'
    ]
  },
  
  // Reparación Estructural / Inyección
  {
    id: 'inyeccion-epoxi-fisuras',
    slug: 'inyeccion-epoxi-fisuras',
    oficioId: 'reparacion-estructural-inyeccion',
    name: 'Inyección de Resina Epóxica en Fisuras Estructurales (Vigas, Losas, Muros, Cimentación)',
    title: 'Cuánto Cobrar por Inyección Epóxica: Presión, Packers, Limpieza, Control Calidad, Garantía',
    description: 'Presupuesto por ml de fisura: diagnóstico (origen, activo/estabilizado), limpieza, sellado superficial, packers, inyección presión controlada, corte/lijado, prueba tracción/ultrasonido, reporte, garantía.',
    priceRange: '$800 - $1,500 MXN/ml (epoxi) / $1,200 - $2,200 MXN/ml (poliuretano hidrófobo)',
    estimatedTime: 'Según ml y acceso',
    tips: [
      'Epóxi baja viscosidad (fisura 0.1-2mm, SECA/estabilizada): $800-$1,500/ml. Incluye: limpieza aire/agua 150bar, sellado superficial epóxico tixotrópico, packers acero 20-30cm, inyección 5-30 bar presión controlada (bomba dosificadora), corte packers, lijado, prueba ultrasonido/tracción (muestreo 10%).',
      'Poliuretano hidrófobo (fisura ACTIVA con agua, goteo/chorro): $1,200-$2,200/ml. Reacciona con agua → expande 15-25x → sella dinámicamente. Inyección "parada-espere-inyecta" para controlar reacción. Mismo proceso packers/presión/pruebas.',
      'Mínimo obra: 5-10ml o cargo movilización $8,000-$12,000. Garantía 5 años (fisura no reactiva) / 2 años (fisura activa sellada PU). Diseño inyección DRO + memoria cálculo: $10,000-$20,000 PARTIDA SEPARADA. Seguro RC profesional: $15,000-$30,000/año.'
    ]
  },
  {
    id: 'refuerzo-cfrp-vigas-losas',
    slug: 'refuerzo-cfrp-vigas-losas',
    oficioId: 'reparacion-estructural-inyeccion',
    name: 'Refuerzo Estructural con Láminas/Tejido CFRP (Fibra de Carbono) en Vigas, Losas, Columnas, Muros',
    title: 'Cómo Cotizar Refuerzo CFRP: Diseño, Preparación, Impregnación, Lámina/Tejido, Protección UV, Ensayos',
    description: 'Presupuesto por m²: diseño refuerzo (cálculo FEM, plano instalación), preparación sustrato (lijado, imprimación), adhesivo estructural, lámina 1.2/1.4mm o tejido unidireccional/bidireccional, rodado, protección UV, ensayos pull-off, certificación.',
    priceRange: '$2,500 - $4,000 MXN/m² instalado',
    estimatedTime: 'Según m² y complejidad',
    tips: [
      'CFRP laminado 1.2mm (tracción 2800MPa, módulo 165GPa): $2,500-$3,500/m². Tejido carbono unidireccional 300g/m² + resina impregnación sitio: $3,000-$4,000/m² (más adaptable a geometrías complejas). Incluye: preparación sustrato (lijado orbital, aspirado, imprimación epóxica 2 manos), adhesivo epóxico estructural, colocación lámina/tejido, rodado elimina burbujas, cura 24-48h, protección UV (pintura epóxica/poliuretano 2 manos).',
      'Refuerzo flexión viga/losas: 1-2 láminas cara inferior (longitudinal). Refuerzo cortante: láminas en U/estribos cada 20-30cm. Refuerzo columna (confinamiento): tejido circunferencial 2-3 vueltas. Refuerzo muro (cortante/flexión): cuadrícula láminas/tejido.',
      'ENSAYOS: Pull-off (tracción adhesión) 3-5 puntos/100m²: $500-$800/punto. Ultrasonido espesor adhesivo: $300-$500/punto. DISEÑO ESTRUCTURAL REFUERZO (obligatorio): memoria cálculo FEM + planos instalación + detalle anclajes + hoja datos materiales + certificado fabricante: $15,000-$35,000 PARTIDA SEPARADA. No instales SIN diseño DRO firmado.'
    ]
  },
  {
    id: 'micropilotes-cimentacion',
    slug: 'micropilotes-cimentacion',
    oficioId: 'reparacion-estructural-inyeccion',
    name: 'Micropilotes de Cimentación (Perforación, Inyección, Prueba Carga, Cabeza)',
    title: 'Cuánto Cuesta Micropilote: Diámetro, Longitud, Carga, Inyección Primaria/Secundaria, Prueba',
    description: 'Presupuesto por ml: perforación rotopercusión/rotaria, tubería revestimiento/barra, inyección primaria lechada cementicia, inyección secundaria lechada fluida presión, cabeza micropilote, prueba carga 1.2x, reporte, registro fotográfico.',
    priceRange: '$3,500 - $6,500 MXN/ml + movilización $15,000 - $30,000',
    estimatedTime: '1-3 días por micropilote',
    tips: [
      'Micropilote Ø100-200mm, L=6-20m, carga 100-500kN: perforación rotopercusión (martillo fondo) o rotaria (corona diamante) según geología. Tubería revestimiento (casing) Ø73-168mm o barra roscada Ø25-50mm (hilo continuo). Inyección primaria: lechada cementicia agua:cemento 0.5-0.8, presión 5-15 bar. Inyección secundaria (lechada fluida, cemento+sílice+aditivos, presión 10-20 bar) = bulbo de anclaje.',
      'Cabeza micropilote: placa distribución + tuerca + arandela + nivelación. Prueba carga (1.2x carga trabajo, ciclos carga/descarga, lectura asentamiento dial/extensómetro): $5,000-$10,000/micropilote. Registros: diagrama perforación, parámetros inyección, curva prueba carga, as-built.',
      'Estudio geotécnico previo (obligatorio): $15,000-$40,000. Diseño micropilotes DRO (cálculo geotécnico/estructural, planos, memoria): $20,000-$50,000. Movilización equipo perforación (rotopercusión/rotaria, bomba inyección, silo cemento, generador): $15,000-$30,000. Seguro RC + todo riesgo obra: $20,000-$50,000/obra.'
          ]
        },
        // ===== NUEVAS TAREAS PARA OFICIOS LOTE 3 (2025) =====
  // Instaladores de Yeso / Drywall / Tablaroca Comercial
  {
    id: 'tablaroca-muros-divisorios',
    slug: 'tablaroca-muros-divisorios',
    oficioId: 'yeso-drywall-comercial',
    name: 'Muros Divisorios de Tablaroca (Una/Doble Cara, Aislamiento Acústico, Acabado Nivel 4/5)',
    title: 'Cuánto Cobrar por Muro de Tablaroca m²: Estructura, Aislamiento, Cintado, Acabado',
    description: 'Presupuesto por m²: perfilería (montante/canal calibre 20-25), tablaroca 1/2"-5/8" (tipo X, RH), lana mineral 50-75mm, cinta papel/fibra, pasta 3 manos, lijado nivel 4/5. Incluye cajas eléctricas, sellado perimetral, zócalo.',
    priceRange: '$250 - $700 MXN/m² instalado según especificación completa',
    estimatedTime: '15-25 m²/día por cuadrilla 2 personas',
    tips: [
      'Muro simple (1 tablaroca c/lado, sin aislamiento): $250-$350/m². Muro acústico (doble tablaroca c/lado + lana mineral 50mm + sellador acústico): $500-$700/m². STC 35 vs 50+. Plafón registrable: +$80-$150/m² por perfilería adicional y acceso.',
      'Acabado nivel 4 (estándar pintura): 3 manos pasta + lijado. Nivel 5 (pintura fina/luz rasante): mano extra pasta dilatada + lijado extrafino + imprimación selladora: +$40-$80/m². Cajas eléctricas: usar cajas tablaroca + masilla acústica + cinta. Zócalo flotante (perfil U + neopreno): +$50-$100/ml.',
      'Mínimo obra: 30 m² o $8,000. Retiro escombro: incluido. Entrega: "Muro listo para pintar + croquis instalaciones + certificado STC si aplica". Upsell: "Sellado acústico perimetral certificado + prueba humo": +$2,000-$4,000/muro.'
    ]
  },
  {
    id: 'plafones-tablaroca-registrables',
    slug: 'plafones-tablaroca-registrables',
    oficioId: 'yeso-drywall-comercial',
    name: 'Plafones de Tablaroca y Registrables (Acústicos, Vinílicos, Acceso Mantenimiento)',
    title: 'Cómo Cotizar Plafón Tablaroca: Perfilería, Placas, Aislamiento, Iluminación, HVAC, Acceso Registro',
    description: 'Presupuesto por m²: canal perimetral, montantes c/40-60cm, tablaroca/placas acústicas/vinílicas, lana mineral, luminarias empotradas, difusores HVAC, tramas registro, molduras perimetrales.',
    priceRange: '$300 - $650 MXN/m² según sistema y acabado',
    estimatedTime: '20-30 m²/día por cuadrilla 2 personas',
    tips: [
      'Plafón tablaroca fijo (tablaroca 1/2" + perfilería + lana mineral 50mm + acabado nivel 4): $300-$450/m². Plafón registrable placas acústicas 60x60 (mineral/fibra vidrio/vinílico + perfilería T24/T15 + tramas): $400-$650/m². Incluye: cortes luminarias/difusores, moldura perimetral, pintura/placa final.',
      'Acceso registro: trama cada 1.2-1.5m (60x60cm) o tramas individuales bajo equipos HVAC/luminarias. Tramoteca: perfilería reforzada + bisagras + pestillo. Carga viva: 15-25 kg/m² estándar, 50+ kg/m² si pasan técnicos. Coordinar con electricista/HVAC ANTES de cerrar: "Plano coordinación instalaciones + corte registro acordado".',
      'Retiro plafón existente: +$50-$100/m² (escombro + protección). Mínimo: 40 m² o $10,000. Entrega: "Plafón instalado + luminarias/difusores conectados (cableado por electricista) + tramas operativas + limpieza". Garantía: 1 año mano de obra, 10 años placas fabricante.'
    ]
  },
  // Especialistas en Pisos Epóxicos / Poliuretano / Concreto Pulido
  {
    id: 'piso-epoxico-nave-industrial',
    slug: 'piso-epoxico-nave-industrial',
    oficioId: 'pisos-epoxicos-industriales',
    name: 'Piso Epóxico Autonivelante Nave Industrial / Almacén / Fábrica',
    title: 'Cuánto Cobrar por Piso Epóxico Industrial m²: Preparación, Imprimación, Autonivelante, Cuarzo, Sellado',
    description: 'Presupuesto por m²: diamantado/shotblasting, reparación grietas/juntas, imprimación epóxica, autonivelante 3-5mm, carga cuarzo antideslizante, sellado top coat, juntas de dilatación, señalización vial.',
    priceRange: '$650 - $1,200 MXN/m² sistema completo 3-5mm',
    estimatedTime: '500-1,000 m²/día equipo 4 personas (según preparación)',
    tips: [
      'Preparación (CLAVE): Diamantado/shotblasting perfil CSP 3-5 + aspirado industrial + prueba humedad (<4% CM / <75% HR): $80-$150/m². Si humedad >4%: barrera epóxica 2 manos + arena sílice: +$120-$180/m². Grietas: inyección epóxica baja viscosidad + puente fibra vidrio: $300-$500/ml.',
      'Sistema: Imprimación 150-200μm + Autonivelante 3mm (tráfico medio) = $550-$750/m². 5mm (tráfico pesado/montacargas) = $750-$1,100/m². Cuarzo antideslizante (0.5-1kg/m²) + sellado poliuretano alifático UV: +$100-$150/m². Juntas dilatación: sierra + sellador PU: $150-$250/ml. Señalización vial (líneas, flechas, zonas): $80-$150/ml.',
      'Mínimo nave: 500 m² o $250,000. Tiempo cura: tráfico peatonal 24h, montacargas 72h. Garantía escrita 3-5 años (desprendimiento, amarillamiento, desgaste prematuro). Entrega: "Informe preparación (fotos CSP, humedad) + hoja datos sistema + certificado aplicación + plano juntas/señalización".'
    ]
  },
  {
    id: 'piso-poliuretano-alimentos-farmaceutica',
    slug: 'piso-poliuretano-alimentos-farmaceutica',
    oficioId: 'pisos-epoxicos-industriales',
    name: 'Piso Poliuretano Alifático / Uretano Cementicio Industria Alimentos/Farmacéutica',
    title: 'Cómo Cotizar Piso Uretano Cementicio: Choque Térmico, Químicos, Pendientes, Desagües, Coving',
    description: 'Presupuesto por m²: preparación extrema, uretano cementicio 6-9mm (tolerancia -40°C a +120°C), coving sanitario (radio 30-50mm), desagües puntuales/lineales, pendientes 1-2%, sellado juntas, certificado HACCP/ISO 22000.',
    priceRange: '$1,200 - $2,500 MXN/m² sistema 6-9mm',
    estimatedTime: '200-400 m²/día (más lento por espesor y detalle sanitario)',
    tips: [
      'Uretano cementicio (MasterTop, Flowcrete, Sika, nacional): 6mm = $1,200-$1,600/m², 9mm = $1,600-$2,200/m², 12mm (cámaras choque -40°C) = $2,000-$2,500/m². Poliuretano alifático (solo UV, no térmico): $800-$1,400/m² 3-4mm. DIFERENCIA: Uretano cementicio = choque térmico + químicos agresivos + impacto. Poliuretano = UV + elasticidad + decorativo.',
      'Detalles sanitarios OBLIGATORIOS: Coving (rodapié curvo radio 30-50mm) muro-piso: $300-$500/ml. Desagüe puntual (sifón higiénico acero inox 304/316): $3,000-$6,000 c/u. Desagüe lineal (ranura 100-150mm): $2,500-$4,000/ml. Pendientes 1-2% hacia desagües: +$100-$200/m² en mortero previo. Juntas constructivas: sellador PU + perfil acero inox: $200-$350/ml.',
      'Validación HACCP/ISO 22000: Rugosidad <0.5μm (profilómetro), pendientes correctas (nivel láser), sellado 100% juntas, coving radio continuo, desagües operativos. Certificado aplicador + hoja datos + curva resistencia química + protocolo limpieza: $15,000-$30,000 partida separada. Mínimo: 150 m² o $250,000.'
    ]
  },
  // Instaladores de Cercas Perimetrales / Malla Ciclónica / Panel / Eléctricas
  {
    id: 'malla-ciclonica-residencial-industrial',
    slug: 'malla-ciclonica-residencial-industrial',
    oficioId: 'cercas-perimetrales-malla',
    name: 'Cerca Malla Ciclónica Galvanizada/PVC Residencial e Industrial',
    title: 'Cuánto Cobrar por Metro Lineal de Malla Ciclónica: Postes, Tensor, Grapas, Concreto, Puerta',
    description: 'Presupuesto por ml: malla rombo 50-75mm calibre 12-16, postes PTR 1.5-3" c/2.5m, tensor esquina/intermedio, grapas/alambre张力, zapata concreto 30x30x50cm, portón peatonal/vehicular, concertina opcional.',
    priceRange: '$350 - $900 MXN/ml según altura, calibre, tipo malla',
    estimatedTime: '50-100 ml/día equipo 3 personas (incluye concreto)',
    tips: [
      'Residencial 2m altura: Malla galv calibre 12.5 rombo 60mm + PTR 2" sch40 c/2.5m + tensor esquina + grapas + concreto: $350-$450/ml. Industrial 2.5-3m: Malla calibre 11/10 + PTR 3" + tensor cada 20m + alambre张力 2.5mm: $500-$700/ml. PVC verde/negro (estética + anticorrosión): +30-40% vs galvanizada. Panel 3D (rigidez + estética): $550-$900/ml.',
      'Portones: Peatonal 1m (marco PTR + malla + bisagras pesadas + chapa): $4,000-$7,000. Vehicular corredizo 3-4m (motor + cremallera + fotocélula + 2 controles): $18,000-$35,000. Batiente 2 hojas 3m c/u: $22,000-$40,000. Incluye: cimentación motor, cableado, programación. Concertina (clip simple/doble) sobre cerca: $150-$300/ml.',
      'Permisos: >2.5m altura o zona federal/estatal requiere licencia municipal + alineamiento vecino (acta firmada). Cotiza PARTIDA SEPARADA: "Trámite licencia + acta vecino + topógrafo deslinde: $5,000-$20,000". Mínimo obra: 30 ml o $12,000. Garantía: 5 años estructura, 10 años malla galv (fabricante).'
    ]
  },
  {
    id: 'cerca-electrica-ganadera-residencial',
    slug: 'cerca-electrica-ganadera-residencial',
    oficioId: 'cercas-perimetrales-malla',
    name: 'Cerca Eléctrica Ganadera y Residencial (Energizador, Hilos, Aisladores, Puesta Tierra)',
    title: 'Cómo Cotizar Cerca Eléctrica: Energizador Joules, Hilos 2.5mm, Aisladores, Tierra, Normativa',
    description: 'Presupuesto por ml + equipo: energizador 1-15 Joules (solar/red), hilo alta tensión 2.5mm (3-8 hilos), aisladores porcelana/plástico, posta esquina/tensor, varilla tierra 2-3m, cable tierra, señalética, certificado PC.',
    priceRange: '$200 - $400 MXN/ml + $3,000 - $15,000 equipo energizador',
    estimatedTime: '100-200 ml/día equipo 2 personas (sin zanja tierra)',
    tips: [
      'Ganadera (control ganado): 3-5 hilos 2.5mm c/30-50cm, energizador 3-8 Joules (1J/10km hilo limpio), posta madera/PTR c/5-10m, aisladores anillo/torno: $200-$300/ml + energizador $4,000-$12,000. Residencial/seguridad (antihuacho): 5-8 hilos c/15-20cm, energizador 5-15 Joules (alto voltaje, baja energía), aisladores plástico UV, sirena/estroboscópica, teclado/botón pánico: $300-$400/ml + energizador $8,000-$15,000.',
      'Puesta a tierra (CRÍTICO): 3 varillas 3/4"x3m cobre/acero cobreado en triángulo 3m + cable 16mm² + caja registro + medición <10 ohmios: $3,000-$6,000. Si suelo seco/rocoso: pozo profundo + bentonita + varilla 10m: $10,000-$20,000. SIN BUENA TIERRA LA CERCA NO FUNCIONA. Incluye: "Certificado ohmios + medición fotos + croquis tierra".',
      'Normativa: NOM-001-SEDE-2012 (instalaciones eléctricas), PC local (señalética "PELIGRO ALTA TENSIÓN" c/10m + altura mínima 1.8m). Residencial: aviso vecino + acta. Cotiza PARTIDA: "Proyecto ejecutivo + trámite PC + certificado puesta tierra + capacitación usuario: $5,000-$15,000". Garantía energizador 2-3 años fabricante.'
    ]
  },
  // Técnicos en Mantenimiento de Elevadores / Montacargas / Plataformas
  {
    id: 'mantenimiento-preventivo-elevador-hidraulico',
    slug: 'mantenimiento-preventivo-elevador-hidraulico',
    oficioId: 'mantenimiento-elevadores',
    name: 'Mantenimiento Preventivo Mensual Elevador Hidráulico 2-4 Paradas',
    title: 'Checklist y Precio Mantenimiento Elevador Hidráulico: Aceite, Válvulas, Sellados, Cabina, Seguridad',
    description: 'Visita mensual: nivel/calidad aceite, válvula bajada/subida, sellos pistón, bomba, motor, guías, zapatas, limitadores, topes, amortiguadores, puertas piso, cabina (luz, ventilación, botonera, emergencia), foso, cuarto máquinas, reporte digital + fotos.',
    priceRange: '$2,500 - $4,000 MXN/mes por elevador',
    estimatedTime: '1.5-2.5 horas por visita',
    tips: [
      'Incluye: 12 visitas/año + atención emergencia 24h (mano de obra) + refacciones menores (contactos, lámparas, botones, fusibles, aceite hasta 20L/año) + reporte digital con fotos + bitácora NOM-001-SEDE. NO incluye: cambio aceite completo (cada 3-5 años: $8,000-$15,000), sellos pistón ($15,000-$30,000), bomba/motor, cables, puertas, tablero.',
      'Checklist crítico: 1) Aceite: nivel, color, partículas, agua (tira reactiva). 2) Válvula: ajuste velocidad subida/bajada, parada suave, bypass. 3) Pistón: fugas vástago, corrosión, alineación. 4) Puertas piso: cierre, contacto, holguras <5mm. 5) Cabina: paro emergencia, intercomunicador, iluminación, ventilación, botonera braille. 6) Foso: limpio, seco, topes, amortiguador, interruptor foso. 7) Cuarto máquinas: limpio, ventilado, extintor, diagrama unifilar, manual.',
      'Contrato 3-5 años: 10-15% descuento. Penalización respuesta >2h: 5% mensualidad/día. Bono 0 fallas crítico/año: 1 mes gratis. Cliente grande (5+ elevadores): tarifa volumen $2,000-$3,000/elevador. Entrega: "Reporte mensual PDF + bitácora física firmada + alertas WhatsApp/email inmediato si anomalía".'
    ]
  },
  {
    id: 'modernizacion-elevador-traccion-vvvf',
    slug: 'modernizacion-elevador-traccion-vvvf',
    oficioId: 'mantenimiento-elevadores',
    name: 'Modernización Elevador Tracción: Tablero VVVF, Máquina Gearless, Cabina, Puertas',
    title: 'Cuánto Cuesta Modernizar Elevador: Kit Control VVVF + Máquina Sin Engranajes + Cabina + Puertas Automáticas',
    description: 'Proyecto llave en mano: estudio tráfico, tablero VVVF (control vectorial), máquina gearless PM, cabina (acero inox/vidrio, iluminación LED, botonera braille), puertas automáticas (operador VVVF, cortina luz), cableado, selectores, encoders, certificación, 10-20 días fuera servicio.',
    priceRange: '$450,000 - $900,000+ MXN por elevador según paradas y acabados',
    estimatedTime: '10-20 días fuera de servicio por elevador',
    tips: [
      'Parcial (solo tablero VVVF + máquina existing + selectores): $180,000-$350,000. Completa (tablero + máquina gearless + cabina + puertas + cableado + foso/cuartomaquina): $450,000-$900,000. Alta gama (cabina vidrio/acero espejo, botoneras tactiles, destination dispatch, IA predicción tráfico): $900,000-$1,500,000.',
      'Incluye: Proyecto ejecutivo (cálculos, planos, memoria) + fabricación/importación (8-16 semanas) + instalación (10-20 días) + pruebas (velocidad, nivelación, puertas, seguridad, fuego) + certificación NOM-001-SEDE/NMX-V-143 + capacitación usuarios + manuales + garantía 2-5 años tablero/máquina + 1 año mano de obra.',
      'Ahorro energía: VVVF + gearless = 30-50% vs geared + contactores. Ahorro mantenimiento: -70% refacciones (sin contactores, sin cepillos, sin aceite caja reducciones). Valor inmueble: +5-15% renta/venta. Financiamiento: 24-60 meses (arrendamiento puro/arrendamiento financiero). Cotiza PARTIDA: "Estudio tráfico + proyecto ejecutivo: $25,000-$50,000 (se abona a contrato)".'
    ]
  },
  // Instaladores de Sistemas Contra Incendio / Rociadores / Detectores / Extintores
  {
    id: 'red-rocidades-nfpa13-oficinas-comercial',
    slug: 'red-rocidades-nfpa13-oficinas-comercial',
    oficioId: 'sistemas-contra-incendio',
    name: 'Red de Rociadores NFPA 13 Oficinas/Comercial (Ligero/Rocío Estándar)',
    title: 'Cuánto Cuesta m² Red Rociadores Oficinas: Rociadores Ocultos, Tubería Ranurada, Válvulas, Prueba',
    description: 'Presupuesto por m²: cálculo hidráulico, rociadores ocultos/pendientes K=5.6/8.0, tubería sch10 ranurada (Victaulic), válvulas alarma/zona/control/retención/drenaje, central alarma, prueba hidrostática 1.5x, certificación, planos as-built.',
    priceRange: '$350 - $550 MXN/m² área protegida (oficinas/comercial ligero)',
    estimatedTime: '500-1,000 m²/semana equipo 4-6 personas',
    tips: [
      'Oficinas/comercial (ligero): Rociador oculto (placa 70mm, respuesta rápida, K=5.6) c/3.6-4.2m² = $350-$550/m². Incluye: tubería sch10 ranurada (1"-4"), acoples Victaulic, válvula alarma 2.5-4", válvula zona por nivel, manómetros, drenaje principal, inspector test, señalización. Almacén/industrial (ordinario/extra hazard): ESFR K=14-25 + sch40 + bombeo: $550-$1,000/m².',
      'Bombeo (si presión red insuficiente): Bomba horizontal split case + motor eléctrico + tablero arranque estrella-triángulo/VFD + tanque succión + jockey + controlador presión + certifición: $250,000-$800,000 según caudal/presión. Cisterna (si no hay red): $150,000-$400,000 (concreto/acero). COTIZA SIEMPRE PARTIDAS SEPARADAS: "Red rociadores", "Bombeo", "Cisterna", "Alarma central", "Certificación".',
      'Pruebas: Hidrostática 1.5x presión trabajo (mín 150 psi) 2h sin caída. Inspector test (simula 1 rociador): caudal/presión. Alarma: tiempo <90s desde apertura rociador. Entrega: "Cálculo hidráulico (HASS/HCAD) + planos as-built + certificado prueba + carpeta materiales (certificados tubería, rociadores, válvulas) + manual operación + capacitación 2h personal". Vigencia certificación: 1 año (revisión anual NFPA 25).'
    ]
  },
  {
    id: 'extintores-edificio-oficinas-10-niveles',
    slug: 'extintores-edificio-oficinas-10-niveles',
    oficioId: 'sistemas-contra-incendio',
    name: 'Extintores Edificio Oficinas 10 Niveles (PQS, CO2, Clase K, Señalética, Capacitación)',
    title: 'Cómo Cotizar Extintores por Nivel: Tipo, Capacidad, Recorrido, Soporte, Certificado, Recarga Anual',
    description: 'Cálculo NFPA 10 / NOM-154: 1 extintor 6kg PQS c/300m² máx 15m recorrido. Oficinas 10 niveles x 500m² = 17 PQS 6kg + 2 CO2 5kg (eléctrico/server) + 1 Clase K 6L (cocina). Incluye: soporte, señalética fotoluminiscente, certificado, capacitación 15min/brigada, recarga anual.',
    priceRange: 'PQS 6kg $1,200-$1,800 | CO2 5kg $2,500-$3,500 | Clase K 6L $3,500-$5,000 (instalado c/cada)',
    estimatedTime: '1-2 días instalación completa edificio 10 niveles',
    tips: [
      'Precio unitario INSTALADO (extintor + soporte pared/peana + señalética + certificado + capacitación 15min): PQS 6kg ABC $1,200-$1,800. CO2 5kg $2,500-$3,500. Clase K 6L (cocina comercial) $3,500-$5,000. Edificio 10 niveles 500m²/nivel: 17 PQS + 2 CO2 + 1 K = ~$35,000-$55,000 total. Señalética fotoluminiscente (norma NOM-003-SEGOB): $150-$300 c/u.',
      'Mantenimiento ANUAL (recarga + hidroprueba 5 años + certificado): PQS $300-$500, CO2 $400-$600, K $500-$800. Hidroprueba 5 años (cilindro): $400-$700 c/u. Contrato 3-5 años: 10-15% descuento. Incluye: "Bitácora digital por extintor (QR/NFC) + alertas vencimiento + reporte anual PC + capacitación brigada".',
      'Ubicación: soporte pared 1.5m altura centro, máx 15m recorrido, visible, accesible, NO detrás de puertas/muebles. Cocina: Clase K a ≤9m de equipos cocción. Cuarto eléctrico/server: CO2 a ≤5m. ENTREGA: "Croquis ubicación por nivel + certificado c/cada + bitácora digital + capacitación video/presencial + calendario recargas".'
    ]
  },
  // Especialistas en Tratamiento de Aguas Residuales / Biodigestores / PTAR
  {
    id: 'biodigestor-familiar-4-8-personas',
    slug: 'biodigestor-familiar-4-8-personas',
    oficioId: 'tratamiento-aguas-residuales',
    name: 'Biodigestor Anaerobio Familiar 4-8 Personas (Rotomoldeado, 2-3 Cámaras, Infiltración)',
    title: 'Cuánto Cuesta Biodigestor Familiar Instalado: Excavación, Tanque, Trampa Grasa, Pozo Absorción',
    description: 'Kit llave en mano: tanque PEAD rotomoldeado 1,500-3,000L (2-3 cámaras anaerobias), excavación, base arena, trampa grasa, tubería entrada/salida PVC 4", registro tapa hermética, pozo absorción/infiltración (valido NOM-001 si DBO<500mg/L), certificado, garantía 10-20 años tanque.',
    priceRange: '$15,000 - $35,000 MXN instalado completo',
    estimatedTime: '1-2 días instalación',
    tips: [
      'Tanque 1,500L (4-5 hab): $12,000-$18,000. 2,500L (6-8 hab): $18,000-$28,000. 3,000L (8-10 hab): $25,000-$35,000. Incluye: excavación (retroexcavadora/mano), base arena 10cm compactada, tanque, trampa grasa 20L (obligatoria cocina), tubería PVC 4" SDR26 entrada/salida + ventilación 2", registro tapa atornillable hermética, relleno controlado, pozo absorción (zanjas 0.6x0.6m grava 3/4" + tubo perforado + geotextil) o infiltración superficial.',
      'Mantenimiento: Vaciado lodos cámara 1 cada 1-2 años (camión vacío 5-10m³: $2,000-$4,000). Limpieza trampa grasa: cada 3-6 meses (usuario o contrato $500-$1,000/visita). NO echar: cloro, antibióticos, aceites, pinturas, medicamentos, toallitas, plásticos. Sí: papel higiénico, jabones biodegradables, residuos orgánicos.',
      'Permisos: Vivienda unifamiliar <10 hab generalmente NO requiere título CONAGUA (art. 9 Ley Aguas Nacionales), pero SÍ constancia municipal/estatal de no red drenaje + dictamen factibilidad suelo (percolación). Cotiza PARTIDA: "Estudio percolación + dictamen factibilidad + constancia no drenaje: $8,000-$15,000". Garantía tanque 10-20 años (fabricante), mano de obra 1 año.'
    ]
  },
  {
    id: 'ptar-modular-fraccionamiento-200-casas',
    slug: 'ptar-modular-fraccionamiento-200-casas',
    oficioId: 'tratamiento-aguas-residuales',
    name: 'PTAR Modular SBR Fraccionamiento 200 Casas (200 m³/día, Desinfección UV, Lodos)',
    title: 'Cómo Cotizar PTAR Modular SBR: Reactores, Pretratamiento, Sopladores, UV, Tablero, Lodos, O&M',
    description: 'Llave en mano: pretratamiento (reja, desarenador, trampa grasa), 2 reactores SBR 120m³ c/u (ciclo: llenado, aireación, sedimentación, descarga, reposo), sopladores roots + difusores burbuja fina, desinfección UV canal abierto, tablero PLC + SCADA + telemetría, caseta control, soplado lodos + lecho secado/centrífuga, puesta en marcha 30 días, capacitación, O&M 1-3 años.',
    priceRange: '$1.8M - $3.2M MXN CAPEX + $45k-$85k/mes OPEX',
    estimatedTime: '4-6 meses (ingeniería 6-8 sem, fabricación 8-12 sem, obra civil 6-8 sem, electromecánica 4-6 sem, puesta marcha 4 sem)',
    tips: [
      'CAPEX desglose: Ingeniería/permisos $200k-$400k. Obra civil (reactores concreto, caseta, zanjas, vialidad) $600k-$1.2M. Electromecánica (sopladores, difusores, bombas, UV, tablero, instrumentación, tubería, válvulas) $700k-$1.2M. Puesta marcha/capacitación $150k-$250k. Contingencia 10%: $180k-$320k. TOTAL: $1.8M-$3.2M.',
      'OPEX mensual (200 m³/d): Energía sopladores/bombas/UV $15k-$30k. Químicos (coagulante, polímero, hipoclorito respaldo UV) $5k-$10k. Operador certificado 2 turnos $15k-$25k. Mantenimiento preventivo (lubricación, limpieza difusores, calibración) $5k-$10k. Manejo lodos (vaciado lecho secado/centrífuga + disposición final) $10k-$20k. TOTAL: $45k-$85k/mes. Contrato O&M 3 años: 10-12% CAPEX/año.',
      'Permisos CRÍTICOS (iniciar ANTES de obra): CONAGUA título descarga (6-12 meses, $50k-$200k derechos), SEMARNAT MIA/ETJ (6-18 meses, $100k-$500k), Estatal/Municipal licencia construcción/operación $20k-$100k. COTIZA PARTIDA: "Gestión integral permisos CONAGUA/SEMARNAT/Estatal: $150k-$500k honorarios + derechos + estudios". NO INICIAR OBRA SIN TÍTULO DESCARGA CONAGUA.'
    ]
  },
  // Instaladores de Gas Medicinal / Oxígeno / Vacío / Aire Comprimido Hospitalario
  {
    id: 'punto-gases-medicinales-quirfano-uci',
    slug: 'punto-gases-medicinales-quirfano-uci',
    oficioId: 'gases-medicinales-hospitalarios',
    name: 'Punto de Consumo Gases Medicinales Quirófano/UCI (O2, Vacío, Aire, N2O, CO2, AGSS, WAGD)',
    title: 'Cuánto Cobrar por Punto Gases Medicinales: Salida Mural, Válvula Zona, Tubería Cobre, Pruebas, Certificación',
    description: 'Instalación por punto: salida mural DISS/Ohmeda/Chemetron (O2, Vacío, Aire, N2O, CO2, N2, AGSS, WAGD), válvula zona + alarma zona, tubería cobre K/L desgrasado 1/2"-1" soldadura plata 5%Ag, prueba partículas/humedad/pureza/presión, etiquetado NFPA 99, carpeta entrega.',
    priceRange: '$8,000 - $14,000 MXN/punto individual | Quirófano 6-10 gases $60,000-$120,000 | UCI 3-4 gases $25,000-$45,000',
    estimatedTime: '4-8 horas/punto | Quirófano 3-5 días | UCI 1-2 días/cama',
    tips: [
      'Punto individual (1 gas): Salida mural + válvula zona + tubería hasta central (máx 30m) + pruebas + certificación = $8,000-$14,000. Quirófano completo (O2, Vacío, Aire, N2O, CO2, N2, AGSS, WAGD = 8 gases): $60,000-$120,000/quirófano. UCI/Neonatal (O2, Vacío, Aire, AGSS = 4 gases): $25,000-$45,000/cama. Cama hospitalaria estándar (O2, Vacío, Aire = 3 gases): $18,000-$30,000/cama.',
      'Tubería: Cobre tipo K (enterrado/empotrado) o L (aereo) DESGRASADO fábrica (ASTM B819). Soldadura: Aleación plata 5% (BCuP-3) o 15% (BAG-7) + flux libre fósforo. Pruebas OBLIGATORIAS NFPA 99: 1) Partículas (filtro membrana 0.45μm, <1mg/m²). 2) Humedad (punto rocío <-40°C / -70°C USP). 3) Pureza O2 >99%, Aire CO<5ppm CO2<500ppm aceites<0.1mg/m³. 4) Presión/caudal c/punto. 5) Alarma zona/maestra. 6) Etiquetado color/código c/punto.',
      'Carpeta entrega (OBLIGATORIA COFEPRIS/NFPA 99): 1) Planos as-built isométricos. 2) Certificados materiales (tubería, accesorios, válvulas, salidas - heat numbers). 3) Actas soldadura (soldador calificado 6G + procedimiento WPS/PQR). 4) Resultados pruebas (partículas, humedad, pureza, presión, caudal). 5) Certificado NFPA 99 firmado ingeniero responsable. 6) Manual operación/mantenimiento. 7) Capacitación personal (acta firma). COTIZA PARTIDA: "Validación completa NFPA 99 + NOM-002-SSA3: $40,000-$120,000 según # puntos".'
    ]
  },
  {
    id: 'central-oxigeno-criogenico-hospital',
    slug: 'central-oxigeno-criogenico-hospital',
    oficioId: 'gases-medicinales-hospitalarios',
    name: 'Central de Oxígeno Criogénico Hospitalario (Tanque, Vaporizador, Manifold Reserva, Tablero, Telemetría)',
    title: 'Cómo Cotizar Central O2 Criogénica: Tanque 3,000-20,000L, Vaporizador, Manifold, Regulador, Alarma, Telemetría',
    description: 'Llave en mano: tanque criogénico horizontal/vertical (3,000-20,000L, 1.7-2.4 MPa), vaporizador ambiente (1.5x pico), regulador presión final (400-550 kPa), manifold reserva cilindros (2x6-12 cilindros 40-60L), tablero control (nivel, presión, alarma, cambio auto), telemetría proveedor gas, cimentación anclaje sísmico, vallado, señalética, certificación, capacitación.',
    priceRange: '$450,000 - $1,800,000 MXN según capacidad',
    estimatedTime: '4-8 semanas (fabricación tanque 3-6 sem + instalación 1-2 sem)',
    tips: [
      'Dimensionamiento: Pico demanda (LPM) x 1.5 = caudal vaporizador. Tanque: 3-5 días autonomía pico. Ej: Hospital 100 camas ~500 LPM pico -> Vaporizador 750 LPM -> Tanque 6,000-10,000L. Precios: Tanque 3,000L $350k-$500k, 6,000L $500k-$800k, 10,000L $700k-$1.1M, 20,000L $1.2M-$1.8M (incluye vaporizador, regulador, manifold, tablero, cimentación, vallado, instalación, certificación).',
      'Proveedor gas (Linde, Praxair, Cryoinfra, Infra, local): Contrato suministro SEPARADO (precio $/m³ o $/kg + flete + renta tanque si no compra). Telemetría: nivel/presión transmitido a proveedor para llenado automático (evita desabasto). Manifold reserva: 12-24 cilindros 40-60L (autonomía 24-48h si falla tanque/vaporizador). Cambio auto tanque->cilindros: válvula doble check + presostato diferencial.',
      'Normativa: NFPA 99 + NOM-002-SSA3 + ASME Sec VIII Div 1 (tanque) + CRN (Canadá) / PED (Europa) si importado. Permisos: PC (tanque >3,000L), Protección Civil, Bomberos, COFEPRIS (aviso funcionamiento). COTIZA PARTIDA: "Trámite PC + PC Bomberos + Aviso COFEPRIS + Certificación NFPA 99: $50,000-$150,000". Garantía tanque 5-10 años (vacío), vaporizador/regulador/tablero 2-3 años.'
    ]
  },
  // Técnicos en Mantenimiento de Equipo Médico / Imagenología / Laboratorio
  {
    id: 'mantenimiento-preventivo-tomografia-64-cortes',
    slug: 'mantenimiento-preventivo-tomografia-64-cortes',
    oficioId: 'mantenimiento-equipo-medico',
    name: 'Mantenimiento Preventivo Mensual Tomógrafo 64 Cortes (Tubo, Detector, Generador, Enfriamiento, Gantry)',
    title: 'Checklist y Precio Mantenimiento TC 64 Cortes: Tubo RX, Detector, Generador HV, Chiller, Gantry, Calibración QA',
    description: 'Visita mensual (4-6h): tubo RX (kVp, mA, filamento, ánodo), detector (bad pixels, gain, offset, calibración aire/agua), generador HV (ondulación, kVp/mAs precisión), chiller (temp, flujo, presión, glicol, filtros), gantry (rodamientos, encoder, slip ring, cables), mesa (movimiento, índice, láser), QA mensual (ACR phantom: resolución, ruido, uniformidad, CTDI, linealidad), reporte digital + trazabilidad.',
    priceRange: '$8,000 - $15,000 MXN/mes por equipo',
    estimatedTime: '4-6 horas por visita mensual',
    tips: [
      'Incluye: 12 visitas/año + atención correctiva prioritaria (mano de obra, respuesta <4h hábil, <8h nocturno/festivo) + refacciones menores (filtros chiller, contactos, fusibles, glicol hasta 20L/año) + QA mensual phantom ACR + reporte digital con tendencias + alertas predictivas (horas tubo, ciclos gantry, temp chiller). NO incluye: cambio tubo RX ($120k-$350k + instal $25k-$50k + validación $10k), cambio detector ($400k-$1.5M + instal $50k-$100k + calib $30k), chiller/compresor, generador HV, slip ring.',
      'QA Mensual ACR Phantom (CT 464/486): 1) Resolución espacial (MTF) alta/baja contraste. 2) Ruido imagen (desviación estándar ROI agua). 3) Uniformidad (variación ROI agua). 4) CTDIvol (cámara ionización 100mm/32cm) cabeza/cuerpo. 5) Linealidad HU (agua 0±5, aire -1000±10, hueso +800±20). 6) Precisión índice mesa. 7) Alineación láser. Límites ACR: Ruido <3 HU, Uniformidad ±5 HU, CTDI dentro 20% referencia, Linealidad ±10 HU.',
      'Contrato 3-5 años: 10-15% descuento. Tubo RX: vida típica 150-300k mAs (monitorear mAs acumulados/mes). Detector: 7-10 años. Chiller: compresor 5-7 años, glicol cambio anual. Gantry slip ring: 3-5 años (limpieza/contactos). ENTREGA: "Reporte mensual PDF + bitácora física + dashboard web (horas tubo, mAs, temp chiller, QA trends) + alertas WhatsApp/email anomalías + reporte anual estado vida útil componentes + planificación recambios 12-24 meses".'
    ]
  },
  {
    id: 'calibracion-validacion-nom229-rayos-x',
    slug: 'calibracion-validacion-nom229-rayos-x',
    oficioId: 'mantenimiento-equipo-medico',
    name: 'Calibración y Validación NOM-229-SSA1 Rayos X (kVp, mAs, Tiempo, HVL, Dosis, Colimación)',
    title: 'Cómo Cotizar Validación NOM-229: Equipo Trazable CENAM, Phantom, Dosímetro, Informe, Constancia COFEPRIS',
    description: 'Servicio por equipo: kVp/mAs/tiempo (medidor trazable CENAM), HVL (filtro Al/Cu), dosis aire (cámara ionización/fantoma), reproducibilidad, linealidad, colimación (luz vs radiación, ±2%), distancia foco-piel, filtro inherente/adicionado. Informe técnico + constancia validación + aviso COFEPRIS. Vigencia 12 meses.',
    priceRange: '$8,000 - $15,000 MXN por equipo (fijo/móvil/C-arm/mamógrafo)',
    estimatedTime: '2-4 horas por equipo según complejidad',
    tips: [
      'Equipo trazable CENAM OBLIGATORIO: Medidor kVp/mAs/tiempo (Radcal, Unfors, PTW, Fluke Biomedical) certificado <12 meses. Cámara ionización 6-100cc (Farmer, PTW, Exradin) + electrómetro trazable. Filtros Al 99.99% espesor conocido. Fantoma acrílico/agua. Certificados calibración CENAM (o laboratorio acreditado EMA/ILAC MRA) adjuntos en informe.',
      'Parámetros NOM-229-SSA1: 1) kVp: ±5% valor indicado (≤100kV) / ±4% (>100kV). 2) mAs: ±10% (≤10mAs) / ±5% (>10mAs). 3) Tiempo: ±5% (≤10ms) / ±2% (>10ms) / ±1 pulso (alta velocidad). 4) HVL: ≥ valor tabla según kVp (Al mm). 5) Dosis aire: consistente kVp/mAs. 6) Reproducibilidad: coef. variación <0.05 (5 mediciones). 7) Linealidad: dosis ∝ mAs (coef. determinación >0.99). 8) Colimación: luz vs radiación ±2% SID. 9) Distancia foco-piel: ≥30cm (fijo), ≥20cm (móvil). 10) Filtro inherente: ≥0.5mm Al eq (≤50kV), ≥1.5mm (50-70kV), ≥2.5mm (>70kV).',
      'Entregables: 1) Informe técnico (metodología, equipo patrón + cert CENAM, resultados, conformidad SI/NO, observaciones). 2) Constancia validación (firma ingeniero responsable, vigencia 12 meses). 3) Aviso COFEPRIS (formato único, 30 días hábiles post-validación). 4) Etiqueta validación equipo (próxima fecha). COTIZA: "Validación NOM-229 trazable CENAM + informe + constancia + aviso COFEPRIS: $8,000-$15,000/equipo. Descuento 3+ equipos mismo sitio: 15%. Urgencia <5 días: +50%.".'
          ]
        },

        // ===== TAREAS ADICIONALES LOTE 3 - PARTE 2 (20 TAREAS) =====
        // Yeso / Drywall / Tablaroca Comercial
        {
          id: 'tablaroca-plafones-acusticos',
          slug: 'tablaroca-plafones-acusticos',
          oficioId: 'yeso-drywall-comercial',
          name: 'Plafones Acústicos Tablaroca (Placas Minerales, Fibra Vidrio, Vinílicas, Acceso Registro)',
          title: 'Cómo Cotizar Plafón Acústico: Placas 60x60, Perfilería T24, Tramitas, Iluminación, HVAC',
          description: 'Presupuesto por m²: placas acústicas (mineral, fibra vidrio, vinílico), perfilería T24/T15, tramitas registro, molduras, aislamiento lana mineral, luminarias LED, difusores HVAC, instalación completa.',
          priceRange: '$400 - $650 MXN/m² según sistema y acabado',
          estimatedTime: '20-30 m²/día por cuadrilla 2 personas',
          tips: [
            'Placa mineral estándar (NRC 0.55-0.65): $350-$450/m² instalada. Placa fibra vidrio (NRC 0.70-0.85, resistente humedad): $450-$550/m². Placa vinílica (lavable, hospitales/cocinas): $500-$650/m². Incluye: perfilería T24 principal/secundaria, colgadores, tramitas c/1.2m, moldura perimetral, cortes luminarias/difusores.',
            'Aislamiento acústico sobre plafón: lana mineral 50mm (R-13) + barrera vapor: +$80-$120/m². Acceso registro: tramita 60x60 c/1.2m + tramitas individuales bajo equipos HVAC. Tramoteca (acceso mayor): perfilería reforzada + bisagras + pestillo + escalera acceso: +$2,000-$4,000 c/u.',
            'Coordinación OBLIGATORIA con electricista/HVAC ANTES de cerrar: "Plano coordinación + puntos luminarias/difusores + cotización conjunta". Retiro plafón existente: +$50-$100/m². Mínimo: 40 m² o $12,000. Garantía: 1 año mano de obra, 10-30 años placas (fabricante).'
          ]
        },
        {
          id: 'tablaroca-muros-fonoabsorbentes',
          slug: 'tablaroca-muros-fonoabsorbentes',
          oficioId: 'yeso-drywall-comercial',
          name: 'Muros Fonoabsorbentes Tablaroca (Estudios, Salas Cine, Oficinas, Restaurantes)',
          title: 'Cuánto Cobrar por Muro Acústico Tablaroca: STC 45-60, Lana Mineral, Doble Capa, Sellado',
          description: 'Presupuesto por m²: muro divisor doble tablaroca 5/8" tipo X + lana mineral 75-100mm + canal resiliente + sellador acústico + cajas eléctricas con masilla + zócalo flotante. STC certificado.',
          priceRange: '$550 - $900 MXN/m² según STC requerido',
          estimatedTime: '10-15 m²/día por cuadrilla 2 personas',
          tips: [
            'STC 45-50 (oficinas, consultorios): Doble tablaroca 5/8" c/lado + lana mineral 75mm + canal resiliente un lado: $550-$700/m². STC 55-60 (estudios, salas cine, máquinas): Triple tablaroca + lana 100mm + canal resiliente ambos lados + lámina viscoelástica: $750-$900/m².',
            'Detalles CRÍTICOS: Sellador acústico (no silicona) en TODOS encuentros (piso, techo, muro adyacente, cajas eléctricas, pasatubos). Cajas eléctricas: cajas tablaroca + masilla acústica + cinta + sellado perimetral. Zócalo flotante (perfil U + neopreno 10mm): +$80-$150/ml. Puertas: sello automático fondo + burlete perimetral + umbral acústico: $3,000-$6,000/puerta.',
            'Prueba STC campo (opcional, certifica entrega): medición ruido aéreo + impacto + reporte: $8,000-$15,000/muro. Mínimo obra: 20 m² o $15,000. Entrega: "Muro listo pintar + croquis instalaciones + certificado STC si aplica + fotos sellados".'
          ]
        },
        // Especialistas en Pisos Epóxicos / Poliuretano / Concreto Pulido
        {
          id: 'concreto-pulido-mecanizado-comercial',
          slug: 'concreto-pulido-mecanizado-comercial',
          oficioId: 'pisos-epoxicos-industriales',
          name: 'Concreto Pulido Mecanizado Comercial / Industrial (Diamantado, Densificador, Sellado, Brillo Espejo)',
          title: 'Cómo Cotizar Concreto Pulido: Grano 50-3000, Densificador Litio/Sodio, Guard, Brillo Alto Tráfico',
          description: 'Presupuesto por m²: diamantado escalonado (grano 50-3000), densificador litio/sodio/potasio, sellado guard (acrílico/poliuretano), pulido final brillo espejo. Niveles brillo: mate, satinado, alto brillo, espejo.',
          priceRange: '$180 - $350 MXN/m² según nivel brillo y dureza concreto',
          estimatedTime: '500-1,000 m²/día equipo 3-4 personas',
          tips: [
            'Nivel 1 (Mate/Satinado, grano 400): $180-$250/m². Nivel 2 (Alto brillo, grano 800-1500): $220-$300/m². Nivel 3 (Espejo, grano 3000): $280-$350/m². Incluye: reparación grietas/juntas (epoxi + arena), diamantado escalonado 6-8 pasos, densificador 2-3 aplicaciones, guard 2 manos, pulido final.',
            'Concreto NUEVO (curado 28 días): mejor resultado, menos reparación. Concreto EXISTENTE: evaluar dureza (Mohs), porosidad, manchas, recubrimientos previos. Remoción recubrimiento anterior (epoxi, pintura, sellador): +$80-$150/m². Manchas aceite/químicos: tratamiento previo +$50-$100/m².',
            'Mantenimiento: Re-aplicación guard cada 1-3 años según tráfico ($30-$60/m²). Limpieza: pH neutro, NO ácidos/alcalinos. Garantía: 5-10 años (desprendimiento, polvo, brillo) si mantenimiento correcto. Mínimo: 300 m² o $60,000. Entrega: "Informe dureza Mohs + fotos pasos + medidor brillo (gloss meter) + protocolo mantenimiento".'
          ]
        },
        {
          id: 'piso-epoxico-decorativo-metalizado',
          slug: 'piso-epoxico-decorativo-metalizado',
          oficioId: 'pisos-epoxicos-industriales',
          name: 'Piso Epóxico Decorativo: Metalizado, Flake, Cuarzo Color, 3D, Logos Personalizados',
          title: 'Cuánto Cobrar por Piso Epóxico Decorativo m²: Metalizado, Flake, Cuarzo, Diseños, Logos',
          description: 'Presupuesto por m²: base epóxica + pigmentos metalizados (perla, cobre, oro, plata) + flake (virutas vinílicas) + cuarzo color + diseños artísticos + logos corporativos + sellado UV. Showrooms, oficinas, retail, residenciales premium.',
          priceRange: '$800 - $2,000 MXN/m² según complejidad diseño',
          estimatedTime: '50-150 m²/día (más lento por detalle artístico)',
          tips: [
            'Metalizado (pigmento perla/cobre/oro/plata 3-5%): $800-$1,200/m². Flake (virutas 1-3mm, 10-20% superficie, 3-5 colores): $900-$1,400/m². Cuarzo color (mezcla 3-5 tonos, antideslizante): $1,000-$1,500/m². Diseño artístico (degradados, vetas mármol, geodas): $1,500-$2,500/m². Logo corporativo (plantilla + aplicación manual): +$3,000-$8,000/logo.',
            'Base: Epóxico 100% sólidos 2-3mm + imprimación. Capa decorativa + sellado poliuretano alifático UV 2 manos (obligatorio exteriores/zona UV). Antideslizante: sílice/óxido aluminio en sellado final. Tiempo cura: tráfico ligero 24h, pesado 72h.',
            'Mínimo: 50 m² o $60,000. Requiere: visita técnica + muestra física 30x30cm (aprobación cliente) + contrato diseño. Garantía: 3-5 años (color, desgaste, amarillamiento). Entrega: "Muestra aprobada firmada + hoja datos sistema + certificado aplicación + protocolo limpieza".'
          ]
        },
        // Instaladores de Cercas Perimetrales / Malla Ciclónica / Panel / Eléctricas
        {
          id: 'panel-3d-vallas-esteticas',
          slug: 'panel-3d-vallas-esteticas',
          oficioId: 'cercas-perimetrales-malla',
          name: 'Vallas Panel 3D / 2D Estéticas (Residenciales, Comerciales, Parques, Escuelas)',
          title: 'Cómo Cotizar Valla Panel 3D: Malla Electrosoldada, Recubrimiento Polvo, Postes PTR, Portones',
          description: 'Presupuesto por ml: panel 3D/2D (malla electrosoldada 50x200mm, varilla 4-5mm, recubrimiento polvo poliéster), postes PTR 60x60x2mm c/2.5m, tapas poste, grapas seguridad, portones a juego, cimentación.',
          priceRange: '$550 - $900 MXN/ml según altura y acabado',
          estimatedTime: '50-80 ml/día equipo 3 personas',
          tips: [
            'Panel 3D (rigidez + estética, doblez en "V" cada 50mm): $550-$750/ml (altura 1.5-2m). Panel 2D (plano, económico): $450-$600/ml. Postes PTR 60x60x2mm galvanizado + pintura polvo: incluido. Tapas poste piramidales/planar: incluidas. Grapas seguridad anti-robo: incluidas. Cimentación zapata 30x30x50cm c/2.5m: incluida.',
            'Colores estándar (RAL 6005 verde, 7016 antracita, 9005 negro, 9010 blanco): sin cargo. Colores RAL especial: +15-20% + 2 semanas entrega. Portón peatonal 1m (panel + marco + bisagras + chapa): $5,000-$8,000. Portón vehicular corredizo 3-4m (panel + motor + cremallera + fotocélula): $20,000-$38,000. Portón batiente 2 hojas: $25,000-$45,000.',
            'Permisos: >2.5m altura o zona federal = licencia municipal + acta vecino. Cotiza PARTIDA: "Trámite licencia + acta + topógrafo: $5,000-$20,000". Mínimo: 30 ml o $18,000. Garantía: 10 años estructura (fabricante), 5 años recubrimiento polvo. Entrega: "Croquis perímetro + certificado recubrimiento + fotos cimentación + llaves portones".'
          ]
        },
        {
          id: 'cerca-electrica-perimetral-seguridad',
          slug: 'cerca-electrica-perimetral-seguridad',
          oficioId: 'cercas-perimetrales-malla',
          name: 'Cerca Eléctrica Perimetral Seguridad Residencial/Industrial (Energizador, Hilos, Sirena, Monitoreo 24/7)',
          title: 'Cuánto Cuesta Cerca Eléctrica Antihuacho: Energizador 5-15J, 5-8 Hilos, Sirena, App, Monitoreo',
          description: 'Presupuesto por ml + equipo: energizador 5-15 Joules (red/solar/híbrido), hilo 2.5mm 5-8 hilos c/15-20cm, aisladores UV, posta esquina, varilla tierra, sirena estroboscópica, teclado/botón pánico, app monitoreo, certificado PC.',
          priceRange: '$300 - $450 MXN/ml + $8,000 - $25,000 equipo completo',
          estimatedTime: '80-150 ml/día equipo 2 personas',
          tips: [
            'Residencial (antihuacho): 6-8 hilos c/15-20cm, energizador 8-15J (alto voltaje ~8-10kV, baja energía <5J), aisladores plástico UV, sirena 120dB + estroboscópica, teclado código + botón pánico, app móvil (estado, alertas, encendido/apagado remoto): $350-$450/ml + $12,000-$25,000 equipo. Industrial (perimetral fábrica/bodega): 4-5 hilos c/30cm, energizador 5-10J, sirena potente, monitoreo 24/7 central receptora: $300-$400/ml + $15,000-$30,000 + $500-$1,500/mes monitoreo.',
            'Puesta a tierra (VIDA O MUERTE): 3 varillas 3/4"x3m cobreado triángulo 3m + cable 16mm² + caja registro + medición <10 ohmios: $3,000-$6,000. Suelo seco/rocoso: pozo profundo 10-20m + bentonita + varilla 15m: $15,000-$30,000. SIN TIERRA <10 OHM = CERCA INÚTIL. Incluye: "Certificado ohmios + fotos medición + croquis tierra + garantía 2 años energizador".',
            'Normativa: NOM-001-SEDE + PC local (señalética "PELIGRO ALTA TENSIÓN" c/10m, altura ≥1.8m, acceso restringido). Monitoreo 24/7: central receptora certificado + protocolo respuesta + llaves guardadas. Cotiza PARTIDA: "Proyecto ejecutivo + trámite PC + certificado tierra + capacitación + contrato monitoreo: $10,000-$30,000".'
          ]
        },
        // Técnicos en Mantenimiento de Elevadores / Montacargas / Plataformas
        {
          id: 'mantenimiento-montacargas-plataformas',
          slug: 'mantenimiento-montacargas-plataformas',
          oficioId: 'mantenimiento-elevadores',
          name: 'Mantenimiento Montacargas y Plataformas Elevadoras (Tijera, Articuladas, Mastil, Carga/Acceso)',
          title: 'Checklist y Precio Mantenimiento Montacargas/Plataformas: Hidráulico, Eléctrico, Estructural, Seguridad',
          description: 'Visita mensual/trimestral: sistema hidráulico (bombas, cilindros, válvulas, mangueras, aceite), eléctrico (baterías, cargador, motores, PLC), estructural (tijera, mastil, soldaduras, pasadores), seguridad (finales carrera, limitadores, barandales, cadena, sensor sobrecarga).',
          priceRange: '$1,500 - $4,000 MXN/mes por equipo según tipo y capacidad',
          estimatedTime: '1-3 horas por visita',
          tips: [
            'Montacargas tijera (carga 500-3000kg): $1,500-$2,500/mes. Plataforma articulada/mástil (altura 10-40m): $2,500-$4,000/mes. Incluye: 12 visitas/año + emergencia 24h (mano de obra) + refacciones menores (filtros, aceite 20L/año, contactos, fusibles) + reporte digital + bitácora NOM-006-STPS. NO incluye: cilindros, bombas, baterías, neumáticos, tableros, estructural mayor.',
            'Checklist crítico: 1) Hidráulico: nivel/calidad aceite, fugas cilindros/mangueras, presión trabajo, válvulas retención/bajada controlada. 2) Eléctrico: baterías (voltaje, electrolito, terminales), cargador (curva carga), motores (amperaje, temp), PLC (errores, logs). 3) Estructural: soldaduras (grietas, corrosión), pasadores/bujes (juego, lubricación), tijera/mástil (alineación, desgaste). 4) Seguridad: finales carrera, limitadores carga/altura, barandales/cadena, sensor sobrecarga, parada emergencia, plataforma nivelada.',
            'Contrato 3-5 años: 10-15% descuento. Cliente flotas 5+ equipos: tarifa volumen $1,200-$3,000/equipo. Entrega: "Reporte mensual PDF + bitácora física + alertas WhatsApp anomalías + certificado anual NOM-006-STPS + planificación recambios 12 meses".'
          ]
        },
        {
          id: 'modernizacion-elevador-accesibilidad',
          slug: 'modernizacion-elevador-accesibilidad',
          oficioId: 'mantenimiento-elevadores',
          name: 'Modernización Elevador Accesibilidad (Cabina Ampliada, Botoneras Braille, Anunciador Voz, Manijas, Espejos)',
          title: 'Cómo Cotizar Modernización Accesibilidad NOM-008-SEDE: Cabina Silla Ruedas, Señalización, Comunicación',
          description: 'Proyecto llave en mano para cumplimiento NOM-008-SEDE-2017 (accesibilidad): ampliación cabina (mín 110x140cm), botoneras braille + relieve 90-120cm, anunciador voz pisos/dirección, manijas 90cm, espejo fondo, señalética tactile, intercomunicador video, emergencia 2 vías.',
          priceRange: '$200,000 - $500,000 MXN por elevador según alcance',
          estimatedTime: '5-10 días fuera de servicio',
          tips: [
            'Alcance mínimo NOM-008: Cabina ≥110x140cm (silla ruedas giro 360°) + botoneras braille/relieve 90-120cm + anunciador voz + manija 90cm + espejo fondo + señalética táctil piso + intercomunicador 2 vías video/audio + luz emergencia + señalización "NO USE EN INCENDIO". Costo: $200,000-$350,000.',
            'Alcance premium: Cabina ampliada (requiere ensanche hueco + nuevo bastidor + guías) + botoneras destino (destination dispatch) + anunciador multidioma + intercomunicador video IP + supervisión remota IoT + acabados acero inox/vidrio/espejo. Costo: $400,000-$700,000. Tiempo: 10-20 días fuera servicio.',
            'Incluye: Proyecto ejecutivo + fabricación/importación (8-16 sem) + instalación (5-20 días) + pruebas (dimensiones, fuerzas, tiempos, comunicación, emergencia) + certificación NOM-008 + NOM-001-SEDE + capacitación usuarios + manuales + garantía 2-5 años. Financiamiento: 24-60 meses. Cotiza PARTIDA: "Estudio accesibilidad + proyecto ejecutivo: $25,000-$50,000 (se abona)".'
          ]
        },
        // Instaladores de Sistemas Contra Incendio / Rociadores / Detectores / Extintores
        {
          id: 'deteccion-incendio-direccionable-edificio',
          slug: 'deteccion-incendio-direccionable-edificio',
          oficioId: 'sistemas-contra-incendio',
          name: 'Detección Incendio Direccionable Edificio Oficinas/Comercial (Central, Detectores, Módulos, Sirenas, Estrobos)',
          title: 'Cuánto Cuesta Sistema Detección Direccionable: Central, Detectores Humo/Térmicos, Módulos Entrada/Salida, Cableado, Programación',
          description: 'Presupuesto por punto: central direccionable (1-8 lazos, 125-250 dispositivos/lazo), detectores fotoeléctricos/iónicos/térmicos/multicriterio, bases direccionables, módulos entrada (pulsadores) / salida (sirenas, estrobos, contactos), cableado FPLR/FPLP, programación, pruebas, certificación.',
          priceRange: '$1,200 - $2,500 MXN/punto instalado (incluye detector + base + cableado + programación)',
          estimatedTime: '20-40 puntos/día equipo 2-3 personas',
          tips: [
            'Central 1 lazo (≤125 dispositivos): $25,000-$45,000. 2-4 lazos: $45,000-$80,000. 8 lazos (≤1000 dispositivos): $100,000-$200,000. Incluye: gabinete, fuente 24V 5-10A, baterías respaldo 24h, display LCD, protocolo comunicación (Modbus/BACnet/TCP-IP). Marcas: Notifier, Edwards, Siemens, Honeywell, GST, nacional.',
            'Detectores: Fotoeléctrico humo (oficinas, pasillos): $1,200-$1,800/punto. Térmico fijo/rate-of-rise (cocinas, cuartos eléctricos): $1,300-$1,900. Multicriterio (humo+térmico+CO): $1,800-$2,500. Base direccionable + cableado FPLR 18AWG + programación: incluido. Módulo salida (sirena/estrobo/contacto): $1,500-$2,500 c/u. Pulsador manual (rompible/rearmable): $1,500-$2,200.',
            'Pruebas: Sensibilidad humo (cámara humo UL 268), térmico (baño aceite), comunicación todos dispositivos, secuencia alarmas, supervision cableado (corto/abierto/tierra), baterías 24h carga + 5min alarma. Entrega: "Planos as-built + programación central (backup USB) + certificados detectores + manual operación + capacitación 4h brigada + bitácora NFPA 72". Vigencia: 1 año (revisión semestral NFPA 72).'
          ]
        },
        {
          id: 'sistema-bombeo-incendio-jockey-diesel',
          slug: 'sistema-bombeo-incendio-jockey-diesel',
          oficioId: 'sistemas-contra-incendio',
          name: 'Sistema Bombeo Incendio: Bomba Principal Eléctrica + Jockey + Diésel (NFPA 20, Certificación PC)',
          title: 'Cómo Cotizar Bombeo Contra Incendio: Curva Bomba, Tablero Arranque, Transferencia Auto, Tanque, Pruebas',
          description: 'Llave en mano: bomba horizontal split case (eléctrica 50-500 HP) + bomba jockey (3-10 HP) + bomba diésel (opcional NFPA 20) + tablero control (arranque estrella-triángulo/VFD + transferencia automática diésel + controlador presión) + tanque succión/descarga + instrumentación + cimentación + pruebas curva + certificación PC.',
          priceRange: '$350,000 - $2,500,000+ MXN según caudal (LPM) y presión (kPa)',
          estimatedTime: '4-8 semanas (fabricación 3-6 sem + instalación 1-2 sem)',
          tips: [
            'Dimensionamiento NFPA 20: Caudal = demanda rociadores + mangueras (mín 500 LPM). Presión = pérdida carga + presión residual mínima (100-150 psi en techo). Bomba principal: split case 1-4 etapas, 1750/3500 RPM, sello mecánico/empaquetadura. Jockey: multietapa 3-10 HP, mantiene presión 10-15 psi > bomba principal. Diésel: motor NFPA 20 (arranque 12V/24V, radiador, tanque combustible 8h, gobernador velocidad).',
            'Tablero: Arranque estrella-triángulo (bomba ≤75 HP) / VFD (>75 HP) + transferencia automática (eléctrica → diésel en <10s fallo energía) + controlador presión (transductor 4-20mA, display, alarmas) + protecciones (sobrecarga, bajo voltaje, fase invertida, falla bomba). Telemetría: nivel tanque, presión, estado bombas, alarmas → app/web + central monitoreo.',
            'Pruebas NFPA 20: Curva bomba (0%, 50%, 100%, 150% caudal) + prueba arranque diésel (3 arranques consecutivos 5min c/u) + prueba transferencia automática + prueba 2h operación continua + vibración/ruido/temperatura. Entrega: "Curva bomba certificada + actas pruebas + manuales + certificado PC + manual operación + capacitación 4h operadores + contrato mantenimiento trimestral".'
          ]
        },
        // Especialistas en Tratamiento de Aguas Residuales / Biodigestores / PTAR
        {
          id: 'ptar-activada-lodos-mbr',
          slug: 'ptar-activada-lodos-mbr',
          oficioId: 'tratamiento-aguas-residuales',
          name: 'PTAR Lodos Activados / MBR (Reactores, Aireación, Membranas, Desinfección, Lodos, Automatización)',
          title: 'Cuánto Cuesta PTAR Lodos Activados/MBR: Diseño, Obra Civil, Electromecánica, Membranas, SCADA, O&M',
          description: 'Llave en mano: pretratamiento (reja, desarenador, trampa grasa), reactores aireación (lodos activados convencional / MBR membranas sumergidas), sopladores/difusores, decantadores secundarios, desinfección (UV/hipoclorito/dióxido cloro), espesamiento/deshidratación lodos (centrífuga/banda/lechos), tablero PLC+SCADA+telemetría, caseta, puesta marcha, capacitación, O&M.',
          priceRange: '$5M - $50M+ MXN CAPEX según caudal (50-5000 m³/d) + $100k-$500k/mes OPEX',
          estimatedTime: '6-18 meses (ingeniería 2-4m, fabricación 3-6m, obra civil 3-6m, electromecánica 2-4m, puesta marcha 1-3m)',
          tips: [
            'Lodos activados convencional (caudal >500 m³/d): $5M-$20M. MBR membranas (caudal 50-500 m³/d, espacio limitado, efluente alta calidad reuso): $8M-$50M. MBR ventajas: efluente <5mg/L DBO/SS, <2 NTU, <10 UFC/100mL coliformes, 50% menos huella, automatización total. Desventaja: CAPEX +30-50%, OPEX membranas (limpieza química, reemplazo 7-10 años $500k-$2M).',
            'CAPEX desglose: Ingeniería/permisos 8-12%. Obra civil (reactores concreto, decantadores, casetas, zanjas) 35-45%. Electromecánica (sopladores, bombas, membranas, UV, tableros, tubería, válvulas) 30-40%. Automatización/SCADA 5-8%. Puesta marcha/capacitación 3-5%. Contingencia 10%.',
            'OPEX mensual: Energía (sopladores 60-70%, bombas 15-20%, UV 5-10%) $50k-$300k. Químicos (coagulante, polímero, hipoclorito, citrico limpieza membranas) $10k-$50k. Operadores certificados 3 turnos $30k-$100k. Mantenimiento (limpieza membranas CIP, calibración, lubricación) $20k-$80k. Lodos (centrífuga + disposición) $20k-$100k. TOTAL OPEX: $130k-$630k/mes. Contrato O&M 5-10 años: 8-12% CAPEX/año.'
          ]
        },
        {
          id: 'humedales-construidos-tratamiento-natural',
          slug: 'humedales-construidos-tratamiento-natural',
          oficioId: 'tratamiento-aguas-residuales',
          name: 'Humedales Construidos Tratamiento Natural (Superficie Libre, Flujo Subsuperficial, Vertical, Híbridos)',
          title: 'Cómo Cotizar Humedal Construido: Diseño Hidráulico, Plantas, Sustrato, Impermeabilización, Distribución, Mantenimiento',
          description: 'Presupuesto por m²/habitante: impermeabilización (geomembrana HDPE 1.5-2mm / arcilla compactada), sustrato (grava 10-20mm / zeolita / arena), plantas (carrizo, lirio, totora, junco), distribución (superficie libre / flujo subsuperficial horizontal/vertical), pretratamiento, desinfección, monitoreo, cosecha biomasa.',
          priceRange: '$8,000 - $25,000 MXN/habitante equivalente (HE) | $150 - $400 MXN/m² construido',
          estimatedTime: '3-6 meses (ingeniería 1-2m, obra civil 2-4m, plantación 1-2m, maduración 3-6m)',
          tips: [
            'Superficie libre (FS, agua visible, tipo laguna): $150-$250/m², mayor área (3-5 m²/HE), menor costo, riesgo vectores/olores, evapotranspiración alta. Flujo subsuperficial horizontal (FSS-H, agua bajo grava): $200-$350/m², área 1.5-3 m²/HE, sin olores/vectores, mejor remoción patógenos, operación simple. Flujo subsuperficial vertical (FSS-V, intermitente): $250-$400/m², área 1-2 m²/HE, mejor nitrificación, requiere dosificación controlada. Híbrido (FSS-V + FSS-H): $300-$450/m², mejor remoción total N/P.',
            'Plantas: Carrizo (Phragmites australis) - rey humedales, raíces 1-2m, O2 radicular. Lirio acuático (Eichhornia) - crecimiento rápido, remoción N/P alta, requiere control invasivo. Totora (Typha) - resistente, buena estructura raíz. Junco (Juncus) - tolerante salinidad. Densidad plantación: 4-6 plantas/m². Cosecha biomasa anual: 10-20 ton/ha (compost/biogás/forraje).',
            'Permisos: CONAGUA título descarga + SEMARNAT MIA/ETJ + Estatal/Municipal. COTIZA PARTIDA: "Gestión permisos + estudio hidrológico + modelo hidráulico: $100k-$300k". Mantenimiento: poda/cosecha anual, limpieza distribución, monitoreo DBO/DQO/N/P/Patógenos mensual, control vectores. Vida útil: 20-50 años (geomembrana 20-30 años, sustrato indefinido con lavado).'
          ]
        },
        // Instaladores de Gas Medicinal / Oxígeno / Vacío / Aire Comprimido Hospitalario
        {
          id: 'aire-comprimido-medicinal-hospital',
          slug: 'aire-comprimido-medicinal-hospital',
          oficioId: 'gases-medicinales-hospitalarios',
          name: 'Planta Aire Comprimido Medicinal Hospitalaria (Compresores, Secado, Filtración, CO<5ppm, Distribución)',
          title: 'Cómo Cotizar Planta Aire Medicinal: Compresores Tornillo/Scroll, Secador Adsorción, Filtros Coalescentes, Carbón Activado, Validación',
          description: 'Llave en mano: compresores tornillo/scroll (redundancia N+1), secador adsorción (punto rocío <-40°C), filtros coalescentes (0.01μm, 99.9999%), carbón activado (aceites <0.1mg/m³, CO <5ppm, CO2 <500ppm), depósito 500-5000L, válvulas, instrumentación, tubería cobre K/L, certificación NFPA 99 / ISO 7396 / NOM-002-SSA3.',
          priceRange: '$800,000 - $5,000,000 MXN según caudal (LPM) y redundancia',
          estimatedTime: '8-16 semanas (fabricación 4-8 sem + instalación 4-8 sem)',
          tips: [
            'Dimensionamiento: Caudal pico (LPM) x 1.25 = compresor. Redundancia N+1 (1 opera, 1 reserva). Compresor scroll (silencioso, <50 HP): $150k-$400k c/u. Tornillo (>50 HP, industrial): $300k-$800k c/u. Secador adsorción (gemelo, regeneración calor/despresurización): $200k-$600k. Filtros (5 etapas: 5μm, 1μm, 0.01μm, carbón, catalítico CO): $100k-$300k. Depósito 1000-5000L: $80k-$250k. Tablero + instrumentación + telemetría: $150k-$400k.',
            'Calidad aire NFPA 99 / ISO 8573-1 Clase 1.2.1: Partículas <0.1mg/m³ (0.01μm), Agua punto rocío <-40°C, Aceite <0.1mg/m³. Adicional médico: CO <5ppm (catalizador paladio), CO2 <500ppm, NOx <2ppm, SO2 <1ppm. Pruebas: analizador continuo CO/CO2/O2/rocío/partículas/aceite + certificación laboratorio acreditado.',
            'Validación PARTIDA: "Certificación NFPA 99 + ISO 7396 + NOM-002-SSA3: $80,000-$200,000". Incluye: particulas, humedad, aceites, CO, CO2, NOx, SO2, presión/caudal c/punto, alarmas. Mantenimiento: cambio filtros 6-12m ($20k-$50k), regeneración secador, análisis aceite compresor, calibración analizadores. Contrato O&M 5 años: 10-15% CAPEX/año.'
          ]
        },
        {
          id: 'vacio-medicinal-planta-hospital',
          slug: 'vacio-medicinal-planta-hospital',
          oficioId: 'gases-medicinales-hospitalarios',
          name: 'Planta Vacío Medicinal Hospitalaria (Bombas Lobular/Garra/Líquido Anillo, Separadores, Silenciadores, Red)',
          title: 'Cuánto Cuesta Planta Vacío Medicinal: Bombas, Separadores Ciclónicos, Silenciadores, Válvulas, Tubería, Validación',
          description: 'Llave en mano: bombas vacío lobular/garra/líquido anillo (redundancia N+1, 50-500 m³/h), separadores ciclónicos (líquidos/sólidos), silenciadores (≤65 dB), válvulas retención/aislamiento/vacío, depósito vacío 500-5000L, tubería cobre K/L/acero inox, tablero control (VFD, sequencial, alarmas), certificación NFPA 99 / NOM-002-SSA3.',
          priceRange: '$500,000 - $3,000,000 MXN según caudal (m³/h) y redundancia',
          estimatedTime: '6-12 semanas (fabricación 3-6 sem + instalación 3-6 sem)',
          tips: [
            'Dimensionamiento: Caudal pico (m³/h) x 1.25 = bomba. Redundancia N+1. Bomba lobular (seco, 50-200 m³/h): $120k-$350k c/u. Garra (seco, 100-500 m³/h): $200k-$500k c/u. Líquido anillo (húmedo, 50-300 m³/h, tolera líquidos): $100k-$300k c/u. Separador ciclónico (entrada/salida tangencial, eficiencia 99% >10μm): $30k-$80k c/u. Silenciador (reactivo/absortivo, ≤65 dB): $20k-$60k c/u. Depósito 1000-5000L: $80k-$250k.',
            'Tubería: Cobre tipo K/L (≤2") / Acero inox 304/316 Schedule 10/40 (>2"). Soldadura: plata 5% (cobre) / TIG (inox). Pendiente 1-2% hacia separadores/equipo. Válvulas: retención (evita retorno), aislamiento (mantenimiento), alivio vacío (protege bomba). Instrumentación: vacuómetro digital, presostato alarma vacío bajo, transmisor 4-20mA central.',
            'Validación NFPA 99: Vacío ≥300 mmHg (40 kPa) en punto más desfavorable. Caudal ≥ demanda simultánea (quirófanos + UCI + urgencias). Ruido ≤65 dB sala máquinas. Pruebas: hermeticidad (burbuja/jabón), caudal/cada punto, alarma vacío bajo, sequencial bombas. PARTIDA: "Validación NFPA 99 + NOM-002-SSA3: $50,000-$150,000".'
          ]
        },
        // Técnicos en Mantenimiento de Equipo Médico / Imagenología / Laboratorio
        {
          id: 'mantenimiento-resonancia-magnetica-1.5t-3t',
          slug: 'mantenimiento-resonancia-magnetica-1.5t-3t',
          oficioId: 'mantenimiento-equipo-medico',
          name: 'Mantenimiento Preventivo Mensual Resonancia Magnética 1.5T/3T (Helio, Criogénico, Gradientes, RF, Bobinas, Mesa, QA)',
          title: 'Checklist y Precio Mantenimiento RM 1.5T/3T: Helio, Compresor Frío, Gradientes, Amplificadores RF, Bobinas, Phantom ACR',
          description: 'Visita mensual (6-8h): nivel/presión helio (cámara + compresor frío), gradientes (amplificadores, agua enfriamiento, calibración linealidad), RF (amplificadores, atenuadores, bobinas cuerpo/cabeza/superficie), mesa (movimiento, láser, índice), QA mensual (phantom ACR: resolución, SNR, uniformidad, ghosting, geometría), reporte digital + tendencias + alertas predictivas.',
          priceRange: '$18,000 - $35,000 MXN/mes por equipo',
          estimatedTime: '6-8 horas por visita mensual',
          tips: [
            'Incluye: 12 visitas/año + correctiva prioritaria (<4h hábil, <8h festivo) + refacciones menores (filtros agua, contactos, fusibles, helio 1000L/año) + QA mensual phantom ACR (resolución, SNR, uniformidad, ghosting, geometría, fat suppression) + reporte digital con tendencias (presión helio, temp criogénico, agua gradientes, SNR) + alertas predictivas. NO incluye: recarga helio ($150k-$300k/1000L), compresor frío ($800k-$2M), gradientes/amplificadores RF ($500k-$2M), bobinas ($180k-$600k), mesa.',
            'QA Mensual ACR Phantom (RS-1/RS-2/MR-1): 1) Resolución espacial (líneas/mm). 2) SNR (señal/ruido ROI). 3) Uniformidad (variación %). 4) Ghosting (artifacts movimiento/fase). 5) Geometría (distorsión <2mm). 6) Fat suppression (eficiencia >90%). 7) Centro frecuencia (precisión ±0.01%). Límites ACR: SNR ≥20:1, Uniformidad ≥90%, Geometría ≤2mm, Ghosting ≤2.5%.',
            'Helio: Vida criogénico 3-5 años, pérdida normal 1-2%/mes. Alarma nivel bajo → recarga URGENTE (quenching riesgo $2M+ daño imán). Compresor frío (coldhead): ciclo 3-5 años ($150k-$300k reemplazo). Gradientes: agua enfriamiento (conductividad <5μS/cm, temp 20-25°C). Contrato 3-5 años: 10-15% descuento. ENTREGA: "Dashboard web (helio, criogénico, gradientes, RF, QA trends) + alertas WhatsApp/email + reporte anual vida útil + plan recambios 24m".'
          ]
        },
        {
          id: 'calibracion-dosimetria-radioterapia-oncologia',
          slug: 'calibracion-dosimetria-radioterapia-oncologia',
          oficioId: 'mantenimiento-equipo-medico',
          name: 'Calibración Dosimetría Radioterapia (Acelerador Lineal, Braquiterapia, TPS, Phantom, Trazabilidad CENAM/IAEA)',
          title: 'Cómo Cotizar Calibración Radioterapia: Referencia Absoluta, Haz Referencia, Output Factors, IMRT/VMAT QA, Trazabilidad',
          description: 'Servicio por acelerador: calibración referencia absoluta (cámara Farmer 0.6cc trazable CENAM/IAEA), haz referencia 10x10cm 100cm SSD, output factors (conos, MLC, wedges), linealidad dosis/rate, IMRT/VMAT QA (phantom Delta4/Octavius/MapCheck), TPS commissioning, constancia validación + aviso COFEPRIS. Vigencia 12 meses (referencia) / 6 meses (IMRT).',
          priceRange: '$25,000 - $60,000 MXN por acelerador (referencia) | $15,000 - $30,000 (IMRT/VMAT QA semestral)',
          estimatedTime: '4-8 horas referencia | 2-4 horas IMRT QA',
          tips: [
            'Equipo PATRÓN trazable CENAM/IAEA OBLIGATORIO: Cámara Farmer 0.6cc (PTW 30013, Exradin A19) + electrómetro (PTW UNIDOS, Standard Imaging Max4000) certificado <12 meses. Phantom agua 30x30x30cm. Phantom IMRT (Delta4, ScandiDos Delta4 Discover, IBA MatriXX, Sun Nuclear MapCheck, ArcCHECK). Certificados calibración CENAM/IAEA adjuntos.',
            'Parámetros referencia (IAEA TRS-398 / AAPM TG-51): 1) kQ (factor calidad haz) ±0.5%. 2) Dosis referencia 10x10cm 100cm SSD: ±1%. 3) Linealidad dosis (MU): ±1% (10-400 MU). 4) Linealidad dose rate: ±1.5%. 5) Output factors (conos 1-10cm, MLC 1x1 a 40x40cm): ±1.5%. 6) Wedges (factor cuña): ±2%. 7) IMRT/VMAT QA: Gamma 3%/3mm ≥95%, 2%/2mm ≥90%. 8) Coincidencia haz/luz: ±2mm. 9) Isocentro (Winston-Lutz): ≤1mm.',
            'Entregables: 1) Informe calibración referencia (metodología, patrón CENAM/IAEA, resultados, conformidad). 2) Informe IMRT/VMAT QA (gamma index, mapas dosis, DVH). 3) Constancia validación (firma físico médico responsable, vigencia). 4) Aviso COFEPRIS. 5) Etiqueta equipo. PARTIDA: "Calibración referencia trazable CENAM/IAEA: $25,000-$60,000. IMRT/VMAT QA semestral: $15,000-$30,000. Comisión TPS completa: $100,000-$250,000."'
          ]
        }
      ]
