import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Car, Train, Plane, MessageCircle, Send, Heart, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import AnimatedSection from "@/components/animated-section"

const contactInfo = [
  {
    icon: MapPin,
    title: "Adres",
    details: ["ul. Leśna 42", "38-607 Cisna", "Województwo podkarpackie"],
    color: "text-forest-green",
  },
  {
    icon: Phone,
    title: "Telefon",
    details: ["+48 123 456 789", "+48 987 654 321", "Codziennie 8:00 - 22:00"],
    color: "text-terracotta",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@lesny-gosciniec.pl", "rezerwacje@lesny-gosciniec.pl", "Odpowiadamy w 24h"],
    color: "text-mustard",
  },
  {
    icon: Clock,
    title: "Godziny Recepcji",
    details: ["Poniedziałek - Niedziela", "8:00 - 20:00", "Całodobowy kontakt telefoniczny"],
    color: "text-forest-green",
  },
]

const travelOptions = [
  {
    icon: Car,
    title: "Samochodem",
    description: "Najwygodniejszy sposób dotarcia do Cisnej",
    details: [
      "Z Krakowa: 3 godziny (250 km)",
      "Z Warszawy: 4,5 godziny (380 km)",
      "Z Rzeszowa: 2 godziny (120 km)",
      "Bezpłatny parking na miejscu",
    ],
  },
  {
    icon: Train,
    title: "Pociągiem + Autobusem",
    description: "Połączenie kolejowo-autobusowe",
    details: [
      "Pociąg do Ustrzyk Dolnych",
      "Autobus PKS do Cisnej",
      "Możliwość odbioru z przystanku",
      "Rezerwacja transportu: +48 123 456 789",
    ],
  },
  {
    icon: Plane,
    title: "Samolotem",
    description: "Najbliższe lotniska",
    details: [
      "Rzeszów-Jasionka: 120 km",
      "Kraków-Balice: 250 km",
      "Możliwość transferu z lotniska",
      "Koszt transferu: od 200 zł",
    ],
  },
]

