import { Card } from "@/components/ui/card"

export function Services() {
  const services = [
    {
      icon: "🧬",
      title: "CLONE SALES",
      description: "Premium, HLvD and pathogen-free clones ready for production.",
    },
    {
      icon: "🔬",
      title: "GENETIC CREATION",
      description: "Development of stable, high-performing strains, tailored to your needs.",
    },
    {
      icon: "💡",
      title: "CONSULTANCY",
      description: "Guidance to optimize the cultivation operations.",
    },
    {
      icon: "🔍",
      title: "PHENO HUNTING",
      description: "Selection of elite phenotypes with balanced yield, terpene profile, and appeal.",
    },
  ]

  return (
    <section id="services" className="py-16 bg-fenopharm-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-light text-fenopharm-dark tracking-tight">OUR SERVICES</h2>
        </div>

        <div className="text-center mb-12">
          <p className="text-fenopharm-dark font-light max-w-2xl mx-auto leading-relaxed">
          We deliver pharmaceutical cannabis genetics: pathogen-free, consistent, and certified for reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="p-6 bg-fenopharm-red text-fenopharm-light hover:bg-fenopharm-red/90 transition-colors">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="text-white text-4xl">{service.icon}</div>
                <h3 className="service-title text-lg text-fenopharm-dark">{service.title}</h3>
                <p className="text-sm font-light leading-relaxed opacity-90">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
