"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

const portfolioItems = [
  {
    id: 1,
    title: "NordicPro",
    category: "Sport & Gezondheid",
    description:
      "Een platform voor jeugdteams dat mentale gezondheid, motivatie en teambeheer op één plek samenbrengt. Gebouwd met React en Next.js.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2quqE0vORs9zNGxlDsyBRbxkVXcOkq.png",
    tags: ["Sport", "Mentale Gezondheid", "Teammanagement"],
    features: ["Wachtlijst", "Blog", "Brandbook"],
    completionTime: "24 uur",
    testimonial: {
      text: "TriviTurbo heeft onze visie op teamgeest, sport en mentale gezondheid perfect vertaald naar een gebruiksvriendelijk platform. De snelheid waarmee ze hebben geleverd, was indrukwekkend!",
      author: "Klajdi, Oprichter NordicPro",
    },
  },
  {
    id: 2,
    title: "Trendy Meubels",
    category: "E-commerce",
    description:
      "Een elegante webshop voor een meubelwinkel met een focus op karaktervolle, innovatieve ontwerpen. Gebouwd met Shopify en custom CSS.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jotcDegGXQenfuNw69TpjZw1t9IraG.png",
    tags: ["Meubels", "E-commerce", "Design"],
    features: ["Productcatalogus", "Blog"],
    completionTime: "24 uur",
    testimonial: {
      text: "Omdat wij ons met onze hoogwaardige designmeubels onderscheiden van andere interieurwinkels, is het belangrijk dat dit ook goed via de website tot uiting komt. De jongens van TriviTurbo hebben dat perfect aangevoeld. Dankjewel!",
      author: "Lisa van der Meer, Eigenaar Trendy Meubels",
    },
  },
  {
    id: 3,
    title: "Motor Gein",
    category: "Automotive",
    description:
      "Een premium website voor het showcasen van luxe auto's met gedetailleerde productpagina's en een strak design. Gebouwd met Vue.js.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-46uR6nGAvEr9DQtHxkUSKG4hZBwYux.png",
    tags: ["Automotive", "Luxe", "Showcase"],
    features: ["Geavanceerde filtering", "Blog"],
    completionTime: "24 uur",
    testimonial: {
      text: "De samenwerking met TriviTurbo verliep vlekkeloos. Ze hebben een website opgeleverd die precies de premium uitstraling heeft waar we naar op zoek waren. We zijn vooral onder de indruk van het gebruiksgemak en het strakke design.",
      author: "Dennis van Leeuwen, Marketing Manager Motor Gein",
    },
  },
  {
    id: 4,
    title: "Wolf Brew",
    category: "Food & Drank",
    description:
      "Een smaakvolle website voor een ambachtelijke brouwerij met productpresentatie en online besteloptie. Gebouwd met WordPress en WooCommerce.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7rbUdTGPbNLxn9LAFKoq0PYsw8XfY0.png",
    tags: ["Brouwerij", "Ambachtelijk", "E-commerce"],
    features: ["Productcatalogus", "Blog"],
    completionTime: "24 uur",
    testimonial: {
      text: "Na een leuk gesprek met Floris te hebben gehad, hebben wij onze content aangeleverd. De volgende dag stond onze site al online. Super snel en precies zoals we het voor ogen hadden. Proost, jongens!",
      author: "Maarten Blom, Hoofdbrouwer Wolf Brew",
    },
  },
  {
    id: 5,
    title: "NatuurWonderen",
    category: "Recreatie & Toerisme",
    description:
      "Een levendige website voor een buitenactiviteitenbedrijf met online boekingssysteem en activiteitenoverzicht. Gebouwd met React.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-20%20at%2014.29.01-YxoSc1oWT6v9RCBwYyIPqW2eBfvipF.png",
    tags: ["Natuur", "Activiteiten", "Boekingen"],
    features: ["Blog"],
    completionTime: "24 uur",
    testimonial: {
      text: "Na een aantal nare ervaringen met websitebouwers, hoorde ik via een vriend over TriviTurbo. Sinds het eerste contact met Floris had ik al vertrouwen in de samenwerking. We zijn superblij met het eindresultaat, het straalt echt uit wie wij zijn en waar wij voor staan. Bovendien maakt het het voor ouders en jongeren heel gemakkelijk om zichzelf in te lezen en een plekje op kamp te boeken!",
      author: "Eva Kuiper, Directeur NatuurWonderen",
    },
  },
  {
    id: 6,
    title: "GierigGroeien",
    category: "Vergelijkingswebsite",
    description:
      "De toonaangevende supplementenvergelijker van Nederland. Een gebruiksvriendelijke website die consumenten helpt de beste deals te vinden. Gebouwd met React en Node.js.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZALp9iYEFkWXdKN6hMsZCYdsEleIsE.png",
    tags: ["Supplementen", "Prijsvergelijking", "E-commerce"],
    features: ["Prijsvergelijking", "Kortingscodes", "Productdatabase", "Filteropties"],
    completionTime: "24 uur",
    testimonial: {
      text: "De mannen van TriviTurbo hebben onze complexe vergelijkingswebsite netjes volgens de afgesproken deadlines opgeleverd. Het contact verliep soepel: geen verkooppraatjes, maar wel mooie resultaten. Top!",
      author: "Timo Blaauw, Oprichter GierigGroeien",
    },
  },
  {
    id: 7,
    title: "La Subasta de Hashiban",
    category: "Gaming & Entertainment",
    description:
      "Een visueel indrukwekkende website voor een fantasy kaartspel met prachtige illustraties en een meeslepende gebruikerservaring. Gebouwd met Three.js en WebGL.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-20%20at%2014.34.39-ZA10u5kQj4Wq3UIH87CGg7hHWTw7Co.png",
    tags: ["Kaartspel", "Fantasy", "Gaming"],
    features: ["Interactieve elementen", "Animaties", "Speluitleg", "Online winkel"],
    completionTime: "24 uur",
    testimonial: {
      text: "De website die TriviTurbo heeft gemaakt, overtreft al onze verwachtingen. De visuele kwaliteit en interactieve elementen zorgen ervoor dat het echt voelt alsof je je waant in de wereld van Hashiban.",
      author: "Maria Alonso, Game Designer La Subasta de Hashiban",
    },
  },
];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev === portfolioItems.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev === 0 ? portfolioItems.length - 1 : prev - 1));
  };

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#a2d6f9] text-[#072ac8] hover:bg-[#a2d6f9]/80">Ons Portfolio</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Websites die we hebben gebouwd</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bekijk enkele van onze recente projecten, allemaal geleverd binnen 24 uur met de hoogste kwaliteit.
          </p>
        </div>

        {portfolioItems.length > 0 ? (
          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-xl shadow-2xl">
                <div className="aspect-[16/9] relative">
                  <Image
                    src={portfolioItems[currentProject].image || "/placeholder.svg"}
                    alt={portfolioItems[currentProject].title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="flex items-center text-white">
                    <div className="flex mr-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-[#ffc600] fill-current" />
                      ))}
                    </div>
                    <span className="text-sm">5.0/5.0</span>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="lg:pl-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-3">{portfolioItems[currentProject].title}</h3>
                <Badge className="mb-4 bg-[#072ac8] text-white">{portfolioItems[currentProject].category}</Badge>
                <p className="text-gray-600 mb-6">{portfolioItems[currentProject].description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Tags:</h4>
                  <div className="flex flex-wrap gap-2">
                    {portfolioItems[currentProject].tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="border-[#1e96fc] text-[#1e96fc]">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Kenmerken:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {portfolioItems[currentProject].features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <div className="h-5 w-5 rounded-full bg-[#a2d6f9] flex items-center justify-center mr-2">
                          <Check className="h-3 w-3 text-[#072ac8]" />
                        </div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <p className="text-gray-600 italic mb-2">
                    &ldquo;{portfolioItems[currentProject].testimonial.text}&rdquo;
                  </p>
                  <p className="text-gray-900 font-medium text-sm">
                    — {portfolioItems[currentProject].testimonial.author}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-[#072ac8]">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>Geleverd in {portfolioItems[currentProject].completionTime}</span>
                  </div>
                  {/* <Button className="bg-[#072ac8] hover:bg-[#1e96fc]">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Bekijk Live
                  </Button> */}
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            {portfolioItems.length > 1 && (
              <>
                <button
                  onClick={prevProject}
                  className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#a2d6f9]/80 hover:bg-white rounded-full p-2 shadow-lg z-10 lg:-left-5"
                  aria-label="Vorige project"
                >
                  <ChevronLeft className="h-6 w-6 text-gray-700" />
                </button>
                <button
                  onClick={nextProject}
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#a2d6f9]/80 hover:bg-white rounded-full p-2 shadow-lg z-10 lg:-right-5"
                  aria-label="Volgende project"
                >
                  <ChevronRight className="h-6 w-6 text-gray-700" />
                </button>
              </>
            )}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">Geen projecten gevonden in deze categorie.</p>
          </div>
        )}

        {/* Project thumbnails */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Alle Projecten</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {portfolioItems.map((item, index) => (
              <Card
                key={item.id}
                className={`overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  currentProject === index && activeCategory === "all" ? "ring-2 ring-[#072ac8]" : ""
                }`}
                onClick={() => {
                  setActiveCategory("all");
                  setCurrentProject(index);
                }}
              >
                <CardContent className="p-0">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="p-3">
                    <h4 className="font-medium text-sm truncate">{item.title}</h4>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 text-[#ffc600] fill-current" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">Klaar om uw eigen website te laten maken?</p>
          <Button className="bg-[#072ac8] hover:bg-[#1e96fc] text-white px-8 py-6 text-lg" asChild>
            <Link href="#contact">Start uw project</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

// Helper component for check icon
function Check(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

// Helper component for clock icon
function Clock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
