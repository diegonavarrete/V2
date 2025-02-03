import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sara Jiménez',
    role: 'Directora de Marketing',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80',
    quote: 'Trabajar con mi coach de Daren ha transformado la manera en que manejo mi TDAH. Me siento más productiva y segura que nunca.',
  },
  {
    name: 'Miguel Chen',
    role: 'Ingeniero de Software',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
    quote: 'Las estrategias personalizadas me han ayudado a mantenerme enfocado y organizado. La calidad de mi trabajo ha mejorado significativamente.',
  },
  {
    name: 'Emma Rodríguez',
    role: 'Emprendedora',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80',
    quote: 'El coaching de Daren me ha dado las herramientas para construir un negocio exitoso mientras manejo mi TDAH de manera efectiva.',
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Historias de Éxito</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conoce a las personas que han transformado sus vidas con Daren
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-600 mb-6">"{testimonial.quote}"</blockquote>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}