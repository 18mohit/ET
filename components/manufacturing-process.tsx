import Image from 'next/image'
import { Settings, Droplet, Wind, CheckCircle } from 'lucide-react'


export default function ManufacturingProcess() {
  return (
    <section className="w-full py-32 px-6 sm:px-8 lg:px-12 bg-secondary">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-serif text-white font-bold text-foreground mb-8 tracking-tight underline">
              Heart of India's Textile Industry
            </h2>
            <p className="text-lg text-foreground/70 text-white font-light leading-relaxed tracking-wide mb-8">
              Based in Surat, the textile capital of India, ELEVEN TEN is part of a rich legacy of craftsmanship and innovation. Surat's strategic location, skilled workforce, and advanced infrastructure make it the ideal base for manufacturing world-class threads. Our roots in this vibrant textile hub give us access to the finest raw materials and the most experienced professionals in the industry.
            </p>
            <p className="text-lg text-foreground/70 text-white font-light leading-relaxed tracking-wide">
              Being in Surat means we're not just manufacturing threads—we're contributing to a global textile ecosystem while maintaining the highest standards of quality and sustainability.
            </p>
          </div>
        </section>
  )
}
