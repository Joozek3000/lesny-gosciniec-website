import Image from "next/image"
import { TreePine, Mountain, Camera, Bike, Coffee, Heart } from "lucide-react"
import AnimatedSection from "@/components/animated-section"

const attractions = [
  {
    id: "hiking",
    title: "Szlaki Turystyczne",
    description: "Odkryj piękno Bieszczad na licznych szlakach turystycznych",
    icon: TreePine,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "mountains",
    title: "Widoki Górskie",
    description: "Podziwiaj zapierające dech w piersiach panoramy",
    icon: Mountain,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "photography",
    title: "Fotografia",
    description: "Uwiecznij piękno dzikiej przyrody Bieszczad",
    icon: Camera,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "cycling",
    title: "Trasy Rowerowe",
    description: "Eksploruj okolice na rowerze po malowniczych trasach",
    icon: Bike,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "fireplace",
    title: "Wieczory przy Kominku",
    description: "Relaksuj się przy ciepłym kominku po dniu na szlaku",
    icon: Coffee,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "nature",
    title: "Dzika Przyroda",
    description: "Obserwuj dzikie zwierzęta w ich naturalnym środowisku",
    icon: Heart,
    image: "/placeholder.svg?height=300&width=400",
  },
]

export default function AttractionsSection() {
  return (
    <AnimatedSection className="py-20 lg:py-24 bg-warm-white">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-warm-beige/50 px-6 py-3 rounded-xl mb-8 border border-warm-beige">
            <TreePine className="h-5 w-5 text-forest-green" />
            <span className="text-forest-green font-semibold">Atrakcje i Okolica</span>
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-normal text-forest-green mb-8">
            Odkryj Naturę, Odpręż się w Komforcie,
            <span className="block text-terracotta font-medium">Ciesz się Bieszczadami</span>
          </h2>
          <p className="text-xl text-warm-gray max-w-4xl mx-auto leading-relaxed">
            Bieszczady oferują niezliczone możliwości aktywnego wypoczynku i relaksu. Odkryj, co sprawia, że ten region
            jest tak wyjątkowy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractions.map((attraction) => (
            <div
              key={attraction.id}
              className="bg-warm-beige/30 rounded-2xl overflow-hidden border border-warm-beige hover:shadow-lg transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={attraction.image || "/placeholder.svg"}
                  alt={attraction.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-green/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <attraction.icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-white">{attraction.title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-warm-gray leading-relaxed">{attraction.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
