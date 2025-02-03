import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Básico',
    price: '50.000',
    features: [
      '2 sesiones de coaching al mes',
      'Soporte por email',
      'Seguimiento básico de progreso',
      'Acceso a biblioteca de recursos'
    ],
    mpLink: 'https://www.mercadopago.cl/subscriptions/checkout?preapproval_plan_id=2c9380848c44be6a018c4fb9ef3705d7'
  },
  {
    name: 'Estándar',
    price: '70.000',
    popular: true,
    features: [
      '4 sesiones de coaching al mes',
      'Soporte prioritario por Whatsapp',
      'Seguimiento avanzado de progreso',
      'Planes de acción personalizados',
      'Revisiones semanales'
    ],
    mpLink: 'https://www.mercadopago.cl/subscriptions/checkout?preapproval_plan_id=2c9380848c44be29018c4fbd2ef90601'
  },
  {
    name: 'Inmersivo',
    price: '120.000',
    features: [
      '8 sesiones de coaching al mes',
      'Acceso directo al coach 24/7',
      'Seguimiento completo de progreso',
      'Creación de recursos personalizados',
      'Revisiones diarias',
      'Sesiones de emergencia'
    ],
    mpLink: 'https://www.mercadopago.cl/subscriptions/checkout?preapproval_plan_id=2c9380848c44be6a018c4fbde65e05d8'
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Precios Transparentes</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a tus necesidades y comienza tu camino hacia el éxito.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl shadow-lg p-8 relative flex flex-col ${
                plan.popular ? 'ring-2 ring-purple-600' : ''
              }`}
            >
              {plan.popular && (
                <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm">
                  Más Popular
                </span>
              )}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
              <div className="mb-8">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-gray-600">/mes</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="text-center">
                <a
                  href={plan.mpLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 rounded-full transition-colors inline-block ${
                    plan.popular
                      ? 'bg-purple-600 text-white hover:bg-purple-700'
                      : 'border-2 border-purple-600 text-purple-600 hover:bg-purple-50'
                  }`}
                >
                  Comenzar
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}