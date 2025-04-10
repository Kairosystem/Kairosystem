import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "KairoSystem - Soluciones Digitales a Medida",
  description: "Desarrollo de páginas web y software personalizado para potenciar tu negocio en el mundo digital.",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body suppressHydrationWarning className={`${inter.className} bg-black text-white`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
