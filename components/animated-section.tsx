import type React from "react"

import { cn } from "@/lib/utils"

interface AnimatedSectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
}

export default function AnimatedSection({ children, className, ...props }: AnimatedSectionProps) {
  return (
    <section className={cn("animated-section", className)} {...props}>
      {children}
    </section>
  )
}
