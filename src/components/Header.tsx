import React, { useState } from 'react';
import { Brain, Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Brain className="h-8 w-8 text-purple-600" />
            <span className="ml-2 text-2xl font-bold text-gray-900">Daren</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-700 hover:text-purple-600">Servicios</a>
            <a href="#pricing" className="text-gray-700 hover:text-purple-600">Precios</a>
            <a href="#testimonials" className="text-gray-700 hover:text-purple-600">Testimonios</a>
            <a href="#resources" className="text-gray-700 hover:text-purple-600">Recursos</a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="hidden md:block bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors">
              Encuentra tu Coach
            </button>
            <button 
              onClick={toggleMenu}
              className="md:hidden"
              aria-label="Menú"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="md:hidden">
            <nav className="py-4 border-t border-gray-100">
              <div className="flex flex-col space-y-4">
                <a 
                  href="#services" 
                  className="text-gray-700 hover:text-purple-600 px-4 py-2"
                  onClick={toggleMenu}
                >
                  Servicios
                </a>
                <a 
                  href="#pricing" 
                  className="text-gray-700 hover:text-purple-600 px-4 py-2"
                  onClick={toggleMenu}
                >
                  Precios
                </a>
                <a 
                  href="#testimonials" 
                  className="text-gray-700 hover:text-purple-600 px-4 py-2"
                  onClick={toggleMenu}
                >
                  Testimonios
                </a>
                <a 
                  href="#resources" 
                  className="text-gray-700 hover:text-purple-600 px-4 py-2"
                  onClick={toggleMenu}
                >
                  Recursos
                </a>
                <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors mx-4">
                  Encuentra tu Coach
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}