"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ZangpraktijkForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    preferences: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const serviceId = "service_u6x2do2";
      const templateIdBedankt = "template_oase3ds";
      const templateRequest = "template_twm96wa";
      const publicKey = "X_Bjt6rbE59Sd-EVk";

      await emailjs.send(
        serviceId,
        templateIdBedankt,
        {
          from_name: formData.name,
          from_email: formData.email,
          from_phone: formData.phone,
          from_website: formData.website,
          from_preferences: formData.preferences,
        },
        publicKey
      );

      await emailjs.send(
        serviceId,
        templateRequest,
        {
          type: "FREE REQUEST",
          from_name: formData.name,
          from_email: formData.email,
          from_phone: formData.phone,
          from_website: formData.website,
          from_preferences: formData.preferences,
        },
        publicKey
      );

      router.push("/claim-je-gratis-zangpraktijk-website/bedankt");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Er is een fout opgetreden. Probeer het later opnieuw.");
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 text-left">
      <div>
        <Label htmlFor="name" className="text-gray-700 font-medium">
          Voornaam
        </Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 h-12 text-base"
          placeholder="Jouw voornaam"
        />
      </div>

      <div>
        <Label htmlFor="email" className="text-gray-700 font-medium">
          E-mailadres
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 h-12 text-base"
          placeholder="jouw@email.nl"
        />
      </div>

      <div>
        <Label htmlFor="phone" className="text-gray-700 font-medium">
          Telefoonnummer
        </Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          className="mt-1 h-12 text-base"
          placeholder="06 12345678"
        />
      </div>

      <div>
        <Label htmlFor="website" className="text-gray-700 font-medium">
          Huidige website URL
        </Label>
        <Input
          id="website"
          name="website"
          type="url"
          value={formData.website}
          onChange={handleChange}
          className="mt-1 h-12 text-base"
          placeholder="https://jouwwebsite.nl"
        />
      </div>

      <div>
        <Label htmlFor="preferences" className="text-gray-700 font-medium">
          Heb je nog speciale wensen of voorkeuren?
        </Label>
        <Textarea
          id="preferences"
          name="preferences"
          value={formData.preferences}
          onChange={handleChange}
          className="mt-1 min-h-[120px] text-base"
          placeholder="Vertel ons over jouw stijl, kleuren, of specifieke functies die je graag zou willen zien..."
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#072ac8] hover:bg-[#1e96fc] text-white py-6 text-lg font-semibold mt-6"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Even geduld...
          </>
        ) : (
          "Vraag mijn gratis mock-up aan"
        )}
      </Button>
    </form>
  );
}
