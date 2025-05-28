
import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import advisorConfig from '../config/advisorConfig';

const WhatsAppButton = () => {

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
        <a href={ advisorConfig.dataAdvisor.whatsApp.link} target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp">
          <img src={advisorConfig.dataAdvisor.whatsApp.iconUrl}  className="h-116 w-auto" alt="logo whatsapp" />
        </a>
      </Button>
    </motion.div>
  );
};

export default WhatsAppButton;
  