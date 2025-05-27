
import React from 'react';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/AnimatedSection';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = ({ scrollToContact }) => {
  return (
    <AnimatedSection id="inicio" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-claro-red/10 via-white to-claro-blue/10 py-20 px-4" animation="fadeIn">
      <div className="container mx-auto text-center">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-1/2 text-left mb-10 md:mb-0">
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="block">Jose Catama</span>
              <span className="text-gradient block">Asesor Comercial Autorizado Claro</span>
              <span className="block text-3xl sm:text-4xl text-gray-700">Tu Conexión Perfecta</span>
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl text-gray-600 mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Encuentra el plan de internet y móvil ideal para tu hogar y tu vida. Te ayudo a navegar las opciones de Claro para que obtengas el mejor servicio al mejor precio.
            </motion.p>
            <motion.div 
              className="space-x-0 space-y-4 sm:space-x-4 sm:space-y-0 flex flex-col sm:flex-row justify-start"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button size="lg" className="bg-claro-red hover:bg-claro-red-dark text-white shadow-lg transform hover:scale-105 transition-transform duration-300" onClick={() => document.getElementById('paquetes-hogar')?.scrollIntoView({ behavior: 'smooth' })}>
                Descubre tu Plan Ideal <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-claro-blue text-claro-blue hover:bg-claro-blue/10 shadow-lg transform hover:scale-105 transition-transform duration-300" onClick={scrollToContact}>
                Contáctame Ahora
              </Button>
            </motion.div>
          </div>
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <img  
              className="rounded-full shadow-2xl w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-cover border-4 border-claro-red"
              alt="Foto profesional del asesor Juan Pérez"
              src="/catama.png" />
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default HeroSection;
  