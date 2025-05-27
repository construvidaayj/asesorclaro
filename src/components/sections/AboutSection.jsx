
import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { Award, Briefcase, CheckCircle } from 'lucide-react';

const AboutSection = () => {
  return (
    <AnimatedSection id="acerca-de-mi" className="py-16 sm:py-24 bg-white" animation="slideInLeft">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Acerca de Mí: <span className="text-gradient">Jose Catama</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">Tu experto en soluciones Claro.</p>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img   
              className="rounded-lg shadow-xl w-full h-auto object-cover max-h-[400px]" 
              alt="Jose Catama en una reunión con un cliente"
              src="/catama.png" />
          </div>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Briefcase className="h-8 w-8 text-claro-red mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Mi Trayectoria</h3>
                <p className="text-gray-600">
                  Con más de 5 años de experiencia en el sector de telecomunicaciones y una especialización profunda en los productos y servicios de Claro, mi misión es simplificar tu elección. He ayudado a cientos de clientes a encontrar la conexión perfecta, optimizando sus servicios y ahorrando en sus facturas.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Award className="h-8 w-8 text-claro-red mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Certificaciones y Autorización</h3>
                <p className="text-gray-600">
                  Soy un Asesor Comercial Autorizado por Claro, con todas las certificaciones y licencias necesarias para ofrecerte un servicio confiable y profesional. Mi conocimiento está siempre actualizado con las últimas ofertas y tecnologías de Claro.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-8 w-8 text-claro-red mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Mi Propuesta de Valor</h3>
                <p className="text-gray-600">
                  Entiendo que cada cliente es único. Por eso, me dedico a escuchar tus necesidades para ofrecerte una solución a medida. Mi objetivo no es solo venderte un plan, sino asegurarme de que obtengas el máximo valor y satisfacción con los servicios de Claro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default AboutSection;
  