import Image from "next/image"
import Link from "next/link"
import { Clock, Compass, MapPin, Mountain, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AnimatedSection from "@/components/animated-section"
import { localAttractions, mainAttractions, seasonalActivities } from "@/lib/data/attractions"

export default function AttractionsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-warm-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="Atrakcje Bieszczad"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-green/40 via-terracotta/30 to-forest-green/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="inline-flex items-center gap-2 bg-warm-white/20 backdrop-blur-md px-6 py-3 rounded-xl mb-6 border border-warm-white/30">
              <Compass className="h-5 w-5" />
              <span className="font-medium">Odkryj Bieszczady</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal mb-4">Atrakcje i Okolica</h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto px-4 leading-relaxed">
              Odkryj naturę, odpręż się w komforcie, ciesz się Bieszczadami
            </p>
          </div>
        </div>
      </div>

      {/* Main Attractions */}
      <AnimatedSection className="py-20 lg:py-24">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-warm-beige/50 px-6 py-3 rounded-xl mb-8 border border-warm-beige">
              <Mountain className="h-5 w-5 text-forest-green" />
              <span className="text-forest-green font-semibold">Główne Atrakcje</span>
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl font-normal text-forest-green mb-8">
              Co Warto Zobaczyć
              <span className="block text-terracotta font-medium">w Bieszczadach</span>
            </h2>
          </div>

          <div className="space-y-24">
            {mainAttractions.map((attraction, index) => (
              <div
                key={attraction.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl group">
                    <Image
                      src={attraction.image || "/placeholder.svg"}
                      alt={attraction.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-6 left-6 bg-warm-white/90 backdrop-blur-sm p-3 rounded-xl border border-warm-beige">
                      <attraction.icon className="h-8 w-8 text-forest-green" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`bg-warm-beige/30 p-8 lg:p-12 rounded-2xl border border-warm-beige ${
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  <div className="inline-flex items-center gap-2 bg-white/60 px-4 py-2 rounded-full mb-6 border border-warm-beige">
                    <span className="text-forest-green font-medium text-sm">{attraction.subtitle}</span>
                  </div>

                  <h3 className="font-serif text-3xl lg:text-4xl font-normal text-forest-green mb-6">
                    {attraction.title}
                  </h3>

                  <p className="text-lg text-warm-gray mb-8 leading-relaxed">{attraction.description}</p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="text-center bg-white/60 p-4 rounded-xl border border-warm-beige">
                      <Star className="h-6 w-6 text-mustard mx-auto mb-2" />
                      <div className="text-sm text-forest-green font-medium">{attraction.difficulty}</div>
                    </div>
                    <div className="text-center bg-white/60 p-4 rounded-xl border border-warm-beige">
                      <Clock className="h-6 w-6 text-terracotta mx-auto mb-2" />
                      <div className="text-sm text-forest-green font-medium">{attraction.duration}</div>
                    </div>
                    <div className="text-center bg-white/60 p-4 rounded-xl border border-warm-beige">
                      <MapPin className="h-6 w-6 text-forest-green mx-auto mb-2" />
                      <div className="text-sm text-forest-green font-medium">{attraction.distance}</div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-forest-green mb-4">Najważniejsze punkty:</h4>
                    <div className="space-y-2">
                      {attraction.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-mustard rounded-full"></div>
                          <span className="text-warm-gray">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Seasonal Activities */}
      <AnimatedSection className="py-20 bg-warm-beige/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl font-normal text-forest-green mb-8">
              Atrakcje w Każdej
              <span className="block text-terracotta font-medium">Porze Roku</span>
            </h2>
            <p className="text-xl text-warm-gray max-w-3xl mx-auto leading-relaxed">
              Bieszczady są piękne przez cały rok. Każda pora roku oferuje unikalne doświadczenia i atrakcje.
            </p>
          </div>

          <Tabs defaultValue="summer" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12 bg-white border border-warm-beige rounded-xl">
              {seasonalActivities.map((season) => (
                <TabsTrigger
                  key={season.season}
                  value={season.season}
                  className="data-[state=active]:bg-warm-beige data-[state=active]:text-forest-green rounded-xl"
                >
                  <season.icon className="h-4 w-4 mr-2" />
                  {season.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {seasonalActivities.map((season) => (
              <TabsContent key={season.season} value={season.season} className="mt-8">
                <div className={`${season.bgColor} rounded-2xl p-8 border border-warm-beige`}>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-sm">
                      <season.icon className={`h-8 w-8 ${season.color}`} />
                    </div>
                    <div>
                      <h3 className="font-serif text-3xl font-normal text-forest-green">{season.title}</h3>
                      <p className="text-warm-gray">Najlepsze aktywności w tym sezonie</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {season.activities.map((activity) => (
                      <div key={activity.name} className="bg-white/80 p-6 rounded-xl border border-warm-beige">
                        <h4 className="font-semibold text-forest-green mb-2">{activity.name}</h4>
                        <p className="text-warm-gray">{activity.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </AnimatedSection>

      {/* Local Attractions */}
      <AnimatedSection className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl font-normal text-forest-green mb-8">
              Lokalne Atrakcje
              <span className="block text-terracotta font-medium">w Okolicy</span>
            </h2>
            <p className="text-xl text-warm-gray max-w-3xl mx-auto leading-relaxed">
              W pobliżu Leśnego Gościńca znajdziecie wiele ciekawych miejsc wartych odwiedzenia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {localAttractions.map((attraction) => (
              <div
                key={attraction.name}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-warm-beige hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={attraction.image || "/placeholder.svg"}
                    alt={attraction.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-terracotta text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {attraction.distance}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-forest-green mb-3">{attraction.name}</h3>
                  <p className="text-warm-gray leading-relaxed">{attraction.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-forest-green to-terracotta text-white">
        <div className="container text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-normal mb-6">Gotowi na Przygodę w Bieszczadach?</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
            Zarezerwuj pobyt w Leśnym Gościńcu i odkryj wszystkie skarby tego wyjątkowego regionu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-mustard hover:bg-warm-white hover:text-forest-green text-forest-green px-10 py-6 text-xl rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <Link href="/booking">Zarezerwuj Pobyt</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-warm-white text-warm-white hover:bg-warm-white hover:text-forest-green px-10 py-6 text-xl rounded-xl bg-transparent"
            >
              <Link href="/contact">Zapytaj o Wycieczki</Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </main>
  )
}
