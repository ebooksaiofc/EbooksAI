import React from 'react';
import { ExternalLink } from 'lucide-react';

export interface Book {
  id: number;
  title: string;
  coverImage: string;
  description: string;
  price: string;
  buyLink: string;
}

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <div className="relative pb-[130%] overflow-hidden">
        <img 
          src={book.coverImage} 
          alt={`Capa do eBook ${book.title}`}
          className="absolute top-0 left-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{book.title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{book.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold text-primary-DEFAULT">{book.price}</span>
          <a 
            href={book.buyLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 bg-gradient-custom hover:opacity-90 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300"
          >
            Comprar <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookCard;