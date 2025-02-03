import React from 'react';
import { Users, MessageCircle, Settings, Target } from 'lucide-react';

const services = [
  {
    icon: Users,
    title: 'Sesiones 1:1',
    description: 'Sesiones semanales personalizadas adaptadas a tus desafíos y objetivos específicos con TDAH.'
  },
  {
    icon: MessageCircle,
    title: 'Apoyo Continuo',
    description: 'Acceso directo a tu coach durante la semana para consultas rápidas y seguimiento.'
  },
  {
    icon: Settings,
    title: 'Sistemas Personalizados',
    description: 'Desarrollo de sistemas y estrategias personalizadas que funcionan para tu mente.'
  },
  {
    icon: Target,
    title: 'Logro de Objetivos',
    description: 'Enfoque estructurado para desglosar y alcanzar tus metas personales y profesionales.'
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Servicios completos de coaching en TDAH diseñados para ayudarte a tener éxito en todas las áreas de tu vida.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <service.icon className="h-12 w-12 text-purple-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}