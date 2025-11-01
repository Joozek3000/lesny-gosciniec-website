import type { LucideIcon } from "lucide-react"
import {
  Bath,
  Bed,
  Car,
  Coffee,
  Maximize,
  Mountain,
  TreePine,
  Users,
  Wifi,
} from "lucide-react"

export interface RoomFeature {
  icon: LucideIcon
  text: string
}

export interface Room {
  id: string
  name: string
  subtitle: string
  description: string
  longDescription: string
  images: string[]
  capacity: string
  size: string
  price: string
  features: RoomFeature[]
  amenities: string[]
  featured?: boolean
}

const placeholderImages = [
  "/placeholder.svg?height=600&width=800",
  "/placeholder.svg?height=600&width=800",
  "/placeholder.svg?height=600&width=800",
  "/placeholder.svg?height=600&width=800",
]

export const rooms: Room[] = [
  {
    id: "double-balcony",
    name: "Pokój Dwuosobowy z Balkonem",
    subtitle: "Widok na pradawny las",
    description:
      "Przestronny pokój z wygodnym łóżkiem małżeńskim i prywatnym balkonem z widokiem na las. Idealne miejsce dla par szukających spokoju i bliskości z naturą.",
    longDescription:
      "Ten urokliwy pokój został urządzony z myślą o komforcie i relaksie. Duże okna wpuszczają naturalne światło, a z balkonu roztacza się przepiękny widok na zielone korony drzew. Wnętrze utrzymane w ciepłych, naturalnych barwach tworzy przytulną atmosferę górskiego schronienia.",
    images: [...placeholderImages],
    capacity: "2 osoby",
    size: "25 m²",
    price: "Od 280 zł/noc",
    features: [
      { icon: Mountain, text: "Balkon z widokiem na las" },
      { icon: Bath, text: "Łazienka z prysznicem" },
      { icon: Wifi, text: "Bezpłatne WiFi" },
      { icon: Car, text: "Bezpłatny parking" },
      { icon: Coffee, text: "Zestaw do kawy/herbaty" },
      { icon: Bed, text: "Wygodne łóżko małżeńskie" },
    ],
    amenities: ["Ręczniki", "Pościel", "Szampon i mydło", "Suszarka do włosów", "Ogrzewanie", "Moskitiera"],
    featured: true,
  },
  {
    id: "family-room",
    name: "Pokój Rodzinny",
    subtitle: "Dla całej rodziny",
    description:
      "Przestronny pokój idealny dla rodzin z dziećmi. Wyposażony w łóżko małżeńskie i łóżko piętrowe, zapewnia komfort dla 4 osób.",
    longDescription:
      "Nasz największy pokój został zaprojektowany z myślą o rodzinach. Oprócz wygodnego łóżka małżeńskiego, znajdziecie tu solidne łóżko piętrowe dla dzieci. Duża łazienka z wanną i dodatkowe miejsce na bagaże sprawiają, że pobyt z rodziną staje się prawdziwą przyjemnością.",
    images: [...placeholderImages],
    capacity: "4 osoby",
    size: "35 m²",
    price: "Od 420 zł/noc",
    features: [
      { icon: Users, text: "Łóżko piętrowe dla dzieci" },
      { icon: Bath, text: "Duża łazienka z wanną" },
      { icon: Maximize, text: "Dużo miejsca na bagaże" },
      { icon: Mountain, text: "Widok na góry" },
      { icon: Wifi, text: "Bezpłatne WiFi" },
      { icon: Car, text: "Bezpłatny parking" },
    ],
    amenities: [
      "Ręczniki dla całej rodziny",
      "Pościel",
      "Zabawki dla dzieci",
      "Krzesełko dla dziecka",
      "Ogrzewanie",
      "Balkon",
    ],
    featured: true,
  },
  {
    id: "single-room",
    name: "Pokój Jednoosobowy",
    subtitle: "Przytulne schronienie",
    description:
      "Kameralny pokój dla osób podróżujących solo. Mimo niewielkich rozmiarów oferuje wszystkie niezbędne udogodnienia i przytulną atmosferę.",
    longDescription:
      "Ten przytulny pokój to idealne miejsce dla osób szukających spokoju i wytchnienia. Pomimo kompaktowych rozmiarów, został przemyślanie urządzony, aby zapewnić maksymalny komfort. Wygodne łóżko, funkcjonalne biurko i ciepłe oświetlenie tworzą atmosferę domowego zacisza.",
    images: [...placeholderImages],
    capacity: "1 osoba",
    size: "18 m²",
    price: "Od 180 zł/noc",
    features: [
      { icon: Bed, text: "Wygodne pojedyncze łóżko" },
      { icon: Coffee, text: "Biurko do pracy" },
      { icon: Bath, text: "Prywatna łazienka" },
      { icon: TreePine, text: "Cicha lokalizacja" },
      { icon: Wifi, text: "Bezpłatne WiFi" },
      { icon: Car, text: "Bezpłatny parking" },
    ],
    amenities: ["Ręczniki", "Pościel", "Lampka nocna", "Szafa", "Ogrzewanie", "Widok na ogród"],
    featured: true,
  },
  {
    id: "suite-deluxe",
    name: "Apartament Deluxe",
    subtitle: "Luksus w górach",
    description:
      "Nasz najwspanialszy apartament z osobną sypialnią, salonem i kuchnią. Idealny dla dłuższych pobytów i wyjątkowych okazji.",
    longDescription:
      "Ten wyjątkowy apartament to prawdziwa perła naszego pensjonatu. Składa się z przestronnej sypialni z łóżkiem king-size, przytulnego salonu z kominkiem oraz w pełni wyposażonej kuchni. Duży taras z meblami ogrodowymi oferuje niezapomniane widoki na Bieszczady.",
    images: [...placeholderImages],
    capacity: "2-4 osoby",
    size: "55 m²",
    price: "Od 650 zł/noc",
    features: [
      { icon: Bed, text: "Sypialnia z łóżkiem king-size" },
      { icon: Coffee, text: "W pełni wyposażona kuchnia" },
      { icon: TreePine, text: "Salon z kominkiem" },
      { icon: Mountain, text: "Duży taras z widokiem" },
      { icon: Bath, text: "Luksusowa łazienka" },
      { icon: Wifi, text: "Bezpłatne WiFi" },
    ],
    amenities: ["Naczynia kuchenne", "Lodówka", "Kuchenka", "Kominek", "Meble ogrodowe", "Premium pościel"],
  },
]

export const featuredRooms = rooms.filter((room) => room.featured)
