import Hero from '@/components/home/Hero'
import Services from '@/components/home/Services'
import Destinations from '@/components/home/Destinations'
import SpecialOffer from '@/components/home/SpecialOffer'
import HowItWorks from '@/components/home/HowItWorks'
import Testimonials from '@/components/home/Testimonials'
import Newsletter from '@/components/home/Newsletter'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Destinations />
      <SpecialOffer />
      <HowItWorks />
      <Testimonials />
      <Newsletter />
    </>
  )
}
