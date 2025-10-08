import { Shield, Award, Microscope, Leaf, Clock, CheckCircle } from "lucide-react"

export function WhyChoose() {
  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "HLvD- and pathogen-free guarantee",
      description: "All genetics tested and certified free of harmful pathogens",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "GHCP-certified processes",
      description: "Good Horticultural and Collection Practices certification",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "20+ years of experience",
      description: "Expertise in both indoor & outdoor environments",
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Terpene, production, and visual appeal balance",
      description: "Perfect balance between yield and quality",
    },
    {
      icon: <Microscope className="h-6 w-6" />,
      title: "Proven homogenization in clone production",
      description: "Consistent, reliable genetics across all clones",
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Pharmaceutical-grade standards",
      description: "Meeting the highest industry standards for medical applications",
    },
  ]

  return (
    <section id="why-choose" className="py-16 bg-fenopharm-light/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-fenopharm-dark mb-4 tracking-tight">
            WHY CHOOSE FENOPHARM
          </h2>
          <p className="text-fenopharm-gray font-light max-w-2xl mx-auto leading-relaxed">
            We pay attention to the pharmaceutical industry's needs, delivering genetics that meet the highest standards
            of quality, consistency, and safety.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-fenopharm-red rounded-lg flex items-center justify-center text-white">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-lg font-normal text-fenopharm-dark mb-2">{feature.title}</h3>
                <p className="text-fenopharm-gray font-light text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
