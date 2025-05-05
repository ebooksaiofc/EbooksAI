import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-2 bg-gradient-custom bg-clip-text text-transparent">eBooks AI</h2>
            <p className="text-gray-400">Conhecimento acessível por menos de um lanche</p>
          </div>

          <div className="text-center mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Nossas Redes</h3>
            <div className="flex items-center justify-center gap-6">
              <a
                href="https://www.instagram.com/ebooksaiofc/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <img
                  src="/src/icons/instagram.png"
                  alt="Instagram"
                  className="w-6 h-6 opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </a>

              <a
                href="https://www.tiktok.com/@ebooksaiofc3?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <img
                  src="/src/icons/tik-tok.png"
                  alt="TikTok"
                  className="w-6 h-6 opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </a>

              <a
                href="https://linktr.ee/ebooksaiofc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Linktree"
              >
                <img
                  src="/src/icons/linktree-logo-icon.png"
                  alt="Linktree"
                  className="w-6 h-6 opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </a>
            </div>

          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-center">Contato</h3>
            <a
              href="mailto:ebooksaiofc@gmail.com"
              className="text-gray-400 no-underline hover:text-primary-light transition-colors"
            >
              ebooksaiofc@gmail.com
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} eBooks AI. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;