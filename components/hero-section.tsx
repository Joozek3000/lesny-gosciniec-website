"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with warm overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bieszczady.jpg"
          alt="Piękny widok na Bieszczady - góry, lasy i łąki w złotym świetle słońca"
          fill
          className="object-cover scale-105 transition-transform duration-[20s] ease-out"
          priority
        />
        {/* Warm filter overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-forest-green/20 via-terracotta/30 to-forest-green/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-warm-white/10 to-transparent"></div>
      </div>

      {/* Content */}
      <div
        className={`relative z-10 text-center text-white px-4 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="inline-flex items-center gap-2 bg-warm-white/20 backdrop-blur-md px-6 py-3 rounded-xl mb-8 border border-warm-white/30">
          <span className="text-warm-white font-medium">Bieszczady, Cisna</span>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-normal mb-6 leading-tight">
          <span className="block text-warm-white">Leśny Gościniec</span>
          <span className="block font-medium text-mustard/90 text-3xl md:text-4xl lg:text-5xl mt-4">
            Twój przytulny ośrodek w Bieszczadach
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-warm-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
          Wygodne pokoje, ciepła atmosfera i piękno Cisnej na wyciągnięcie ręki
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Button
            asChild
            size="lg"
            className="bg-terracotta hover:bg-forest-green text-white px-10 py-6 text-lg rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
          >
            <Link href="/booking">Zarezerwuj Pobyt</Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-warm-white text-warm-white hover:bg-warm-white hover:text-forest-green px-10 py-6 text-lg rounded-xl bg-warm-white/10 backdrop-blur-sm"
          >
            <Link href="#about">Poznaj Nas</Link>
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-12 h-12 bg-warm-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-warm-white/30">
            <ArrowDown className="h-6 w-6 text-warm-white" />
          </div>
        </div>
      </div>
    </section>
  )
}
