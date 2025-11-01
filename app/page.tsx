import Link from "next/link"
import { ArrowRight, Heart, TreePine } from "lucide-react"

import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import RoomsSection from "@/components/rooms-section"
import AttractionsSection from "@/components/attractions-section"
import AnimatedSection from "@/components/animated-section"

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col bg-warm-white">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Rooms Section */}
      <RoomsSection />

      {/* Attractions Section */}
      <AttractionsSection />

      {/* Call to Action */}
      <AnimatedSection className="py-20 lg:py-24 bg-gradient-to-br from-warm-white to-warm-beige relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-xl mb-8 border border-warm-beige shadow-sm">
              <Heart className="h-5 w-5 text-terracotta" />
              <span className="text-forest-green font-semibold">Zapraszamy Do Naszego Domu</span>
            </div>

            <h2 className="font-serif text-4xl lg:text-6xl font-normal mb-8 leading-tight text-forest-green">
              Twój Ciepły Dom
              <span className="block font-medium text-terracotta">w Sercu Bieszczad</span>
            </h2>

            <p className="text-xl text-warm-gray mb-12 max-w-3xl mx-auto leading-relaxed">
              Nie czekaj na idealny moment - każda chwila spędzona w Bieszczadach jest wyjątkowa. Przyjedź, poczuj
              ciepło naszej gościnności i stwórz wspomnienia, które będziesz nosić w sercu.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-terracotta hover:bg-forest-green text-white px-10 py-6 text-xl rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Link href="/booking">
                  <Heart className="mr-3 h-6 w-6" />
                  Zarezerwuj Swój Pobyt
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-mustard text-forest-green hover:bg-mustard hover:text-white px-10 py-6 text-xl rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-transparent"
              >
                <Link href="/experience">
                  <TreePine className="mr-3 h-6 w-6" />
                  Poznaj Bieszczady
                </Link>
              </Button>
            </div>

            <div className="mt-12 text-center">
              <p className="text-warm-gray italic text-lg font-serif">
                &ldquo;W Leśnym Gościńcu każdy dzień zaczyna się uśmiechem i kończy wdzięcznością&rdquo;
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </main>
  )
}
