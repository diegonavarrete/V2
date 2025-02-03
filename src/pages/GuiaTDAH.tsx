import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function GuiaTDAH() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Volver al inicio
        </Link>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Guía Completa sobre TDAH</h1>
        
        <div className="prose prose-purple max-w-none">
          <h2>¿Qué es el TDAH?</h2>
          <p>
            El Trastorno por Déficit de Atención e Hiperactividad (TDAH) es un trastorno neurobiológico que afecta tanto a niños como a adultos. 
            Se caracteriza por patrones persistentes de inatención, hiperactividad e impulsividad que interfieren con el desarrollo y funcionamiento diario.
          </p>

          <h2>Síntomas Principales</h2>
          <h3>Inatención:</h3>
          <ul>
            <li>Dificultad para mantener la atención en tareas</li>
            <li>Problemas para organizar actividades</li>
            <li>Tendencia a perder objetos importantes</li>
            <li>Distracción fácil por estímulos externos</li>
          </ul>

          <h3>Hiperactividad:</h3>
          <ul>
            <li>Inquietud frecuente</li>
            <li>Dificultad para permanecer sentado</li>
            <li>Sensación interna de inquietud</li>
            <li>Hablar excesivamente</li>
          </ul>

          <h3>Impulsividad:</h3>
          <ul>
            <li>Interrumpir conversaciones</li>
            <li>Dificultad para esperar turno</li>
            <li>Tomar decisiones sin pensar en consecuencias</li>
          </ul>

          <h2>Estrategias de Manejo</h2>
          <h3>Organización:</h3>
          <ul>
            <li>Usar calendarios y recordatorios</li>
            <li>Dividir tareas grandes en pasos más pequeños</li>
            <li>Establecer rutinas diarias</li>
            <li>Mantener un espacio de trabajo ordenado</li>
          </ul>

          <h3>Concentración:</h3>
          <ul>
            <li>Técnica Pomodoro (25 minutos de trabajo, 5 de descanso)</li>
            <li>Eliminar distracciones del entorno</li>
            <li>Usar ruido blanco o música sin letra</li>
            <li>Tomar descansos regulares</li>
          </ul>

          <h2>Tratamiento Integral</h2>
          <p>
            El manejo efectivo del TDAH generalmente requiere un enfoque multimodal que puede incluir:
          </p>
          <ul>
            <li>Terapia conductual</li>
            <li>Coaching especializado en TDAH</li>
            <li>Medicación (cuando sea apropiado)</li>
            <li>Cambios en el estilo de vida</li>
            <li>Apoyo familiar y social</li>
          </ul>
        </div>
      </div>
    </div>
  );
}