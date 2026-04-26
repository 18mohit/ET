import Image from 'next/image'
import { Zap, Shield, Beaker, Award } from 'lucide-react'

const standards = [
  {
    icon: Beaker,
    title: 'Lab Testing',
    description: 'ISO 9001 certified testing facility with tensile strength, elongation, and dye-fastness analysis.',
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Real-time monitoring systems track every batch from production to packaging.',
  },
  {
    icon: Award,
    title: 'International Standards',
    description: 'Compliance with ISO, OEKO-TEX, and customer-specific quality requirements.',
  },
  {
    icon: Zap,
    title: 'Performance Testing',
    description: 'Comprehensive testing for shrinkage, pilling, color stability, and durability.',
  },
]

export default function QualityAssurance() {
  return (
    <section className="w-full py-32 px-6 sm:px-8 lg:px-12 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            Quality Assurance
          </h2>
          <p className="text-lg text-white/80 font-light max-w-2xl mx-auto">
            Every thread undergoes rigorous testing to ensure it meets our exacting standards and your expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div>
            <Image
              src="/quality-control.jpg"
              alt="Quality control inspection"
              width={500}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Standards Grid */}
          <div className="space-y-6">
            {standards.map((standard, index) => {
              const Icon = standard.icon
              return (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-14 w-14 rounded bg-white/10 border border-white/20">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{standard.title}</h3>
                    <p className="text-white/70 font-light text-sm">{standard.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-20 pt-20 border-t border-white/10">
          <p className="text-center text-white/80 font-light mb-8">
            Certified & Recognized By
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {['ISO 9001:2015', 'ISO 14001:2015', 'OEKO-TEX', 'India Made'].map((cert) => (
              <div key={cert} className="py-4 px-6 bg-white/5 border border-white/10 rounded">
                <p className="text-white font-light tracking-wide">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
