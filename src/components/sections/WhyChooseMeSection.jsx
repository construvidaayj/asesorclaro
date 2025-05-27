
import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { Users, Brain, ShieldCheck, TrendingUp, Award } from 'lucide-react';

const differentiators = [
  {
    icon: Users,
    title: 'Atención Personalizada',
    description: 'Me tomo el tiempo para entender tus necesidades específicas y ofrecerte soluciones a medida.',
  },
  {
    icon: Brain,
    title: 'Conocimiento Profundo',
    description: 'Experto en todas las ofertas y promociones de Claro, garantizando la mejor opción para ti.',
  },
  {
    icon: ShieldCheck,
    title: 'Ética Profesional',
    description: 'Transparencia y honestidad en cada asesoría. Mi prioridad es tu satisfacción y confianza.',
  },
  {
    icon: TrendingUp,
    title: 'Optimización y Ahorro',
    description: 'Te ayudo a encontrar el plan que te ofrece más por menos, optimizando tu gasto mensual.',
  },
  {
    icon: Award,
    title: 'Soporte Post-Venta',
    description: 'Mi compromiso no termina con la contratación. Estoy aquí para ayudarte con cualquier duda posterior.',
  },
];

const WhyChooseMeSection = () => {
  return (
    <AnimatedSection id="por-que-elegirme" className="py-16 sm:py-24 bg-white" animation="zoomIn">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          ¿Por Qué Elegir <span className="text-gradient">Mis Servicios?</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">Mi compromiso es ofrecerte la mejor experiencia y los mejores resultados.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item, index) => (
            <div key={index} className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-claro-red/5 to-claro-blue/5 border border-gray-200">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-claro-red text-white rounded-full">
                  <item.icon className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">{item.title}</h3>
              <p className="text-gray-600 text-center text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default WhyChooseMeSection;
  