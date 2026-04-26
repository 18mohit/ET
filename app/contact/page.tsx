import { Mail, MessageCircle, Instagram } from 'lucide-react'
import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Contact Us - ELEVEN TEN | Premium Thread Manufacturer',
  description: 'Get in touch with ELEVEN TEN. Contact us via WhatsApp, Instagram, or email for thread manufacturing inquiries.',
}

export default function Contact() {
  const contactMethods = [
    {
      icon: MessageCircle,
      name: 'WhatsApp',
      value: '+91 70966 69511',
      href: 'https://wa.me/917096669511?text=Hello%20Eleven%20Ten%2C%20I%20want%20more%20details',
      description: 'Direct messaging for quick responses and product inquiries',
    },
    {
      icon: Instagram,
      name: 'Instagram',
      value: '@elevententen',
      href: 'https://instagram.com/elevententen',
      description: 'Follow us for manufacturing updates and industry insights',
    },
    {
      icon: Mail,
      name: 'Email',
      value: 'eleventen2025@gmail.com',
      href: 'mailto:eleventen2025@gmail.com?subject=Thread%20Inquiry%20-%20ELEVEN%20TEN',
      description: 'Send detailed inquiries and custom thread requirements',
    },
  ]

  return (
    <>
      <Navbar />
      <main className="w-full">
        {/* Hero Section */}
      <section className="w-full py-32 px-6 sm:px-8 lg:px-12 bg-secondary">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-background mb-8 tracking-tight">
            Connect With Us
          </h1>
          <p className="text-base md:text-lg text-background/80 max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
            Reach out to ELEVEN TEN for bulk orders, custom thread requirements, and B2B partnerships in textile manufacturing.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="w-full py-40 px-6 sm:px-8 lg:px-12 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-16">
            {contactMethods.map((method) => {
              const Icon = method.icon
              return (
                <a
                  key={method.name}
                  href={method.href}
                  target={method.name !== 'Email' ? '_blank' : undefined}
                  rel={method.name !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="group flex flex-col items-center text-center cursor-pointer transition-all duration-500 hover:translate-y-[-8px]"
                >
                  {/* Icon */}
                  <div className="mb-8 p-6 rounded-none border-2 border-primary/30 group-hover:border-primary group-hover:bg-primary/5 transition-all duration-500">
                    <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-500" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-serif font-bold text-primary mb-3 tracking-tight">
                    {method.name}
                  </h3>
                  <p className="text-sm font-light text-foreground/70 mb-6 tracking-wide">
                    {method.description}
                  </p>
                  <p className="text-base font-light text-primary tracking-widest group-hover:text-primary/80 transition-colors duration-500">
                    {method.value}
                  </p>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="w-full py-32 px-6 sm:px-8 lg:px-12 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8 tracking-tight">
            Response Time
          </h2>
          <p className="text-base md:text-lg text-foreground/70 font-light leading-relaxed tracking-wide mb-8">
            We typically respond to all inquiries within 24 hours during business days. For urgent matters, WhatsApp is the fastest way to reach us.
          </p>
          <div className="border-t border-border pt-8 mt-8">
            <p className="text-sm font-light text-foreground/60 tracking-widest uppercase">
              Business Hours: Monday - Saturday, 10:00 AM - 6:00 PM 
            </p>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  )
}
