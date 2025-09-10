import { Button } from "@/components/ui/button";
import HeroGrid from "@/components/hero-grid";
import TeamImageReveal from "@/components/team-image-reveal";
import Link from "next/link";
import { Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden py-16">
      <div className="absolute inset-0 z-0">
        <HeroGrid />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#072ac8]/90 to-[#1e96fc]/80 z-10"></div>
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              <span className="block">Uw Website</span>
              <span className="block">Binnen 24 uur</span>
              <span className="block text-[#fcf300] drop-shadow-lg">Voor slechts €300</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 drop-shadow">
              Wij bouwen razendsnel websites met behulp van de nieuwste AI-technologieën. Geen compromissen op
              kwaliteit, alleen bliksemsnelle resultaten.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#fcf300] hover:bg-[#ffc600] text-[#072ac8] font-bold text-lg px-8 py-6" asChild>
                <Link href="#contact">Ik wil een website</Link>
              </Button>
              <Button className="bg-[#072ac8] hover:bg-[#1e96fc] text-white font-bold text-lg px-8 py-6" asChild>
                <Link href="#contact">Even contact?</Link>
              </Button>
            </div>

            <div className="mt-12">
              <div className="inline-flex items-center bg-white/40 px-6 py-3 rounded-full shadow-md">
                <div className="flex mr-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-[#ffc600] fill-current" />
                  ))}
                </div>
                <span className="font-bold">5.0/5</span>
                <span className="mx-2 text-gray-400">|</span>
                <span className="text-gray-600 text-sm">Gebaseerd op {7} beoordelingen</span>
              </div>
            </div>
          </div>

          {/* <div className="flex justify-center">
            <TeamImageReveal />
          </div> */}
        </div>
      </div>
    </section>
  );
}
