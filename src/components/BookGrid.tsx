import React from 'react';
import BookCard from './BookCard';
import books from '../data/books';

const BookGrid = () => {
  return (
    <section id="books" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
          Nossos eBooks
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {books.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-lg text-gray-700 mb-6">
            Todos os eBooks por apenas R$9,90 cada. Conhecimento acessível e de qualidade!
          </p>
          <a 
            href="#books" 
            className="bg-gradient-custom hover:opacity-90 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg inline-block"
          >
            Comprar agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default BookGrid;