const faqItems = [
  {
    question: "Jakie są godziny zameldowania i wymeldowania?",
    answer:
      "Zameldowanie: 15:00-20:00, Wymeldowanie: do 11:00. W przypadku późniejszego przyjazdu prosimy o wcześniejszy kontakt.",
  },
  {
    question: "Czy akceptujecie zwierzęta?",
    answer:
      "Tak, akceptujemy zwierzęta domowe za dodatkową opłatą 30 zł/noc. Prosimy o wcześniejsze zgłoszenie przy rezerwacji.",
  },
  {
    question: "Czy jest możliwość wyżywienia?",
    answer:
      "Oferujemy śniadania za dodatkową opłatą 25 zł/osoba. W okolicy znajdują się również restauracje serwujące regionalne potrawy.",
  },
  {
    question: "Czy jest dostępne WiFi?",
    answer: "Tak, bezpłatne WiFi jest dostępne we wszystkich pokojach i częściach wspólnych pensjonatu.",
  },
  {
    question: "Jakie atrakcje są w pobliżu?",
    answer:
      "W okolicy znajdują się liczne szlaki turystyczne, Solińskie Jezioro (15 km), Bieszczadzki Park Narodowy oraz wiele punktów widokowych.",
  },
]

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col bg-warm-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden">
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="Kontakt - Leśny Gościniec"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-green/40 via-terracotta/30 to-forest-green/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="inline-flex items-center gap-2 bg-warm-white/20 backdrop-blur-md px-6 py-3 rounded-xl mb-6 border border-warm-white/30">
              <MessageCircle className="h-5 w-5" />
              <span className="font-medium">Skontaktuj się z nami</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal mb-4">Kontakt</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto px-4 leading-relaxed">
              Jesteśmy tutaj, aby pomóc Ci zaplanować idealny pobyt w Bieszczadach
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <AnimatedSection className="py-20 lg:py-24">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-warm-beige/50 px-6 py-3 rounded-xl mb-8 border border-warm-beige">
              <Heart className="h-5 w-5 text-forest-green" />
              <span className="text-forest-green font-semibold">Informacje Kontaktowe</span>
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl font-normal text-forest-green mb-8">
              Jak Nas
              <span className="block text-terracotta font-medium">Znaleźć</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="bg-white rounded-2xl p-6 border border-warm-beige shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${info.color === "text-forest-green" ? "bg-forest-green/10" : info.color === "text-terracotta" ? "bg-terracotta/10" : "bg-mustard/10"}`}
                >
                  <info.icon className={`h-6 w-6 ${info.color}`} />
                </div>
                <h3 className="font-semibold text-forest-green mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, index) => (
                    <p key={index} className="text-warm-gray text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-warm-beige/30 p-8 lg:p-12 rounded-2xl border border-warm-beige">
              <h3 className="font-serif text-3xl font-normal text-forest-green mb-8">Napisz do Nas</h3>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-forest-green font-medium">
                      Imię i Nazwisko
                    </Label>
                    <Input
                      id="name"
                      placeholder="Twoje imię i nazwisko"
                      className="border-warm-beige focus:border-terracotta rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-forest-green font-medium">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="twoj@email.pl"
                      className="border-warm-beige focus:border-terracotta rounded-xl"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-forest-green font-medium">
                      Telefon
                    </Label>
                    <Input
                      id="phone"
                      placeholder="+48 123 456 789"
                      className="border-warm-beige focus:border-terracotta rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-forest-green font-medium">
                      Temat
                    </Label>
                    <Select>
                      <SelectTrigger className="border-warm-beige focus:border-terracotta rounded-xl">
                        <SelectValue placeholder="Wybierz temat" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="booking">Rezerwacja pokoju</SelectItem>
                        <SelectItem value="info">Informacje o pensjonacie</SelectItem>
                        <SelectItem value="attractions">Atrakcje w okolicy</SelectItem>
                        <SelectItem value="transport">Transport i dojazd</SelectItem>
                        <SelectItem value="other">Inne</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-forest-green font-medium">
                    Wiadomość
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Opisz, w czym możemy Ci pomóc..."
                    rows={6}
                    className="border-warm-beige focus:border-terracotta rounded-xl"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-terracotta hover:bg-forest-green text-white rounded-xl py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Wyślij Wiadomość
                </Button>

                <p className="text-sm text-warm-gray text-center">
                  Odpowiadamy na wszystkie wiadomości w ciągu 24 godzin
                </p>
              </form>
            </div>

            {/* Map Placeholder */}
            <div className="bg-warm-beige/30 rounded-2xl border border-warm-beige overflow-hidden">
              <div className="h-full min-h-[500px] bg-gradient-to-br from-forest-green/10 to-terracotta/10 flex items-center justify-center relative">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-forest-green mx-auto mb-4" />
                  <h3 className="font-serif text-2xl text-forest-green mb-2">Leśny Gościniec</h3>
                  <p className="text-warm-gray mb-4">ul. Leśna 42, 38-607 Cisna</p>
                  <Button asChild className="bg-terracotta hover:bg-forest-green text-white rounded-xl">
                    <Link href="https://maps.google.com" target="_blank">
                      Otwórz w Google Maps
                    </Link>
                  </Button>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 left-4 w-8 h-8 bg-mustard/20 rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-12 h-12 bg-terracotta/20 rounded-full"></div>
                <div className="absolute top-1/3 right-8 w-6 h-6 bg-forest-green/20 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* How to Get Here */}
      <AnimatedSection className="py-20 bg-warm-beige/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl font-normal text-forest-green mb-8">
              Jak Do Nas
              <span className="block text-terracotta font-medium">Dotrzeć</span>
            </h2>
            <p className="text-xl text-warm-gray max-w-3xl mx-auto leading-relaxed">
              Cisna jest dobrze skomunikowana z głównymi miastami Polski. Oto najwygodniejsze sposoby dojazdu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {travelOptions.map((option) => (
              <div
                key={option.title}
                className="bg-white rounded-2xl p-8 border border-warm-beige shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-forest-green/10 rounded-xl flex items-center justify-center mb-6">
                  <option.icon className="h-8 w-8 text-forest-green" />
                </div>
                <h3 className="font-serif text-2xl font-normal text-forest-green mb-3">{option.title}</h3>
                <p className="text-warm-gray mb-6">{option.description}</p>
                <ul className="space-y-2">
                  {option.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-warm-gray">
                      <div className="w-2 h-2 bg-mustard rounded-full mt-2 flex-shrink-0"></div>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-warm-beige/50 px-6 py-3 rounded-xl mb-8 border border-warm-beige">
              <Info className="h-5 w-5 text-forest-green" />
              <span className="text-forest-green font-semibold">Często Zadawane Pytania</span>
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl font-normal text-forest-green mb-8">
              Masz Pytania?
              <span className="block text-terracotta font-medium">Mamy Odpowiedzi</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 lg:p-8 border border-warm-beige shadow-sm">
                <h3 className="font-semibold text-forest-green mb-3 text-lg">{item.question}</h3>
                <p className="text-warm-gray leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-warm-gray mb-6">Nie znalazłeś odpowiedzi na swoje pytanie?</p>
            <Button asChild className="bg-terracotta hover:bg-forest-green text-white rounded-xl px-8 py-3">
              <Link href="#contact-form">Napisz do Nas</Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-forest-green to-terracotta text-white">
        <div className="container text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-normal mb-6">Gotowi na Niezapomniany Pobyt?</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
            Skontaktuj się z nami już dziś i zarezerwuj swój wymarzony pobyt w sercu Bieszczad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-mustard hover:bg-warm-white hover:text-forest-green text-forest-green px-10 py-6 text-xl rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <Link href="/booking">Zarezerwuj Teraz</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-warm-white text-warm-white hover:bg-warm-white hover:text-forest-green px-10 py-6 text-xl rounded-xl bg-transparent"
            >
              <Link href="tel:+48123456789">Zadzwoń: +48 123 456 789</Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </main>
  )
}
