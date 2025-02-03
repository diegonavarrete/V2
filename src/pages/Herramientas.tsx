import React from 'react';
import { ArrowLeft, Download, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const herramientas = [
  {
    id: 1,
    nombre: "Planificador Diario TDAH",
    descripcion: "Plantilla diseñada específicamente para personas con TDAH, con espacios para prioridades, notas y seguimiento de energía.",
    formato: "PDF",
    link: "/downloads/planificador-diario-tdah.pdf"
  },
  {
    id: 2,
    nombre: "Lista de Verificación de Tareas",
    descripcion: "Checklist interactivo para desglosar proyectos grandes en tareas manejables.",
    formato: "PDF",
    link: "/downloads/checklist-tareas.pdf"
  },
  {
    id: 3,
    nombre: "Registro de Hábitos",
    descripcion: "Herramienta para dar seguimiento a hábitos diarios y construir rutinas efectivas.",
    formato: "PDF",
    link: "/downloads/registro-habitos.pdf"
  },
  {
    id: 4,
    nombre: "Plantilla de Gestión del Tiempo",
    descripcion: "Sistema visual para organizar tu tiempo y establecer prioridades.",
    formato: "PDF",
    link: "/downloads/gestion-tiempo.pdf"
  }
];

export function Herramientas() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Volver al inicio
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-8">Herramientas y Recursos</h1>
        
        <p className="text-xl text-gray-600 mb-12">
          Descarga estas herramientas gratuitas diseñadas específicamente para ayudarte a gestionar mejor tu TDAH.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {herramientas.map((herramienta) => (
            <div key={herramienta.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {herramienta.nombre}
              </h3>
              <p className="text-gray-600 mb-4">
                {herramienta.descripcion}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  Formato: {herramienta.formato}
                </span>
                <a
                  href={herramienta.link}
                  className="inline-flex items-center text-purple-600 hover:text-purple-700"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Descargar
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-purple-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Consejos para usar estas herramientas
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-purple-600 mr-2 flex-shrink-0 mt-1" />
              <span>Personaliza las plantillas según tus necesidades específicas</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-purple-600 mr-2 flex-shrink-0 mt-1" />
              <span>Comienza con una herramienta a la vez para no abrumarte</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-purple-600 mr-2 flex-shrink-0 mt-1" />
              <span>Establece recordatorios para usar las herramientas regularmente</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-purple-600 mr-2 flex-shrink-0 mt-1" />
              <span>Revisa y ajusta tu sistema cada pocas semanas</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}