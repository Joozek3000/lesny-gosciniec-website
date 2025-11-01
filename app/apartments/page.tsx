import Image from "next/image"
import Link from "next/link"
import { Check, Users, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import AnimatedSection from "@/components/animated-section"
import ApartmentGallery from "@/components/apartment-gallery"

export default function ApartmentsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="Apartments at Leśny Gościniec"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">Our Apartments</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto px-4">
              Comfortable, stylish accommodations with authentic mountain character
            </p>
          </div>
        </div>
      </div>

      {/* Forest View Apartment */}
      <AnimatedSection className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-primary mb-6">Forest View Apartment</h2>
              <p className="text-muted-foreground mb-6">
                Our most popular accommodation, the Forest View Apartment offers a perfect blend of rustic charm and
                modern comfort. With two spacious bedrooms, a fully equipped kitchen, and a private balcony overlooking
                the forest, it is ideal for families or small groups.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  <span>2 bedrooms (1 queen, 2 singles)</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  <span>Fully equipped kitchen with dining area</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  <span>Private balcony with forest views</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  <span>Modern bathroom with rainfall shower</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  <span>Living area with signature forest mural wall</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-primary mr-2" />
                  <span>Accommodates 2-4 guests</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                  <Link href="/booking?apartment=forest-view">Check Availability</Link>
                </Button>
                <Button variant="outline">View Gallery</Button>
              </div>
            </div>

            <ApartmentGallery
              images={[
                "/placeholder.svg?height=600&width=800",
                "/placeholder.svg?height=600&width=800",
                "/placeholder.svg?height=600&width=800",
                "/placeholder.svg?height=600&width=800",
              ]}
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Mountain Vista Suite */}
      <AnimatedSection className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ApartmentGallery
              images={[
                "/placeholder.svg?height=600&width=800",
                "/placeholder.svg?height=600&width=800",
                "/placeholder.svg?height=600&width=800",
                "/placeholder.svg?height=600&width=800",
              ]}
              className="order-2 lg:order-1"
            />

            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-primary mb-6">Mountain Vista Suite</h2>
              <p className="text-muted-foreground mb-6">
                Our most spacious accommodation, the Mountain Vista Suite offers panoramic views of the Bieszczady
                Mountains. With three bedrooms, a large living area with a fireplace, and a fully equipped kitchen, it is
                perfect for larger families or groups.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  <span>3 bedrooms (1 king, 1 queen, 2 singles)</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  <span>Spacious living area with fireplace</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  <span>Fully equipped kitchen with dining area</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  <span>Two modern bathrooms</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  <span>Large balcony with mountain views</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-primary mr-2" />
                  <span>Accommodates 4-6 guests</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                  <Link href="/booking?apartment=mountain-vista">Check Availability</Link>
                </Button>
                <Button variant="outline">View Gallery</Button>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Cozy Studio */}
      <AnimatedSection className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-primary mb-6">Cozy Studio</h2>
              <p className="text-muted-foreground mb-6">
                Perfect for couples or solo travelers, our Cozy Studio offers a comfortable and intimate space with all
                the amenities you need. Featuring a queen bed, kitchenette, and a small private terrace, it is ideal for
                a romantic getaway.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  <span>Open-plan studio with queen bed</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  <span>Kitchenette with essential appliances</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  <span>Modern bathroom with shower</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  <span>Small private terrace</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  <span>Cozy seating area</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-primary mr-2" />
                  <span>Accommodates 1-2 guests</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                  <Link href="/booking?apartment=cozy-studio">Check Availability</Link>
                </Button>
                <Button variant="outline">View Gallery</Button>
              </div>
            </div>

            <ApartmentGallery
              images={[
                "/placeholder.svg?height=600&width=800",
                "/placeholder.svg?height=600&width=800",
                "/placeholder.svg?height=600&width=800",
                "/placeholder.svg?height=600&width=800",
              ]}
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Comparison Table */}
      <AnimatedSection className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-primary mb-12 text-center">
            Apartment Comparison
          </h2>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">Features</TableHead>
                  <TableHead>Cozy Studio</TableHead>
                  <TableHead>Forest View Apartment</TableHead>
                  <TableHead>Mountain Vista Suite</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Size</TableCell>
                  <TableCell>40 m²</TableCell>
                  <TableCell>65 m²</TableCell>
                  <TableCell>85 m²</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Capacity</TableCell>
                  <TableCell>1-2 guests</TableCell>
                  <TableCell>2-4 guests</TableCell>
                  <TableCell>4-6 guests</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Bedrooms</TableCell>
                  <TableCell>Studio (1 queen)</TableCell>
                  <TableCell>2 (1 queen, 2 singles)</TableCell>
                  <TableCell>3 (1 king, 1 queen, 2 singles)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Bathrooms</TableCell>
                  <TableCell>1</TableCell>
                  <TableCell>1</TableCell>
                  <TableCell>2</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Kitchen</TableCell>
                  <TableCell>Kitchenette</TableCell>
                  <TableCell>Full Kitchen</TableCell>
                  <TableCell>Full Kitchen</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Outdoor Space</TableCell>
                  <TableCell>Small Terrace</TableCell>
                  <TableCell>Private Balcony</TableCell>
                  <TableCell>Large Balcony</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">View</TableCell>
                  <TableCell>Garden</TableCell>
                  <TableCell>Forest</TableCell>
                  <TableCell>Mountains</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Price (Low Season)</TableCell>
                  <TableCell>350 PLN/night</TableCell>
                  <TableCell>550 PLN/night</TableCell>
                  <TableCell>750 PLN/night</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Price (High Season)</TableCell>
                  <TableCell>450 PLN/night</TableCell>
                  <TableCell>650 PLN/night</TableCell>
                  <TableCell>950 PLN/night</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection className="py-16 md:py-24 bg-primary text-white">
        <div className="container text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">Ready to Experience Leśny Gościniec?</h2>
          <p className="text-primary-foreground max-w-2xl mx-auto mb-8 text-lg">
            Book your stay now and immerse yourself in the beauty and tranquility of the Bieszczady Mountains.
          </p>
          <Button asChild variant="secondary" size="lg" className="animate-pulse-subtle">
            <Link href="/booking">
              Check Availability
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </AnimatedSection>
    </main>
  )
}
