import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Catalogue } from "@/components/catalogue"
import { WhyChoose } from "@/components/why-choose"
import { Locations } from "@/components/locations"
import { Process } from "@/components/process"
import { ContactForm } from "@/components/contact-form"
import { Subscribe } from "@/components/subscribe"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Catalogue />
      <WhyChoose />
      <Locations />
      <Process />
      <ContactForm />
      <Subscribe />
      <Footer />
    </main>
  )
}
