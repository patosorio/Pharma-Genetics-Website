"use client"

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center bg-fenopharm-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl text-left">
          {/* "text-6xl md:text-8xl text-white font-family-pressura-regular" */}
          <h1 className="hero-title font-family-pressura-regular text-fenopharm-light ml-0 mb-0 leading-none">FENOPHARM</h1>
          <p className="text-lg md:text-3xl mb-6 md:mb-10 text-fenopharm-light mt-1 leading-tight">GENETICS THAT EMPOWER</p>
          <div className="text-sm md:text-lg text-fenopharm-dark mb-8 leading-relaxed">
            <p>PHARMACEUTICAL-GRADE CANNABIS GENETICS.</p>
            <p>HLvD-FREE.</p>
            <p>GACP-CERTIFIED.</p>
            <p>20+ YEARS EXPERIENCE</p>
          </div>
        </div>
      </div>
    </section>
  )
}
