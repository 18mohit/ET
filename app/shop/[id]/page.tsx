'use client'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Send } from 'lucide-react'
import { useState } from 'react'

const products: Record<
  string,
  {
    id: number
    name: string
    category: string
    description: string
    longDescription: string
    image: string
    details: string[]
    materials: string[]
    care: string[]
  }
> = {
  '1': {
    id: 1,
    name: 'Premium Wool Coat',
    category: 'Outerwear',
    description: 'Timeless wool coat with perfect draping',
    longDescription:
      'Our signature wool coat is crafted from the finest Italian wool, featuring a sophisticated silhouette that drapes beautifully. This timeless piece is designed to become a wardrobe staple, perfect for layering through the seasons.',
    image: '/products/premium-wool-coat.jpg',
    details: ['Made in Italy', 'Dry clean only', 'One size fits all with adjustable fit'],
    materials: ['100% Italian Wool', 'Silk lining'],
    care: ['Dry clean only', 'Store on padded hanger', 'Protect from moths'],
  },
  '2': {
    id: 2,
    name: 'Silk Blouse',
    category: 'Tops',
    description: 'Luxurious silk with flowing elegance',
    longDescription:
      'An effortlessly elegant silk blouse that pairs with everything. Cut from premium French silk, this piece features a relaxed fit with subtle details that speak to refined taste.',
    image: '/products/silk-blouse.jpg',
    details: ['Made in France', 'Hand wash or dry clean', 'Fluid silk blend'],
    materials: ['100% Mulberry Silk', 'Mother of pearl buttons'],
    care: ['Hand wash in cool water', 'Lay flat to dry', 'Low iron if needed'],
  },
  '3': {
    id: 3,
    name: 'Tailored Trousers',
    category: 'Bottoms',
    description: 'Precision tailored for impeccable fit',
    longDescription:
      'Impeccably tailored trousers that balance structure with comfort. Crafted from a premium wool blend, these trousers feature a high waist and precise tailoring for a flattering silhouette.',
    image: '/products/tailored-trousers.jpg',
    details: ['Made to measure available', 'Tailored fit', 'Premium wool blend'],
    materials: ['97% Virgin Wool', '3% Elastane'],
    care: ['Dry clean only', 'Steam gently', 'Fold on hanger'],
  },
  '4': {
    id: 4,
    name: 'Cashmere Sweater',
    category: 'Knitwear',
    description: 'Pure cashmere comfort and luxury',
    longDescription:
      'Indulge in the ultimate comfort of pure cashmere. This sweater is knitted from the finest Mongolian cashmere, offering unparalleled softness and warmth. A timeless investment piece.',
    image: '/products/cashmere-sweater.jpg',
    details: ['Pure cashmere', 'Hand knitted', 'Ethically sourced'],
    materials: ['100% Pure Cashmere'],
    care: ['Hand wash in cool water', 'Lay flat to dry', 'Use cashmere comb for pilling'],
  },
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products[params.id]
  const [showDetails, setShowDetails] = useState(false)

  if (!product) {
    return (
      <main className="w-full">
        <Navbar />
        <section className="w-full py-20 px-6 sm:px-8 lg:px-12 bg-background">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl font-serif font-bold text-foreground mb-4">Product Not Found</h1>
            <Link href="/shop" className="text-foreground/60 hover:text-foreground transition-colors">
              Return to Shop
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  const whatsappMessage = `Hi! I'm interested in the ${product.name}. Could you provide more information?`
  const whatsappLink = `https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <main className="w-full">
      <Navbar />

      {/* Product Section */}
      <section className="w-full py-12 px-6 sm:px-8 lg:px-12 bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Back Link */}
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors duration-300 mb-12 text-sm font-light tracking-wide"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Shop
          </Link>

          {/* Product Layout */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Product Image */}
            <div className="flex flex-col gap-8">
              <div className="relative h-96 sm:h-[600px] overflow-hidden bg-secondary">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="w-full h-full object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              {/* Header */}
              <div className="mb-12 pb-12 border-b border-border">
                <p className="text-xs font-light tracking-widest uppercase text-foreground/60 mb-4">
                  {product.category}
                </p>
                <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-8 tracking-tight">
                  {product.name}
                </h1>
                <p className="text-lg font-light text-foreground/80 tracking-wide leading-relaxed">
                  {product.longDescription}
                </p>
              </div>

              {/* WhatsApp CTA */}
              <div className="mb-12 pb-12 border-b border-border">
                <p className="text-sm font-light text-foreground/60 mb-6 tracking-wide">
                  Interested in this piece? Reach out to us on WhatsApp for details, sizing, and ordering.
                </p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-12 py-5 bg-foreground text-background font-light text-sm tracking-widest uppercase hover:bg-foreground/90 transition-all duration-500 group"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-500" />
                  Chat on WhatsApp
                </a>
              </div>

              {/* Product Details */}
              <div className="space-y-8">
                {/* Materials */}
                <div>
                  <h3 className="text-xs font-light tracking-widest uppercase text-foreground/80 mb-4">
                    Materials
                  </h3>
                  <ul className="space-y-2">
                    {product.materials.map((material, idx) => (
                      <li key={idx} className="text-sm font-light text-foreground/70 tracking-wide">
                        • {material}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Features */}
                <div>
                  <h3 className="text-xs font-light tracking-widest uppercase text-foreground/80 mb-4">
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {product.details.map((detail, idx) => (
                      <li key={idx} className="text-sm font-light text-foreground/70 tracking-wide">
                        • {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Care Instructions */}
                <div>
                  <button
                    onClick={() => setShowDetails(!showDetails)}
                    className="flex items-center gap-2 text-xs font-light tracking-widest uppercase text-foreground/80 hover:text-foreground transition-colors duration-300 mb-4"
                  >
                    Care Instructions
                    <span className={`transition-transform duration-300 ${showDetails ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>
                  {showDetails && (
                    <ul className="space-y-2 pl-0">
                      {product.care.map((instruction, idx) => (
                        <li key={idx} className="text-sm font-light text-foreground/70 tracking-wide">
                          • {instruction}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-16 pt-12 border-t border-border">
                <p className="text-xs font-light text-foreground/50 tracking-widest uppercase">
                  Each piece is crafted with meticulous attention to detail and delivered with care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      <section className="w-full py-32 px-6 sm:px-8 lg:px-12 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-16 tracking-tight">
            Explore More
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {Object.entries(products)
              .filter(([_, p]) => p.id !== product.id)
              .slice(0, 4)
              .map(([id, relatedProduct]) => (
                <Link key={id} href={`/shop/${id}`} className="group flex flex-col">
                  <div className="relative h-80 overflow-hidden bg-secondary mb-8">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      fill
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-700"></div>
                  </div>
                  <h3 className="text-base font-light text-foreground group-hover:text-muted-foreground transition-colors duration-500 tracking-wide">
                    {relatedProduct.name}
                  </h3>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
