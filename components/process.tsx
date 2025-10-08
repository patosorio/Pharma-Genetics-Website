import { Beaker, Heading as Seedling, Microscope, Award, Package, Truck } from "lucide-react"

export function Process() {
  const steps = [
    {
      icon: <Beaker className="h-8 w-8" />,
      title: "Genetic Selection",
      description: "Rigorous selection of elite mother plants with superior genetics and pathogen resistance.",
    },
    {
      icon: <Microscope className="h-8 w-8" />,
      title: "Laboratory Testing",
      description:
        "Comprehensive testing for HLvD, pathogens, and genetic stability using advanced molecular techniques.",
    },
    {
      icon: <Seedling className="h-8 w-8" />,
      title: "Clone Production",
      description: "Sterile propagation in controlled environments ensuring genetic consistency and health.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Quality Assurance",
      description: "EU GACP-certified quality control processes throughout the entire production cycle.",
    },
    {
      icon: <Package className="h-8 w-8" />,
      title: "Packaging & Documentation",
      description: "Professional packaging with complete genetic profiles and certification documents.",
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Secure Delivery",
      description: "Temperature-controlled shipping ensuring genetics arrive in optimal condition.",
    },
  ]

  return (
    <section id="process" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-fenopharm-dark mb-4 tracking-tight">OUR PROCESS</h2>
          <p className="text-fenopharm-gray font-light max-w-2xl mx-auto leading-relaxed">
            From selection to delivery, every step is designed to ensure pharmaceutical-grade quality and consistency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-fenopharm-red rounded-full flex items-center justify-center text-white mx-auto mb-4">
                {step.icon}
              </div>
              <h3 className="text-lg font-normal text-fenopharm-dark mb-3">{step.title}</h3>
              <p className="text-fenopharm-gray font-light text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
