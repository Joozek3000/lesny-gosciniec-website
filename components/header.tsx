"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Mountain } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NAV_LINKS, BOOKING_LINK } from "@/lib/data/navigation"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "bg-warm-white/95 backdrop-blur-md shadow-lg py-4" : "bg-transparent py-6",
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
              isScrolled ? "bg-forest-green" : "bg-warm-white/20 backdrop-blur-sm",
            )}
          >
            <Mountain className="h-6 w-6 text-white transition-colors duration-300" />
          </div>
          <div>
            <span
              className={cn(
                "font-serif text-xl font-normal transition-colors duration-300",
                isScrolled ? "text-forest-green" : "text-white",
              )}
            >
              Leśny Gościniec
            </span>
            <div
              className={cn("text-xs transition-colors duration-300", isScrolled ? "text-warm-gray" : "text-white/70")}
            >
              Cisna, Bieszczady
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "font-medium transition-all duration-300 hover:scale-105",
                isScrolled ? "text-forest-green hover:text-terracotta" : "text-white/90 hover:text-white",
              )}
            >
              {item.label}
            </Link>
          ))}

          <Button
            asChild
            className="rounded-xl bg-terracotta text-white transition-all duration-300 hover:bg-forest-green"
          >
            <Link href={BOOKING_LINK.href}>{BOOKING_LINK.label}</Link>
          </Button>
        </nav>

        <button className="lg:hidden" onClick={() => setIsMenuOpen(true)} aria-label="Otwórz menu">
          <Menu
            className={cn("h-6 w-6 transition-colors duration-300", isScrolled ? "text-forest-green" : "text-white")}
          />
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-warm-white z-50 flex flex-col lg:hidden">
            <div className="container flex items-center justify-between py-6">
              <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
                <div className="w-10 h-10 bg-forest-green rounded-full flex items-center justify-center">
                  <Mountain className="h-6 w-6 text-white" />
                </div>
                <div>
                  <span className="font-serif text-xl font-normal text-forest-green">Leśny Gościniec</span>
                  <div className="text-xs text-warm-gray">Cisna, Bieszczady</div>
                </div>
              </Link>

              <button onClick={closeMenu} aria-label="Zamknij menu">
                <X className="h-6 w-6 text-forest-green" />
              </button>
            </div>

            <nav className="flex flex-col items-center justify-center flex-1 gap-8">
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-2xl font-normal text-forest-green hover:text-terracotta transition-colors"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              ))}

              <Button asChild size="lg" className="mt-8 bg-terracotta hover:bg-forest-green text-white px-8 rounded-xl">
                <Link href={BOOKING_LINK.href} onClick={closeMenu}>
                  {BOOKING_LINK.label}
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
