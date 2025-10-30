import Image from "next/image"
import { Heart, Home, TreePine } from "lucide-react"
import AnimatedSection from "@/components/animated-section"

export default function AboutSection() {
  return (
    <AnimatedSection id="about" className="py-20 lg:py-24 bg-warm-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Widok na las i góry z Leśnego Gościńca"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-mustard/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-terracotta/20 rounded-full blur-xl"></div>
          </div>

          {/* Right: Content */}
          <div className="bg-warm-beige/50 p-8 lg:p-12 rounded-2xl border border-warm-beige shadow-sm">
            <div className="inline-flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full mb-6 border border-warm-beige">
              <Home className="h-4 w-4 text-forest-green" />
              <span className="text-forest-green font-semibold text-sm">O Nas</span>
            </div>

            <h2 className="font-serif text-3xl lg:text-4xl font-normal text-forest-green mb-6 leading-tight">
              Rodzinny pensjonat w sercu Cisnej
            </h2>

            <p className="text-lg text-warm-gray mb-6 leading-relaxed">
              Jesteśmy rodzinnym pensjonatem położonym w samym sercu Cisnej. Nasze pokoje łączą górski urok z domowym
              komfortem, tworząc miejsce, gdzie każdy gość czuje się jak w domu.
            </p>

            <p className="text-lg text-warm-gray mb-8 leading-relaxed">
              Od lat gościmy podróżników z całej Polski i Europy, dzieląc się z nimi miłością do Bieszczad i autentyczną
              gościnnością. Każdy pokój został urządzony z dbałością o szczegóły, aby zapewnić Państwu niezapomniany
              pobyt.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-forest-green/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Heart className="h-8 w-8 text-forest-green" />
                </div>
                <h3 className="font-semibold text-forest-green mb-1">Z Sercem</h3>
                <p className="text-sm text-warm-gray">Każdy detal przemyślany</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-terracotta/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Home className="h-8 w-8 text-terracotta" />
                </div>
                <h3 className="font-semibold text-forest-green mb-1">Jak w Domu</h3>
                <p className="text-sm text-warm-gray">Ciepła atmosfera</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-mustard/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <TreePine className="h-8 w-8 text-mustard" />
                </div>
                <h3 className="font-semibold text-forest-green mb-1">Wśród Natury</h3>
                <p className="text-sm text-warm-gray">Otoczeni lasem</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
