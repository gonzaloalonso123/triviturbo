import { ArrowRight, Phone, Lightbulb, Rocket, CheckCircle } from "lucide-react"

export default function ProcessSection() {
  const steps = [
    {
      icon: <Phone className="h-10 w-10 text-white" />,
      title: "Contact",
      description: "U neemt contact met ons op, geen compromissen.",
      color: "bg-[#072ac8]",
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-white" />,
      title: "Behoeften",
      description: "We ontdekken wat uw behoeften zijn in een gesprek.",
      color: "bg-[#1e96fc]",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-white" />,
      title: "Ontwerp",
      description: "We bespreken het ontwerp op basis van uw ideeën.",
      color: "bg-[#a2d6f9]",
    },
    {
      icon: <Rocket className="h-10 w-10 text-white" />,
      title: "Ontwikkeling",
      description:
        "We bouwen uw website met de beste beschikbare technologie, bugvrij, extreem performant en razendsnel.",
      color: "bg-[#ffc600]",
    },
  ]

  return (
    <section id="proces" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ons Proces</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Zo werken wij om uw perfecte website te leveren binnen 24 uur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center">
                <div className={`${step.color} rounded-full p-5 mb-6`}>{step.icon}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-full w-full transform -translate-x-1/2">
                  <ArrowRight className="h-8 w-8 text-gray-400" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
