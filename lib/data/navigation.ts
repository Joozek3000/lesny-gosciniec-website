export interface NavLink {
  href: string
  label: string
}

export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Strona Główna" },
  { href: "/rooms", label: "Pokoje" },
  { href: "/attractions", label: "Atrakcje" },
  { href: "/contact", label: "Kontakt" },
]

export const BOOKING_LINK: NavLink = { href: "/booking", label: "Rezerwacja" }
