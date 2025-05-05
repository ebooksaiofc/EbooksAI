import { Book } from '../components/BookCard';

const books: Book[] = [
  {
    id: 1,
    title: "Inteligência Artificial Descomplicada",
    coverImage: "/src/images/IA.png",
    description: "Aprenda IA de forma simples e prática.",
    price: "R$ 9,90",
    buyLink: "https://pay.kiwify.com.br/V39QdKe"
  },
  {
    id: 2,
    title: "Os 5 Pilares da Saúde",
    coverImage: "/src/images/5Pilares.png",
    description: "Equilibre sua mente e corpo.",
    price: "R$ 9,90",
    buyLink: "https://pay.kiwify.com.br/ICs0Nbj"
  },
  {
    id: 3,
    title: "O Caminho para o Seu Melhor Eu",
    coverImage: "/src/images/Potencial.png",
    description: "Transformação Pessoal em Ação.",
    price: "R$ 9,90",
    buyLink: "https://pay.kiwify.com.br/KPkZonk"
  },
  {
    id: 4,
    title: "Liberdade Financeira ao Seu Alcance",
    coverImage: "/src/images/Financa.png",
    description: "Guia Prático para Iniciantes",
    price: "R$ 9,90",
    buyLink: "https://pay.kiwify.com.br/qyLiyva"
  },
  // {
  //   id: 5,
  //   title: "Empreendedorismo Digital",
  //   coverImage: "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   description: "Como criar e escalar um negócio online lucrativo do zero, mesmo sem experiência prévia.",
  //   price: "R$ 9,90",
  //   buyLink: "https://example.com/buy/5"
  // },
  // {
  //   id: 6,
  //   title: "Desenvolvimento Web Moderno",
  //   coverImage: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   description: "Crie sites e aplicações web responsivas e otimizadas com HTML, CSS e JavaScript.",
  //   price: "R$ 9,90",
  //   buyLink: "https://example.com/buy/6"
  // }
];

export default books;