import React from 'react';
import { ArrowLeft, Clock, User, Share2 } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const articulos = {
  1: {
    titulo: "Mitos y Realidades del TDAH en Adultos",
    descripcion: "Desmontando las creencias más comunes sobre el TDAH en la edad adulta.",
    autor: "Dra. María González",
    fecha: "15 de marzo, 2024",
    tiempoLectura: "8 min",
    imagen: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&h=500&q=80",
    contenido: `
      <h2>Introducción</h2>
      <p>El TDAH no es solo un trastorno infantil, como muchos creen. Es una condición neurobiológica que persiste en la edad adulta en aproximadamente el 60% de los casos diagnosticados en la infancia. En este artículo, exploraremos los mitos más comunes y las realidades científicas sobre el TDAH en adultos.</p>

      <h2>Mito 1: "El TDAH desaparece en la edad adulta"</h2>
      <p>Esta es quizás una de las concepciones erróneas más extendidas. La realidad es que el TDAH es una condición crónica que puede persistir durante toda la vida. Los síntomas pueden cambiar con el tiempo, pero los desafíos básicos a menudo continúan en la edad adulta.</p>

      <h2>Mito 2: "El TDAH es una excusa para la pereza"</h2>
      <p>Las investigaciones científicas han demostrado que el TDAH está relacionado con diferencias en la estructura y funcionamiento cerebral. No es una cuestión de falta de voluntad o pereza, sino de diferencias neurobiológicas reales que afectan el funcionamiento ejecutivo.</p>

      <h2>Mito 3: "Los adultos con TDAH no pueden ser exitosos"</h2>
      <p>Muchos adultos con TDAH han alcanzado gran éxito en sus carreras y vidas personales. Con las estrategias y el apoyo adecuados, las personas con TDAH pueden aprovechar sus fortalezas únicas, como la creatividad y el pensamiento innovador.</p>

      <h2>Realidades del TDAH en Adultos</h2>
      <h3>1. Manifestación de Síntomas</h3>
      <p>En adultos, el TDAH puede manifestarse de manera diferente que en niños. Los síntomas pueden incluir:</p>
      <ul>
        <li>Dificultad con la gestión del tiempo</li>
        <li>Problemas de organización</li>
        <li>Impulsividad en decisiones importantes</li>
        <li>Dificultad para mantener relaciones estables</li>
      </ul>

      <h3>2. Impacto en la Vida Diaria</h3>
      <p>El TDAH puede afectar múltiples áreas de la vida adulta:</p>
      <ul>
        <li>Desempeño laboral</li>
        <li>Relaciones personales</li>
        <li>Manejo financiero</li>
        <li>Autocuidado y salud</li>
      </ul>

      <h2>Conclusión</h2>
      <p>Comprender la realidad del TDAH en adultos es crucial para combatir el estigma y asegurar que las personas reciban el apoyo que necesitan. Con el diagnóstico y tratamiento adecuados, los adultos con TDAH pueden desarrollar estrategias efectivas para manejar sus síntomas y llevar vidas plenas y exitosas.</p>
    `
  },
  2: {
    titulo: "Estrategias de Productividad para personas con TDAH",
    descripcion: "Técnicas prácticas y herramientas para mejorar tu productividad diaria.",
    autor: "Lic. Carlos Ruiz",
    fecha: "10 de marzo, 2024",
    tiempoLectura: "12 min",
    imagen: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&h=500&q=80",
    contenido: `
      <h2>Introducción</h2>
      <p>La productividad puede ser un desafío particular para las personas con TDAH. Sin embargo, con las estrategias adecuadas, es posible mejorar significativamente la eficiencia y el rendimiento en el trabajo y la vida diaria.</p>

      <h2>1. Sistema de Gestión del Tiempo</h2>
      <h3>La Técnica Pomodoro Modificada</h3>
      <p>Adapta la técnica Pomodoro a tus necesidades:</p>
      <ul>
        <li>Períodos de trabajo más cortos (15-20 minutos)</li>
        <li>Descansos más frecuentes</li>
        <li>Registro de distracciones</li>
      </ul>

      <h2>2. Organización del Espacio de Trabajo</h2>
      <p>Un espacio de trabajo organizado es crucial:</p>
      <ul>
        <li>Minimiza las distracciones visuales</li>
        <li>Utiliza sistemas de archivo claros</li>
        <li>Mantén las herramientas necesarias al alcance</li>
      </ul>

      <h2>3. Herramientas Digitales</h2>
      <p>Aprovecha la tecnología para mantenerte organizado:</p>
      <ul>
        <li>Aplicaciones de lista de tareas</li>
        <li>Calendarios digitales con recordatorios</li>
        <li>Notas digitales sincronizadas</li>
      </ul>

      <h2>4. Gestión de la Energía</h2>
      <p>Identifica tus patrones de energía:</p>
      <ul>
        <li>Programa tareas importantes durante tus horas más productivas</li>
        <li>Incluye ejercicio regular en tu rutina</li>
        <li>Mantén una dieta equilibrada</li>
      </ul>

      <h2>5. Técnicas de Enfoque</h2>
      <h3>Método de "Dos Minutos"</h3>
      <p>Si una tarea toma menos de dos minutos, hazla inmediatamente. Esto evita la acumulación de pequeñas tareas que pueden volverse abrumadoras.</p>

      <h2>Conclusión</h2>
      <p>La clave está en encontrar y adaptar las estrategias que mejor funcionen para ti. No temas experimentar y ajustar estas técnicas según tus necesidades específicas.</p>
    `
  },
  3: {
    titulo: "TDAH y Relaciones Interpersonales",
    descripcion: "Cómo manejar el impacto del TDAH en tus relaciones personales y profesionales.",
    autor: "Psic. Ana Martínez",
    fecha: "5 de marzo, 2024",
    tiempoLectura: "10 min",
    imagen: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&h=500&q=80",
    contenido: `
      <h2>Introducción</h2>
      <p>Las relaciones interpersonales pueden verse significativamente afectadas por el TDAH. Comprender cómo el TDAH influye en nuestras interacciones es el primer paso para desarrollar relaciones más saludables y satisfactorias.</p>

      <h2>1. Impacto del TDAH en las Relaciones</h2>
      <h3>Desafíos Comunes:</h3>
      <ul>
        <li>Dificultad para mantener la atención en conversaciones</li>
        <li>Interrupciones frecuentes</li>
        <li>Olvido de compromisos importantes</li>
        <li>Impulsividad en la comunicación</li>
      </ul>

      <h2>2. Estrategias de Comunicación</h2>
      <p>Mejora tus habilidades de comunicación:</p>
      <ul>
        <li>Practica la escucha activa</li>
        <li>Toma notas durante conversaciones importantes</li>
        <li>Pide aclaraciones cuando sea necesario</li>
        <li>Establece recordatorios para seguimiento</li>
      </ul>

      <h2>3. Relaciones de Pareja</h2>
      <p>Consejos para mantener relaciones románticas saludables:</p>
      <ul>
        <li>Sé abierto sobre tu TDAH</li>
        <li>Establece rutinas compartidas</li>
        <li>Divide las responsabilidades de manera equitativa</li>
        <li>Programa tiempo de calidad regular</li>
      </ul>

      <h2>4. Relaciones Profesionales</h2>
      <p>Estrategias para el entorno laboral:</p>
      <ul>
        <li>Comunica tus necesidades de manera profesional</li>
        <li>Utiliza herramientas de organización</li>
        <li>Establece límites claros</li>
        <li>Busca mentores y aliados</li>
      </ul>

      <h2>5. Construcción de Redes de Apoyo</h2>
      <p>La importancia de tener un sistema de apoyo:</p>
      <ul>
        <li>Grupos de apoyo TDAH</li>
        <li>Terapia familiar o de pareja cuando sea necesario</li>
        <li>Amistades comprensivas</li>
      </ul>

      <h2>Conclusión</h2>
      <p>Las relaciones saludables son posibles con TDAH. La clave está en la comunicación abierta, la comprensión mutua y el desarrollo de estrategias efectivas de manejo.</p>
    `
  }
};

