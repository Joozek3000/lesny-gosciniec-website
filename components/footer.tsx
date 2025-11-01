import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone, Mountain } from "lucide-react"
import { NAV_LINKS, BOOKING_LINK } from "@/lib/data/navigation"

export default function Footer() {
  const quickLinks = [...NAV_LINKS, BOOKING_LINK]

  return (
    <footer className="bg-forest-green text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Mountain className="h-8 w-8" />
              <span className="font-serif text-xl font-semibold">Leśny Gościniec</span>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Rodzinny pensjonat w sercu Bieszczad, gdzie każdy gość czuje się jak w domu. Oferujemy wygodne pokoje i
              ciepłą atmosferę.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                aria-label="Facebook"
                className="w-10 h-10 bg-mustard rounded-full flex items-center justify-center hover:bg-mustard/80 transition-colors"
              >
                <Facebook className="h-5 w-5 text-forest-green" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                aria-label="Instagram"
                className="w-10 h-10 bg-mustard rounded-full flex items-center justify-center hover:bg-mustard/80 transition-colors"
              >
                <Instagram className="h-5 w-5 text-forest-green" />
              </Link>
              <Link
                href="mailto:info@lesny-gosciniec.pl"
                aria-label="Email"
                className="w-10 h-10 bg-mustard rounded-full flex items-center justify-center hover:bg-mustard/80 transition-colors"
              >
                <Mail className="h-5 w-5 text-forest-green" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Szybkie Linki</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/80 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex">
                <MapPin className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-white/80">
                  ul. Leśna 42
                  <br />
                  38-607 Cisna
                  <br />
                  Polska
                </span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                <span className="text-white/80">+48 123 456 789</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                <span className="text-white/80">info@lesny-gosciniec.pl</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-white/80 mb-4">
              Zapisz się do naszego newslettera, aby otrzymywać oferty sezonowe i aktualności.
            </p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Twój adres email"
                className="px-3 py-2 rounded-xl bg-forest-green/50 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-mustard/50"
              />
              <button
                type="submit"
                className="px-3 py-2 rounded-xl bg-mustard text-forest-green font-semibold hover:bg-mustard/90 transition-colors"
              >
                Zapisz się
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/80 text-sm">
            &copy; {new Date().getFullYear()} Leśny Gościniec. Wszystkie prawa zastrzeżone.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-white/80 text-sm hover:text-white transition-colors">
              Polityka Prywatności
            </Link>
            <Link href="/terms" className="text-white/80 text-sm hover:text-white transition-colors">
              Regulamin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
