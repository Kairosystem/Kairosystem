import Navbar from "@/sections/navbar";
import ServicesSection from "@/sections/services-section";
import CTASection from "@/sections/cta-section";
import Footer from "@/sections/footer";
import HeroSection from "@/sections/hero-section";
import Chatbot from "@/sections/chatbot";
import PortfolioSection from "@/sections/portfolio";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <CTASection />
      <Chatbot />
      <Footer />
    </div>
  );
}
