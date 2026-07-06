import Navbar from '@/components/navbar'
import HeroSection from '@/components/hero-section'
import ProfilesSection from '@/components/profiles-section'
import TestimonialsSection from '@/components/testimonials-section'
import CtaSection from '@/components/cta-section'
import Footer from '@/components/footer'

export default function Page() {
  return (
    <main>
      <div className="relative">
        <Navbar />
        <HeroSection />
      </div>
      <ProfilesSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
