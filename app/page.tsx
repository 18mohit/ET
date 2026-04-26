import Navbar from '@/components/navbar'
import B2BHero from '@/components/b2b-hero'
import ManufacturingProcess from '@/components/manufacturing-process'
import IndustriesWeServe from '@/components/industries-we-serve'
import WhyChooseUs from '@/components/why-choose-us'
import Newsletter from '@/components/newsletter'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <B2BHero />
      <ManufacturingProcess />
      <IndustriesWeServe />
      <WhyChooseUs />
      <Newsletter />
      <Footer />
    </main>
  )
}
