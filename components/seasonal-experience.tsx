"use client"

import { useState } from "react"
import Image from "next/image"
import { Snowflake, Sun, Cloud, Leaf } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AnimatedSection from "@/components/animated-section"

export default function SeasonalExperience() {
  const [activeTab, setActiveTab] = useState("summer")

  return (
    <AnimatedSection className="py-16 md:py-24">
      <div className="container">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-primary mb-12 text-center">
          Experience Every Season
        </h2>

        <Tabs defaultValue="summer" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
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

          <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden">
            <TabsContent value="spring" className="absolute inset-0 m-0">
              <div className="relative h-full">
                <Image
                  src="/placeholder.svg?height=800&width=1600"
                  alt="Spring in Bieszczady"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-end">
                  <div className="p-6 md:p-10 text-white max-w-2xl">
                    <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-2">Spring Awakening</h3>
                    <p className="text-white/90">
                      Experience the rebirth of nature as meadows bloom with wildflowers and forests come alive with
                      vibrant greens. Spring in Bieszczady offers mild temperatures, perfect for hiking and wildlife
                      watching.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="summer" className="absolute inset-0 m-0">
              <div className="relative h-full">
                <Image
                  src="/placeholder.svg?height=800&width=1600"
                  alt="Summer in Bieszczady"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-end">
                  <div className="p-6 md:p-10 text-white max-w-2xl">
                    <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-2">Summer Adventures</h3>
                    <p className="text-white/90">
                      Long, sunny days are perfect for exploring the extensive network of hiking trails, swimming in
                      crystal-clear lakes, and enjoying outdoor activities. Summer evenings bring starry skies and the
                      magic of mountain sunsets.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="autumn" className="absolute inset-0 m-0">
              <div className="relative h-full">
                <Image
                  src="/placeholder.svg?height=800&width=1600"
                  alt="Autumn in Bieszczady"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-end">
                  <div className="p-6 md:p-10 text-white max-w-2xl">
                    <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-2">Autumn Colors</h3>
                    <p className="text-white/90">
                      Witness the spectacular transformation as forests turn into a tapestry of red, orange, and gold.
                      Autumn brings crisp air, misty mornings, and the perfect conditions for mushroom foraging and
                      wildlife watching.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="winter" className="absolute inset-0 m-0">
              <div className="relative h-full">
                <Image
                  src="/placeholder.svg?height=800&width=1600"
                  alt="Winter in Bieszczady"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-end">
                  <div className="p-6 md:p-10 text-white max-w-2xl">
                    <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-2">Winter Wonderland</h3>
                    <p className="text-white/90">
                      Snow-covered landscapes transform Bieszczady into a magical winter wonderland. Enjoy cross-country
                      skiing, snowshoeing, or simply cozy up by the fireplace with a book and hot chocolate after a day
                      in the snow.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </AnimatedSection>
  )
}
