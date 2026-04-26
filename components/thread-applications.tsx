import { Shirt, Sparkles, Layers, Zap, Heart, Hammer } from 'lucide-react'

const applications = [
  {
    id: 1,
    title: 'Garment Manufacturing',
    description: 'Premium threads for clothing, apparel, and fashion production with consistent strength and durability.',
    icon: Shirt,
    features: ['High tensile strength', 'Color consistency', 'Smooth sewing'],
  },
  {
    id: 2,
    title: 'Embroidery & Decorative',
    description: 'Specialized threads designed for intricate embroidery work with vibrant colors and fine finishing.',
    icon: Sparkles,
    features: ['Rich color palette', 'Fine texture', 'Premium finish'],
  },
  {
    id: 3,
    title: 'Textile Production',
    description: 'Industrial-grade threads for weaving and textile manufacturing with precision and uniformity.',
    icon: Layers,
    features: ['Uniform diameter', 'High performance', 'Consistent quality'],
  },
  {
    id: 4,
    title: 'Industrial Stitching',
    description: 'Heavy-duty threads for industrial applications requiring maximum durability and reliability.',
    icon: Hammer,
    features: ['Maximum durability', 'Heavy load capable', 'Extended lifespan'],
  },
  {
    id: 5,
    title: 'Home Textiles',
    description: 'Soft and comfortable threads for bedding, upholstery, and home furnishing applications.',
    icon: Heart,
    features: ['Comfort focused', 'Color fast', 'Washable'],
  },
  {
    id: 6,
    title: 'Technical & Specialty',
    description: 'Advanced threads for specialized applications including automotive and technical textiles.',
    icon: Zap,
    features: ['High performance', 'Specialized coating', 'Custom solutions'],
  },
]

export default function ThreadApplications() {
  return (
    <section className="w-full py-32 px-6 sm:px-8 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-6 tracking-tight">
            Where Our Threads Excel
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto font-light tracking-wide">
            ELEVEN TEN threads are trusted across diverse industries, from fashion to industrial applications. Discover the versatility and reliability of our premium thread solutions.
          </p>
        </div>

        {/* Applications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app) => {
            const IconComponent = app.icon
            return (
              <div
                key={app.id}
                className="group p-8 border border-border hover:border-foreground/20 transition-all duration-500 hover:shadow-lg"
              >
                {/* Icon */}
                <div className="mb-6">
                  <IconComponent className="w-8 h-8 text-foreground group-hover:scale-110 transition-transform duration-500" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-serif font-bold text-foreground mb-4 tracking-tight">
                  {app.title}
                </h3>

                {/* Description */}
                <p className="text-foreground/70 text-sm font-light leading-relaxed mb-6 tracking-wide">
                  {app.description}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {app.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3"
                    >
                      <span className="inline-block w-1 h-1 bg-foreground/60 mt-2 flex-shrink-0"></span>
                      <span className="text-xs font-light text-foreground/60 tracking-wide uppercase">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Divider */}
        <div className="border-t border-border my-24"></div>

        {/* Surat Connection */}
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 tracking-tight">
            Surat: India's Premier Textile Hub
          </h3>
          <p className="text-foreground/70 text-base md:text-lg font-light leading-relaxed tracking-wide mb-8">
            Located in Surat, Gujarat, ELEVEN TEN benefits from being at the heart of India's textile and thread manufacturing ecosystem. Our strategic position in the world's largest textile hub enables us to understand market demands, maintain supply chain efficiency, and deliver excellence consistently. Surat's legacy of quality and innovation drives our commitment to producing world-class threads.
          </p>
        </div>
      </div>
    </section>
  )
}
