import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width="1200" height="800" xmlns="http://www.w3.org/2000/svg"%3E%3Crect fill="%23333" width="1200" height="800"/%3E%3C/svg%3E")',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6 sm:px-8">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 tracking-tight leading-tight">
          Style That Defines You
        </h1>
        <p className="text-base md:text-lg text-white/70 mb-16 max-w-3xl font-light leading-relaxed tracking-wide">
          Discover our curated collection of premium pieces designed for the discerning individual
        </p>
        <Link
          href="/shop"
          className="px-16 py-4 bg-white text-black font-light text-sm tracking-widest hover:bg-secondary transition-all duration-500 uppercase"
        >
          Shop Collection
        </Link>
      </div>
    </section>
  )
}
