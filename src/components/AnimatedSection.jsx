
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const AnimatedSection = ({ children, className, animation = "fadeInUp", id }) => { // <--- Asegúrate de pasar el 'id'
  const ref = useRef(null);
  // Cambia 'amount: 0.2' a un valor más alto, por ejemplo, 0.5 o 0.8
  const isInView = useInView(ref, { once: true, amount: 0.5 }); // <-- CAMBIO SUGERIDO AQUÍ

  const variants = {
    fadeInUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    slideInLeft: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
    },
    slideInRight: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 },
    },
    zoomIn: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    }
  };

  return (
    <motion.section
      ref={ref}
      id={id} // <--- Asegúrate de que el ID se propague aquí si AnimatedSection es el contenedor principal
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants[animation]}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
  