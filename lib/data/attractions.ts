import type { LucideIcon } from "lucide-react"
import { Bike, Camera, Coffee, Heart, Leaf, Mountain, Snowflake, Sun, TreePine } from "lucide-react"

interface BaseAttraction {
  id: string
  title: string
  description: string
  image: string
  icon: LucideIcon
}

export interface DetailedAttraction extends BaseAttraction {
  subtitle: string
  difficulty: string
  duration: string
  distance: string
  highlights: string[]
}

export interface SeasonalActivity {
  season: string
  title: string
  icon: LucideIcon
  color: string
  bgColor: string
  activities: { name: string; description: string }[]
}

export interface LocalAttraction {
  name: string
  distance: string
  description: string
  image: string
}

export const featuredAttractions: BaseAttraction[] = [
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

export const mainAttractions: DetailedAttraction[] = [
  {
    id: "hiking-trails",
    title: "Szlaki Turystyczne",
    subtitle: "Odkryj piękno Bieszczad",
    description:
      "Bieszczady oferują jedne z najpiękniejszych szlaków turystycznych w Polsce. Od łagodnych spacerów po wymagające wędrówki górskie.",
    image: "/placeholder.svg?height=500&width=700",
    icon: TreePine,
    difficulty: "Wszystkie poziomy",
    duration: "1-8 godzin",
    distance: "2-25 km",
    highlights: [
      "Połonina Wetlińska - najwyższy szczyt regionu",
      "Szlak na Tarnicę - widoki na trzy kraje",
      "Ścieżka przyrodnicza w Cisnej",
      "Szlak do wodospadu Szum",
    ],
  },
  {
    id: "mountain-views",
    title: "Widoki Górskie",
    subtitle: "Panoramy zapierające dech",
    description:
      "Z licznych punktów widokowych roztaczają się niezapomniane panoramy na dziewicze lasy i łagodne szczyty Bieszczad.",
    image: "/placeholder.svg?height=500&width=700",
    icon: Mountain,
    difficulty: "Łatwy-Średni",
    duration: "2-4 godziny",
    distance: "5-15 km",
    highlights: [
      "Chatka Puchatka - kultowe miejsce",
      "Przełęcz Wyżniańska",
      "Szczyt Rożki - 360° panorama",
      "Punkt widokowy na Solinie",
    ],
  },
  {
    id: "photography",
    title: "Fotografia Przyrodnicza",
    subtitle: "Uwiecznij dziką przyrodę",
    description:
      "Bieszczady to raj dla fotografów. Dzikie zwierzęta, malownicze krajobrazy i zmieniające się pory roku tworzą niezliczone okazje do wyjątkowych zdjęć.",
    image: "/placeholder.svg?height=500&width=700",
    icon: Camera,
    difficulty: "Wszystkie poziomy",
    duration: "Cały dzień",
    distance: "Różnie",
    highlights: [
      "Żubry w Mucznem",
      "Jelenie na połoninach",
      "Wschody słońca w górach",
      "Jesienne kolory lasów",
    ],
  },
]

export const seasonalActivities: SeasonalActivity[] = [
  {
    season: "spring",
    title: "Wiosna",
    icon: Leaf,
    color: "text-green-600",
    bgColor: "bg-green-50",
    activities: [
      { name: "Obserwacja ptaków", description: "Powrót ptaków migracyjnych" },
      { name: "Fotografowanie kwiatów", description: "Kwitnące łąki i lasy" },
      { name: "Łagodne wędrówki", description: "Idealne warunki do spacerów" },
      { name: "Grzybobranie", description: "Pierwsze grzyby wiosenne" },
    ],
  },
  {
    season: "summer",
    title: "Lato",
    icon: Sun,
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
    activities: [
      { name: "Długie wędrówki", description: "Najlepszy czas na górskie szlaki" },
      { name: "Kąpiele w jeziorach", description: "Solińskie i inne zbiorniki" },
      { name: "Kolarstwo górskie", description: "Trasy dla każdego poziomu" },
      { name: "Camping", description: "Noclegi pod gwiazdami" },
    ],
  },
  {
    season: "autumn",
    title: "Jesień",
    icon: TreePine,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    activities: [
      { name: "Złota polska jesień", description: "Spektakularne kolory" },
      { name: "Grzybobranie", description: "Sezon na prawdziwki" },
      { name: "Fotografowanie", description: "Najpiękniejsze światło" },
      { name: "Obserwacja rykowiska", description: "Jelenie w okresie godowym" },
    ],
  },
  {
    season: "winter",
    title: "Zima",
    icon: Snowflake,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    activities: [
      { name: "Narciarstwo biegowe", description: "Przygotowane trasy" },
      { name: "Wędrówki w rakietach", description: "Zimowe eksploracje" },
      { name: "Wieczory przy kominku", description: "Relaks po dniu na śniegu" },
      { name: "Obserwacja śladów", description: "Tropienie zwierząt" },
    ],
  },
]

export const localAttractions: LocalAttraction[] = [
  {
    name: "Solińskie Jezioro",
    distance: "15 km",
    description: "Największy zbiornik wodny w regionie, idealny do żeglarstwa i wędkowania",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Muzeum Kultury Łemkowskiej",
    distance: "8 km",
    description: "Poznaj historię i kulturę dawnych mieszkańców Bieszczad",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Bieszczadzki Park Narodowy",
    distance: "5 km",
    description: "Chroniona dziewicza przyroda z unikalnymi gatunkami",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Przełęcz Użocka",
    distance: "25 km",
    description: "Historyczna przełęcz na granicy z Ukrainą",
    image: "/placeholder.svg?height=300&width=400",
  },
]
