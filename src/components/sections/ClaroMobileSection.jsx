
import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Smartphone, MessageCircle, Zap, ChevronRight } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const mobilePackages = [
  {
    icon: Smartphone,
    title: 'Plan Pospago Conexión Total',
    description: 'Datos ilimitados, minutos y SMS. Ideal para quienes siempre están conectados.',
    features: ['Datos Ilimitados 5G', 'Minutos y SMS Ilimitados', 'Roaming incluido (Países seleccionados)'],
    price: '$39.99/mes',
  },
  {
    icon: MessageCircle,
    title: 'Plan Pospago Redes Sociales',
    description: 'Navega sin límites en tus redes favoritas y mantente comunicado.',
    features: ['20GB Datos Libres', 'Redes Sociales Ilimitadas', 'Minutos y SMS Nacionales'],
    price: '$25.99/mes',
  },
  {
    icon: Zap,
    title: 'Prepago Power',
    description: 'Control total de tu gasto con paquetes flexibles de datos y minutos.',
    features: ['Paquetes desde $5', 'Bonos por recarga', 'WhatsApp Gratis'],
    price: 'Desde $5',
  },
];

const ClaroMobileSection = ({ scrollToContact }) => {
  const { toast } = useToast();

  const handleMoreDetails = (packageName) => {
    toast({
      title: "Más Información",
      description: `Para más detalles sobre ${packageName}, por favor contáctame.`,
    });
    scrollToContact();
  };

  return (
    <AnimatedSection id="paquetes-movil" className="py-16 sm:py-24 bg-white" animation="slideInRight">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Libertad y Conexión en tu Móvil con <span className="text-gradient">Claro</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">Encuentra el plan móvil perfecto que se adapta a tu estilo de vida.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mobilePackages.map((pkg, index) => (
            <Card key={index} className="flex flex-col transform hover:scale-105 transition-transform duration-300">
              <CardHeader className="items-center text-center">
                <pkg.icon className="h-12 w-12 text-claro-blue mb-4" />
                <CardTitle className="text-xl text-gray-800">{pkg.title}</CardTitle>
                <CardDescription className="text-gray-600">{pkg.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <ChevronRight className="h-5 w-5 text-claro-blue mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <p className="text-2xl font-bold text-claro-blue text-center mb-4">{pkg.price}</p>
              </CardContent>
              <div className="p-6 pt-0">
                <Button className="w-full bg-claro-blue hover:bg-secondary/90 text-white" onClick={() => handleMoreDetails(pkg.title)}>
                  Más Detalles
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ClaroMobileSection;
  