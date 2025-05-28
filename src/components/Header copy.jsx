
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, X, Home, User, Wifi, Smartphone, MessageSquare, Award, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import advisorConfig from '../config/advisorConfig';

const navLinks = [
  { href: '#inicio', label: 'Inicio', icon: Home },
  { href: '#acerca-de-mi', label: 'Acerca de Mí', icon: User },
  { href: '#paquetes-hogar', label: 'Claro Hogar', icon: Wifi },
  { href: '#paquetes-movil', label: 'Claro Móvil', icon: Smartphone },
  { href: '#testimonios', label: 'Testimonios', icon: MessageSquare },
  { href: '#por-que-elegirme', label: 'Por Qué Elegirme', icon: Award },
  { href: '#contacto', label: 'Contacto', icon: Phone },
];

const Header = ({ scrollToContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = (href) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 shadow-lg backdrop-blur-md' : 'bg-transparent'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="#inicio" onClick={(e) => { e.preventDefault(); handleNavLinkClick('#inicio'); }} className="text-2xl font-bold">
            <span className="text-claro-red">{advisorConfig.dataAdvisor.name.split(" ").at(0)}</span><span className="text-claro-blue"> {advisorConfig.dataAdvisor.name.split(" ").at(1)}</span>
            <span className="block text-xs text-gray-600">{advisorConfig.dataAdvisor.position}</span>
          </a>

          <nav className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <Button
                key={link.href}
                variant="ghost"
                className={`font-medium ${isScrolled ? 'text-gray-700 hover:text-claro-red' : 'text-gray-700 hover:text-claro-red'}`}
                onClick={() => handleNavLinkClick(link.href)}
              >
                {link.label}
              </Button>
            ))}
          </nav>

          <Button className="hidden md:inline-flex bg-claro-red hover:bg-claro-red-dark text-white" onClick={scrollToContact}>
            Contactar
          </Button>

          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-700' : 'text-gray-700'}`} />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[340px] bg-white p-0">
                <div className="p-6 border-b">
                  <a href="#inicio" onClick={(e) => { e.preventDefault(); handleNavLinkClick('#inicio'); }} className="text-2xl font-bold">
                    <span className="text-claro-red">{advisorConfig.dataAdvisor.name.split(" ").at(0)}</span><span className="text-claro-blue"> {advisorConfig.dataAdvisor.name.split(" ").at(1)}</span>
                  </a>
                </div>
                <nav className="flex flex-col space-y-2 p-6">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Button
                        variant="ghost"
                        className="justify-start text-lg py-3 text-gray-700 hover:bg-claro-red/10 hover:text-claro-red"
                        onClick={() => handleNavLinkClick(link.href)}
                      >
                        <link.icon className="mr-3 h-5 w-5" />
                        {link.label}
                      </Button>
                    </SheetClose>
                  ))}
                </nav>
                <div className="p-6 border-t">
                  <SheetClose asChild>
                    <Button className="w-full bg-claro-red hover:bg-claro-red-dark text-white" onClick={scrollToContact}>
                      Contactar Ahora
                    </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
