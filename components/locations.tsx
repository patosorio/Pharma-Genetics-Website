import { MapPin, Phone, Mail } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function Locations() {
  const locations = [
    {
      city: "Bangkok",
      country: "Thailand",
      phone: "+34 631 639 897",
      email: "info@fenopharm.eu",
    },
    {
      city: "Barcelona",
      country: "Spain",
      phone: "+34 631 639 897",
      email: "info@fenopharm.eu",
    },
  ]

  return (
    <section id="locations" className="py-16 bg-fenopharm-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4 tracking-tight">WHERE TO FIND US</h2>
          <p className="text-white/80 font-light">Global presence with local expertise</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {locations.map((location, index) => (
            <Card key={index} className="bg-white/95 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-6 w-6 text-fenopharm-red" />
                    <div>
                      <h3 className="text-xl font-normal text-fenopharm-dark">{location.city}</h3>
                      <p className="text-fenopharm-gray font-light">{location.country}</p>
                    </div>
                  </div>

                  <div className="space-y-3 pl-9">
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-fenopharm-gray" />
                      <span className="text-fenopharm-dark font-light text-sm">{location.phone}</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-fenopharm-gray" />
                      <span className="text-fenopharm-dark font-light text-sm">{location.email}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
