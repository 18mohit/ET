import { CheckCircle2, TrendingUp, Users, Zap, Globe, Target } from 'lucide-react'

const reasons = [
  {
    icon: CheckCircle2,
    title: 'Uncompromising Quality',
    description: 'Testtex certified manufacturing with multi-stage quality control at every production step.',
  },
  {
    icon: TrendingUp,
    title: 'Consistent Supply',
    description: 'Reliable production capacity and on-time delivery to meet your manufacturing schedules.',
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: 'Dedicated technical team ready to assist with product selection and troubleshooting.',
  },
  {
    icon: Zap,
    title: 'Innovation & Technology',
    description: 'State-of-the-art machinery combined with traditional textile expertise.',
  },
  {
    icon: Globe,
    title: 'Global Standards',
    description: 'Products meeting international specifications and customer-specific requirements.',
  },
  {
    icon: Target,
    title: 'Competitive Pricing',
    description: 'Premium quality at competitive rates with flexible MOQ and payment terms.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="w-full py-12 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-12 bg-primary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-8 tracking-tight">
            Why Choose ELEVEN TEN Trendz
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-white/80 font-light max-w-2xl mx-auto px-2">
            We stand apart through our commitment to excellence, innovation, and customer satisfaction.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div key={index} className="group p-4 sm:p-6 lg:p-8 bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300">
                <div className="mb-4 sm:mb-6 flex items-center justify-between">
                  <Icon className="w-8 sm:w-10 h-8 sm:h-10 text-white group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-light text-white/20">0{index + 1}</span>
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2 sm:mb-3">{reason.title}</h3>
                <p className="text-white/70 font-light text-xs sm:text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-20 pt-20 border-t border-white/10">
          <div className="text-center">
            <p className="text-5xl font-bold text-white mb-2">15+</p>
            <p className="text-white/80 font-light">Years of Experience</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold text-white mb-2">200+</p>
            <p className="text-white/80 font-light">Active Clients Worldwide</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold text-white mb-2">100%</p>
            <p className="text-white/80 font-light">Quality Assurance</p>
          </div>
        </div>
      </div>
    </section>
  )
}
