import Image from "next/image"
import Link from "next/link"
import { Calendar, Users, Clock, CreditCard, CheckCircle, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AnimatedSection from "@/components/animated-section"
import BookingCalendar from "@/components/booking-calendar"

const roomOptions = [
  {
    id: "single-room",
    name: "Pokój Jednoosobowy",
    capacity: "1 osoba",
    size: "18 m²",
    priceFrom: 180,
    priceTo: 280,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "double-balcony",
    name: "Pokój Dwuosobowy z Balkonem",
    capacity: "2 osoby",
    size: "25 m²",
    priceFrom: 280,
    priceTo: 380,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "family-room",
    name: "Pokój Rodzinny",
    capacity: "4 osoby",
    size: "35 m²",
    priceFrom: 420,
    priceTo: 580,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "suite-deluxe",
    name: "Apartament Deluxe",
    capacity: "2-4 osoby",
    size: "55 m²",
    priceFrom: 650,
    priceTo: 950,
    image: "/placeholder.svg?height=200&width=300",
  },
]

const additionalServices = [
  { id: "breakfast", name: "Śniadanie", price: 25, unit: "zł/osoba/dzień" },
  { id: "dinner", name: "Kolacja", price: 45, unit: "zł/osoba/dzień" },
  { id: "pet", name: "Zwierzę domowe", price: 30, unit: "zł/noc" },
  { id: "transfer", name: "Transfer z/na lotnisko", price: 200, unit: "zł/trasa" },
  { id: "bike-rental", name: "Wypożyczenie roweru", price: 40, unit: "zł/dzień" },
  { id: "late-checkout", name: "Późne wymeldowanie", price: 50, unit: "zł" },
]

export default function BookingPage() {
  return (
    <main className="flex min-h-screen flex-col bg-warm-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden">
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="Rezerwacja w Leśnym Gościńcu"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-green/40 via-terracotta/30 to-forest-green/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="inline-flex items-center gap-2 bg-warm-white/20 backdrop-blur-md px-6 py-3 rounded-xl mb-6 border border-warm-white/30">
              <Calendar className="h-5 w-5" />
              <span className="font-medium">Rezerwacja Online</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal mb-4">Zarezerwuj Pobyt</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto px-4 leading-relaxed">
              Sprawdź dostępność i zarezerwuj swój wymarzony pobyt w Bieszczadach
            </p>
          </div>
        </div>
      </div>

      <AnimatedSection className="py-20 lg:py-24">
        <div className="container">
          <Tabs defaultValue="booking" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 bg-white border border-warm-beige rounded-xl">
              <TabsTrigger
                value="booking"
                className="data-[state=active]:bg-warm-beige data-[state=active]:text-forest-green rounded-xl"
              >
                Rezerwacja Online
              </TabsTrigger>
              <TabsTrigger
                value="contact"
                className="data-[state=active]:bg-warm-beige data-[state=active]:text-forest-green rounded-xl"
              >
                Kontakt Telefoniczny
              </TabsTrigger>
            </TabsList>

            <TabsContent value="booking">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Booking Form */}
                <div className="lg:col-span-2 bg-warm-beige/30 p-8 lg:p-12 rounded-2xl border border-warm-beige">
                  <h2 className="font-serif text-3xl font-normal text-forest-green mb-8">Formularz Rezerwacji</h2>

                  <form className="space-y-8">
                    {/* Dates and Guests */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="checkin" className="text-forest-green font-medium">
                          Data przyjazdu
                        </Label>
                        <Input
                          id="checkin"
                          type="date"
                          className="border-warm-beige focus:border-terracotta rounded-xl"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="checkout" className="text-forest-green font-medium">
                          Data wyjazdu
                        </Label>
                        <Input
                          id="checkout"
                          type="date"
                          className="border-warm-beige focus:border-terracotta rounded-xl"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="guests" className="text-forest-green font-medium">
                          Liczba gości
                        </Label>
                        <Select>
                          <SelectTrigger className="border-warm-beige focus:border-terracotta rounded-xl">
                            <SelectValue placeholder="Wybierz" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 osoba</SelectItem>
                            <SelectItem value="2">2 osoby</SelectItem>
                            <SelectItem value="3">3 osoby</SelectItem>
                            <SelectItem value="4">4 osoby</SelectItem>
                            <SelectItem value="5">5+ osób</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Room Selection */}
                    <div className="space-y-4">
                      <Label className="text-forest-green font-medium text-lg">Wybierz pokój</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {roomOptions.map((room) => (
                          <div
                            key={room.id}
                            className="bg-white p-4 rounded-xl border border-warm-beige hover:border-terracotta transition-colors cursor-pointer"
                          >
                            <div className="flex items-center gap-4">
                              <input type="radio" name="room" value={room.id} className="text-terracotta" />
                              <div className="flex-1">
                                <h3 className="font-semibold text-forest-green">{room.name}</h3>
                                <p className="text-sm text-warm-gray">
                                  {room.capacity} • {room.size}
                                </p>
                                <p className="text-sm text-terracotta font-medium">
                                  {room.priceFrom}-{room.priceTo} zł/noc
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Additional Services */}
                    <div className="space-y-4">
                      <Label className="text-forest-green font-medium text-lg">Dodatkowe usługi</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {additionalServices.map((service) => (
                          <div key={service.id} className="bg-white p-4 rounded-xl border border-warm-beige">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <input type="checkbox" id={service.id} className="text-terracotta rounded" />
                                <label htmlFor={service.id} className="text-forest-green font-medium">
                                  {service.name}
                                </label>
                              </div>
                              <span className="text-sm text-terracotta font-medium">
                                {service.price} {service.unit}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Personal Information */}
                    <div className="space-y-6">
                      <h3 className="font-serif text-2xl font-normal text-forest-green">Dane kontaktowe</h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="firstName" className="text-forest-green font-medium">
                            Imię
                          </Label>
                          <Input
                            id="firstName"
                            placeholder="Twoje imię"
                            className="border-warm-beige focus:border-terracotta rounded-xl"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName" className="text-forest-green font-medium">
                            Nazwisko
                          </Label>
                          <Input
                            id="lastName"
                            placeholder="Twoje nazwisko"
                            className="border-warm-beige focus:border-terracotta rounded-xl"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="notes" className="text-forest-green font-medium">
                          Uwagi specjalne
                        </Label>
                        <Textarea
                          id="notes"
                          placeholder="Dodatkowe życzenia, informacje o alergii, itp."
                          rows={4}
                          className="border-warm-beige focus:border-terracotta rounded-xl"
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-terracotta hover:bg-forest-green text-white py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <CheckCircle className="mr-2 h-5 w-5" />
                      Wyślij Zapytanie o Rezerwację
                    </Button>

                    <p className="text-sm text-warm-gray text-center">
                      Po wysłaniu formularza skontaktujemy się z Państwem w ciągu 24 godzin w celu potwierdzenia
                      rezerwacji
                    </p>
                  </form>
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                  {/* Calendar */}
                  <div className="bg-white rounded-2xl p-6 border border-warm-beige shadow-sm">
                    <h3 className="font-serif text-xl font-semibold text-forest-green mb-6">Dostępność</h3>
                    <BookingCalendar />

                    <div className="mt-6 space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-green-200 rounded-full"></div>
                        <span className="text-warm-gray">Dostępne</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-yellow-200 rounded-full"></div>
                        <span className="text-warm-gray">Częściowo zajęte</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-red-200 rounded-full"></div>
                        <span className="text-warm-gray">Zajęte</span>
                      </div>
                    </div>
                  </div>

                  {/* Booking Policies */}
                  <div className="bg-white rounded-2xl p-6 border border-warm-beige shadow-sm">
                    <h3 className="font-serif text-xl font-semibold text-forest-green mb-6">Warunki Rezerwacji</h3>

                    <div className="space-y-4 text-sm text-warm-gray">
                      <div className="flex items-start gap-3">
                        <Clock className="h-4 w-4 text-terracotta mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-forest-green">Zameldowanie / Wymeldowanie</p>
                          <p>Zameldowanie: 15:00 - 20:00</p>
                          <p>Wymeldowanie: do 11:00</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <CreditCard className="h-4 w-4 text-terracotta mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-forest-green">Płatność</p>
                          <p>Zaliczka 30% przy rezerwacji</p>
                          <p>Reszta przy zameldowaniu</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Users className="h-4 w-4 text-terracotta mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-forest-green">Anulowanie</p>
                          <p>Bezpłatne do 14 dni przed przyjazdem</p>
                          <p>Później 30% opłaty</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="bg-terracotta/10 rounded-2xl p-6 border border-terracotta/20">
                    <h3 className="font-serif text-xl font-semibold text-forest-green mb-4">Potrzebujesz Pomocy?</h3>
                    <p className="text-warm-gray mb-4">Skontaktuj się z nami bezpośrednio</p>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Phone className="h-4 w-4 text-terracotta" />
                        <span className="text-forest-green font-medium">+48 123 456 789</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="h-4 w-4 text-terracotta" />
                        <span className="text-forest-green font-medium">rezerwacje@lesny-gosciniec.pl</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="contact">
              <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 lg:p-12 border border-warm-beige shadow-lg">
                <div className="text-center mb-12">
                  <h2 className="font-serif text-3xl font-normal text-forest-green mb-4">Rezerwacja Telefoniczna</h2>
                  <p className="text-warm-gray text-lg">
                    Wolisz porozmawiać bezpośrednio? Zadzwoń do nas - chętnie pomożemy!
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="font-semibold text-forest-green mb-6 text-xl">Informacje Kontaktowe</h3>

                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-terracotta/10 rounded-xl flex items-center justify-center">
                          <Phone className="h-6 w-6 text-terracotta" />
                        </div>
                        <div>
                          <p className="font-medium text-forest-green">Telefon</p>
                          <p className="text-warm-gray">+48 123 456 789</p>
                          <p className="text-warm-gray">+48 987 654 321</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-mustard/10 rounded-xl flex items-center justify-center">
                          <Clock className="h-6 w-6 text-mustard" />
                        </div>
                        <div>
                          <p className="font-medium text-forest-green">Godziny Kontaktu</p>
                          <p className="text-warm-gray">Poniedziałek - Niedziela</p>
                          <p className="text-warm-gray">8:00 - 22:00</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-forest-green/10 rounded-xl flex items-center justify-center">
                          <Mail className="h-6 w-6 text-forest-green" />
                        </div>
                        <div>
                          <p className="font-medium text-forest-green">Email</p>
                          <p className="text-warm-gray">rezerwacje@lesny-gosciniec.pl</p>
                          <p className="text-warm-gray">info@lesny-gosciniec.pl</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-forest-green mb-6 text-xl">Przygotuj Informacje</h3>

                    <div className="bg-warm-beige/50 p-6 rounded-xl border border-warm-beige">
                      <p className="text-warm-gray mb-4">Aby przyspieszyć proces rezerwacji, przygotuj:</p>

                      <ul className="space-y-2 text-warm-gray">
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-terracotta rounded-full"></div>
                          <span>Preferowane daty pobytu</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-terracotta rounded-full"></div>
                          <span>Liczbę gości</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-terracotta rounded-full"></div>
                          <span>Typ pokoju</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-terracotta rounded-full"></div>
                          <span>Dodatkowe usługi</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-terracotta rounded-full"></div>
                          <span>Dane kontaktowe</span>
                        </li>
                      </ul>
                    </div>

                    <div className="mt-8 text-center">
                      <Button
                        asChild
                        size="lg"
                        className="bg-terracotta hover:bg-forest-green text-white px-8 py-4 rounded-xl"
                      >
                        <Link href="tel:+48123456789">
                          <Phone className="mr-2 h-5 w-5" />
                          Zadzwoń Teraz
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </AnimatedSection>
    </main>
  )
}
