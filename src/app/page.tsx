
import Navbar from "@/sections/navbar"
import ServicesSection from "@/sections/services-section"
import FeaturesSection from "@/sections/features-section"
import CTASection from "@/sections/cta-section"
import Footer from "@/sections/footer"
import HeroSection from "@/sections/hero-section"
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </div>
  )
}
