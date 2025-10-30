import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Users, Maximize, Wifi, Car, Coffee, Bath, Bed, Mountain, TreePine } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedSection from "@/components/animated-section"

const rooms = [
  {
    id: "double-balcony",
    name: "Pokój Dwuosobowy z Balkonem",
    subtitle: "Widok na pradawny las",
    description:
      "Przestronny pokój z wygodnym łóżkiem małżeńskim i prywatnym balkonem z widokiem na las. Idealne miejsce dla par szukających spokoju i bliskości z naturą.",
    longDescription:
      "Ten urokliwy pokój został urządzony z myślą o komforcie i relaksie. Duże okna wpuszczają naturalne światło, a z balkonu roztacza się przepiękny widok na zielone korony drzew. Wnętrze utrzymane w ciepłych, naturalnych barwach tworzy przytulną atmosferę górskiego schronienia.",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
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
  },
  {
    id: "family-room",
    name: "Pokój Rodzinny",
    subtitle: "Dla całej rodziny",
    description:
      "Przestronny pokój idealny dla rodzin z dziećmi. Wyposażony w łóżko małżeńskie i łóżko piętrowe, zapewnia komfort dla 4 osób.",
    longDescription:
      "Nasz największy pokój został zaprojektowany z myślą o rodzinach. Oprócz wygodnego łóżka małżeńskiego, znajdziecie tu solidne łóżko piętrowe dla dzieci. Duża łazienka z wanną i dodatkowe miejsce na bagaże sprawiają, że pobyt z rodziną staje się prawdziwą przyjemnością.",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
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
  },
  {
    id: "single-room",
    name: "Pokój Jednoosobowy",
    subtitle: "Przytulne schronienie",
    description:
      "Kameralny pokój dla osób podróżujących solo. Mimo niewielkich rozmiarów oferuje wszystkie niezbędne udogodnienia i przytulną atmosferę.",
    longDescription:
      "Ten przytulny pokój to idealne miejsce dla osób szukających spokoju i wytchnienia. Pomimo kompaktowych rozmiarów, został przemyślanie urządzony, aby zapewnić maksymalny komfort. Wygodne łóżko, funkcjonalne biurko i ciepłe oświetlenie tworzą atmosferę domowego zacisza.",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
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
  },
  {
    id: "suite-deluxe",
    name: "Apartament Deluxe",
    subtitle: "Luksus w górach",
    description:
      "Nasz najwspanialszy apartament z osobną sypialnią, salonem i kuchnią. Idealny dla dłuższych pobytów i wyjątkowych okazji.",
    longDescription:
      "Ten wyjątkowy apartament to prawdziwa perła naszego pensjonatu. Składa się z przestronnej sypialni z łóżkiem king-size, przytulnego salonu z kominkiem oraz w pełni wyposażonej kuchni. Duży taras z meblami ogrodowymi oferuje niezapomniane widoki na Bieszczady.",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
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

export default function RoomsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-warm-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden">
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="Pokoje w Leśnym Gościńcu"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-green/40 via-terracotta/30 to-forest-green/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="inline-flex items-center gap-2 bg-warm-white/20 backdrop-blur-md px-6 py-3 rounded-xl mb-6 border border-warm-white/30">
              <Bed className="h-5 w-5" />
              <span className="font-medium">Nasze Pokoje</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal mb-4">Wygodne Pokoje</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto px-4 leading-relaxed">
              Każdy pokój urządzony z myślą o Państwa komforcie i relaksie
            </p>
          </div>
        </div>
      </div>

      {/* Rooms Grid */}
      <AnimatedSection className="py-20 lg:py-24">
        <div className="container">
          <div className="space-y-24">
            {rooms.map((room, index) => (
              <div
                key={room.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Images */}
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl group">
                    <Image
                      src={room.images[0] || "/placeholder.svg"}
                      alt={room.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-6 right-6 bg-terracotta text-white px-4 py-2 rounded-xl font-semibold shadow-lg">
                      {room.price}
                    </div>
                    <div className="absolute bottom-6 left-6 bg-warm-white/90 backdrop-blur-sm px-4 py-2 rounded-xl border border-warm-beige">
                      <span className="text-forest-green font-medium text-sm">{room.subtitle}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`bg-warm-beige/30 p-8 lg:p-12 rounded-2xl border border-warm-beige ${
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  <h2 className="font-serif text-3xl lg:text-4xl font-normal text-forest-green mb-4">{room.name}</h2>

                  <p className="text-lg text-warm-gray mb-6 leading-relaxed">{room.description}</p>

                  <p className="text-warm-gray mb-8 leading-relaxed">{room.longDescription}</p>

                  {/* Room Stats */}
                  <div className="flex flex-wrap gap-6 mb-8">
                    <div className="flex items-center gap-3 bg-white/60 px-4 py-2 rounded-xl border border-warm-beige">
                      <Users className="h-5 w-5 text-forest-green" />
                      <span className="text-forest-green font-medium">{room.capacity}</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white/60 px-4 py-2 rounded-xl border border-warm-beige">
                      <Maximize className="h-5 w-5 text-terracotta" />
                      <span className="text-forest-green font-medium">{room.size}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {room.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 bg-white/60 px-4 py-3 rounded-xl border border-warm-beige"
                      >
                        <feature.icon className="h-5 w-5 text-mustard" />
                        <span className="text-forest-green font-medium">{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Amenities */}
                  <div className="mb-8">
                    <h3 className="font-semibold text-forest-green mb-4">Udogodnienia:</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {room.amenities.map((amenity) => (
                        <div key={amenity} className="flex items-center gap-2 text-sm text-warm-gray">
                          <div className="w-2 h-2 bg-mustard rounded-full"></div>
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      asChild
                      className="bg-terracotta hover:bg-forest-green text-white rounded-xl px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Link href={`/booking?room=${room.id}`}>
                        Sprawdź Dostępność
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="border-2 border-mustard text-forest-green hover:bg-mustard hover:text-white rounded-xl px-8 py-3 bg-transparent"
                    >
                      <Link href={`#gallery-${room.id}`}>Zobacz Galerię</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Pricing Info */}
      <AnimatedSection className="py-16 bg-warm-beige/50">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 lg:p-12 border border-warm-beige shadow-lg">
            <h2 className="font-serif text-3xl font-normal text-forest-green mb-8 text-center">Informacje o Cenach</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-forest-green mb-4">Sezon Niski (Listopad - Marzec)</h3>
                <ul className="space-y-2 text-warm-gray">
                  <li>• Pokój Jednoosobowy: 180-220 zł/noc</li>
                  <li>• Pokój Dwuosobowy: 280-320 zł/noc</li>
                  <li>• Pokój Rodzinny: 420-480 zł/noc</li>
                  <li>• Apartament Deluxe: 650-750 zł/noc</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-forest-green mb-4">Sezon Wysoki (Kwiecień - Październik)</h3>
                <ul className="space-y-2 text-warm-gray">
                  <li>• Pokój Jednoosobowy: 220-280 zł/noc</li>
                  <li>• Pokój Dwuosobowy: 320-380 zł/noc</li>
                  <li>• Pokój Rodzinny: 480-580 zł/noc</li>
                  <li>• Apartament Deluxe: 750-950 zł/noc</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-mustard/10 rounded-xl border border-mustard/20">
              <h3 className="font-semibold text-forest-green mb-3">W cenie pokoju:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-warm-gray">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-mustard rounded-full"></div>
                  <span>Bezpłatne WiFi</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-mustard rounded-full"></div>
                  <span>Bezpłatny parking</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-mustard rounded-full"></div>
                  <span>Ręczniki i pościel</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-mustard rounded-full"></div>
                  <span>Środki higieniczne</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-forest-green to-terracotta text-white">
        <div className="container text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-normal mb-6">Gotowi na Wypoczynek w Bieszczadach?</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
            Zarezerwuj swój pokój już dziś i ciesz się komfortem oraz pięknem górskiej przyrody.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-mustard hover:bg-warm-white hover:text-forest-green text-forest-green px-10 py-6 text-xl rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <Link href="/booking">
              Zarezerwuj Teraz
              <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
          </Button>
        </div>
      </AnimatedSection>
    </main>
  )
}
