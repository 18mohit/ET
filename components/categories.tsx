'use client'

import Link from 'next/link'

const categories = [
  {
    name: 'Men',
    description: 'Premium menswear collection',
    image: 'bg-slate-200',
  },
  {
    name: 'Women',
    description: 'Elegant womenswear pieces',
    image: 'bg-slate-300',
  },
  {
    name: 'New Arrivals',
    description: 'Fresh styles this season',
    image: 'bg-slate-400',
  },
]

export default function Categories() {
  return (
    <section className="w-full py-32 px-6 sm:px-8 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-6 tracking-tight">
            Shop by Category
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto font-light tracking-wide">
            Explore our carefully curated collections
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link key={category.name} href={`/category/${category.name.toLowerCase()}`}>
              <div className="group relative h-96 overflow-hidden bg-secondary cursor-pointer">
                {/* Image Placeholder */}
                <div className={`absolute inset-0 ${category.image} group-hover:scale-105 transition-transform duration-700`}></div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-700"></div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-3 tracking-tight">
                    {category.name}
                  </h3>
                  <p className="text-white/70 text-xs md:text-sm font-light tracking-widest uppercase">
                    {category.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
