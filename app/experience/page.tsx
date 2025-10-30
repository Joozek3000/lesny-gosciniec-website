import Image from "next/image"
import Link from "next/link"
import { MapPin, Calendar, Compass, Snowflake, Sun, Cloud, Leaf } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AnimatedSection from "@/components/animated-section"
import LocationMap from "@/components/location-map"

export default function ExperiencePage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="Bieszczady Mountains Experience"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">Experience & Location</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto px-4">
              Discover the magic of Bieszczady Mountains in every season
            </p>
          </div>
        </div>
      </div>

      {/* Location Section */}
      <AnimatedSection className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-primary mb-6">Our Location</h2>
              <p className="text-muted-foreground mb-6">
                Leśny Gościniec is nestled in the heart of the Bieszczady Mountains in southeastern Poland, just a short
                walk from the charming village of Cisna. Our location offers the perfect balance of seclusion and
                accessibility, allowing you to immerse yourself in nature while still being close to local amenities.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Address:</span>
                    <p className="text-muted-foreground">ul. Leśna 42, 38-607 Cisna, Poland</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Compass className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Nearby:</span>
                    <p className="text-muted-foreground">
                      500m to Cisna village center
                      <br />
                      2km to Solińskie Lake
                      <br />
                      5km to Wetlina hiking trails
                      <br />
                      15km to Połonina Wetlińska
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Calendar className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Getting Here:</span>
                    <p className="text-muted-foreground">
                      2.5 hours from Rzeszów Airport
                      <br />3 hours from Krakow
                      <br />
                      Regular bus service to Cisna from major cities
                    </p>
                  </div>
                </div>
              </div>

              <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                <Link href="https://maps.google.com" target="_blank">
                  Get Directions
                </Link>
              </Button>
            </div>

            <LocationMap />
          </div>
        </div>
      </AnimatedSection>

      {/* Seasonal Activities */}
      <AnimatedSection className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-primary mb-12 text-center">
            Seasonal Activities
          </h2>

          <Tabs defaultValue="summer" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="spring" className="data-[state=active]:bg-green-100 data-[state=active]:text-primary">
                <Leaf className="h-4 w-4 mr-2" />
                Spring
              </TabsTrigger>
              <TabsTrigger value="summer" className="data-[state=active]:bg-green-100 data-[state=active]:text-primary">
                <Sun className="h-4 w-4 mr-2" />
                Summer
              </TabsTrigger>
              <TabsTrigger value="autumn" className="data-[state=active]:bg-green-100 data-[state=active]:text-primary">
                <Cloud className="h-4 w-4 mr-2" />
                Autumn
              </TabsTrigger>
              <TabsTrigger value="winter" className="data-[state=active]:bg-green-100 data-[state=active]:text-primary">
                <Snowflake className="h-4 w-4 mr-2" />
                Winter
              </TabsTrigger>
            </TabsList>

            <TabsContent value="spring" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-background rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Spring Hiking"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-medium text-lg mb-2">Spring Hiking</h3>
                    <p className="text-muted-foreground">
                      Explore blooming meadows and forests as nature awakens from winter. The trails are less crowded
                      and the views are spectacular.
                    </p>
                  </div>
                </div>

                <div className="bg-background rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Birdwatching"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-medium text-lg mb-2">Birdwatching</h3>
                    <p className="text-muted-foreground">
                      Spring is the perfect time for birdwatching in Bieszczady, with many migratory species returning
                      to the area.
                    </p>
                  </div>
                </div>

                <div className="bg-background rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Wildflower Photography"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-medium text-lg mb-2">Wildflower Photography</h3>
                    <p className="text-muted-foreground">
                      Capture the beauty of spring wildflowers that carpet the meadows and forests of Bieszczady.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="summer" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-background rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Mountain Hiking"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-medium text-lg mb-2">Mountain Hiking</h3>
                    <p className="text-muted-foreground">
                      Explore the extensive network of hiking trails that offer breathtaking panoramic views of the
                      Bieszczady Mountains.
                    </p>
                  </div>
                </div>

                <div className="bg-background rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Lake Swimming"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-medium text-lg mb-2">Lake Swimming</h3>
                    <p className="text-muted-foreground">
                      Cool off in the crystal-clear waters of Solińskie Lake, just a short drive from our property.
                    </p>
                  </div>
                </div>

                <div className="bg-background rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Mountain Biking"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-medium text-lg mb-2">Mountain Biking</h3>
                    <p className="text-muted-foreground">
                      Ride the numerous mountain biking trails that wind through forests and meadows, suitable for all
                      skill levels.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="autumn" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-background rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Fall Foliage"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-medium text-lg mb-2">Fall Foliage</h3>
                    <p className="text-muted-foreground">
                      Witness the spectacular autumn colors as the forests transform into a tapestry of red, orange, and
                      gold.
                    </p>
                  </div>
                </div>

                <div className="bg-background rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Mushroom Foraging"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-medium text-lg mb-2">Mushroom Foraging</h3>
                    <p className="text-muted-foreground">
                      Join guided mushroom foraging excursions in the forests around Cisna, a beloved Polish autumn
                      tradition.
                    </p>
                  </div>
                </div>

                <div className="bg-background rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Wildlife Watching"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-medium text-lg mb-2">Wildlife Watching</h3>
                    <p className="text-muted-foreground">
                      Autumn is the perfect time to spot wildlife as animals prepare for winter. Look for deer, wild
                      boar, and if you're lucky, bison.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="winter" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-background rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Cross-Country Skiing"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-medium text-lg mb-2">Cross-Country Skiing</h3>
                    <p className="text-muted-foreground">
                      Explore the winter wonderland on cross-country skis, with trails suitable for beginners and
                      experienced skiers alike.
                    </p>
                  </div>
                </div>

                <div className="bg-background rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Snowshoeing"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-medium text-lg mb-2">Snowshoeing</h3>
                    <p className="text-muted-foreground">
                      Discover the silent beauty of snow-covered forests and meadows on snowshoes, a perfect activity
                      for all ages.
                    </p>
                  </div>
                </div>

                <div className="bg-background rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
                  <div className="relative h-48">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Cozy Evenings"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-medium text-lg mb-2">Cozy Evenings</h3>
                    <p className="text-muted-foreground">
                      After a day in the snow, enjoy warm evenings by the fireplace with a book or board games, or visit
                      local restaurants for traditional winter dishes.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </AnimatedSection>

      {/* Weather Widget */}
      <AnimatedSection className="py-16 md:py-24">
        <div className="container">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-primary mb-12 text-center">
            Local Weather
          </h2>

          <div className="max-w-3xl mx-auto bg-background rounded-xl shadow-sm overflow-hidden">
            <div className="p-8">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center mb-6 md:mb-0">
                  <div className="mr-6">
                    <Sun className="h-16 w-16 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium">Cisna, Poland</h3>
                    <p className="text-muted-foreground">Current conditions</p>
                  </div>
                </div>
                <div className="text-center md:text-right">
                  <div className="text-4xl font-bold">18°C</div>
                  <p className="text-muted-foreground">Partly Cloudy</p>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">Today</p>
                  <Sun className="h-8 w-8 mx-auto my-2 text-yellow-500" />
                  <p className="font-medium">18° / 8°</p>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">Tomorrow</p>
                  <Cloud className="h-8 w-8 mx-auto my-2 text-gray-400" />
                  <p className="font-medium">16° / 7°</p>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">Wednesday</p>
                  <Cloud className="h-8 w-8 mx-auto my-2 text-gray-400" />
                  <p className="font-medium">15° / 6°</p>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">Thursday</p>
                  <Sun className="h-8 w-8 mx-auto my-2 text-yellow-500" />
                  <p className="font-medium">17° / 8°</p>
                </div>
              </div>

              <div className="mt-6 text-center text-sm text-muted-foreground">
                <p>Weather data is updated daily. Last updated: March 28, 2025</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection className="py-16 md:py-24 bg-primary text-white">
        <div className="container text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
            Ready to Experience the Beauty of Bieszczady?
          </h2>
          <p className="text-primary-foreground max-w-2xl mx-auto mb-8 text-lg">
            Book your stay at Leśny Gościniec and create unforgettable memories in this magical mountain setting.
          </p>
          <Button asChild variant="secondary" size="lg" className="animate-pulse-subtle">
            <Link href="/booking">Check Availability</Link>
          </Button>
        </div>
      </AnimatedSection>
    </main>
  )
}
