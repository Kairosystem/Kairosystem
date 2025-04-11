"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Facebook,
  Instagram,
  Linkedin,
  Github,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Send,
  CheckCircle,
} from "lucide-react"
import Logo from "../../public/kairos_logo.png"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubscribed(true)

      setTimeout(() => {
        setIsSubscribed(false)
        setEmail("")
      }, 3000)
    }, 1000)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const socialLinks = {
    Facebook: "#",
    Instagram: "https://www.instagram.com/kairosystem/",
    Linkedin: "https://www.linkedin.com/in/kairosystem/",
    Github: "https://github.com/Kairosystem"
  }

  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 pt-16 border-t border-gray-800 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#51E171]/30 to-transparent"></div>

      <motion.button
        onClick={scrollToTop}
        className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[#51E171] text-black w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-[#51E171]/90 transition-colors hover:cursor-pointer"
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowUp className="h-5 w-5" />
      </motion.button>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="rounded-lg">
                <Image src={Logo} alt="KairoSystem Logo" width={45} height={45} className="h-10 w-auto" />
              </div>
              <span className="text-xl font-bold">KairoSystem</span>
            </div>

            <p className="text-gray-400 text-sm">
              Transformamos ideas en soluciones digitales excepcionales. Especialistas en desarrollo web y software a medida.
            </p>

            <div className="flex items-center space-x-3">
              {Object.entries(socialLinks).map(([name, url], index) => {
                const Icon = [Instagram, Linkedin, Github, Facebook][index]
                return (
                  <motion.a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800 rounded-full text-gray-400 hover:bg-[#51E171]/20 hover:text-[#51E171] transition-colors cursor-pointer"
                    whileHover={{ y: -2 }}
                  >
                    <Icon className="h-4 w-4" />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-[#EDFFCD] font-semibold text-lg mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              {['Servicios', 'Web', 'Software', 'Portafolio', 'Contacto'].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-[#51E171] transition-colors flex items-center gap-2"
                  >
                    <span className="h-1 w-1 rounded-full bg-[#51E171]"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-[#EDFFCD] font-semibold text-lg mb-4">Contacto</h3>
            <div className="space-y-3">
              {[
                { icon: Mail, text: "kairosystem.dev@gmail.com" },
                { icon: Phone, text: "+54 9 11 5097-9192" },
                { icon: MapPin, text: "Buenos Aires, Argentina" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <item.icon className="h-5 w-5 text-[#51E171]" />
                  <span className="text-gray-300">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-[#EDFFCD] font-semibold text-lg mb-4">Newsletter</h3>
            <form onSubmit={handleSubscribe} className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu email"
                className="w-full px-4 py-3 pr-12 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#51E171]/50 text-sm"
                disabled={isSubmitting || isSubscribed}
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 bg-[#51E171] rounded-md text-black hover:bg-[#51E171]/90 transition-colors disabled:opacity-70 hover:cursor-pointer"
                disabled={isSubmitting || isSubscribed || !email}
              >
                {isSubmitting ? (
                  <div className="h-4 w-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                ) : isSubscribed ? (
                  <CheckCircle className="h-4 w-4" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </button>
            </form>
            {isSubscribed && <p className="text-xs text-[#51E171] mt-2">¡Gracias por suscribirte!</p>}
          </div>
        </div>

        {/* Footer inferior */}
        <div className="border-t border-gray-800 py-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} KairoSystem. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacidad" className="text-gray-400 hover:text-[#51E171]">Privacidad</Link>
              <Link href="/terminos" className="text-gray-400 hover:text-[#51E171]">Términos</Link>
              <Link href="/cookies" className="text-gray-400 hover:text-[#51E171]">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
