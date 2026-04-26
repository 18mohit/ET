'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const products = [
  {
    id: 1,
    name: 'Multicolor Thread (300 m Pack of100)',
    description: 'Timeless wool coat with perfect draping',
    image: '/products/100x4.jpg',
  },
  {
    id: 2,
    name: 'Silk Blouse',
    description: 'Luxurious silk with flowing elegance',
    image: '/products/silk-blouse.jpg',
  },
  {
    id: 3,
    name: 'Tailored Trousers',
    description: 'Precision tailored for impeccable fit',
    image: '/products/tailored-trousers.jpg',
  },
  {
    id: 4,
    name: 'Cashmere Sweater',
    description: 'Pure cashmere comfort and luxury',
    image: '/products/cashmere-sweater.jpg',
  },
]

export default function FeaturedProducts() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className="w-full py-32 px-6 sm:px-8 lg:px-12 bg-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-6 tracking-tight">
            Featured Products
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto font-light tracking-wide">
            Discover our most sought-after pieces, carefully selected for their timeless appeal and exceptional quality
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/shop/${product.id}`}
              className="group flex flex-col"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Product Image */}
              <div className="relative h-80 overflow-hidden bg-gray-200 mb-8">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredId === product.id ? 'scale-110' : 'scale-100'
                  }`}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/15 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>

              {/* Product Info */}
              <h3 className="text-base font-light text-foreground mb-3 group-hover:text-muted-foreground transition-colors duration-500 tracking-wide">
                {product.name}
              </h3>
              <p className="text-foreground/60 text-sm font-light tracking-wide">
                {product.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
