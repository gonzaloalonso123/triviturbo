import Image from "next/image"
import { Star, StarHalf } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

// Sample review data
const reviews = [
  {
    id: 1,
    name: "Martijn de Vries",
    company: "Bloemen & Zo",
    image: "/reviews/reviewer-1.png",
    rating: 5,
    text: "Trivi-Turbo heeft onze website binnen 24 uur opgeleverd, precies zoals beloofd! De kwaliteit is uitstekend en onze online verkopen zijn sindsdien met 40% gestegen. Absoluut de beste investering die we hebben gedaan.",
    query: "professional headshot of Dutch businessman in his 40s with glasses",
  },
  {
    id: 2,
    name: "Sophie Jansen",
    company: "Jansen Consultancy",
    image: "/reviews/reviewer-2.png",
    rating: 5,
    text: "Ik was sceptisch over een website die zo snel gebouwd kon worden, maar Trivi-Turbo heeft me omver geblazen. De website ziet er professioneel uit, laadt razendsnel en heeft alle functionaliteiten die ik nodig heb. Geweldig werk!",
    query: "professional headshot of Dutch businesswoman in her 30s with blonde hair",
  },
  {
    id: 3,
    name: "Thomas Bakker",
    company: "Bakker's Patisserie",
    image: "/reviews/reviewer-3.png",
    rating: 4.5,
    text: "Onze bakkerij had dringend een nieuwe website nodig en Trivi-Turbo heeft dit perfect opgelost. De website werd binnen een dag opgeleverd en ziet er prachtig uit. Onze klanten zijn enthousiast en kunnen nu eenvoudig online bestellingen plaatsen.",
    query: "professional headshot of Dutch baker in his 50s with friendly smile",
  },
  {
    id: 4,
    name: "Emma van Dijk",
    company: "Van Dijk Fotografie",
    image: "/reviews/reviewer-4.png",
    rating: 5,
    text: "Als fotograaf is de visuele presentatie van mijn werk cruciaal. Trivi-Turbo begreep dit perfect en creëerde een prachtige website die mijn portfolio optimaal presenteert. En dat allemaal binnen 24 uur! Ongelooflijk.",
    query: "professional headshot of Dutch female photographer in her 20s with artistic style",
  },
]

// Helper function to render stars based on rating
const RatingStars = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0

  return (
    <div className="flex text-[#ffc600]">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} className="h-5 w-5 fill-current" />
      ))}
      {hasHalfStar && <StarHalf className="h-5 w-5 fill-current" />}
    </div>
  )
}

export default function ReviewsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Wat Onze Klanten Zeggen</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ontdek waarom bedrijven in heel Nederland kiezen voor Trivi-Turbo voor hun website behoeften.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review) => (
            <Card key={review.id} className="overflow-hidden border-none shadow-lg">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-[#072ac8]/10 to-[#1e96fc]/10 p-6 md:p-8">
                  <div className="flex items-center mb-4">
                    <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4 border-2 border-white shadow-md">
                      <Image
                        src={`/abstract-geometric-shapes.png?height=200&width=200&query=${review.query}`}
                        alt={review.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{review.name}</h3>
                      <p className="text-gray-600">{review.company}</p>
                      <RatingStars rating={review.rating} />
                    </div>
                  </div>
                  <p className="text-gray-700 italic">&ldquo;{review.text}&rdquo;</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-md">
            <div className="flex mr-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-[#ffc600] fill-current" />
              ))}
            </div>
            <span className="font-bold">4.9/5</span>
            <span className="mx-2 text-gray-400">|</span>
            <span className="text-gray-600">Gebaseerd op 127 beoordelingen</span>
          </div>
        </div>
      </div>
    </section>
  )
}
