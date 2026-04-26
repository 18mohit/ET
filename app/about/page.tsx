import type { Metadata } from 'next'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us - ELEVEN TEN | Premium Thread Manufacturer',
  description: 'ELEVEN TEN is a premium thread manufacturer based in Surat, India. Specializing in high-quality threads for textile, garment, embroidery, and industrial stitching purposes.',
}

export default function AboutPage() {
  const strengthPoints = [
    'ISO 9001:2015 Certified Manufacturing Facility',
    'State-of-the-art Spinning Technology',
    'Production Capacity: 500+ Tons per Month',
    'Advanced Quality Control Systems',
    'Experienced Team of 200+ Professionals',
    'Export-grade Manufacturing Standards',
  ]

  const commitmentAreas = [
    { title: 'Quality Assurance', description: 'Every thread is tested for strength, evenness, and durability through rigorous quality protocols.' },
    { title: 'Innovation', description: 'Continuous investment in technology to develop specialized threads for diverse applications.' },
    { title: 'Sustainability', description: 'Eco-conscious manufacturing practices with waste reduction and sustainable sourcing.' },
    { title: 'Customer Service', description: '24/7 support and customization capabilities to meet specific client requirements.' },
  ]

  return (
    <>
      <Navbar />
      <main className="w-full">
        {/* Hero Section */}
        <section className="w-full h-96 md:h-screen bg-secondary text-background flex items-center justify-center relative overflow-hidden">
          <Image
            src="/Image1_About.png"
            alt="Manufacturing facility"
            fill
            className="absolute inset-0 w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-black/30"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-8 tracking-tight leading-tight">
              Threads of Excellence
            </h1>
            <p className="text-lg md:text-xl text-background/90 max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
              Manufacturing premium quality threads since 1990. Serving the global textile industry with precision, innovation, and unwavering commitment to excellence.
            </p>
          </div>
        </section>

        {/* Brand Introduction */}
        <section className="w-full py-32 px-6 sm:px-8 lg:px-12 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-8 tracking-tight">
                  ELEVEN TEN
                </h2>
                <p className="text-lg text-foreground/70 font-light leading-relaxed mb-6 tracking-wide">
                  Established as a beacon of quality in the textile industry, ELEVEN TEN represents over two decades of expertise in thread manufacturing. Based in Surat, India's most prominent textile hub, we have built a reputation for delivering superior quality threads that form the foundation of exceptional garments and industrial applications worldwide.
                </p>
                <p className="text-lg text-foreground/70 font-light leading-relaxed tracking-wide">
                  Our commitment goes beyond production—we are partners in your success, providing threads that combine traditional craftsmanship with modern technology.
                </p>
              </div>
              <div className="h-96 bg-secondary rounded-none flex items-center justify-center text-foreground/40 font-light text-lg">
                [Manufacturing Facility Image]
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="w-full py-32 px-6 sm:px-8 lg:px-12 bg-secondary">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-20 tracking-tight text-center">
              Our Mission & Vision
            </h2>
            <div className="grid md:grid-cols-2 gap-16">
              {/* Mission */}
              <div className="border-l-2 border-foreground pl-8">
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6 tracking-tight">
                  Mission
                </h3>
                <p className="text-lg text-foreground/70 font-light leading-relaxed tracking-wide">
                  To manufacture premium quality threads that exceed industry standards, delivering exceptional value to textile manufacturers, garment producers, embroiderers, and industrial users globally. We are dedicated to combining cutting-edge technology with meticulous craftsmanship to create threads that enhance the quality and durability of every product they touch.
                </p>
              </div>
              {/* Vision */}
              <div className="border-l-2 border-foreground pl-8">
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6 tracking-tight">
                  Vision
                </h3>
                <p className="text-lg text-foreground/70 font-light leading-relaxed tracking-wide">
                  To become the world's most trusted and innovative thread manufacturer, recognized for our unwavering commitment to quality, sustainability, and customer satisfaction. We envision a future where ELEVEN TEN threads are synonymous with excellence across every application—from haute couture to industrial manufacturing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Eleven Ten */}
        <section className="w-full py-32 px-6 sm:px-8 lg:px-12 bg-background">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-20 tracking-tight text-center">
              Why Choose ELEVEN TEN
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <h3 className="text-2xl font-serif font-bold text-foreground tracking-tight">
                  Uncompromising Quality
                </h3>
                <p className="text-foreground/70 font-light leading-relaxed tracking-wide">
                  Every spool meets stringent quality benchmarks. Our threads undergo comprehensive testing for tensile strength, color fastness, and consistency, ensuring perfection in every meter.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-serif font-bold text-foreground tracking-tight">
                  Technical Expertise
                </h3>
                <p className="text-foreground/70 font-light leading-relaxed tracking-wide">
                  With specialized knowledge across textile, embroidery, and industrial applications, our team provides expert guidance for optimal thread selection and usage.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-serif font-bold text-foreground tracking-tight">
                  Customization Capabilities
                </h3>
                <p className="text-foreground/70 font-light leading-relaxed tracking-wide">
                  From color specifications to material composition, we offer flexible customization to meet your unique requirements with precision and reliability.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-serif font-bold text-foreground tracking-tight">
                  Competitive Pricing
                </h3>
                <p className="text-foreground/70 font-light leading-relaxed tracking-wide">
                  Premium quality doesn't have to come with a premium price. We deliver exceptional value without compromising on standards or performance.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-serif font-bold text-foreground tracking-tight">
                  Reliable Supply Chain
                </h3>
                <p className="text-foreground/70 font-light leading-relaxed tracking-wide">
                  Consistent availability and timely delivery ensure your production never faces delays. We maintain strategic inventory for your peace of mind.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-serif font-bold text-foreground tracking-tight">
                  Global Standards
                </h3>
                <p className="text-foreground/70 font-light leading-relaxed tracking-wide">
                  ISO certified and export-ready, our threads meet international standards and regulations for seamless global operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Manufacturing Strength */}
        <section className="w-full py-32 px-6 sm:px-8 lg:px-12 bg-secondary">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-20 tracking-tight text-center">
              Our Manufacturing Strength
            </h2>
            <p className="text-lg text-foreground/70 font-light leading-relaxed tracking-wide text-center max-w-3xl mx-auto mb-16">
              Located in Surat, India's premier textile manufacturing hub, we leverage decades of regional expertise and world-class infrastructure to deliver threads of unparalleled quality.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {strengthPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-4">
                  <Check className="w-6 h-6 text-foreground flex-shrink-0 mt-1" />
                  <p className="text-base text-foreground/80 font-light tracking-wide">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Commitment to Quality */}
        <section className="w-full py-32 px-6 sm:px-8 lg:px-12 bg-background">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-20 tracking-tight text-center">
              Our Commitment to Quality
            </h2>
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {commitmentAreas.map((area, index) => (
                <div key={index} className="space-y-4">
                  <h3 className="text-2xl font-serif font-bold text-foreground tracking-tight">
                    {area.title}
                  </h3>
                  <p className="text-foreground/70 font-light leading-relaxed tracking-wide">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="border-t border-border pt-12">
              <p className="text-lg text-foreground/70 font-light leading-relaxed tracking-wide text-center">
                Every thread that leaves our facility carries our promise of excellence. We don't just manufacture threads; we create the foundation for superior quality in everything they touch.
              </p>
            </div>
          </div>
        </section>

        {/* Future Goals */}
        <section className="w-full py-32 px-6 sm:px-8 lg:px-12 bg-foreground text-background">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-20 tracking-tight text-center">
              Looking Forward
            </h2>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-serif font-bold mb-8 tracking-tight">
                  Our Future Goals
                </h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <Check className="w-5 h-5 flex-shrink-0 mt-1" />
                    <span className="text-lg font-light leading-relaxed tracking-wide">
                      Expand production capacity to meet growing global demand
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <Check className="w-5 h-5 flex-shrink-0 mt-1" />
                    <span className="text-lg font-light leading-relaxed tracking-wide">
                      Invest in sustainability initiatives for eco-conscious manufacturing
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <Check className="w-5 h-5 flex-shrink-0 mt-1" />
                    <span className="text-lg font-light leading-relaxed tracking-wide">
                      Develop specialized threads for emerging applications
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <Check className="w-5 h-5 flex-shrink-0 mt-1" />
                    <span className="text-lg font-light leading-relaxed tracking-wide">
                      Strengthen our global presence through strategic partnerships
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <Check className="w-5 h-5 flex-shrink-0 mt-1" />
                    <span className="text-lg font-light leading-relaxed tracking-wide">
                      Enhance digital capabilities for seamless customer experience
                    </span>
                  </li>
                </ul>
              </div>
              <div className="h-96 bg-background/20 rounded-none flex items-center justify-center text-background/40 font-light text-lg">
                [Future Vision Image]
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-32 px-6 sm:px-8 lg:px-12 bg-foreground text-background">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 tracking-tight">
              Ready to Experience Excellence?
            </h2>
            <p className="text-lg text-background/80 font-light leading-relaxed tracking-wide mb-12">
              Join thousands of satisfied customers who trust ELEVEN TEN for their threading needs. Contact us today to discuss your requirements and discover how our threads can enhance your products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-12 py-4 bg-background text-foreground font-light text-sm tracking-widest hover:bg-secondary transition-all duration-500 uppercase"
              >
                Get in Touch
              </a>
              <a
                href="/shop"
                className="px-12 py-4 bg-background/20 text-background font-light text-sm tracking-widest hover:bg-background/40 transition-all duration-500 uppercase border border-background"
              >
                Browse Products
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
