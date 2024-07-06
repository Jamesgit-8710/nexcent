'use client'

import React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from 'embla-carousel-autoplay'
import Hero from "@/components/Hero"
import Clients from "@/components/Clients"
import Community from "@/components/Community"
import Calender from "@/components/Calender"
import Customers from "@/components/Customers"
import Updates from "@/components/Updates"
import GetDemo from "@/components/GetDemo"
import Footer from "@/components/Footer"
import Unlock from "@/components/Unlock"
import Achievements from "@/components/Achievements"

const HomePage = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  return (
    <div>
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
      // onMouseEnter={plugin.current.stop}
      // onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1 bg-dark-gray h-[600px]">
                <div>
                  {index + 1}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      {/* <Hero /> */}
      <Clients />
      <Community />
      <Unlock />
      <Achievements />
      <Calender />
      <Customers />
      <Updates />
      <GetDemo />
      <Footer />
    </div>
  )
}

export default HomePage
