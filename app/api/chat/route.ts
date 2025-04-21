import { NextResponse } from "next/server"
import OpenAI from "openai"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

const pageContent = {
  companyInfo: {
    name: "TriviTurbo",
    tagline: "Uw Website Binnen 24 Uur Voor Slechts €300",
    description:
      "Wij bouwen snelle en betaalbare websites met behulp van de nieuwste AI-technologieën. Krijg uw website binnen 24 uur voor slechts €300.",
    uniqueSellingPoints: [
      "Betaalbare prijzen vanaf €300",
      "Gebruik van de nieuwste AI-technologieën",
      "Professionele en responsieve designs",
      "SEO geoptimaliseerd",
    ],
    contactInfo: {
      email: "info@triviturbo.nl",
      phone: "+31 6 310 85 254",
      workingHours: "Maandag - Vrijdag: 9:00 - 18:00, Weekend: Gesloten",
    },
  },

  services: {
    packages: [
      {
        name: "Onepager",
        price: "€300",
        description: "Perfect voor starters",
        features: [
          "Professionele onepage website",
          "Contactformulier inbegrepen",
          "Wij beheren uw hosting en domein",
          "Social media integratie",
          "SEO geoptimaliseerd",
          "Levering binnen 24 uur",
          "Volledig responsive design",
        ],
        bestFor: "Startende ondernemers, persoonlijke websites, kleine bedrijven",
      },
      {
        name: "Website + Blog",
        price: "€450",
        description: "Voor groeiende bedrijven",
        features: [
          "Alles van het Onepager pakket",
          "Professionele blog pagina",
          "Content Management Systeem",
        ],
        bestFor: "Groeiende bedrijven, content creators, bedrijven die regelmatig updates delen",
      },
      {
        name: "AI Chatbot",
        price: "€750",
        description: "Voor innovatieve ondernemers",
        features: [
          "Alles van het Website + Blog pakket",
          "AI Chatbot op maat voor uw bedrijf",
          "Getraind op uw bedrijfsgegevens",
          "24/7 klantenservice automatisering",
          "Leadgeneratie en kwalificatie",
          "Gedetailleerde analytics dashboard",
        ],
        bestFor: "Innovatieve bedrijven, e-commerce, bedrijven met veel klantenservice vragen",
      },
    ],
  },

  process: {
    steps: [
      {
        title: "Contact",
        description: "U neemt contact met ons op.",
      },
      {
        title: "Behoeften",
        description: "We ontdekken wat uw behoeften zijn in een gesprek.",
      },
      {
        title: "Ontwerp",
        description: "We bespreken het ontwerp op basis van uw ideeën.",
      },
      {
        title: "Ontwikkeling",
        description:
          "We bouwen uw website met de beste beschikbare technologie, bugvrij, extreem performant en razendsnel.",
      },
    ],
    deliveryTime: "Binnen 24 uur na goedkeuring van het ontwerp",
  },

  portfolio: {
    description: "Bekijk enkele van onze recente projecten, allemaal geleverd binnen 24 uur met de hoogste kwaliteit.",
    categories: [
      "E-commerce",
      "Sport & Gezondheid",
      "Automotive",
      "Food & Drank",
      "Recreatie & Toerisme",
      "Vergelijkingswebsites",
      "Gaming & Entertainment",
    ],
    featuredProjects: [
      {
        title: "NordicPro",
        category: "Sport & Gezondheid",
        description:
          "Een platform voor jeugdteams dat mentale gezondheid, motivatie en teambeheer op één plek samenbrengt.",
        testimonial:
          "TriviTurbo heeft onze visie perfect vertaald naar een gebruiksvriendelijk platform. De snelheid waarmee ze hebben geleverd was indrukwekkend!",
      },
      {
        title: "Trendy Meubels",
        category: "E-commerce",
        description:
          "Een elegante webshop voor een meubelwinkel met een focus op karaktervolle, innovatieve ontwerpen.",
        testimonial:
          "Onze online verkopen zijn met 60% gestegen sinds de lancering van onze nieuwe website. De moderne uitstraling past perfect bij ons merk!",
      },
      {
        title: "GierigGroeien",
        category: "Vergelijkingswebsite",
        description:
          "De toonaangevende supplementenvergelijker van Nederland. Een gebruiksvriendelijke website die consumenten helpt de beste deals te vinden.",
        testimonial:
          "TriviTurbo heeft onze complexe vergelijkingswebsite binnen 24 uur opgeleverd. De site is snel, gebruiksvriendelijk en heeft onze conversies met 45% verhoogd.",
      },
    ],
  },

  reviews: {
    averageRating: "4.9/5",
    totalReviews: "127",
    featuredReviews: [
      {
        name: "Martijn de Vries",
        company: "Bloemen & Zo",
        rating: 5,
        text: "TriviTurbo heeft onze website binnen 24 uur opgeleverd, precies zoals beloofd! De kwaliteit is uitstekend en onze online verkopen zijn sindsdien met 40% gestegen. Absoluut de beste investering die we hebben gedaan.",
      },
      {
        name: "Sophie Jansen",
        company: "Jansen Consultancy",
        rating: 5,
        text: "Ik was sceptisch over een website die zo snel gebouwd kon worden, maar TriviTurbo heeft me omver geblazen. De website ziet er professioneel uit, laadt razendsnel en heeft alle functionaliteiten die ik nodig heb. Geweldig werk!",
      },
      {
        name: "Thomas Bakker",
        company: "Bakker's Patisserie",
        rating: 4.5,
        text: "Onze bakkerij had dringend een nieuwe website nodig en TriviTurbo heeft dit perfect opgelost. De website werd binnen een dag opgeleverd en ziet er prachtig uit. Onze klanten zijn enthousiast en kunnen nu eenvoudig online bestellingen plaatsen.",
      },
    ],
  },

  heroDesigns: {
    description:
      "We hebben meer dan 20 verschillende hero design stijlen beschikbaar die u kunt bekijken door op de grid in de hero sectie te klikken.",
    styles: ["curvy", "clean", "futuristic", "playful"],
    customizationOptions: "Alle designs kunnen worden aangepast aan uw huisstijl en wensen.",
  },

  team: {
    description:
      "Ons team bestaat uit ervaren webontwikkelaars en designers die gespecialiseerd zijn in snelle website ontwikkeling met behulp van AI.",
    funFact: "Als u met uw muis over de teamfoto beweegt, ziet u ons echte team met onze mascotte Otto de Octopus!",
  },

  faq: [
    {
      question: "Hoe kan het dat jullie een website binnen 24 uur kunnen opleveren?",
      answer:
        "Wij maken gebruik van de nieuwste AI-technologieën en hebben een gestroomlijnd proces ontwikkeld dat ons in staat stelt om snel hoogwaardige websites te bouwen. We werken met vooraf ontwikkelde componenten die we aanpassen aan uw wensen en huisstijl.",
    },
    {
      question: "Wat is inbegrepen in de prijs van €300 voor een Onepager?",
      answer:
        "Voor €300 krijgt u een professionele onepage website met contactformulier, social media integratie, SEO optimalisatie, responsive design, en wij beheren uw hosting en domein. De website wordt binnen 24 uur opgeleverd.",
    },
    {
      question: "Kan ik later upgraden naar een uitgebreider pakket?",
      answer:
        "Ja, u kunt altijd upgraden naar een uitgebreider pakket. We kunnen uw bestaande website uitbreiden met extra functionaliteiten zoals een blog of AI chatbot.",
    },
    {
      question: "Hoe werkt de AI chatbot in het premium pakket?",
      answer:
        "De AI chatbot wordt getraind op uw bedrijfsgegevens en kan 24/7 vragen van klanten beantwoorden. De chatbot kan leads genereren en kwalificeren, en u ontvangt maandelijkse updates en een gedetailleerd analytics dashboard.",
    },
    {
      question: "Wat gebeurt er na de oplevering van mijn website?",
      answer:
        "Na oplevering van uw website krijgt u toegang tot een gebruiksvriendelijk beheersysteem waarmee u zelf content kunt toevoegen of wijzigen. Wij blijven beschikbaar voor ondersteuning en kunnen op verzoek updates of aanpassingen doorvoeren.",
    },
  ],

  navigationLinks: [
    { name: "Diensten", section: "#diensten" },
    { name: "Over Ons", section: "#over-ons" },
    { name: "Proces", section: "#proces" },
    { name: "Portfolio", section: "#portfolio" },
    { name: "Contact", section: "#contact" },
  ],
}

