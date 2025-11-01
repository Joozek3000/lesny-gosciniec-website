"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Anna i Marek",
    location: "Warszawa",
    rating: 5,
    text: "Leśny Gościniec przekroczył wszystkie oczekiwania. Dbałość o szczegóły, od ręcznie wykonanych mebli po poranne widoki we mgle, stworzyła doświadczenie, które będziemy cenić na zawsze.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Tomasz K.",
    location: "Kraków",
    rating: 5,
    text: "Idealne połączenie luksusu i autentyczności. Budzenie się z widokiem na góry i zasypianie przy dźwiękach lasu - to jest prawdziwa ucieczka.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Katarzyna i Jan",
    location: "Gdańsk",
    rating: 5,
    text: "Nasz zimowy pobyt był magiczny. Przytulne wnętrza, trzaskający kominek i ośnieżone krajobrazy stworzyły najbardziej romantyczny wypad, jakiego kiedykolwiek doświadczyliśmy.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 4,
    name: "Michał S.",
    location: "Berlin",
    rating: 5,
    text: "Jako fotograf byłem zachwycony naturalnym pięknem otaczającym obiekt. Lokalna wiedza gospodarzy pomogła mi uchwycić niesamowite ujęcia.",
    image: "/placeholder.svg?height=80&width=80",
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-8">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-emerald-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-2xl lg:text-3xl font-light text-white/90 mb-8 leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </blockquote>

                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 bg-emerald-400/20 rounded-full flex items-center justify-center">
                    <span className="text-emerald-400 font-medium text-lg">{testimonial.name.split(" ")[0][0]}</span>
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-white">{testimonial.name}</div>
                    <div className="text-emerald-400/80 text-sm">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <Button
          variant="outline"
          size="sm"
          onClick={prevTestimonial}
          className="border-white/30 text-white hover:bg-white hover:text-stone-900 bg-transparent"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={nextTestimonial}
          className="border-white/30 text-white hover:bg-white hover:text-stone-900 bg-transparent"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-emerald-400 w-8" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
