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
  }
]