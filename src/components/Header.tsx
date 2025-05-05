import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white shadow-md py-3'
        : 'bg-transparent py-5'
        }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img
            src="/src/images/logoEbooksai.png"
            alt="Logo eBooks AI"
            className="logo-image"
          />
          <div>
            <h1 className="text-xl font-bold text-gray-900 bg-gradient-custom bg-clip-text text-transparent">Ebooks AI</h1>
            <p className="text-xs text-gray-600 hidden sm:block ">
              Conhecimento acessível por menos de um lanche
            </p>
          </div>
        </div>

        <nav>
          <ul className="flex gap-6">
            <li>
              <a
                href="#books"
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                eBooks
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;