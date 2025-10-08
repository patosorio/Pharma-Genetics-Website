import { HeaderEs } from "@/components/es/header"
import { HeroEs } from "@/components/es/hero"
import { ServicesEs } from "@/components/es/services"
import { CatalogueEs } from "@/components/es/catalogue"
import { WhyChooseEs } from "@/components/es/why-choose"
import { LocationsEs } from "@/components/es/locations"
import { ProcessEs } from "@/components/es/process"
import { ContactFormEs } from "@/components/es/contact-form"
import { SubscribeEs } from "@/components/es/subscribe"
import { FooterEs } from "@/components/es/footer"

export default function EsHome() {
  return (
    <main className="min-h-screen">
      <HeaderEs />
      <HeroEs />
      <ServicesEs />
      <CatalogueEs />
      <WhyChooseEs />
      <LocationsEs />
      <ProcessEs />
      <ContactFormEs />
      <SubscribeEs />
      <FooterEs />
    </main>
  )
}

