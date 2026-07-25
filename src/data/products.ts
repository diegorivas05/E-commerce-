import { Product } from "@/types/product";

export const productsData: Product[] = [
  // --- MESAS ---
  {
    id: 1,
    title: "Mesa de Comedor Roble Nórdico",
    description: "Mesa espaciosa de madera de roble macizo con acabado natural para 6 personas.",
    price: 380.00,
    category: "Mesas",
    urlImage: "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Mesa Centro de Cristal y Metal",
    description: "Mesa de centro estilo industrial con cristal templado y estructura de acero negro.",
    price: 145.00,
    category: "Mesas",
    urlImage: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Escritorio Minimalista Ejecutivo",
    description: "Escritorio de oficina con cajones ocultos y diseño ergonómico en madera clara.",
    price: 220.00,
    category: "Mesas",
    urlImage: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=600&auto=format&fit=crop"
  },

  // --- SILLONES ---
  {
    id: 4,
    title: "Sofá Seccional Gris Moderno",
    description: "Sofá chaise longue de 3 plazas tapizado en tela transpirable de alta densidad.",
    price: 650.00,
    category: "Sillones",
    urlImage: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Sillón Reclinable de Cuero Moka",
    description: "Sillón individual reclinable con acolchado mullido y soporte lumbar premium.",
    price: 310.00,
    category: "Sillones",
    urlImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Sillón Ocasional Velvet Azul",
    description: "Sillón decorativo tapizado en terciopelo suave con patas de metal dorado.",
    price: 185.00,
    category: "Sillones",
    urlImage: "https://images.unsplash.com/photo-1580481072645-022f9a6d83d0?q=80&w=600&auto=format&fit=crop"
  },

  // --- ARMARIOS Y MUEBLES ---
  {
    id: 7,
    title: "Armario Zapatero 3 Puertas",
    description: "Ropero organizador en acabado blanco mate con espejo central y repisas ajustables.",
    price: 420.00,
    category: "Armarios",
    urlImage: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 8,
    title: "Aparador Credenza Estilo Mid-Century",
    description: "Mueble buffet bajo de madera con 4 puertas correderas para comedor o sala.",
    price: 290.00,
    category: "Armarios",
    urlImage: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 9,
    title: "Estantería Flotante Abierta",
    description: "Librero y mueble de exhibición de 5 niveles en madera de pino y marco metálico.",
    price: 160.00,
    category: "Armarios",
    urlImage: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=600&auto=format&fit=crop"
  },

  // --- ESPEJOS ---
  {
    id: 10,
    title: "Espejo de Cuerpo Entero de Arco",
    description: "Espejo de pie con marco metálico dorado curvilíneo para dormitorio o vestidor.",
    price: 135.00,
    category: "Espejos",
    urlImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 11,
    title: "Espejo Pared Circular Bamboo",
    description: "Espejo decorativo redondo con borde tallado en mimbre/bambú natural.",
    price: 75.00,
    category: "Espejos",
    urlImage: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 12,
    title: "Espejo Retroiluminado LED",
    description: "Espejo de baño moderno con luz LED cálida integrada y sistema antivaho.",
    price: 195.00,
    category: "Espejos",
    urlImage: "https://images.unsplash.com/photo-1622372738946-62e02505feb3?q=80&w=600&auto=format&fit=crop"
  },

  // --- SILLAS ---
  {
    id: 13,
    title: "Set x4 Sillas Eames Comedor",
    description: "Juego de 4 sillas de diseño nórdico con patas de madera de haya y asiento ergonómico.",
    price: 160.00,
    category: "Sillas",
    urlImage: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 14,
    title: "Silla de Escritorio Ergonomía Total",
    description: "Silla giratoria con apoyo para la cabeza, malla respirable y descansa brazos 3D.",
    price: 210.00,
    category: "Sillas",
    urlImage: "https://images.unsplash.com/photo-1580481072645-022f9a6d83d0?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 15,
    title: "Banca Bar Alta de Madera Maciza",
    description: "Taburete alto estilo rústico para barra de cocina o desayunador.",
    price: 85.00,
    category: "Sillas",
    urlImage: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=600&auto=format&fit=crop"
  },

  // --- ILUMINACIÓN ---
  {
    id: 16,
    title: "Lámpara de Pie Trípode Nórdica",
    description: "Lámpara de lectura para sala con estructura de madera y pantalla de lino blanco.",
    price: 110.00,
    category: "Iluminación",
    urlImage: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 17,
    title: "Lámpara Colgante Vintage Industrial",
    description: "Lámpara de techo estilo campana metálica en negro mate para barra de cocina.",
    price: 65.00,
    category: "Iluminación",
    urlImage: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 18,
    title: "Lámpara de Mesa Cerámica Artística",
    description: "Lámpara de noche para mesa de noche con base de cerámica texturizada.",
    price: 55.00,
    category: "Iluminación",
    urlImage: "https://images.unsplash.com/photo-1543198181-e619b692b11c?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 19,
    title: "Plafón LED de Techo Regulable",
    description: "Luminaria moderna de techo ultra delgada con control remoto para intensidad de luz.",
    price: 90.00,
    category: "Iluminación",
    urlImage: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 20,
    title: "Lámpara de Escritorio Brazo Flexible",
    description: "Lámpara de trabajo articulada con puerto de carga USB integrado.",
    price: 45.00,
    category: "Iluminación",
    urlImage: "https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?q=80&w=600&auto=format&fit=crop"
  }
];