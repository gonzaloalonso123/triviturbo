"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { heroDesigns } from "@/lib/hero-designs"

export default function HeroGrid() {
  const router = useRouter()

  const handleDesignClick = (index: number) => {
    router.push(`/hero-designs/${index + 1}`)
  }

  return (
    <div className="grid grid-cols-4 sm:grid-cols-5 gap-1 h-full w-full">
      {heroDesigns.map((design, index) => (
        <div
          key={index}
          className="relative w-full h-full overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 hover:z-10"
          onClick={() => handleDesignClick(index)}
        >
          <Image
            src={`/abstract-geometric-shapes.png?height=400&width=600&query=${design.query}`}
            alt={`Hero design ${index + 1} - ${design.style} style`}
            fill
            className="object-cover"
            priority={index < 10}
          />
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
        </div>
      ))}
    </div>
  )
}
