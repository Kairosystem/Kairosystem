import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import { getDictionary } from "./dictionaries"
import Navbar from "@/app/[lang]/sections/navbar"
import Footer from "@/app/[lang]/sections/footer"

const inter = Inter({ subsets: ["latin"] })

export async function generateStaticParams() {
  return [{ lang: "es" }, { lang: "en" }]
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  return {
    title: lang === "es" ? "KairoSystem - Soluciones Digitales a Medida" : "KairoSystem - Custom Digital Solutions",
    description:
      lang === "es"
        ? "Desarrollo de páginas web y software personalizado para potenciar tu negocio en el mundo digital."
        : "Web development and custom software to boost your business in the digital world.",
    icons: {
      icon: "/favicon.ico",
    },
  }
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)

  return (
    <html lang={lang}>
      <body suppressHydrationWarning className={`${inter.className} `}>
        <Navbar lang={lang} dictionary={dictionary} />
        <main className="flex-grow">{children}</main>
        <Footer lang={lang} dictionary={dictionary} />
        <Analytics />
      </body>
    </html>
  )
}
