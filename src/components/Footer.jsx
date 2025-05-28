
import React from 'react';
import { Linkedin, Mail, Phone } from 'lucide-react';
import advisorConfig from '../config/advisorConfig';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <p className="text-xl font-semibold text-white mb-2">{advisorConfig.dataAdvisor.name}</p>
            <p className="text-sm">Asesor Comercial Autorizado Claro</p>
            <p className="text-sm">Tu Conexión Perfecta</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-white mb-3">Enlaces Rápidos</p>
            <ul className="space-y-2 text-sm">
              <li><a href="#acerca-de-mi" className="hover:text-claro-red transition-colors">Acerca de Mí</a></li>
              <li><a href="#paquetes-hogar" className="hover:text-claro-red transition-colors">Paquetes Hogar</a></li>
              <li><a href="#paquetes-movil" className="hover:text-claro-red transition-colors">Paquetes Móvil</a></li>
              <li><a href="#contacto" className="hover:text-claro-red transition-colors">Contacto</a></li>
            </ul>
          </div>
          <div>
            <p className="text-lg font-semibold text-white mb-3">Contacto Directo</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-claro-red" />
                <a href={advisorConfig.dataAdvisor.whatsApp.link} className="hover:text-claro-red transition-colors">{advisorConfig.dataAdvisor.contactNumber}</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-claro-red" />
                <a href={`mailto:${advisorConfig.dataAdvisor.emailContact}`} className="hover:text-claro-red transition-colors">{advisorConfig.dataAdvisor.emailContact}</a>
              </li>
            </ul>
            <div className="mt-4 flex space-x-3">
              <a href="https://linkedin.com/in/juanperezclaro" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-claro-blue transition-colors">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>&copy; {currentYear} {advisorConfig.dataAdvisor.name} - Asesor Comercial Autorizado Claro. Todos los derechos reservados.</p>
          <p className="mt-1">
            <a href="#privacidad" className="hover:text-claro-red transition-colors">Política de Privacidad</a> | <a href="#terminos" className="hover:text-claro-red transition-colors">Términos de Servicio</a>
          </p>
          <p className="mt-2 text-xs text-gray-500">Este sitio es de un asesor comercial autorizado e independiente de Claro.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
  