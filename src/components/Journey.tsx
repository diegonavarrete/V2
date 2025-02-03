import React from 'react';
import { Brain, Heart, Sparkles, Target, Users2, Rocket } from 'lucide-react';

const journeySteps = [
  {
    icon: Brain,
    title: 'Evaluación Inicial',
    description: 'Comenzamos con una evaluación completa para entender tus desafíos específicos con TDAH, objetivos y estilo de vida.',
    duration: '60 minutos'
  },
  {
    icon: Target,
    title: 'Plan Personalizado',
    description: 'Desarrollamos un plan de acción detallado basado en tus necesidades únicas y metas personales.',
    duration: '45 minutos'
  },
  {
    icon: Heart,
    title: 'Sesiones Semanales',
    description: 'Coaching regular para desarrollar habilidades, superar obstáculos y mantener el progreso.',
    duration: '50 minutos'
  },
  {
    icon: Users2,
    title: 'Apoyo Continuo',
    description: 'Acceso a tu coach entre sesiones para ajustes y soporte cuando lo necesites.',
    duration: 'Según el plan'
  },
  {
    icon: Rocket,
    title: 'Seguimiento de Progreso',
    description: 'Evaluaciones regulares para medir tu avance y ajustar estrategias según sea necesario.',
    duration: '30 minutos'
  },
  {
    icon: Sparkles,
    title: 'Celebración de Logros',
    description: 'Reconocimiento de tus éxitos y planificación de los siguientes pasos en tu desarrollo.',
    duration: '45 minutos'
  }
];

export function Journey() {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Tu Viaje con Daren</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Un camino estructurado y personalizado hacia el éxito con TDAH
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {journeySteps.map((step, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <div className="bg-purple-100 p-3 rounded-xl">
                  <step.icon className="h-8 w-8 text-purple-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                  <span className="text-sm text-purple-600">{step.duration}</span>
                </div>
              </div>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors inline-flex items-center">
            Comienza Tu Viaje
            <Rocket className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}