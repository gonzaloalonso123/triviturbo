import { Check, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function PricingSection() {
  return (
    <section id="diensten" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#a2d6f9] text-[#072ac8] hover:bg-[#a2d6f9]/80">Onze Pakketten</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Kies uw perfecte website</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparante prijzen. Geen verborgen kosten. Snelle levering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px]">
            <div className="p-6 lg:p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Onepager</h3>
                  <p className="text-gray-500 mt-1">Perfect voor starters</p>
                </div>
                <Badge variant="outline" className="border-[#072ac8] text-[#072ac8]">
                  Populair
                </Badge>
              </div>

              <div className="mb-6">
                <span className="text-4xl lg:text-5xl font-bold text-gray-900">300</span>
                <span className="text-gray-500 ml-2">eenmalig</span>
              </div>

              <Button className="w-full bg-[#072ac8] hover:bg-[#1e96fc] text-white py-6 mb-8" asChild>
                <Link href="#contact">Kies dit pakket</Link>
              </Button>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#a2d6f9] flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-[#072ac8]" />
                  </div>
                  <span className="ml-3 text-gray-700">Professionele onepage website</span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#a2d6f9] flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-[#072ac8]" />
                  </div>
                  <span className="ml-3 text-gray-700">Contactformulier inbegrepen</span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#a2d6f9] flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-[#072ac8]" />
                  </div>
                  <span className="ml-3 text-gray-700">Social media integratie</span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#a2d6f9] flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-[#072ac8]" />
                  </div>
                  <span className="ml-3 text-gray-700">SEO geoptimaliseerd</span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#a2d6f9] flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-[#072ac8]" />
                  </div>
                  <span className="ml-3 text-gray-700">Levering binnen 24 uur</span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#a2d6f9] flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-[#072ac8]" />
                  </div>
                  <span className="ml-3 text-gray-700">Volledig responsive design</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#072ac8] to-[#1e96fc] rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px]">
            <div className="p-6 lg:p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">Website + Blog</h3>
                  <p className="text-white/80 mt-1">Voor groeiende bedrijven</p>
                </div>
                <Badge className="bg-[#fcf300] text-[#072ac8] hover:bg-[#fcf300]/90">Aanbevolen</Badge>
              </div>

              <div className="mb-6">
                <span className="text-4xl lg:text-5xl font-bold text-white">500</span>
                <span className="text-white/80 ml-2">eenmalig</span>
              </div>

              <Button className="w-full bg-white hover:bg-gray-100 text-[#072ac8] py-6 mb-8" asChild>
                <Link href="#contact">Kies dit pakket</Link>
              </Button>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-white flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-[#072ac8]" />
                  </div>
                  <span className="ml-3 text-white">Alles van het Onepager pakket</span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-white flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-[#072ac8]" />
                  </div>
                  <span className="ml-3 text-white">Meerdere pagina's (tot 5 pagina's)</span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-white flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-[#072ac8]" />
                  </div>
                  <span className="ml-3 text-white">Professionele blog pagina</span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-white flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-[#072ac8]" />
                  </div>
                  <span className="ml-3 text-white">Content Management Systeem</span>
                </div>
              </div>
            </div>
          </div>

          {/* Offer 3: AI Chatbot Package */}
          <div className="bg-gradient-to-br from-[#ffc600] to-[#fcf300] rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px] relative">
            <div className="p-6 lg:p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">AI Chatbot</h3>
                  <p className="text-gray-700 mt-1">Voor innovatieve ondernemers</p>
                </div>
                <div className="h-8 w-8 rounded-full bg-[#072ac8] flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-[#fcf300]" />
                </div>
              </div>

              <div className="mb-6">
                <span className="text-4xl lg:text-5xl font-bold text-gray-900">+ 250</span>
                <span className="text-gray-700 ml-2">eenmalig</span>
              </div>

              <Button className="w-full bg-[#072ac8] hover:bg-[#1e96fc] text-white py-6 mb-8" asChild>
                <Link href="#contact">Kies dit pakket</Link>
              </Button>

              <div className="space-y-4">
               <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#072ac8] flex items-center justify-center mt-0.5">
                    <Star className="h-4 w-4 text-[#fcf300]" />
                  </div>
                  <span className="ml-3 text-gray-800 font-medium">AI Chatbot op maat voor uw bedrijf</span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#072ac8] flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-[#fcf300]" />
                  </div>
                  <span className="ml-3 text-gray-800">Getraind op uw bedrijfsgegevens</span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#072ac8] flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-[#fcf300]" />
                  </div>
                  <span className="ml-3 text-gray-800">24/7 klantenservice automatisering</span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#072ac8] flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-[#fcf300]" />
                  </div>
                  <span className="ml-3 text-gray-800">Gedetailleerde analytics dashboard</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">Niet zeker welk pakket bij u past? Neem contact met ons op voor advies.</p>
          <Button
            variant="outline"
            className="border-[#072ac8] text-[#072ac8] hover:bg-[#072ac8] hover:text-white"
            asChild
          >
            <Link href="#contact">Vrijblijvend advies?</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