export function ArticuloDetalle() {
  const { id } = useParams();
  const articulo = articulos[Number(id)];

  if (!articulo) {
    return (
      <div className="min-h-screen bg-white pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link to="/articulos" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Volver a Artículos
          </Link>
          <h1 className="text-4xl font-bold text-gray-900">Artículo no encontrado</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/articulos" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Volver a Artículos
        </Link>

        <article>
          <img 
            src={articulo.imagen} 
            alt={articulo.titulo}
            className="w-full h-64 object-cover rounded-xl mb-8"
          />

          <h1 className="text-4xl font-bold text-gray-900 mb-4">{articulo.titulo}</h1>
          
          <div className="flex items-center text-sm text-gray-500 space-x-4 mb-8">
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

          <div className="prose prose-purple max-w-none mb-8">
            <div dangerouslySetInnerHTML={{ __html: articulo.contenido }} />
          </div>

          <div className="border-t border-gray-200 pt-8 mt-8">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">
                ¿Te pareció útil este artículo?
              </div>
              <button 
                className="inline-flex items-center text-purple-600 hover:text-purple-700"
                onClick={() => {
                  navigator.share({
                    title: articulo.titulo,
                    text: articulo.descripcion,
                    url: window.location.href
                  }).catch(() => {
                    // Fallback si la API de compartir no está disponible
                    alert('Enlace copiado al portapapeles');
                    navigator.clipboard.writeText(window.location.href);
                  });
                }}
              >
                <Share2 className="h-5 w-5 mr-2" />
                Compartir
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}