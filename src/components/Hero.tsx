import React from 'react';
import { ArrowRight, Brain } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-purple-50 to-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-8">
          <div className="flex justify-center mb-6">
            <Brain className="h-16 w-16 text-purple-600" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-4">
            Coaching TDAH para adultos
          </h1>
          <h2 className="text-3xl font-semibold text-purple-600 mb-6">
            Vive mejor, con TDAH
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Daren es la plataforma #1 de coaching para adultos con TDAH. 
            Diseñada por expertos clínicos en TDAH y psicólogos especializados en coaching.
          </p>
          <p className="text-xl text-gray-700 font-medium mb-8">
            Construye la vida que amas a través de coaching personalizado 1:1 por video, 
            herramientas de productividad diseñadas a medida y módulos de aprendizaje basados en la ciencia.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors flex items-center">
              Encuentra tu Coach
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full hover:bg-purple-50 transition-colors">
              Saber más
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}