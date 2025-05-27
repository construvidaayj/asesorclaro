
import React, { useState } from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Phone, Linkedin, Send, Facebook, Instagram, FacebookIcon } from 'lucide-react';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value) => {
    setFormData((prev) => ({ ...prev, interest: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!formData.name || !formData.email || !formData.message || !formData.interest) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Por favor, completa todos los campos obligatorios.",
      });
      return;
    }
    console.log('Form Data Submitted:', formData);
    // Here you would typically send data to a backend (e.g., Supabase)
    // For now, we'll use localStorage as a placeholder
    localStorage.setItem('contactFormData', JSON.stringify(formData));
    toast({
      title: '¡Mensaje Enviado!',
      description: 'Gracias por contactarme. Te responderé a la brevedad.',
    });
    setFormData({ name: '', email: '', phone: '', interest: '', message: '' });
  };

  return (
    <AnimatedSection id="contacto" className="py-16 sm:py-24 bg-gradient-to-br from-claro-red/5 via-white to-claro-blue/5" animation="slideInUp">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Ponte en <span className="text-gradient">Contacto</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">Estoy listo para ayudarte a encontrar tu plan Claro ideal. ¡Hablemos!</p>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Envíame un Mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Nombre Completo</Label>
                <Input id="name" name="name" type="text" placeholder="Tu nombre" value={formData.name} onChange={handleChange} required />
              </div>
              <div>
                <Label htmlFor="email">Correo Electrónico</Label>
                <Input id="email" name="email" type="email" placeholder="tu@correo.com" value={formData.email} onChange={handleChange} required />
              </div>
              <div>
                <Label htmlFor="phone">Teléfono (Opcional)</Label>
                <Input id="phone" name="phone" type="tel" placeholder="Tu número de teléfono" value={formData.phone} onChange={handleChange} />
              </div>
              <div>
                <Label htmlFor="interest">Estoy interesado en</Label>
                <Select name="interest" onValueChange={handleSelectChange} value={formData.interest} required>
                  <SelectTrigger id="interest">
                    <SelectValue placeholder="Selecciona una opción" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Claro Hogar">Claro Hogar (Internet, TV)</SelectItem>
                    <SelectItem value="Claro Móvil">Claro Móvil (Planes, Prepago)</SelectItem>
                    <SelectItem value="Ambos">Ambos</SelectItem>
                    <SelectItem value="Otro">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="message">Mensaje</Label>
                <Textarea id="message" name="message" placeholder="Cuéntame cómo puedo ayudarte..." value={formData.message} onChange={handleChange} rows={4} required />
              </div>
              <Button type="submit" className="w-full bg-claro-red hover:bg-claro-red-dark text-white text-lg py-3">
                Enviar Mensaje <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Información de Contacto Directo</h3>
              <div className="space-y-4">
                <a href="tel:+573024902653" className="flex items-center text-gray-700 hover:text-claro-red transition-colors">
                  <Phone className="h-6 w-6 mr-3 text-claro-red" />
                  <span>+57 3024902653</span>
                </a>
                <a href="mailto:josecatama24@gmail.com" className="flex items-center text-gray-700 hover:text-claro-red transition-colors">
                  <Mail className="h-6 w-6 mr-3 text-claro-red" />
                  <span>josecatama24@gmail.com</span>
                </a>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Sígueme en Redes</h3>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/jose.catama.523166" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-claro-blue transition-colors">
                  <Facebook className="h-8 w-8 " />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="https://www.instagram.com/jose.catama/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-claro-blue transition-colors">
                  <Instagram className="h-8 w-8 " />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="https://www.facebook.com/jose.catama.523166" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-claro-blue transition-colors">
                  <FacebookIcon className="h-8 w-8 " />
                  <span className="sr-only">Facebook</span>
                </a>
              </div>
            </div>
             <p className="text-sm text-gray-500 mt-4">
              Para una atención más rápida, puedes contactarme directamente por teléfono o WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ContactSection;
  