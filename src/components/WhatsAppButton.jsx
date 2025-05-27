
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  const phoneNumber = '+573024902653';
  const message = encodeURIComponent('Hola, estoy interesado en los servicios de Claro.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <Button
        asChild
        size="lg"
        className="rounded-full p-1 bg-green-500 hover:bg-green-600 text-white shadow-lg"
        style={{ width: '60px', height: '60px' }}
      >
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp">
          <img src="/whatsapp.png"  className="h-116 w-auto" alt="logo whatsapp" />
        </a>
      </Button>
    </motion.div>
  );
};

export default WhatsAppButton;
  