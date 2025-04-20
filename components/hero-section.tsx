import { Button } from "@/components/ui/button";
import HeroGrid from "@/components/hero-grid";
import TeamImageReveal from "@/components/team-image-reveal";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden py-16">
      {/* Hero Grid Background */}
      <div className="absolute inset-0 z-0">
        <HeroGrid />
      </div>

      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#072ac8]/90 to-[#1e96fc]/80 z-10"></div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              <span className="block">Uw Website</span>
              <span className="block">Binnen 24 Uur</span>
              <span className="block text-[#fcf300] drop-shadow-lg">Voor Slechts €300</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 drop-shadow">
              Wij bouwen razendsnel websites met behulp van de nieuwste AI-technologieën. Geen compromissen op
              kwaliteit, alleen bliksemsnelle resultaten.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#fcf300] hover:bg-[#ffc600] text-[#072ac8] font-bold text-lg px-8 py-6">
                Krijg Uw Website
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-bold text-lg px-8 py-6"
              >
                Meer Informatie
              </Button>
            </div>
          </div>

          {/* Team Image with Hover Effect */}
          <div className="flex justify-center">
            <TeamImageReveal />
          </div>
        </div>
      </div>
    </section>
  );
}
