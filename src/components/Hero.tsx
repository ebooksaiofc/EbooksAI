import React from 'react';

const Hero = () => {
  return (
    <section className="pt-28 pb-12 bg-gradient-to-br from-primary-light/10 to-primary-dark/10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Conhecimento que transforma
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Invista em você mesmo com conteúdo de qualidade por um preço acessível
        </p>
        <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg max-w-xl mx-auto transform hover:scale-105 transition-transform duration-300 cursor-pointer">
          <p className="text-xl md:text-2xl font-bold bg-gradient-custom bg-clip-text text-transparent">
            Todos os ebooks com cupom de 10% EBOOK10!
          </p>
        </div>
        <div className="mt-12">
          <a 
            href="#books" 
            className="bg-gradient-custom hover:opacity-90 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Ver eBooks
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;