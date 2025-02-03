import React from 'react';
import { BookOpen, Video, FileText, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const resources = [
  {
    icon: BookOpen,
    title: 'Guía TDAH',
    description: 'Guía completa para entender y manejar el TDAH',
    link: '/guia-tdah'
  },
  {
    icon: Video,
    title: 'Videoteca',
    description: 'Videos educativos sobre estrategias y consejos para TDAH',
    link: '/videos'
  },
  {
    icon: FileText,
    title: 'Artículos',
    description: 'Últimas investigaciones y conocimientos sobre TDAH',
    link: '/articulos'
  },
  {
    icon: Download,
    title: 'Herramientas',
    description: 'Hojas de trabajo y plantillas de planificación descargables',
    link: '/herramientas'
  }
];

export function Resources() {
  return (
    <section id="resources" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Recursos Gratuitos</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Accede a nuestra biblioteca de recursos sobre TDAH para apoyar tu desarrollo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, index) => (
            <Link
              key={index}
              to={resource.link}
              className="group bg-purple-50 p-8 rounded-xl hover:bg-purple-100 transition-colors"
            >
              <resource.icon className="h-10 w-10 text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{resource.title}</h3>
              <p className="text-gray-600">{resource.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}