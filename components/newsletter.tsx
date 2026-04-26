'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Newsletter() {
  return (
    <section className="w-full py-40 px-6 sm:px-8 lg:px-12 bg-secondary">
      <div className="max-w-3xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-background mb-8 tracking-tight">
          Join Our Circle
        </h2>
        <p className="text-background/80 text-base md:text-lg mb-16 font-light leading-relaxed tracking-wide">
          Connect with our community of textile manufacturers, designers, and businesses. Stay updated on new products, industry insights, and exclusive offers.Eleven Ten Trendz
        </p>

        {/* CTA Button */}
        <Link
          href="https://wa.me/917096669511?text=Hello%20Eleven%20Ten%2C%20I%20want%20more%20details"
          target="_blank"
          className="inline-flex px-16 py-5 bg-background text-foreground font-light hover:bg-secondary transition-all duration-500 items-center gap-3 text-xs tracking-widest uppercase"
        >
          Join Community
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}
