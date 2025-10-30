import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ApartmentCardProps {
  title: string
  description: string
  imageSrc: string
  capacity: string
  size: string
}

export default function ApartmentCard({ title, description, imageSrc, capacity, size }: ApartmentCardProps) {
  return (
    <div className="bg-background rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl font-semibold mb-2 text-primary">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <Users className="h-4 w-4 mr-1" />
            <span>{capacity}</span>
          </div>
          <div className="text-sm text-muted-foreground">{size}</div>
        </div>
        <Button
          asChild
          variant="outline"
          className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
        >
          <Link href="/apartments">
            View Details
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
