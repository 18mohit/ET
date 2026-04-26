'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import TypingText from './typing-text'
import { AnimatedHeading, AnimatedParagraph } from './animated-text'
import { useState } from 'react'

export default function B2BHero() {
  const [showButtons, setShowButtons] = useState(false)

  return (
    <section className="w-full relative min-h-screen sm:h-screen flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/thread-texture.jpg"
        alt="Premium threads"
        fill
        className="absolute inset-0 w-full h-full object-cover"
        priority
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full py-20 sm:py-0">
        <div className="max-w-2xl">
          <AnimatedHeading delay={0} duration="normal" threshold={0.1}>
            <TypingText
              text="Premium Thread Manufacturing Since 2025"
              speed={40}
              className="text-accent font-light text-xs sm:text-sm tracking-widest uppercase mb-4 sm:mb-6 block"
            />
          </AnimatedHeading>
          <AnimatedHeading delay={100} duration="normal" threshold={0.1}>
            <TypingText
              text="Never Behind the Trendz"
              speed={35}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-8 tracking-tight leading-tight block"
              onComplete={() => setTimeout(() => setShowButtons(true), 500)}
            />
          </AnimatedHeading>
          <AnimatedParagraph delay={200} duration="normal" threshold={0.1}>
            <p className="text-base sm:text-lg text-white/85 font-light leading-relaxed mb-8 sm:mb-12 max-w-xl">
              Delivering high-quality stitching threads, non-woven interlining fabrics, imported fabrics, and woven elastic tapes for garment and textile industries worldwide.
            </p>
          </AnimatedParagraph>
          
          {/* CTAs */}
          <div className={`flex flex-col gap-3 sm:flex-row sm:gap-4 transition-all duration-500 ${
            showButtons ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <Link
              href="/shop"
              className="inline-flex items-center justify-center sm:justify-start gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-accent text-white font-light tracking-widest uppercase text-xs sm:text-sm hover:bg-accent/90 transition-all duration-300 touch-target"
            >
              Explore Products
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center sm:justify-start gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-primary font-light tracking-widest uppercase text-xs sm:text-sm hover:bg-white/90 transition-all duration-300 touch-target"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
