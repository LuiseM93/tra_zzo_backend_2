export type Oficio = {
  id: string
  slug: string
  name: string
  title: string
  description: string
  faqs: { question: string; answer: string }[]
  pricingModels: string[]
  commonMaterials: string[]
}

export const oficios: Oficio[] = [
  {
    id: 'plomero',
    slug: 'plomeros',
    name: 'Plomería',
    title: 'Generador de Cotizaciones y Recibos para Plomeros',
    description: 'Crea cotizaciones y recibos profesionales para trabajos de plomería. Cotiza por punto, por metro lineal o por visita.',
    pricingModels: ['Por punto de agua', 'Por metro lineal de tubería', 'Por visita/diagnóstico', 'Por proyecto completo'],
    commonMaterials: ['Tubería de cobre', 'PVC', 'CPVC', 'Soldadura', 'Cinta teflón', 'Llaves de paso'],
    faqs: [
      {
        question: '¿Debería cobrar la visita de diagnóstico?',
        answer: 'Es altamente recomendable. Muchos técnicos bonifican el costo de la visita si el cliente acepta el trabajo de reparación, pero cobrar el diagnóstico protege tu tiempo y gastos de traslado.'
      },
      {
        question: '¿Cómo separo mano de obra y materiales?',
        answer: 'Para trabajos de plomería, separar materiales de mano de obra en el recibo da mayor transparencia. El cliente entiende mejor por qué una reparación de tubería oculta tiene un costo elevado (romper pared, material, soldar, resanar).'
      }
    ]
  },
  {
    id: 'electricista',
    slug: 'electricistas',
    name: 'Electricidad',
    title: 'Cotizador para Electricistas Profesionales',
    description: 'Calcula y presenta presupuestos eléctricos. Ideal para instalaciones de media y baja tensión, centros de carga y cableado.',
    pricingModels: ['Por salida eléctrica (contacto/apagador)', 'Por metro lineal de cableado', 'Por bajada', 'Por centro de carga'],
    commonMaterials: ['Cable THW', 'Poliducto', 'Chalupas', 'Contactos', 'Apagadores', 'Pastillas termomagnéticas'],
    faqs: [
      {
        question: '¿Qué es cobrar por salida?',
        answer: 'Cobrar por salida significa establecer un precio fijo por cada punto donde habrá un contacto, apagador o socket de luz. Esto facilita cotizar rápidamente sin medir cable.'
      },
      {
        question: '¿Cómo evito problemas si el cliente pide cambios?',
        answer: 'Usa el campo de Notas del recibo para especificar claramente cuántas salidas están incluidas. Cualquier extra (ranurado, resane) se cotiza por separado.'
      }
    ]
  },
  {
    id: 'carpintero',
    slug: 'carpinteros',
    name: 'Carpintería',
    title: 'Cotizador y Recibos para Carpinteros',
    description: 'Cotiza muebles a medida, clósets y cocinas. Detalla materiales, acabados y tiempos de entrega.',
    pricingModels: ['Por metro cuadrado (clósets)', 'Por metro lineal (cocinas)', 'Por mueble a medida', 'Por instalación'],
    commonMaterials: ['MDF', 'Triplay', 'Melamina', 'Bisagras bidimensionales', 'Correderas', 'Barniz/Laca'],
    faqs: [
      {
        question: '¿Cuánto anticipo debo pedir?',
        answer: 'El estándar en carpintería es solicitar al menos el 50% al 60% de anticipo para cubrir el costo de los materiales (madera/MDF, herrajes) antes de iniciar el corte.'
      },
      {
        question: '¿Debo detallar los herrajes en el recibo?',
        answer: 'Sí. Un cliente valora saber si estás usando bisagras de cierre lento o estándar, ya que impacta directamente en el precio final de una cocina o clóset.'
      }
    ]
  },
  {
    id: 'herrero',
    slug: 'herreros',
    name: 'Herrería',
    title: 'Cotizador para Herreros y Soldadores',
    description: 'Genera cotizaciones para puertas, ventanas, zaguanes y estructuras metálicas con desglose de perfiles y pintura.',
    pricingModels: ['Por kilogramo de acero', 'Por metro cuadrado (puertas/ventanas)', 'Por proyecto estructural'],
    commonMaterials: ['Perfil tubular (PTR)', 'Ángulos', 'Lámina negra/galvanizada', 'Electrodos', 'Fondo anticorrosivo'],
    faqs: [
      {
        question: '¿Es mejor cobrar por kilo o por metro?',
        answer: 'Para estructuras pesadas suele usarse el costo por kilo fabricado. Para puertas y protecciones, es más fácil para el cliente entender un precio por metro cuadrado.'
      },
      {
        question: '¿Incluyo la instalación y pintura en el mismo precio?',
        answer: 'Es mejor desglosarlo. Algunos clientes prefieren pintar ellos mismos o tienen quién instale. Mostrar el costo de instalación y pintura por separado te da flexibilidad para negociar.'
      }
    ]
  },
  {
    id: 'albanil',
    slug: 'albaniles',
    name: 'Albañilería',
    title: 'Cotizador y Presupuestos de Albañilería',
    description: 'Cotiza cimentación, levantamiento de muros, castillos y aplanados. Cobro por destajo o por día.',
    pricingModels: ['Por metro cuadrado (muro/aplanado/piso)', 'Por metro lineal (cadenas/castillos)', 'Por jornada (día de maestro y chalán)', 'A destajo'],
    commonMaterials: ['Cemento', 'Arena', 'Grava', 'Varilla', 'Armex', 'Ladrillo/Block'],
    faqs: [
      {
        question: '¿Qué diferencia hay entre trabajar por día y a destajo?',
        answer: 'A destajo cobras por la cantidad de trabajo terminado (ej. $X por metro de muro), incentivando la rapidez. Por día cobras una tarifa fija independientemente del avance, útil para trabajos irregulares o detalles.'
      },
      {
        question: '¿Quién debe comprar el material?',
        answer: 'Si el cliente compra el material (solo mano de obra), es vital dejar claro en el recibo que los tiempos muertos por falta de material se cobran aparte. Si tú lo compras, incluye un margen por acarreo y gestión.'
      }
    ]
  },
  {
    id: 'pintor',
    slug: 'pintores',
    name: 'Pintura',
    title: 'Cotizador para Pintores de Interiores y Exteriores',
    description: 'Presupuesta pintura vinílica, esmalte, impermeabilización y preparación de superficies.',
    pricingModels: ['Por metro cuadrado (muros lisos)', 'Por metro cuadrado (texturizado/rugoso)', 'Por proyecto'],
    commonMaterials: ['Pintura vinílica/esmalte', 'Sellador', 'Rodillos y felpas', 'Plástico protector', 'Cinta masking'],
    faqs: [
      {
        question: '¿Cómo cobro la preparación de la pared?',
        answer: 'Raspar, resanar y aplicar sellador requiere mucho tiempo. Debes cobrar el metro cuadrado de "preparación" separado de la "aplicación de pintura", o unificarlo pero explicando al cliente el proceso completo.'
      },
      {
        question: '¿Qué pasa si los muebles estorban?',
        answer: 'Incluye en tus notas que el movimiento de muebles pesados y protección de áreas tiene un costo adicional o es responsabilidad del cliente antes de tu llegada.'
      }
    ]
  },
  {
    id: 'cerrajero',
    slug: 'cerrajeros',
    name: 'Cerrajería',
    title: 'Recibos y Cotizaciones para Cerrajeros',
    description: 'Genera notas para aperturas, cambios de combinación, copias de llaves con chip y reparación de chapas.',
    pricingModels: ['Por apertura (diurna/nocturna)', 'Por copia/programación de chip', 'Por instalación de chapa', 'Por servicio a domicilio'],
    commonMaterials: ['Cilindros', 'Llaves en bruto', 'Chapetones', 'Programadores OBD2 (autos)'],
    faqs: [
      {
        question: '¿Por qué diferenciar servicio de día y de noche?',
        answer: 'La cerrajería de emergencia nocturna o en fin de semana tiene una prima de urgencia. Acostumbra a tus clientes a ver el concepto "Recargo por horario extendido" en sus recibos.'
      },
      {
        question: '¿Cómo garantizo una apertura automotriz?',
        answer: 'Usa la sección de Notas para indicar que no te haces responsable por daños previos en el cilindro o el sistema eléctrico del auto, especialmente en vehículos modernos.'
      }
    ]
  },
  {
    id: 'aire-acondicionado',
    slug: 'aire-acondicionado',
    name: 'Aire Acondicionado',
    title: 'Cotizador para Técnicos de Aire Acondicionado',
    description: 'Notas y presupuestos para instalación, mantenimiento preventivo y recarga de gas de Minisplits y HVAC.',
    pricingModels: ['Por mantenimiento preventivo (limpieza)', 'Por metro excedente de instalación', 'Por recarga de refrigerante', 'Por instalación de equipo nuevo'],
    commonMaterials: ['Gas refrigerante (R410A, R22)', 'Tubería de cobre', 'Armaflex', 'Soportes para condensadora', 'Cable de control'],
    faqs: [
      {
        question: '¿Cómo detallo un mantenimiento preventivo?',
        answer: 'No pongas solo "Limpieza". Desglosa: Limpieza de serpentín, revisión de presiones de gas, limpieza de filtros y revisión de capacitores. El cliente valorará más el servicio.'
      },
      {
        question: '¿Debo cobrar si el equipo ya no tiene arreglo?',
        answer: 'Sí, la "Visita técnica de diagnóstico" se cobra. Si detectas que el compresor está quemado y el cliente no quiere reparar, tu tiempo invertido revisando el equipo debe ser compensado.'
      }
    ]
  },
  {
    id: 'jardinero',
    slug: 'jardineros',
    name: 'Jardinería',
    title: 'Cotizador para Servicios de Jardinería',
    description: 'Presupuesta corte de pasto, poda de árboles, diseño de jardines y sistemas de riego.',
    pricingModels: ['Por metro cuadrado (pasto/diseño)', 'Por mantenimiento periódico (mensual/quincenal)', 'Por derribo/poda de árbol alto'],
    commonMaterials: ['Pasto en rollo', 'Fertilizante/Tierra', 'Plantas de ornato', 'Manguera de riego', 'Bolsas para basura'],
    faqs: [
      {
        question: '¿Cómo cobro el retiro de la basura/follaje?',
        answer: 'La recolección y traslado del follaje cortado a un tiradero autorizado tiene un costo. Siempre añade el concepto de "Recolección y retiro de escombro verde" en tu recibo.'
      },
      {
        question: '¿Cobro por hora o por proyecto?',
        answer: 'Para mantenimientos de rutina de casas, una cuota fija por visita (o mensualidad) es ideal. Para plantación de árboles nuevos o instalación de riego, cotiza por proyecto (material + mano de obra).'
      }
    ]
  },
  {
    id: 'albanil',
    slug: 'albaniles',
    name: 'Albañilería y Construcción',
    title: 'Cotizador para Albañiles y Maestros de Obra',
    description: 'Calcula costos para muros, enjarres, colados, losas y cimentaciones de forma profesional.',
    pricingModels: ['Por metro cuadrado (muros, pisos, aplanados)', 'Por destajo (obra completa)', 'Por jornal / día (peón y maestro)'],
    commonMaterials: ['Cemento', 'Arena y Grava', 'Varilla / Armex', 'Block / Ladrillo', 'Impermeabilizante'],
    faqs: [
      {
        question: '¿Debería incluir el material en la cotización?',
        answer: 'Depende de ti. Cobrar "A todo costo" (Mano de obra + Material) deja más ganancia, pero requieres capital inicial o un buen anticipo. Si cobras solo mano de obra, asegúrate de pedir el material con tiempo al cliente.'
      },
      {
        question: '¿Qué pasa si llueve o no se puede trabajar?',
        answer: 'Aclara en las notas de tu recibo que el tiempo estimado no incluye días perdidos por causas ajenas (clima, falta de permisos, retrasos en la entrega del material por el cliente).'
      }
    ]
  },
  {
    id: 'herrero',
    slug: 'herreros',
    name: 'Herrería y Soldadura',
    title: 'Presupuestos y Recibos para Herreros',
    description: 'Cotiza puertas, protecciones, barandales, zaguanes y estructuras metálicas.',
    pricingModels: ['Por kilogramo de acero (estructuras)', 'Por diseño y metro cuadrado (puertas/portones)', 'Por metro lineal (barandales)', 'Por reparación específica'],
    commonMaterials: ['PTR', 'Ángulos y Soleras', 'Lámina lisa/antiderrapante', 'Soldadura (6013, 7018)', 'Pintura anticorrosiva y esmalte'],
    faqs: [
      {
        question: '¿Cómo protejo mi ganancia al cotizar trabajos de herrería?',
        answer: 'El acero cambia de precio constantemente. Siempre añade una nota en el recibo: "Precios sujetos a cambio después de 5 días por fluctuaciones en el costo del metal".'
      },
      {
        question: '¿Cuánto anticipo debo pedir?',
        answer: 'El material en herrería es costoso. Pide al menos el 50% para cubrir metales, soldadura y discos, y cobra el resto contra entrega e instalación.'
      }
    ]
  },
  // ===== NUEVOS OFICIOS SEO PROGRAMÁTICO 2024-2025 =====
  // Instaladores de Tablaroca / Drywall
  {
    id: 'tablaroca',
    slug: 'instaladores-tablaroca',
    name: 'Instalación de Tablaroca y Drywall',
    title: 'Cotizador para Instaladores de Tablaroca y Drywall',
    description: 'Cotiza instalación de tablaroca, plafones, muros divisorios y plafones acústicos. Precio por m², por placa o por proyecto completo.',
    pricingModels: ['Por metro cuadrado instalado', 'Por placa de tablaroca (1.22x2.44m)', 'Por metro lineal de perfilería', 'Por proyecto completo (material + mano de obra)'],
    commonMaterials: ['Tablaroca 1/2" y 5/8"', 'Perfil montante y canal', 'Cinta de papel/fibra de vidrio', 'Pasta para juntas (compuesto)', 'Tornillos para drywall', 'Plafones acústicos/vinílicos'],
    faqs: [
      {
        question: '¿Cuánto cobrar por metro cuadrado de tablaroca instalado?',
        answer: 'En México 2024-2025, el rango típico de mano de obra es $120-$220 MXN/m² (solo instalación). Si incluye material (tablaroca, perfilería, pasta, cinta), el rango sube a $280-$450 MXN/m². Cotiza por m² de superficie neta (no de piso).'
      },
      {
        question: '¿Cómo se cotiza un plafón de tablaroca vs muro divisor?',
        answer: 'El plafón lleva más perfilería (canal perimetral + montantes cada 40-60cm) y es trabajo en altura (andamio/escala). Cobra $30-$50 MXN/m² extra vs muro divisor. Si lleva aislamiento acústico (lana mineral), añade $40-$70 MXN/m² de material + mano de obra.'
      },
      {
        question: '¿Debo incluir el resane y lijado en el precio por m²?',
        answer: 'Sí, el estándar profesional incluye: colocación de placas, cintado, 3 capas de pasta (relleno, segunda, tersado) y lijado final listo para pintar. Si el cliente pide solo "colocado y cintado", especifícalo en notas y cobra 30-40% menos.'
      }
    ]
  },
  // Técnicos en Refrigeración Comercial / Cámaras Frigoríficas
  {
    id: 'refrigeracion-comercial',
    slug: 'tecnicos-refrigeracion-comercial',
    name: 'Refrigeración Comercial e Industrial',
    title: 'Cotizador para Técnicos en Refrigeración Comercial y Cámaras Frigoríficas',
    description: 'Presupuestos para cámaras de frío, congeladores, enfriadores de proceso, racks de compresores y mantenimiento preventivo industrial.',
    pricingModels: ['Por capacidad frigorífica (TR/HP)', 'Por metro cúbico de cámara', 'Por punto de evaporación/condensación', 'Por contrato de mantenimiento mensual/anual'],
    commonMaterials: ['Compresores (Scroll, Semiherméticos, Tornillo)', 'Gas refrigerante (R404A, R448A, R449A, CO2 transcrítico)', 'Válvulas de expansión electrónicas', 'Controladores electrónicos (Carel, Danfoss, Eliwell)', 'Aislamiento poliuretano inyectado/paneles sándwich', 'Evaporadores de tiro forzado'],
    faqs: [
      {
        question: '¿Cómo se cotiza una cámara frigorífica llave en mano?',
        answer: 'Se cotiza por m³ de volumen interno: cámaras de conservación (0 a 5°C) $3,500-$5,500 MXN/m³; cámaras de congelación (-18 a -25°C) $4,500-$7,500 MXN/m³. Incluye panel sándwich, piso aislado, puerta, equipo de refrigeración, controles, instalación y puesta en marcha. Pide 50% anticipo para panel y equipo.'
      },
      {
        question: '¿Qué incluye un contrato de mantenimiento preventivo mensual?',
        answer: 'Revisión de presiones/amperajes, limpieza de condensadores, revisión de fugas (detector electrónico), chequeo de contactores y protecciones, prueba de paro/marcha, reporte fotográfico. Cobro típico: $800-$2,500 MXN/mes por rack o equipo independiente según capacidad.'
      }
    ]
  },
  // Instaladores de Cámaras de Seguridad / CCTV / Control de Acceso
  {
    id: 'cctv-seguridad',
    slug: 'instaladores-camaras-seguridad',
    name: 'Cámaras de Seguridad y CCTV',
    title: 'Cotizador para Instaladores de Cámaras de Seguridad, CCTV y Control de Acceso',
    description: 'Presupuesta sistemas de videovigilancia IP/analógico, DVR/NVR, cableado estructurado, control de acceso biométrico y alarmas.',
    pricingModels: ['Por cámara instalada (incluye cableado hasta 20m)', 'Por canal del DVR/NVR', 'Por metro lineal de cableado UTP/coaxial', 'Por paquete llave en mano (kit 4/8/16 cámaras)'],
    commonMaterials: ['Cámaras IP (bullet, domo, PTZ, turreta) 2MP/4MP/8MP', 'Grabadores NVR (PoE integrado) / DVR híbridos', 'Cable UTP Cat6 exterior / Coaxial RG59+Power', 'Conectores RJ45, BNC, baluns', 'Fuentes conmutadas 12V/24V', 'Discos duros vigilancia (Purple/skyhawk)', 'Switches PoE, gabinetes rack, accesorios montaje'],
    faqs: [
      {
        question: '¿Cuánto cobrar por instalar una cámara IP con cableado?',
        answer: 'Precio base 2024-2025: $800-$1,500 MXN por cámara (mano de obra: tendido UTP hasta 20m, conectorizado, configuración IP, enfoque, prueba en NVR/app). Cable extra: $15-$25 MXN/m. Configuración remota en app del cliente: $200-$400 extra por sistema.'
      },
      {
        question: '¿Cómo cotizar un kit completo 8 cámaras vs por pieza?',
        answer: 'Por paquete das mejor precio unitario y garantizas compatibilidad. Kit 8 cámaras 2MP + NVR 8ch + 2TB HDD + 300m cable + instalado: $18,000-$28,000 MXN según marca (Hikvision/Dahua/Uniview vs genéricos). Por pieza sale 20-30% más caro. Ofrece ambas opciones en la cotización.'
      },
      {
        question: '¿Incluyo el disco duro en la cotización de cámaras?',
        answer: 'SÍ, siempre. Un NVR sin disco no graba. Cotiza disco dedicado vigilancia (WD Purple, Seagate SkyHawk) calculado: 1TB ≈ 7-10 días con 8 cámaras 2MP H.265+. Pregunta al cliente cuántos días de retención quiere y dimensiona el disco en la cotización.'
      }
    ]
  },
  // Instaladores de Paneles Solares / Fotovoltaico Residencial
  {
    id: 'paneles-solares',
    slug: 'instaladores-paneles-solares',
    name: 'Energía Solar Fotovoltaica',
    title: 'Cotizador para Instaladores de Paneles Solares Residenciales y Comerciales',
    description: 'Presupuestos llave en mano para sistemas on-grid (interconexión CFE), inversores, estructuras, trámites y monitoreo.',
    pricingModels: ['Por kWp instalado (precio llave en mano)', 'Por panel (módulo) instalado', 'Por inversor + estructura + mano de obra', 'Por m² de techo disponible'],
    commonMaterials: ['Módulos fotovoltaicos (Monocristalino 450-580W)', 'Inversores on-grid (Huawei, Growatt, Solis, Deye, Fronius)', 'Estructuras aluminio/acero galvanizado (techo plano, dos aguas, lámina)', 'Cableado solar 4mm²/6mm² UV', 'Conectores MC4, cajas de combinación', 'Protecciones DC/AC, medidor bidireccional'],
    faqs: [
      {
        question: '¿Cuánto cobrar por kWp instalado en México 2024-2025?',
        answer: 'Rango de mercado llave en mano (equipo + estructura + inversor + cableado + trámite CFE + puesta en marcha): $18,000-$26,000 MXN/kWp. Sistemas chicos (1-3 kWp) salen más caros por kW ($24-26k); grandes (10+ kWp) bajan a $18-20k/kWp. No cotices solo paneles: el cliente quiere "que funcione y CFE me acepte".'
      },
      {
        question: '¿Incluyo el trámite de interconexión CFE en la cotización?',
        answer: 'SÍ, es tu diferencial. Cotiza aparte: "Gestión de trámite CFE (contrato de interconexión, dictamen, medidor bidireccional)": $3,000-$6,000 MXN. Muchos "instaladores" solo ponen paneles y dejan al cliente solo con CFE. Tú cobras por resolverle el problema completo.'
      }
    ]
  },
  // Instaladores de Gas LP / Gas Natural / Líneas de Gas
  {
    id: 'gas-lp-natural',
    slug: 'instaladores-gas-lp-natural',
    name: 'Instalaciones de Gas LP y Gas Natural',
    title: 'Cotizador para Instaladores de Gas LP, Gas Natural y Líneas de Gas',
    description: 'Presupuestos para tanques estacionarios, reguladores, tubería cobre/policapileno, conversión de equipos, dictámenes y pruebas de hermeticidad.',
    pricingModels: ['Por punto de consumo (estufa, calentador, secadora, boiler)', 'Por metro lineal de tubería (cobre / policapileno / acero negro)', 'Por tanque estacionario instalado (capacidad litros)', 'Por dictamen/hermeticidad + alta de suministro'],
    commonMaterials: ['Tubería de cobre tipo K/L (1/2", 3/4", 1")', 'Policapileno (PEX-AL-PEX) certificado gas', 'Reguladores de 1ra y 2da etapa (LP/GN)', 'Válvulas de bola, flexibles certificados', 'Tanques estacionarios 120-1000L', 'Detectores de fuga gas', 'Cinta teflón gas (amarilla), sellador anaeróbico'],
    faqs: [
      {
        question: '¿Cuánto cobrar por punto de gas (estufa/calentador) con tubería de cobre?',
        answer: 'Mano de obra por punto: $800-$1,500 MXN (incluye tendido hasta 5m lineal, conexión, prueba de hermeticidad con jabón/manómetro). Material aparte: cobre 1/2" ~$120/m, 3/4" ~$220/m + accesorios. Si es policapileno certificado gas: mano de obra similar, material 30-40% más barato que cobre.'
      },
      {
        question: '¿Debo incluir el dictamen de instalación en la cotización?',
        answer: 'OBLIGATORIO para alta de suministro o tanques >300L. Cotízalo como partida separada: "Dictamen de instalación de gas + trámite ante proveedor/PC": $1,500-$3,500 MXN según municipio y tipo de instalación. Lo firma un Responsable de Instalación (RI) certificado. Si no eres RI, subcontrata y pon tu margen.'
      }
    ]
  },
  // Impermeabilizadores / Especialistas en Impermeabilización
  {
    id: 'impermeabilizacion',
    slug: 'impermeabilizadores',
    name: 'Impermeabilización de Techos y Azoteas',
    title: 'Cotizador para Impermeabilizadores: Techos, Azoteas, Muros y Cisternas',
    description: 'Presupuestos por m² para sistemas acrílicos, asfálticos, poliuretano, cementosos y membranas líquidas. Incluye preparación, sellado de grietas y garantía.',
    pricingModels: ['Por metro cuadrado (sistema completo: prep + membrana + acabado)', 'Por metro lineal de grieta/ junta a sellar', 'Por cisterna/aljibe (m² interno)', 'Por garantía extendida (5, 7, 10, 15 años)'],
    commonMaterials: ['Impermeabilizante acrílico (5, 7, 10 años)', 'Membrana asfáltica modificada SBS/APP (3-5mm)', 'Poliuretano líquido (alto tráfico/peatonal)', 'Cementoso cristalizante (cisternas/muros enterrados)', 'Malla de refuerzo (políester/fibra de vidrio)', 'Sellador poliuretánico (juntas, encuentros)'],
    faqs: [
      {
        question: '¿Cuánto cobrar por m² de impermeabilización acrílica en 2024-2025?',
        answer: 'Sistema completo (lavado a presión, sellado grietas, 1ra mano sellador, malla en encuentros, 2-3 manos acrílico 5-7 años): $180-$320 MXN/m². Acrílico 10 años / poliuretano: $300-$500 MXN/m². Membrana asfáltica: $280-$450 MXN/m². Siempre visita antes: estado del sustrato cambia el precio 30-50%.'
      },
      {
        question: '¿Cómo justifico el precio vs "el de la esquina que cobra $80/m²"?',
        answer: 'En el recibo desglosa: 1) Limpieza real (no barrido), 2) Reparación de grietas con malla + sellador elástico, 3) Sellador penetrante (imprimante), 4) Membrana con gramaje certificado (kg/m²), 5) Refuerzos en bajantes, parapetos, encuentros. El barato salta en 6 meses; tú das garantía escrita por años.'
      }
    ]
  },
  // Instaladores de Pisos / Ceramistas / Losetas / Porcelanato
  {
    id: 'pisos-ceramicos',
    slug: 'instaladores-pisos-ceramicos',
    name: 'Instalación de Pisos y Revestimientos Cerámicos',
    title: 'Cotizador para Instaladores de Pisos: Porcelanato, Cerámica, Mármol y Lamínicos',
    description: 'Presupuestos por m² para colocación de pisos y muros: porcelanato, cerámica, mármol, cantera, laminados, vinílicos SPC/WPC. Incluye nivelado, cortes y juntas.',
    pricingModels: ['Por metro cuadrado colocado (piso)', 'Por metro cuadrado en muro (más lento)', 'Por metro lineal de zoclo/rodapié', 'Por m² de autonivelante / regularización previo'],
    commonMaterials: ['Adhesivo cementicio (C1, C2, C2S1, C2S2)', 'Boquilla / lechada (epóxica, cementicia, furánica)', 'Nivelador / autonivelante cementicio', 'Separadores / crucetas / sistemas nivelación (clips/cuñas)', 'Cortadora húmeda, disco diamante', 'Rodapié / zoclo (cerámico, PVC, MDF, aluminio)'],
    faqs: [
      {
        question: '¿Cuánto cobrar por m² de porcelanato en piso vs muro en 2024-2025?',
        answer: 'Piso: $180-$300 MXN/m² (formato ≤60x60cm). Formato grande (80x80, 100x100, 120x120): +$50-$100/m² por dificultad y desperdicio. Muro: $220-$380 MXN/m² (más lento, requiere más adhesivo, riesgo de deslizamiento). Incluye: adhesivo C2S1/2, boquilla, cruces, limpieza final. NO incluye retiro de piso anterior ni autonivelante.'
      },
      {
        question: '¿Cómo cotizo el retiro de piso viejo y escombro?',
        answer: 'Partida separada: "Retiro de piso/azulejo existente + acarreo de escombro a tiradero autorizado": $80-$150 MXN/m² según espesor y dureza. Si hay losa de concreto dañada debajo, cotiza "Reparación de losa / regularización" aparte. Nunca lo regales: es mano de obra pesada y costo de volteo.'
      }
    ]
  },
  // Técnicos en Mantenimiento de Albercas / Piscinas
  {
    id: 'mantenimiento-albercas',
    slug: 'mantenimiento-albercas',
    name: 'Mantenimiento de Albercas y Piscinas',
    title: 'Cotizador para Mantenimiento de Albercas: Limpieza, Químicos, Equipos y Reparaciones',
    description: 'Presupuestos de mantenimiento quincenal/mensual, apertura/cierre de temporada, cambio de arena/vidrio, reparación de bombas, filtros, cloradores salinos.',
    pricingModels: ['Por visita de mantenimiento (quincenal/mensual)', 'Por m³ de agua (tratamiento químico)', 'Por apertura/cierre de temporada', 'Por reparación de equipo (bomba, filtro, clorador, calentador)'],
    commonMaterials: ['Cloro (tricloro, dicloro, hipoclorito)', 'Clorador salino (célula electrolítica)', 'Ácido muriático / reductor pH', 'Alguicida, floculante, clarificante', 'Arena sílice / vidrio filtrante / cartuchos', 'Bombas centrífugas (WhisperFlo, IntelliFlo, etc.)', 'Filtros de arena / cartucho / tierra diatomeas'],
    faqs: [
      {
        question: '¿Cuánto cobrar mantenimiento mensual de alberca residencial?',
        answer: 'Visita quincenal (2x/mes): $1,200-$2,200 MXN/mes (incluye: cepillado, aspirado, skimmer, vaciado prefiltro, check químicos, dosificación cloro/pH). Visita semanal (4x/mes): $2,000-$3,500 MXN/mes. Químicos aparte o incluidos según acuerdo. Siempre cotiza "Apertura de temporada" ($2,500-$5,000) y "Cierre/Invernaje" ($1,500-$3,000) como partidas extra.'
      },
      {
        question: '¿Cómo cobro el cambio de arena del filtro?',
        answer: 'Mano de obra: $1,500-$2,500 MXN (vaciar, limpiar laterales, cargar arena nueva/vidrio, armar, purgar, probar). Arena sílice #20 (25kg): $250-$350 c/u (filtro 24" = 4-5 costales; 30" = 7-9). Vidrio filtrante (más duradero): 2.5x precio arena. Cotízalo como "Mantenimiento mayor anual" en tu recibo.'
      }
    ]
  },
  // Instaladores de Cancelería / Ventanas / Puertas (PVC, Aluminio, Madera)
  {
    id: 'canceleria-ventanas',
    slug: 'instaladores-canceleria-ventanas',
    name: 'Cancelería y Ventanas (PVC, Aluminio, Madera)',
    title: 'Cotizador para Instaladores de Cancelería: Ventanas, Puertas, Ventanales y Mosquiteros',
    description: 'Presupuestos por m² o por hoja para series europeas (PVC), líneas de aluminio (económica, media, alta), madera. Incluye herrajes, vidrios, instalación y sellado.',
    pricingModels: ['Por metro cuadrado de vano (vidrio + marco + instalación)', 'Por hoja/ventana (fijo, proyectante, oscilobatiente, corredera)', 'Por metro lineal de perímetro sellado', 'Por paquete: casa completa (ventanas + puertas + mosquiteros)'],
    commonMaterials: ['Perfiles PVC (Kömmerling, Rehau, Veka, Deceuninck, genéricos)', 'Aluminio línea 30/40/45/50/60/70 (económico a alta)', 'Madera (cedro, pino tratado, roble, cumaru)', 'Vidrio doble (DVH) 4/12/4, 6/12/6, bajo emisivo, laminado', 'Herrajes Roto, Siegenia, GU, Maco, nacionales', 'Sellador poliuretano / silicona neutra', 'Espuma PU expansiva, cintas precomprimidas'],
    faqs: [
      {
        question: '¿Cuánto cuesta el m² de ventana PVC instalado en México 2024-2025?',
        answer: 'PVC gama media (perfil 70mm, DVH 4/12/4, herraje oscilobatiente, instalado): $3,800-$5,500 MXN/m². Aluminio línea 45/50 (DVH, oscilobatiente): $3,200-$4,800 MXN/m². Serie europea alta (PVC 82mm, triple vidrio, herraje oculto): $6,500-$9,000 MXN/m². SIEMPRE cotiza por m² de vano (ancho x alto exterior), no por hoja.'
      },
      {
        question: '¿Incluyo mosquiteros en la cotización base o aparte?',
        answer: 'Cotízalos APARTE como línea opcional: "Mosquitero enrollable/deslizable/corredizo por hoja: $350-$650 MXN c/u". El cliente ve el precio base de la ventana y decide. Si lo incluyes "gratis", sube el m² $200-$300 y no se nota el valor. Mejor: base competitiva + upsell visible.'
      }
    ]
  },
  // Técnicos en Automatización / Portones / Persianas / Smart Home Básico
  {
    id: 'automatizacion-portones',
    slug: 'automatizacion-portones-persianas',
    name: 'Automatización de Portones, Persianas y Accesos',
    title: 'Cotizador para Automatización: Portones Correderos/Batientes, Persianas, Barreras y Control de Acceso',
    description: 'Presupuestos para motores, controles, fotocélulas, baterías de respaldo, integración con app/asistentes. Residencial y comercial.',
    pricingModels: ['Por motor/kit instalado (portón corredero/batiente)', 'Por metro cuadrado de persiana enrollable motorizada', 'Por punto de control (llave, keypad, tag, app, biométrico)', 'Por paquete: motor + 2 controles + fotocélula + instalación'],
    commonMaterials: ['Motores portón corredero (400-2000kg)', 'Motores portón batiente (brazo articulado / tornillo sin fin)', 'Motores tubulares persianas (Somfy, Nice, Genoa, genéricos)', 'Controles remoto 433MHz / WiFi / Zigbee', 'Fotocélulas, bandas de seguridad, destelladores', 'Baterías respaldo 12V/7Ah, 12V/18Ah', 'Barreras vehiculares, bolardos, lectores RFID/QR'],
    faqs: [
      {
        question: '¿Cuánto cobrar por motorizar un portón corredizo residencial?',
        answer: 'Kit motor 600-800kg (Nice, BFT, Rossi, genérico bueno) + 2 controles + fotocélula + destellador + instalación: $6,500-$11,000 MXN. Portón >1000kg o industrial: $12,000-$22,000 MXN. Si el portón no corre bien (riel torcido, ruedas gastadas), cobra "Acondicionamiento de portón" ANTES de poner motor: $1,500-$4,000 MXN.'
      },
      {
        question: '¿Cómo cotizo persianas enrollables motorizadas?',
        answer: 'Por m² de tela: motor tubular (Ø45/58mm) + tubo + soportes + tela (blackout/screen/translúcida) + control remoto + instalación: $1,800-$3,200 MXN/m² según marca motor (Somfy/Nice = premium; Genoa/Dooya = media; genérico = bajo). Ancho >2.5m requiere motor mayor + tubo reforzado (+$300-$500/m²).'
      }
    ]
  },
  // Especialistas en Estructuras Metálicas / Naves Industriales / Mezannines
  {
    id: 'estructuras-metalicas',
    slug: 'estructuras-metalicas-naves',
    name: 'Estructuras Metálicas, Naves y Mezannines',
    title: 'Cotizador para Estructuras Metálicas: Naves Industriales, Mezannines, Puentes Grúa y Escaleras',
    description: 'Presupuestos por kg fabricado, por m² de nave/mezannine, por tonelada. Incluye ingeniería, planos, fabricación, galvanizado/pintura, montaje y cálculo estructural.',
    pricingModels: ['Por kilogramo de acero fabricado y pintado/galvanizado', 'Por metro cuadrado de nave (estructura + cubierta + cerramientos)', 'Por metro cuadrado de mezannine (estructura + losa/entablado + barandal)', 'Por tonelada de estructura (proyectos grandes)'],
    commonMaterials: ['Perfiles W, IPR, IPS, PTR, ángulo, placa', 'Lámina acanalada (KR-18, RN-100, Panel sándwich)', 'Tornillería estructural (A325, A490), anclajes químicos', 'Pintura epóxica / poliuretano / galvanizado en caliente', 'Concreto para losa colaborante / losa nervada', 'Grúas/plumas para montaje'],
    faqs: [
      {
        question: '¿Cuánto cuesta el kg de estructura metálica fabricada y pintada en 2024-2025?',
        answer: 'Estructura liviana (PTR/ángulo, pintada en taller): $45-$65 MXN/kg. Estructura pesada (perfiles W, IPR, conexiones atornilladas/soldadas, pintada): $55-$80 MXN/kg. Galvanizado en caliente: +$12-$18 MXN/kg sobre precio pintado. Incluye: corte, taladrado, soldadura, granallado/pintura, tornillería. NO incluye: cimentación, montaje, flete, grúa.'
      },
      {
        question: '¿Cómo cotizo un mezannine llave en mano?',
        answer: 'Por m² de entrepiso: estructura metálica + losa (colaborante 6-8cm + malla) + barandal + escalera + pintura: $2,800-$4,500 MXN/m² según carga viva (250-500 kg/m²) y luces. Pide 40% anticipo (acero), 30% a llegada de material a obra, 30% contra entrega. Incluye "Cálculo estructural y planos para licencia" como partida separada ($15,000-$35,000).'
      }
    ]
  },
  // Técnicos en Bombeo / Presurización / Hidroneumáticos / Pozos
  {
    id: 'bombeo-presurizacion',
    slug: 'bombeo-presurizacion-pozos',
    name: 'Bombeo, Presurización y Pozos',
    title: 'Cotizador para Sistemas de Bombeo: Hidroneumáticos, Pozos Profundos, Presurización y Tratamiento',
    description: 'Presupuestos para equipos de presión constante (VFD), bombas sumergibles, hidroneumáticos, cisternas, tinacos, ablandadores, ósmosis inversa.',
    pricingModels: ['Por equipo instalado (bomba + control + accesorios)', 'Por litro/segundo de capacidad (diseño hidráulico)', 'Por metro de profundidad de pozo (perforación + equipamiento)', 'Por m³/día de tratamiento (ablandador, ósmosis, cloración)'],
    commonMaterials: ['Bombas centrífugas/periféricas/multietapa (Grundfos, Franklin, Pedrollo, nacional)', 'Bombas sumergibles 4"/6"/8" (pozos)', 'Variadores de frecuencia (VFD) presión constante', 'Tanques hidroneumáticos / de diafragma (Varem, Wellxtrol, nacionales)', 'Presostatos, presotransductores, medidores flujo', 'Ablandadores (resina catiónica, válvula automática)', 'Ósmosis inversa residencial/comercial', 'Cloradores, dosificadores, UV'],
    faqs: [
      {
        question: '¿Cuánto cobrar por instalar un hidroneumático con bomba y tanque?',
        answer: 'Kit residencial 1-2 regaderas (bomba 0.5-1HP + tanque 24-50L + presostato + base + accesorios + instalación): $7,500-$13,000 MXN. Sistema VFD presión constante (bomba + variador + tanque pequeño + sensor): $14,000-$22,000 MXN. Incluye: conexiones cobre/PVC, válvulas check/ball, cableado, prueba. NO incluye cisterna/tinaco ni tubería de distribución general.'
      },
      {
        question: '¿Cómo cotizo un pozo profundo llave en mano?',
        answer: 'TRES partidas separadas en el recibo: 1) Perforación: $1,200-$2,200 MXN/m lineal (4.5"-6.5") según geología. 2) Equipamiento: bomba sumergible + cable + tubería columna + head + panel + arrancador/VFD: $35,000-$80,000 MXN según profundidad y caudal. 3) Obra civil: caseta, losa, descarga, conexión a red: $15,000-$30,000. SIEMPRE pide estudio geohidrológico antes de cotizar perforación.'
      }
    ]
  },
  // Instaladores de Aislante Térmico / Acústico / SATE / Fachadas Ventiladas
  {
    id: 'aislante-termico-acustico',
    slug: 'aislante-termico-acustico-sate',
    name: 'Aislamiento Térmico, Acústico y Fachadas SATE',
    title: 'Cotizador para Aislamiento: Lana Mineral, Poliuretano Proyectado, SATE, Fachadas Ventiladas',
    description: 'Presupuestos por m² para inyección de poliuretano, colocación de lana mineral/rockwool, sistemas SATE (aislamiento exterior), fachadas ventiladas, techos fríos.',
    pricingModels: ['Por metro cuadrado (espesor y densidad definen precio)', 'Por metro cúbico de poliuretano proyectado (densidad kg/m³)', 'Por m² de sistema SATE completo (placa + pegamento + malla + acabado)', 'Por m² de fachada ventilada (subestructura + aislamiento + revestimiento)'],
    commonMaterials: ['Poliuretano proyectado (alta/baja densidad 30-60 kg/m³)', 'Lana mineral / Rockwool (paneles, mantas, 40-160 kg/m³)', 'EPS / XPS (poliestireno expandido/extruido)', 'Sistemas SATE (Weber, Sto, Parex, nacionales)', 'Perfiles para fachada ventilada (aluminio, acero inox)', 'Revestimientos: fibrocemento, HPL, cerámico, piedra, composite'],
    faqs: [
      {
        question: '¿Cuánto cuesta el m² de poliuretano proyectado en 2024-2025?',
        answer: 'Densidad 40 kg/m³ (techos/azoteas): $380-$550 MXN/m² por pulgada de espesor (25mm). Densidad 60 kg/m³ (muros/fachadas/alto tráfico): $550-$750 MXN/m²/pulgada. Incluye: preparación, proyección, corte/exceso, limpieza. Mínimo de obra: 30-50 m² o cargo fijo $8,000-$12,000 por movilización de equipo.'
      },
      {
        question: '¿Cómo cotizo un sistema SATE vs aislamiento interior?',
        answer: 'SATE (exterior): $1,200-$2,200 MXN/m² (placa EPS/XPS/lanilla + mortero pegante + malla + acabado acrílico/siliconado). Ventaja: no quita m² interior, elimina puentes térmicos, protege estructura. Interior (lana mineral + tablaroca): $600-$1,000 MXN/m². Más barato pero pierde 8-12cm y puentes térmicos en losas/vigas. Cotiza AMBOS y deja elegir al cliente.'
      }
    ]
  },
  // Técnicos en Mantenimiento Industrial / Soldadura Industrial / Mantenimiento Predictivo
  {
    id: 'mantenimiento-industrial',
    slug: 'mantenimiento-industrial-soldadura',
    name: 'Mantenimiento Industrial y Soldadura Especializada',
    title: 'Cotizador para Mantenimiento Industrial: Soldadura (TIG/MIG/Electrodo), Mecánica, Predictivo y Paradas de Planta',
    description: 'Presupuestos por turno, por proyecto, por punto de soldadura, por hora hombre. Incluye certificaciones, procedimientos WPS/PQR, materiales de aporte certificados.',
    pricingModels: ['Por turno de 8/12 horas (soldador + ayudante + equipo)', 'Por pulgada-diámetro de soldadura (pulg-día)', 'Por hora hombre (especialista, soldador certificado, ayudante)', 'Por paquete: parada de planta / mantenimiento programado'],
    commonMaterials: ['Electrodos AWS E6013, E7018, E308L, E309L, E316L', 'Alambre MIG ER70S-6, ER308L, ER316L, ER4043', 'Varillas TIG ER70S-2, ER308L, ER4043', 'Gas argón, CO2, mezcla Ar/CO2, helio', 'Equipos: Miller, Lincoln, ESAB, Kemppi, soldadoras inverter', 'Consumibles: discos corte/desbaste, cepillos, antiespatter'],
    faqs: [
      {
        question: '¿Cuánto cobrar por pulgada-diámetro de soldadura en 2024-2025?',
        answer: 'Soldadura electrodo (SMAW) 1G-2G: $18-$30 MXN/pulg-día. MIG (GMAW): $14-$22 MXN/pulg-día. TIG (GTAW) acero inox/alum: $35-$65 MXN/pulg-día. Incluye: consumibles, gas, energía, desgaste equipo, soldador calificado. NO incluye: preparación de juntas (biselado), limpieza, inspección visual/NDT, andamiaje. Cotiza prep/limpieza aparte.'
      },
      {
        question: '¿Cómo cotizo una parada de planta programada?',
        answer: 'Por PAQUETE CERRADO con alcance definido (WPS, materiales, NDT, grúa, andamios, permisos). Partidas: 1) Ingeniería/planificación ($15k-50k). 2) Mano de obra (turnos x hombres x tarifa). 3) Materiales/consumibles (con suministro propio o reembolso + 15%). 4) Equipos/herramentales. 5) NDT (radiografía/UT/PT/MT). 6) Gestión residuos/seguridad. Pide 30% anticipo, 40% a mitad, 30% entrega acta firmada.'
      }
    ]
  }
]
