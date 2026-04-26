import { Shirt, Sparkles, Layers, Zap, Home, Shield, } from 'lucide-react'

const industries = [
  {
    icon: Shirt,
    title: 'Garment Manufacturing',
    description: 'Essential materials for apparel production including stitching threads, interlining fabrics, and elastic tapes.',
    applications: ['Shirts', 'Trousers', 'Dresses', 'Fashion apparel'],
  },
  {
    icon: Sparkles,
    title: 'Fashion & Apparel',
    description: 'Premium fabrics and components used by fashion brands and garment designers.',
    applications: ['Designer wear', 'Uniforms', 'Fashion collections', 'Custom apparel'],
  },
  {
    icon: Layers,
    title: 'Textile Industry',
    description: 'Reliable supply of imported fabrics and interlining materials for textile manufacturers.',
    applications: ['Kurtis', 'Saree blouses'],
  },
]

export default function IndustriesWeServe() {
  return (
    <section className="w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 sm:mb-8 tracking-tight">
            Industries We Serve
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-foreground/70 font-light max-w-2xl mx-auto px-2">
            Our threads are trusted by manufacturers across diverse industries from textiles to automotive.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <div key={index} className="group p-4 sm:p-6 lg:p-8 border border-border hover:border-accent bg-white hover:bg-muted transition-all duration-300">
                <div className="mb-4 sm:mb-6">
                  <Icon className="w-10 sm:w-12 h-10 sm:h-12 text-accent group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary mb-2 sm:mb-3">{industry.title}</h3>
                <p className="text-foreground/70 font-light mb-4 sm:mb-6 text-xs sm:text-sm leading-relaxed">
                  {industry.description}
                </p>
                
                {/* Applications */}
                <div className="border-t border-border pt-4 sm:pt-6">
                  <p className="text-xs font-light tracking-widest text-muted-foreground uppercase mb-3 sm:mb-4">
                    Applications
                  </p>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {industry.applications.map((app) => (
                      <li key={app} className="text-xs sm:text-sm text-foreground/60 font-light">
                        • {app}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
