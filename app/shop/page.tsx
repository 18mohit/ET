'use client'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Link from 'next/link'
import Image from 'next/image'



const products = [
  {
    id: 1,
    name: 'Multicolor Thread (300 m Pack of100)',
    description: '100 x 1',
    image: '/products/100x4.jpeg',
  },
  {
    id: 2,
    name: 'Navy Thread (500 m Pack of10)',
    description: 'ET-02',
    image: '/products/ET-02.jpeg',
  },
  {
    id: 3,
    name: 'Rani Thread (500 m Pack of10)',
    description: 'ET-13',
    image: '/products/ET-13.jpeg',
  },
  {
    id: 4,
    name: 'Premium Garment Thread',
    description: 'Versatile garment thread combining durability with smooth finishing for apparel production and seaming applications',
    image: '/products/cashmere-sweater.jpg',
  },
  {
    id: 5,
    name: 'Professional Polyester Spools',
    description: 'Multi-color polyester thread spools perfect for bulk manufacturing and large-scale textile operations',
    image: '/products/polyester-thread.jpg',
  },
  {
    id: 6,
    name: 'Nylon Industrial Thread',
    description: 'Durable nylon thread designed for high-stress applications requiring superior strength and abrasion resistance',
    image: '/products/nylon-thread.jpg',
  },
  {
    id: 7,
    name: 'Cotton Natural Fiber Thread',
    description: 'Premium natural cotton thread ideal for eco-conscious manufacturers seeking sustainable textile solutions',
    image: '/products/cotton-thread.jpg',
  },
  {
    id: 8,
    name: 'Specialty Technical Thread',
    description: 'High-performance specialty thread for advanced technical applications requiring precision and reliability',
    image: '/products/specialty-thread.jpg',
  },
]

export default function ShopPage() {

  return (
    <main className="w-full">
      <Navbar />

      {/* Shop Header */}
      <section className="w-full py-20 px-6 sm:px-8 lg:px-12 bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-background mb-6 tracking-tight">
            Premium Thread Collection
          </h1>
          <p className="text-background/80 text-base md:text-lg max-w-3xl font-light tracking-wide">
            Explore our full range of high-quality threads for textile manufacturing, garment production, embroidery, and industrial stitching applications
          </p>
        </div>
      </section>

      {/* Shop Content */}
      <div className="w-full py-16 px-6 sm:px-8 lg:px-12 bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Products Grid */}
          <div className="text-sm font-light text-foreground/60 mb-10 tracking-wide">
            Showing {products.length} premium thread products
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
                  <Link
  key={product.id}
  href={`/shop/${product.id}`}
  className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-border/40"
>
  {/* Product Image */}
  <div className="relative h-96 overflow-hidden bg-secondary">
    <Image
      src={product.image}
      alt={product.name}
      fill
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
    />
    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-700"></div>
  </div>

  {/* Product Info */}
  <div className="p-6 flex flex-col flex-grow">
    <h3 className="text-lg font-medium text-foreground mb-3 group-hover:text-orange-500 transition-colors duration-500 tracking-wide">
      {product.name}
    </h3>

    <p className="text-sm font-light text-foreground/60 tracking-wide mb-6 flex-grow">
      {product.description}
    </p>

    {/* Inquiry Button */}
    <a
      href={`https://wa.me/919876543210?text=${encodeURIComponent(
        `Hello, I’m interested in ${product.name}. Please share more details.`
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      className="
        inline-flex items-center justify-center
        w-full py-3 px-5
        rounded-full
        bg-gradient-to-r from-green-500 to-emerald-600
        text-white text-sm font-semibold tracking-wide
        shadow-lg hover:shadow-xl
        hover:scale-105
        transition-all duration-300
      "
    >
      Inquiry Now
    </a>
  </div>
</Link>
                ))}
            </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
