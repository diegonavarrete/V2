import React from 'react';
import { Sparkles, Target, Users2, LineChart } from 'lucide-react';

const steps = [
  {
    icon: Users2,
    title: 'Encuentra tu Coach',
    description: 'Conéctate con un coach certificado en TDAH que entienda tus desafíos y objetivos únicos.'
  },
  {
    icon: Target,
    title: 'Crea tu Plan',
    description: 'Desarrolla una estrategia personalizada que trabaje con tu mente, no contra ella.'
  },
  {
    icon: LineChart,
    title: 'Seguimiento',
    description: 'Revisiones regulares y ajustes para asegurar que avanzas hacia tus objetivos.'
  },
  {
    icon: Sparkles,
    title: 'Transforma tu Vida',
    description: 'Experimenta cambios positivos duraderos en tu trabajo, relaciones y vida diaria.'
  }
];

export function Process() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Cómo Funciona</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tu camino al éxito con Daren es simple y estructurado
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/4 right-0 w-full h-0.5 bg-purple-200" />
              )}
              <div className="relative bg-white p-6 text-center z-10">
                <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <step.icon className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}