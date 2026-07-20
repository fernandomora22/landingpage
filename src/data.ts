// Contenido extraído del PDF de la marca (ortografía corregida para la landing).

export const HERO = {
  badge: 'Carpintería Arquitectónica',
  titleTop: 'Explora nuestras',
  titleGold: 'opciones de mobiliario',
  subtitle:
    'Te ayudamos a sacar las medidas para tus proyectos. Contenido de alto impacto para facilitar los procesos y su ejecución.',
  cta: '¡Ahorra dinero en tus proyectos!',
  body: 'Con las medidas de tus espacios creamos ambientes únicos, diseñados a tu gusto, con la funcionalidad correcta y haciendo realidad tus sueños de mejorar el lugar que habitas.',
  quote:
    'El diseño interior no consiste en decorar con bonitos cuadros y objetos. Se trata de mejorar la vida de las personas.',
  quoteAuthor: 'Albert Hadley',
} as const;

export const PROCESS = {
  title: 'Pensamos en todos los detalles para que tu proyecto soñado sea el mejor',
  intro:
    'Cada proyecto que desarrollamos tiene una intención clara: ayudarte a entender tu proyecto, ahorrar dinero y evitar todo intermediario posible. Así lo logramos.',
  steps: [
    'Asesoría personalizada para entender tus necesidades reales y tu presupuesto.',
    'Modelamos en 3D para entender la morfología de los espacios y definir qué se puede desarrollar de la forma más funcional.',
    'Revisamos los herrajes necesarios para el mobiliario y le damos vida al diseño.',
    'Revisamos los materiales y las sensaciones que queremos representar en el mobiliario.',
    'Con nuestra experiencia damos recomendaciones sobre los espacios: modificar, agregar o quitar puntos eléctricos, hidráulicos o de gas, decoración o elementos puntuales de la obra.',
    'Despiezamos el mobiliario para obtener las medidas de cada módulo, para que te acerques a tu proveedor de confianza y mandes a corte las piezas. (Si no tienes uno, te asesoramos.)',
    'Generamos el listado de herrajes e insumos necesarios. Si deseas armarlo tú mismo, te asesoramos con las herramientas y ahorras aún más.',
    'Realizamos los planos de cada módulo con diferentes vistas, medidas y numeración de piezas para facilitar el armado.',
    'Entregamos un optimizador de cortes: cómo organizar las piezas en los tableros de melamina para aprovechar el material y reducir costos.',
    'Según el servicio contratado, visualizamos el mueble con renders fotorealistas lo más cercano a la realidad.',
  ],
} as const;

export const BENEFITS = {
  title:
    'Tú no tienes que preocuparte por nada. Yo me encargo de todas las medidas y de todo lo que requiera la ejecución de tu proyecto.',
  items: [
    'Planos listos para corte con despiece completo.',
    'Guía de armado, herrajes, insumos y marcación de cantos.',
    'Soporte y asesoría personalizada para todas tus dudas.',
    'Modelo 3D para visualizar en tu teléfono.',
    'Visualización de cada espacio y módulo con renders fotorealistas (según la opción que elijas).',
  ],
  closing:
    'Una empresa que se dedica a esto cobra mucho más. Yo solo te cobro lo que realmente necesitas.',
} as const;

const COMMON_FEATURES = [
  'Diseño funcional (ergonómico)',
  'Lista de material detallado',
  'Planos de guía e instalación',
  'Visualización 3D en tu teléfono',
];

export type PriceItem = { name: string; cop: string; usd: string };
export type PriceCategory = {
  id: string;
  title: string;
  features: string[];
  items: PriceItem[];
  featured?: boolean;
};

export const PRICING: PriceCategory[] = [
  {
    id: 'cocina',
    title: 'Cocina',
    features: COMMON_FEATURES,
    featured: true,
    items: [
      { name: 'Cocina #1', cop: '$400.000 COP', usd: 'USD 125' },
      { name: 'Cocina #2 (más grande)', cop: '$500.000 COP', usd: 'USD 155' },
    ],
  },
  {
    id: 'armarios',
    title: 'Armarios',
    features: COMMON_FEATURES,
    items: [
      { name: 'Armario #1 (Básico)', cop: '$80.000 COP', usd: 'USD 25' },
      { name: 'Armario #2 (En L)', cop: '$100.000 COP', usd: 'USD 35' },
      { name: 'Armario #3 (En U)', cop: '$120.000 COP', usd: 'USD 40' },
      { name: 'Vestidor #4 (En U)', cop: '$150.000 COP', usd: 'USD 50' },
    ],
  },
  {
    id: 'otros',
    title: 'Otros muebles',
    features: COMMON_FEATURES,
    items: [
      { name: 'Mueble de baño #1 (Básico)', cop: '$50.000 COP', usd: 'USD 15' },
      { name: 'Mueble de baño #2 (más grande)', cop: '$80.000 COP', usd: 'USD 25' },
      { name: 'Mueble de TV (Básico)', cop: '$100.000 COP', usd: 'USD 30' },
      { name: 'Mueble de TV (más grande)', cop: '$140.000 COP', usd: 'USD 45' },
      { name: 'Otros muebles', cop: 'Consultar', usd: '' },
    ],
  },
];

export type RenderUnit = { title: string; desc: string; cop: string; usd: string };

export const RENDER_UNITS: RenderUnit[] = [
  {
    title: 'Render Comercial',
    desc: 'Costo por unidad de render comercial, menos detallado.',
    cop: '$20.000 COP',
    usd: 'USD 7',
  },
  {
    title: 'Render Profesional',
    desc: 'Costo por unidad de render profesional, con máximo detalle.',
    cop: '$55.000 COP',
    usd: 'USD 18',
  },
];

export type Combo = {
  title: string;
  features: string[];
  extra: string;
  price: string;
  featured?: boolean;
};

export const COMBOS: Combo[] = [
  {
    title: 'Renderización Comercial',
    featured: true,
    features: [
      '3 renders generales (vistas principales)',
      '2 renders puntuales (espacio específico del mobiliario)',
    ],
    extra: 'Cada render adicional: $16.000 COP o USD 5',
    price: '$80.000 COP · USD 25',
  },
  {
    title: 'Renderización Profesional',
    features: [
      '3 renders generales (vistas principales)',
      '2 renders puntuales (espacio específico del mobiliario)',
    ],
    extra: 'Cada render adicional: $50.000 COP o USD 16',
    price: '$250.000 COP · USD 78',
  },
];
