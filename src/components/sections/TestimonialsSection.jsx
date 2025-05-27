
import React from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Ana García',
    photo_description: 'mujer sonriendo',
    quote: 'Jose me ayudó a encontrar el plan perfecto para mi familia. ¡El servicio al cliente fue excepcional y ahora ahorramos dinero cada mes! Totalmente recomendado.',
    rating: 5,
  },
  {
    name: 'Carlos Rodríguez',
    photo_description: 'hombre de negocios',
    quote: 'Como profesional independiente, necesito una conexión a internet rápida y confiable. Jose entendió mis necesidades y me consiguió un paquete de fibra óptica increíble. ¡Muy satisfecho!',
    rating: 5,
  },
  {
    name: 'Laura Méndez',
    photo_description: 'joven estudiante',
    quote: 'Estaba confundida con tantos planes móviles, pero Jose me explicó todo con paciencia y me ayudó a elegir el mejor para mí. ¡Ahora tengo datos ilimitados para mis estudios!',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <AnimatedSection id="testimonios" className="py-16 sm:py-24 bg-claro-gray" animation="fadeInUp">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Lo que dicen mis <span className="text-gradient">Clientes</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">La satisfacción de mis clientes es mi mayor recompensa.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
            <Card className="bg-white shadow-lg overflow-hidden">
              <CardContent className="p-6 text-center">
                <img  
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-claro-red object-cover"
                  alt="Foto de Ana García"
                  src="https://images.unsplash.com/photo-1545594263-11616914c0e2" />
                <div className="flex justify-center mb-2">
                  {[...Array(testimonials[0].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">"{testimonials[0].quote}"</p>
                <p className="font-semibold text-gray-800">{testimonials[0].name}</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg overflow-hidden">
              <CardContent className="p-6 text-center">
                <img  
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-claro-red object-cover"
                  alt="Foto de Carlos Rodríguez"
                  src="https://images.unsplash.com/photo-1600878459138-e1123b37cb30" />
                <div className="flex justify-center mb-2">
                  {[...Array(testimonials[1].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">"{testimonials[1].quote}"</p>
                <p className="font-semibold text-gray-800">{testimonials[1].name}</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg overflow-hidden">
              <CardContent className="p-6 text-center">
                <img  
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-claro-red object-cover"
                  alt="Foto de Laura Méndez"
                  src="https://images.unsplash.com/photo-1651074910422-f963f345d462" />
                <div className="flex justify-center mb-2">
                  {[...Array(testimonials[2].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">"{testimonials[2].quote}"</p>
                <p className="font-semibold text-gray-800">{testimonials[2].name}</p>
              </CardContent>
            </Card>
          
        </div>
      </div>
    </AnimatedSection>
  );
};

export default TestimonialsSection;
  