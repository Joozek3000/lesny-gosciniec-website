import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Users, Maximize, Heart, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedSection from "@/components/animated-section"

const properties = [
  {
    id: "forest-view",
    name: "Apartament Leśny Zakątek",
    tagline: "Gdzie las szumi za oknem",
    description:
      "Nasz najcieplejszy apartament, gdzie każde rano budzisz się z widokiem na zielone korony drzew. Ręcznie dobrane meble, miękkie tekstylia i prywatny balkon tworzą przestrzeń, w której od razu poczujesz się jak w domu.",
    image: "/placeholder.svg?height=600&width=800",
    capacity: "2-4 gości",
    size: "65 m²",
    features: ["Widok na pradawny las", "Balkon z huśtawką", "Kuchnia z spiżarnią", "Kominek z prawdziwym drewnem"],
    price: "Od 550 zł/noc",
    warmth: "Przytulny jak babcina kuchnia",
  },
  {
    id: "mountain-vista",
    name: "Apartament Górska Panorama",
    tagline: "Gdzie góry dotykają nieba",
    description:
      "Nasz przestronny apartament z najpiękniejszymi widokami na Bieszczady. Duże okna wpuszczają światło przez cały dzień, a wieczorami możesz podziwiać zachody słońca z wygodnej kanapy przy kominku.",
    image: "/placeholder.svg?height=600&width=800",
    capacity: "4-6 gości",
    size: "85 m²",
    features: ["Panorama Bieszczad", "Taras z leżakami", "Kuchnia z wyspą", "Dwie łazienki z wannami"],
    price: "Od 750 zł/noc",
    warmth: "Przestronny jak rodzinny dom",
  },
  {
    id: "cozy-studio",
    name: "Studio Miłosne Gniazdko",
    tagline: "Dla dwojga zakochanych",
    description:
      "Romantyczne studio stworzone specjalnie dla par. Miękkie oświetlenie, wygodne łóżko z baldachimem i mały taras z widokiem na ogród tworzą idealną atmosferę dla romantycznych chwil.",
    image: "/placeholder.svg?height=600&width=800",
    capacity: "1-2 gości",
    size: "40 m²",
    features: ["Łóżko z baldachimem", "Romantyczny taras", "Mini kuchnia", "Jacuzzi dla dwojga"],
    price: "Od 350 zł/noc",
    warmth: "Romantyczne jak pierwsza randka",
  },
]

export default function PropertyShowcase() {
  return (
    <AnimatedSection className="py-20 lg:py-32 bg-gradient-to-b from-cream-50 to-amber-50/30">
      <div className="container">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-amber-100/80 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-amber-200/50">
            <Home className="h-5 w-5 text-amber-700" />
            <span className="text-amber-800 font-semibold">Nasze Przytulne Wnętrza</span>
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-normal text-amber-900 mb-8">
            Każdy Pokój Ma
            <span className="block text-orange-700 font-medium">Swoją Duszę</span>
          </h2>
          <p className="text-xl text-amber-800/80 max-w-4xl mx-auto leading-relaxed">
            Nasze apartamenty to nie tylko miejsca do spania - to przestrzenie stworzone z miłością, gdzie każdy detal
            ma swoją historię i każdy kąt zaprasza do odpoczynku.
          </p>
        </div>

        <div className="space-y-32">
          {properties.map((property, index) => (
            <div
              key={property.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              <div className={`relative group ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="relative h-[450px] lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={property.image || "/placeholder.svg"}
                    alt={property.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Floating price badge */}
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex flex-col items-center justify-center text-white font-bold shadow-2xl transform rotate-12 hover:rotate-0 transition-transform duration-300">
                  <span className="text-sm">Od</span>
                  <span className="text-lg">{property.price.split(" ")[1]}</span>
                  <span className="text-xs">za noc</span>
                </div>

                {/* Warmth indicator */}
                <div className="absolute top-6 left-6 bg-amber-200/90 backdrop-blur-sm px-4 py-2 rounded-full border border-amber-300/50">
                  <div className="flex items-center gap-2">
                    <Heart className="h-4 w-4 text-amber-700" />
                    <span className="text-amber-800 text-sm font-medium">{property.warmth}</span>
                  </div>
                </div>
              </div>

              <div className={`space-y-8 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                <div>
                  <div className="inline-flex items-center gap-2 bg-orange-100/80 px-4 py-2 rounded-full mb-6 border border-orange-200/50">
                    <Heart className="h-4 w-4 text-orange-700" />
                    <span className="text-orange-800 font-medium text-sm">{property.tagline}</span>
                  </div>

                  <h3 className="font-serif text-3xl lg:text-4xl font-normal text-amber-900 mb-6">{property.name}</h3>
                  <p className="text-lg text-amber-800/80 leading-relaxed mb-8">{property.description}</p>
                </div>

                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center gap-3 bg-amber-100/50 px-4 py-2 rounded-full">
                    <Users className="h-5 w-5 text-amber-700" />
                    <span className="text-amber-800 font-medium">{property.capacity}</span>
                  </div>
                  <div className="flex items-center gap-3 bg-orange-100/50 px-4 py-2 rounded-full">
                    <Maximize className="h-5 w-5 text-orange-700" />
                    <span className="text-orange-800 font-medium">{property.size}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {property.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-4 py-3 rounded-xl border border-amber-200/30"
                    >
                      <div className="w-3 h-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
                      <span className="text-amber-800 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white rounded-full px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Link href={`/apartments#${property.id}`}>
                      <Heart className="mr-2 h-5 w-5" />
                      Zobacz Wnętrze
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-2 border-amber-400 text-amber-700 hover:bg-amber-50 rounded-full px-8 py-6 bg-transparent"
                  >
                    <Link href={`/booking?apartment=${property.id}`}>Sprawdź Dostępność</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
