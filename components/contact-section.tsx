"use client";

import type React from "react";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Send, Loader2, CheckCircle } from "lucide-react";
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const serviceId = 'service_u6x2do2';
      const templateId = 'template_twm96wa';
      const publicKey = 'X_Bjt6rbE59Sd-EVk';
      
      await emailjs.send(
        serviceId,
        templateId,
        {
          type: "PAID WEBSITE REQUEST",
          from_name: formData.name,
          from_email: formData.email,
          from_phone: formData.phone,
          message: formData.message,
          to_email: 'info@triviturbo.nl',
        },
        publicKey
      );
      
      setIsSuccess(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Er is iets misgegaan bij het versturen van uw bericht. Probeer het later opnieuw.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Neem Contact Op</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Klaar om uw nieuwe website te lanceren? Neem vandaag nog contact met ons op!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-[#072ac8] to-[#1e96fc] rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Contactgegevens</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="h-6 w-6 mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">E-mail</h4>
                  <p>info@triviturbo.nl</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-6 w-6 mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Telefoon</h4>
                  <p>+31 6 310 85 254</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-xl font-semibold mb-4">Werkuren</h4>
              <p className="mb-2">Maandag - Vrijdag: 9:00 - 18:00</p>
              <p>Weekend: Gesloten</p>
            </div>
          </div>

          <div>
            {isSuccess ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <CheckCircle className="h-16 w-16 mx-auto text-green-500 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Bericht Ontvangen!</h3>
                <p className="text-gray-600 mb-6">
                  Bedankt voor uw bericht. We hebben uw aanvraag ontvangen en zullen zo snel mogelijk contact met u opnemen.
                </p>
                <Button 
                  onClick={() => setIsSuccess(false)} 
                  className="bg-[#072ac8] hover:bg-[#1e96fc] text-white"
                >
                  Nieuw Bericht
                </Button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Naam
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                    disabled={isLoading}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-mail
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                    disabled={isLoading}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefoonnummer
                  </label>
                  <Input 
                    id="phone" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    className="w-full" 
                    disabled={isLoading}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Bericht
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full min-h-[150px]"
                    disabled={isLoading}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-[#072ac8] hover:bg-[#1e96fc] text-white"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Versturen...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Verstuur Bericht
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
