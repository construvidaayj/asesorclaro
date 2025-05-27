
import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Wifi, Tv, Phone, ChevronRight } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const homePackages = [
  {
    icon: Wifi,
    title: 'Internet Fibra Óptica 100 Mbps',
    description: 'Ideal para streaming HD y gaming casual. Conexión estable y rápida.',
    features: ['100 Mbps descarga', '50 Mbps subida', 'Router Wi-Fi incluido'],
    price: '$29.99/mes',
  },
  {
    icon: Tv,
    title: 'Internet + TV Digital Avanzada',
    description: 'La combinación perfecta de velocidad y entretenimiento. Más de 150 canales.',
    features: ['200 Mbps descarga', '100 Mbps subida', 'Claro TV Avanzada', 'Decodificador HD'],
    price: '$49.99/mes',
  },
  {
    icon: Phone,
    title: 'Triple Play Premium',
    description: 'Todo en uno: internet de alta velocidad, TV completa y telefonía fija ilimitada.',
    features: ['500 Mbps descarga', '250 Mbps subida', 'Claro TV Premium', 'Llamadas ilimitadas'],
    price: '$79.99/mes',
  },
];

const ClaroHomeSection = ({ scrollToContact }) => {
  const { toast } = useToast();

  const handleMoreDetails = (packageName) => {
    toast({
      title: "Más Información",
      description: `Para más detalles sobre ${packageName}, por favor contáctame.`,
    });
    scrollToContact();
  };

  return (
    <AnimatedSection id="paquetes-hogar" className="py-16 sm:py-24 bg-claro-gray" animation="zoomIn">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Internet y Entretenimiento para tu Hogar con <span className="text-gradient">Claro</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">Descubre los mejores paquetes de Claro Hogar diseñados para ti.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {homePackages.map((pkg, index) => (
            <Card key={index} className="flex flex-col transform hover:scale-105 transition-transform duration-300">
              <CardHeader className="items-center text-center">
                <pkg.icon className="h-12 w-12 text-claro-red mb-4" />
                <CardTitle className="text-xl text-gray-800">{pkg.title}</CardTitle>
                <CardDescription className="text-gray-600">{pkg.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <ChevronRight className="h-5 w-5 text-claro-red mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <p className="text-2xl font-bold text-claro-red text-center mb-4">{pkg.price}</p>
              </CardContent>
              <div className="p-6 pt-0">
                <Button className="w-full bg-claro-red hover:bg-claro-red-dark text-white" onClick={() => handleMoreDetails(pkg.title)}>
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

export default ClaroHomeSection;
  