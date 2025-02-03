import React from 'react';
import { ArrowLeft, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const articulos = [
  {
    id: 1,
    titulo: "Mitos y Realidades del TDAH en Adultos",
    descripcion: "Desmontando las creencias más comunes sobre el TDAH en la edad adulta.",
    autor: "Dra. María González",
    fecha: "15 de marzo, 2024",
    tiempoLectura: "8 min",
    imagen: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&h=300&q=80"
  },
  {
    id: 2,
    titulo: "Estrategias de Productividad para personas con TDAH",
    descripcion: "Técnicas prácticas y herramientas para mejorar tu productividad diaria.",
    autor: "Lic. Carlos Ruiz",
    fecha: "10 de marzo, 2024",
    tiempoLectura: "12 min",
    imagen: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=600&h=300&q=80"
  },
  {
    id: 3,
    titulo: "TDAH y Relaciones Interpersonales",
    descripcion: "Cómo manejar el impacto del TDAH en tus relaciones personales y profesionales.",
    autor: "Psic. Ana Martínez",
    fecha: "5 de marzo, 2024",
    tiempoLectura: "10 min",
    imagen: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&h=300&q=80"
  }
];

export function Articulos() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Volver al inicio
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-8">Artículos sobre TDAH</h1>

        <div className="space-y-8">
          {articulos.map((articulo) => (
            <Link 
              to={`/articulos/${articulo.id}`}
              key={articulo.id} 
              className="block bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover md:w-48"
                    src={articulo.imagen}
                    alt={articulo.titulo}
                  />
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {articulo.titulo}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {articulo.descripcion}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {articulo.autor}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {articulo.tiempoLectura}
                    </div>
                    <span>{articulo.fecha}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}