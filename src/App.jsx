
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ClaroHomeSection from '@/components/sections/ClaroHomeSection';
import ClaroMobileSection from '@/components/sections/ClaroMobileSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import WhyChooseMeSection from '@/components/sections/WhyChooseMeSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Toaster } from '@/components/ui/toaster';

function App() {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header scrollToContact={scrollToContact} />
      <main className="flex-grow">
        <HeroSection scrollToContact={scrollToContact} />
        <AboutSection />
        <ClaroHomeSection scrollToContact={scrollToContact} />
        <ClaroMobileSection scrollToContact={scrollToContact} />
        <TestimonialsSection />
        <WhyChooseMeSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <Toaster />
    </div>
  );
}

export default App;
  