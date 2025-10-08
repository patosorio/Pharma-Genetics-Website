"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setIsMenuOpen(false)
  }

  const navItems = [
    { label: "ABOUT US", id: "why-choose" },
    { label: "SERVICES", id: "services" },
    { label: "CATALOGUE", id: "catalogue" },
    { label: "CONTACT", id: "contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-fenopharm-gray pt-0 md:pt-[20px]">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button onClick={scrollToTop} className="flex items-center space-x-2 cursor-pointer">
            <Image src="/logos/logo-symbol-red.svg" alt="Fenopharm" width={220} height={60} className="h-8 md:h-14 w-auto" />
          </button>

          {/* Centered Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-fenopharm-light hover:text-fenopharm-dark transition-colors text-md md:text-xl tracking-wide"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right side - Consultation Button */}
          <div className="flex items-center">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-fenopharm-red hover:bg-fenopharm-red/90 text-fenopharm-light text-md md:text-lg hidden md:block"
              style={{ lineHeight: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              Consultation
            </Button>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-fenopharm-light hover:text-fenopharm-dark"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-fenopharm-light/30 pt-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white hover:text-fenopharm-light transition-colors font-light text-left"
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-fenopharm-red hover:bg-fenopharm-red/90 text-white font-light w-full"
              >
                CONSULTATION
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
