import React from 'react';
import { Brain, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <Brain className="h-8 w-8 text-purple-400" />
              <span className="ml-2 text-2xl font-bold">Daren</span>
            </div>
            <p className="text-gray-400">
              Empoderando a personas con TDAH para alcanzar su máximo potencial
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white">Servicios</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white">Precios</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white">Testimonios</a></li>
              <li><a href="#resources" className="text-gray-400 hover:text-white">Recursos</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Política de Privacidad</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Términos de Servicio</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Política de Cookies</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Conéctate</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Daren. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}