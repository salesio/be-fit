export type Product = {
  name: string;
  category: string;
  image: string;
  description: string;
  price: string;
  accent: string;
};

export const products: Product[] = [
  {
    name: 'Uxi Amarelo com Unha de Gato',
    category: 'Bem-estar feminino',
    image: '/assets/products/uxi-amarelo.png',
    description: 'Combinação botânica apresentada pela marca para complementar rotinas de bem-estar feminino.',
    price: '1 150 MT',
    accent: '#dcefff',
  },
  {
    name: 'Ômega 3',
    category: 'Rotina nutricional',
    image: '/assets/products/omega-3.png',
    description: 'Óleo de peixe 500 mg para complementar a alimentação e a rotina nutricional diária.',
    price: '1 150 MT',
    accent: '#fff0d5',
  },
  {
    name: 'Ácido Hialurónico + Colagénio Tipo 2',
    category: 'Articulações e pele',
    image: '/assets/products/acido-hialuronico.png',
    description: 'Fórmula apresentada pela marca para complementar cuidados com articulações, hidratação e elasticidade da pele.',
    price: '1 150 MT',
    accent: '#ffe2d9',
  },
  {
    name: 'Ácido Úrico',
    category: 'Equilíbrio metabólico',
    image: '/assets/products/acido-urico.png',
    description: 'Suplemento apresentado pela marca como apoio a uma rotina de equilíbrio do ácido úrico.',
    price: '1 150 MT',
    accent: '#e4f2ff',
  },
  {
    name: 'Prostatil',
    category: 'Bem-estar masculino',
    image: '/assets/products/prostatil.png',
    description: 'Fórmula apresentada pela marca para complementar os cuidados de bem-estar masculino e urinário.',
    price: '1 150 MT',
    accent: '#dfe6ff',
  },
  {
    name: 'Seca Barriga',
    category: 'Gestão de peso',
    image: '/assets/products/seca-barriga.png',
    description: 'Fórmula com noz da Índia e garcinia, apresentada para complementar rotinas de gestão de peso.',
    price: '1 150 MT',
    accent: '#f0f8cd',
  },
  {
    name: 'Anti Diabetes',
    category: 'Metabolismo da glicose',
    image: '/assets/products/anti-diabetes.png',
    description: 'Suplemento apresentado pela marca para suporte à rotina nutricional e ao metabolismo da glicose.',
    price: '1 150 MT',
    accent: '#ffddd9',
  },
];

export function productWhatsappUrl(productName: string) {
  const message = `Olá Be Fit! Tenho interesse no produto ${productName}. Gostaria de confirmar a disponibilidade e saber mais.`;
  return `https://wa.me/258878175266?text=${encodeURIComponent(message)}`;
}
