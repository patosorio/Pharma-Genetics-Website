import { Beaker, Heading as Seedling, Microscope, Award, Package, Truck } from "lucide-react"

export function ProcessEs() {
  const steps = [
    {
      icon: <Beaker className="h-8 w-8" />,
      title: "Selección Genética",
      description: "Selección rigurosa de plantas madre élite con genética superior y resistencia a patógenos.",
    },
    {
      icon: <Microscope className="h-8 w-8" />,
      title: "Pruebas de Laboratorio",
      description: "Pruebas exhaustivas para HLvD, patógenos y estabilidad genética usando técnicas moleculares avanzadas.",
    },
    {
      icon: <Seedling className="h-8 w-8" />,
      title: "Producción de Clones",
      description: "Propagación estéril en ambientes controlados garantizando consistencia genética y salud.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Aseguramiento de Calidad",
      description: "Procesos de control de calidad certificados EU GACP durante todo el ciclo de producción.",
    },
    {
      icon: <Package className="h-8 w-8" />,
      title: "Empaque y Documentación",
      description: "Empaque profesional con perfiles genéticos completos y documentos de certificación.",
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Entrega Segura",
      description: "Envío con control de temperatura garantizando que la genética llegue en condiciones óptimas.",
    },
  ]

  return (
    <section id="process" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-fenopharm-dark mb-4 tracking-tight">NUESTRO PROCESO</h2>
          <p className="text-fenopharm-gray font-light max-w-2xl mx-auto leading-relaxed">
            Desde la selección hasta la entrega, cada paso está diseñado para garantizar calidad y consistencia de grado farmacéutico.
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

