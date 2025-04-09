"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import Logo from "../../public/kairos_logo.png"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  // Manejar el scroll para efectos de navegación
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Detectar sección activa para navegación
      const sections = ["servicios", "web", "software", "contacto"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 150 && rect.bottom >= 150
        }
        return false
      })

      if (current) {
        setActiveSection(current)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black bg-opacity-90 shadow-lg py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src={Logo || "/placeholder.svg"} alt="KairoSystem Logo" width={40} height={40} className="h-10 w-auto" />
          <span className="text-xl font-medium">KairoSystem</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          {["servicios", "web", "software", "contacto"].map((item) => (
            <Link
              key={item}
              href={`#${item}`}
              className={`text-gray-300 hover:text-green-400 transition-colors relative ${
                activeSection === item ? "text-green-500" : ""
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              {activeSection === item && (
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-green-500 animate-pulse-slow"></span>
              )}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <button className="hidden sm:flex btn-outline px-4 py-2">Iniciar Sesión</button>
          <button className="btn-primary px-4 py-2 flex items-center group">
            Contactar
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
