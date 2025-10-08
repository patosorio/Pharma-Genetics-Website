import Image from "next/image"
import { MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-fenopharm-dark text-fenopharm-light py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Image
              src="/logos/logo-symbol-grey.png"
              alt="Fenopharm"
              width={200}
              height={45}
              className="h-10 w-auto mb-4"
            />
            <p className="text-white/80 font-light text-sm leading-relaxed max-w-md">
              Pharmaceutical-grade cannabis genetics with over 20 years of expertise. HLvD-free, pathogen-free, and
              EU GACP-certified for the highest standards.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-normal mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm font-light">
              <li>
                <a href="#services" className="text-white/80 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#catalogue" className="text-white/80 hover:text-white transition-colors">
                  Catalogue
                </a>
              </li>
              <li>
                <a href="#why-choose" className="text-white/80 hover:text-white transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-normal mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm font-light">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-fenopharm-red" />
                <span className="text-white/80">Bangkok & Barcelona</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-fenopharm-red" />
                <a 
                  href="https://wa.me/34650581603" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  +34 650 581 603
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-fenopharm-red" />
                <a 
                  href="mailto:info@fenopharm.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  info@fenopharm.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60 font-light text-sm">
            © 2025 Fenopharm. All rights reserved. | EU-GACP Certified | HLvD-Free Guarantee
          </p>
        </div>
      </div>
    </footer>
  )
}
