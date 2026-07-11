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
  }
]
