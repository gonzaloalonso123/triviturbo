import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Home, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { heroDesigns } from "@/lib/hero-designs"

export function generateStaticParams() {
  return heroDesigns.map((design, index) => ({
    id: (index + 1).toString(),
  }))
}

export default function HeroDesignPage({ params }: { params: { id: string } }) {
  const id = Number.parseInt(params.id)

  // Check if the ID is valid
  if (isNaN(id) || id < 1 || id > heroDesigns.length) {
    notFound()
  }

  const design = heroDesigns[id - 1]
  const prevId = id > 1 ? id - 1 : heroDesigns.length
  const nextId = id < heroDesigns.length ? id + 1 : 1

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Navigation */}
        <div className="flex justify-between items-center mb-8">
          <Link href="/" className="flex items-center text-[#072ac8] hover:text-[#1e96fc]">
            <Home className="mr-2 h-5 w-5" />
            <span>Terug naar Home</span>
          </Link>

          <div className="flex items-center space-x-2">
            <span className="text-gray-500">
              Design {id} van {heroDesigns.length}
            </span>
          </div>
        </div>

        {/* Hero Design */}
        <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg mb-8">
          <div className="relative aspect-video w-full">
            <Image
              src={`/abstract-geometric-shapes.png?height=800&width=1600&query=${design.query}`}
              alt={`Hero design ${id} - ${design.style} style`}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Design Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Hero Design {id}: {design.style.charAt(0).toUpperCase() + design.style.slice(1)} Stijl
            </h1>
            <p className="text-gray-600 mb-6">{getDescriptionForStyle(design.style)}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-[#072ac8] text-white px-3 py-1 rounded-full text-sm">{design.style}</span>
              <span className="bg-[#1e96fc] text-white px-3 py-1 rounded-full text-sm">Hero Section</span>
              <span className="bg-[#a2d6f9] text-[#072ac8] px-3 py-1 rounded-full text-sm">Web Design</span>
              <span className="bg-[#ffc600] text-[#072ac8] px-3 py-1 rounded-full text-sm">TriviTurbo</span>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Design Details</h2>
            <div className="space-y-3">
              <div>
                <span className="text-gray-500 block">Stijl:</span>
                <span className="font-medium">{design.style.charAt(0).toUpperCase() + design.style.slice(1)}</span>
              </div>
              <div>
                <span className="text-gray-500 block">Kleurenpalet:</span>
                <span className="font-medium">TriviTurbo Huisstijl</span>
              </div>
              <div>
                <span className="text-gray-500 block">Geschikt voor:</span>
                <span className="font-medium">{getSuitableForStyle(design.style)}</span>
              </div>
            </div>

            <div className="mt-6">
              <Button className="w-full bg-[#072ac8] hover:bg-[#1e96fc]">
                <Download className="mr-2 h-4 w-4" />
                Download Design
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center">
          <Link href={`/hero-designs/${prevId}`}>
            <Button variant="outline" className="flex items-center">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Vorige Design
            </Button>
          </Link>

          <Link href={`/hero-designs/${nextId}`}>
            <Button variant="outline" className="flex items-center">
              Volgende Design
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

// Helper functions for design descriptions
function getDescriptionForStyle(style: string): string {
  switch (style) {
    case "curvy":
      return "Deze hero sectie kenmerkt zich door organische, vloeiende vormen die een gevoel van beweging en dynamiek creëren. De golvende elementen geven een zachte, toegankelijke uitstraling die perfect is voor creatieve bedrijven, wellness merken of innovatieve startups. De curvy stijl combineert esthetiek met functionaliteit voor een uitnodigende gebruikerservaring."
    case "clean":
      return "Deze minimalistische hero sectie gebruikt ruime witruimte, strakke lijnen en een geordende layout om een professionele, moderne uitstraling te creëren. De clean stijl zorgt voor optimale leesbaarheid en gebruiksvriendelijkheid, waardoor bezoekers direct de belangrijkste informatie kunnen vinden. Perfect voor zakelijke websites, portfolios of premium merken."
    case "futuristic":
      return "Deze vooruitstrevende hero sectie combineert geavanceerde visuele elementen zoals neon accenten, digitale patronen en technologische thema's. De futuristische stijl straalt innovatie en cutting-edge technologie uit, ideaal voor tech bedrijven, SaaS platforms of digitale producten. Het ontwerp creëert een gevoel van vooruitgang en toekomstgerichtheid."
    case "playful":
      return "Deze levendige hero sectie gebruikt speelse vormen, levendige kleuren en creatieve illustraties om een vrolijke, toegankelijke sfeer te creëren. De playful stijl nodigt bezoekers uit om te interacteren en te ontdekken, perfect voor creatieve bureaus, educatieve platforms of merken gericht op een jonger publiek. Het ontwerp straalt persoonlijkheid en originaliteit uit."
    default:
      return "Deze unieke hero sectie combineert verschillende designelementen voor een opvallende eerste indruk. Het ontwerp balanceert esthetiek en functionaliteit om bezoekers direct te engageren en de kernboodschap van de website effectief over te brengen."
  }
}

function getSuitableForStyle(style: string): string {
  switch (style) {
    case "curvy":
      return "Creatieve bureaus, wellness merken, mode websites"
    case "clean":
      return "Zakelijke websites, portfolios, premium merken"
    case "futuristic":
      return "Tech bedrijven, SaaS platforms, digitale producten"
    case "playful":
      return "Creatieve bureaus, educatieve platforms, kindgerichte merken"
    default:
      return "Diverse websites en digitale platforms"
  }
}
