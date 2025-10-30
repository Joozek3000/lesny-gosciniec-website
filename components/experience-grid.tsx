import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, MapPin, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import AnimatedSection from "@/components/animated-section"

const experiences = [
  {
    id: "hiking",
    title: "Górskie Szlaki",
    description: "Odkryj ukryte ścieżki przez dziewicze lasy i łąki",
    image: "/placeholder.svg?height=400&width=600",
    icon: MapPin,
    season: "Cały Rok",
  },
  {
    id: "photography",
    title: "Fotografia Przyrodnicza",
    description: "Uchwać surowe piękno krajobrazów Bieszczad",
    image: "/placeholder.svg?height=400&width=600",
    icon: Camera,
    season: "Wiosna i Lato",
  },
  {
    id: "seasonal",
    title: "Aktywności Sezonowe",
    description: "Od narciarstwa zimą po grzybobranie jesienią",
    image: "/placeholder.svg?height=400&width=600",
    icon: Calendar,
    season: "Przez Cały Rok",
  },
]

export default function ExperienceGrid() {
  return (
    <AnimatedSection className="py-20 lg:py-32 bg-gradient-to-b from-stone-50 to-emerald-50">
      <div className="container">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 text-emerald-700 border-emerald-200 bg-white">
            Poza Noclegiem
          </Badge>
          <h2 className="font-serif text-4xl lg:text-5xl font-light text-stone-900 mb-8">
            Zanurz Się w<span className="block text-emerald-700 font-medium">Rytmie Natury</span>
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Każda pora roku przynosi nowe przygody i odkrycia w sercu Bieszczad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {experiences.map((experience) => (
            <div key={experience.id} className="group cursor-pointer">
              <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                <Image
                  src={experience.image || "/placeholder.svg"}
                  alt={experience.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <Badge variant="outline" className="mb-2 text-white border-white/30 bg-white/10 backdrop-blur-sm">
                    {experience.season}
                  </Badge>
                  <h3 className="font-serif text-xl font-medium text-white mb-2">{experience.title}</h3>
                </div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <experience.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <p className="text-stone-600 group-hover:text-stone-900 transition-colors">{experience.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-6">
            <Link href="/experience">
              Odkryj Wszystkie Doświadczenia
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </AnimatedSection>
  )
}
