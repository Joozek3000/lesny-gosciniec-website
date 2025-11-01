import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Users, Maximize } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedSection from "@/components/animated-section"
import { featuredRooms } from "@/lib/data/rooms"

export default function RoomsSection() {
  return (
    <AnimatedSection className="py-20 lg:py-24 bg-warm-beige/30">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 px-6 py-3 rounded-xl mb-8 border border-warm-beige shadow-sm">
            <span className="text-forest-green font-semibold">Nasze Pokoje</span>
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-normal text-forest-green mb-8">
            Wygodne Pokoje dla
            <span className="block text-terracotta font-medium">Każdego Gościa</span>
          </h2>
          <p className="text-xl text-warm-gray max-w-3xl mx-auto leading-relaxed">
            Każdy z naszych pokoi został urządzony z myślą o Państwa komforcie i relaksie po dniu spędzonym w
            Bieszczadach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredRooms.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-warm-beige hover:shadow-xl transition-all duration-300 group"
            >
              {/* Room Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={room.images[0] || "/placeholder.svg"}
                  alt={room.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-terracotta text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {room.price}
                </div>
              </div>

              {/* Room Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-forest-green mb-3">{room.name}</h3>
                <p className="text-warm-gray mb-4 leading-relaxed">{room.description}</p>

                <div className="flex justify-between items-center mb-4 text-sm text-warm-gray">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{room.capacity}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Maximize className="h-4 w-4" />
                    <span>{room.size}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-6">
                  {room.features.slice(0, 4).map((feature) => (
                    <div key={feature.text} className="flex items-center gap-2 text-sm text-warm-gray">
                      <div className="w-2 h-2 bg-mustard rounded-full"></div>
                      <span>{feature.text}</span>
                    </div>
                  ))}
                </div>

                <Button
                  asChild
                  className="w-full bg-mustard hover:bg-terracotta text-white rounded-xl transition-colors duration-300"
                >
                  <Link href={`/rooms#${room.id}`}>
                    Zobacz Szczegóły
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-terracotta hover:bg-forest-green text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link href="/rooms">
              Zobacz Wszystkie Pokoje
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </AnimatedSection>
  )
}
