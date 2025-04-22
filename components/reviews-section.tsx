import Image from "next/image";
import { Star, StarHalf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Updated review data based on the portfolio items testimonials
const reviews = [
  {
    id: 1,
    name: "Klajdi Beqiraj",
    company: "NordicPro",
    image: "/reviews/reviewer-1.png",
    rating: 5,
    text: "TriviTurbo heeft onze visie op teamgeest, sport en mentale gezondheid perfect vertaald naar een gebruiksvriendelijk platform. De snelheid waarmee ze hebben geleverd, was indrukwekkend!",
    query: "professional headshot of Dutch businessman in his 30s with athletic appearance",
    role: "Oprichter",
  },
  {
    id: 2,
    name: "Lisa van der Meer",
    company: "Trendy Meubels",
    image: "/reviews/reviewer-2.png",
    rating: 5,
    text: "Omdat wij ons met onze hoogwaardige designmeubels onderscheiden van andere interieurwinkels, is het belangrijk dat dit ook goed via de website tot uiting komt. De jongens van TriviTurbo hebben dat perfect aangevoeld. Dankjewel!",
    query: "professional headshot of stylish Dutch businesswoman in her 40s with elegant style",
    role: "Eigenaar",
  },
  {
    id: 3,
    name: "Dennis van Leeuwen",
    company: "Motor Gein",
    image: "/reviews/reviewer-3.png",
    rating: 5,
    text: "De samenwerking met TriviTurbo verliep vlekkeloos. Ze hebben een website opgeleverd die precies de premium uitstraling heeft waar we naar op zoek waren. We zijn vooral onder de indruk van het gebruiksgemak en het strakke design.",
    query: "professional headshot of confident Dutch businessman in his 40s with formal attire",
    role: "Marketing Manager",
  },
  {
    id: 4,
    name: "Maarten Blom",
    company: "Wolf Brew",
    image: "/reviews/reviewer-4.png",
    rating: 5,
    text: "Na een leuk gesprek met Floris te hebben gehad, hebben wij onze content aangeleverd. De volgende dag stond onze site al online. Super snel en precies zoals we het voor ogen hadden. Proost, jongens!",
    query: "professional headshot of bearded Dutch craft brewery owner in his 30s with casual style",
    role: "Hoofdbrouwer",
  },
  {
    id: 5,
    name: "Eva Kuiper",
    company: "NatuurWonderen",
    image: "/reviews/reviewer-5.png",
    rating: 5,
    text: "Na een aantal nare ervaringen met websitebouwers, hoorde ik via een vriend over TriviTurbo. Sinds het eerste contact met Floris had ik al vertrouwen in de samenwerking. We zijn superblij met het eindresultaat, het straalt echt uit wie wij zijn en waar wij voor staan. Bovendien maakt het het voor ouders en jongeren heel gemakkelijk om zichzelf in te lezen en een plekje op kamp te boeken!",
    query: "professional headshot of friendly Dutch woman in her 40s with outdoor adventure style",
    role: "Directeur",
  },
  {
    id: 6,
    name: "Timo Blaauw",
    company: "GierigGroeien",
    image: "/reviews/reviewer-6.png",
    rating: 5,
    text: "De mannen van TriviTurbo hebben onze complexe vergelijkingswebsite netjes volgens de afgesproken deadlines opgeleverd. Het contact verliep soepel: geen verkooppraatjes, maar wel mooie resultaten. Top!",
    query: "professional headshot of tech-savvy Dutch entrepreneur in his 30s with glasses",
    role: "Oprichter",
  },
  {
    id: 7,
    name: "Maria Alonso",
    company: "La Subasta de Hashiban",
    image: "/reviews/reviewer-7.png",
    rating: 5,
    text: "De website die TriviTurbo heeft gemaakt, overtreft al onze verwachtingen. De visuele kwaliteit en interactieve elementen zorgen ervoor dat het echt voelt alsof je je waant in de wereld van Hashiban.",
    query: "professional headshot of creative Spanish-Dutch game designer woman in her 20s with artistic style",
    role: "Game Designer",
  },
];

// Helper function to render stars based on rating
const RatingStars = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex text-[#ffc600]">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} className="h-5 w-5 fill-current" />
      ))}
      {hasHalfStar && <StarHalf className="h-5 w-5 fill-current" />}
    </div>
  );
};

export default function ReviewsSection() {
  // We'll show 4 reviews at a time
  const displayedReviews = reviews.slice(0, 4);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Wat Onze Klanten Zeggen</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ontdek waarom bedrijven in heel Nederland kiezen voor TriviTurbo voor hun website behoeften.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedReviews.map((review) => (
            <Card key={review.id} className="overflow-hidden border-none shadow-lg">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-[#072ac8]/10 to-[#1e96fc]/10 p-6 md:p-8">
                  <div className="flex items-center mb-4">
                    <div>
                      <h3 className="font-bold text-lg">{review.name}</h3>
                      <p className="text-gray-600">
                        {review.role}, {review.company}
                      </p>
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
            <span className="font-bold">5.0/5</span>
            <span className="mx-2 text-gray-400">|</span>
            <span className="text-gray-600">Gebaseerd op {reviews.length} beoordelingen</span>
          </div>
        </div>
      </div>
    </section>
  );
}