export async function POST(req: Request) {
  try {
    const { message, history } = await req.json()
    const formattedHistory = history.map((msg: any) => ({
      role: msg.isUser ? "user" : "assistant",
      content: msg.text,
    }))

    const systemMessage = {
      role: "system",
      content: `Je bent Turbino, de AI assistent voor TriviTurbo, een bedrijf dat binnen 24 uur professionele websites bouwt voor slechts €300.

      Hier is uitgebreide informatie over TriviTurbo die je kunt gebruiken om vragen te beantwoorden:
      ${JSON.stringify(pageContent, null, 2)}
      
      Richtlijnen voor het beantwoorden van vragen:
      
      1. PRIJZEN EN PAKKETTEN:
         - Als gebruikers vragen naar prijzen, leg de drie pakketten uit: Onepager (€300), Website + Blog (€450), en AI Chatbot (€750).
         - Benadruk altijd de snelle levering binnen 24 uur en de hoge kwaliteit.
         - Adviseer het juiste pakket op basis van de behoeften van de gebruiker.
      
      2. PROCES:
         - Leg uit dat het proces bestaat uit: Contact, Behoeften bespreken, Ontwerp, en Ontwikkeling.
         - Benadruk dat alles binnen 24 uur wordt opgeleverd na goedkeuring van het ontwerp.
      
      3. PORTFOLIO:
         - Verwijs naar onze portfolio met projecten in verschillende categorieën.
         - Deel relevante succesverhalen en testimonials van klanten.
      
      4. NAVIGATIE:
         - Help gebruikers de juiste sectie op de website te vinden door te verwijzen naar de navigatielinks.
         - Bijvoorbeeld: "U kunt meer informatie vinden in de Diensten sectie (#diensten) op onze website."
      
      5. CONTACT:
         - Moedig gebruikers aan contact op te nemen via het contactformulier, e-mail (info@triviturbo.nl) of telefoon (+31 6 310 85 254).
         - Vermeld onze werkuren: Maandag - Vrijdag: 9:00 - 18:00, Weekend: Gesloten.
      
      6. LEUKE FEATURES:
         - Vertel gebruikers over de interactieve elementen op de website, zoals de hero designs grid en de teamfoto waar je overheen kunt hoveren.
         - Bijvoorbeeld: "Probeer eens met je muis over de teamfoto te bewegen om ons echte team met Otto de Octopus te zien!"
      
      7. VEELGESTELDE VRAGEN:
         - Beantwoord veelgestelde vragen op basis van de FAQ-sectie.
         - Als een vraag niet in de FAQ staat, geef dan een logisch antwoord op basis van de beschikbare informatie.
      
      Houd je toon professioneel maar conversationeel. Wees enthousiast over onze diensten, maar blijf eerlijk en transparant. Gebruik Nederlandse taal in je antwoorden, tenzij de gebruiker in een andere taal vraagt. Houd antwoorden beknopt maar informatief, maximaal 3-4 zinnen per onderwerp.`,
    }

    const userMessage = {
      role: "user",
      content: message,
    }

    const messages = [systemMessage, ...formattedHistory, userMessage]

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages,
      max_tokens: 300,
      temperature: 0.7,
    })

    const response = completion.choices[0].message.content

    return NextResponse.json({ response })
  } catch (error) {
    console.error("Error in chat API:", error)
    return NextResponse.json({ error: "Failed to process your request" }, { status: 500 })
  }
}
