import { Shield, Award, Microscope, Leaf, Clock, CheckCircle } from "lucide-react"

export function WhyChooseEs() {
  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Garantía libre de HLvD y patógenos",
      description: "Toda la genética probada y certificada libre de patógenos dañinos",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Procesos certificados EU GACP",
      description: "Certificación de Buenas Prácticas Hortícolas y de Recolección",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "20+ años de experiencia",
      description: "Experiencia en entornos interiores y exteriores",
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Balance entre terpenos, producción y atractivo visual",
      description: "Equilibrio perfecto entre rendimiento y calidad",
    },
    {
      icon: <Microscope className="h-6 w-6" />,
      title: "Homogeneización comprobada en producción de clones",
      description: "Genética consistente y confiable en todos los clones",
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Estándares de grado farmacéutico",
      description: "Cumpliendo con los más altos estándares de la industria para aplicaciones médicas",
    },
  ]

  return (
    <section id="why-choose" className="py-16 bg-fenopharm-light/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-fenopharm-dark mb-4 tracking-tight">
            POR QUÉ ELEGIR FENOPHARM
          </h2>
          <p className="text-fenopharm-gray font-light max-w-2xl mx-auto leading-relaxed">
            Prestamos atención a las necesidades de la industria farmacéutica, entregando genética que cumple con los más altos estándares de calidad, consistencia y seguridad.
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

