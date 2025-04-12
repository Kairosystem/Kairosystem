import { getDictionary } from "./dictionaries"
import HeroSection from "@/app/[lang]/sections/hero-section"
import ServicesSection from "@/app/[lang]/sections/services-section"
import PortfolioSection from "@/app/[lang]/sections/portfolio"
import CTASection from "@/app/[lang]/sections/cta-section"
import Chatbot from "@/app/[lang]/sections/chatbot"

export async function generateStaticParams() {
  return [{ lang: "es" }, { lang: "en" }];
}

export default async function Home({ params }: { params: { lang: string } }) {
  // Obtener el diccionario para el idioma actual
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection lang={lang} dictionary={dictionary} />
      <ServicesSection lang={lang} dictionary={dictionary} />
      <PortfolioSection lang={lang} dictionary={dictionary} />
      <CTASection lang={lang} dictionary={dictionary} />
      <Chatbot lang={lang} dictionary={dictionary} />
    </div>
  )
}
