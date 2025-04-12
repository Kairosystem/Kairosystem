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
import Logo from "@/../public/kairos_logo.png"
import type { Dictionary } from "../dictionaries"

export default function Footer({ lang, dictionary }: { lang: string; dictionary: Dictionary }) {
  const { footer: t } = dictionary
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
              {t.logo.descripcion}
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
            <h3 className="text-[#EDFFCD] font-semibold text-lg mb-4">{t.enlaces_rapidos.titulo}</h3>
            <ul className="space-y-2">
              {t.enlaces_rapidos.links.map((item) => (
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
            <h3 className="text-[#EDFFCD] font-semibold text-lg mb-4">{t.contacto.titulo}</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#51E171]" />
                <span className="text-gray-300">{t.contacto.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#51E171]" />
                <span className="text-gray-300">{t.contacto.telefono}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-[#51E171]" />
                <span className="text-gray-300">{t.contacto.ubicacion}</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-[#EDFFCD] font-semibold text-lg mb-4">{t.newsletter.titulo}</h3>
            <form onSubmit={handleSubscribe} className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.newsletter.placeholder}
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
            {isSubscribed && <p className="text-xs text-[#51E171] mt-2">{t.newsletter.gracias}</p>}
          </div>
        </div>

        {/* Footer inferior */}
        <div className="border-t border-gray-800 py-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              {t.derechos}
            </p>
            <div className="flex gap-6 text-sm">
              {t.enlaces_legales.map((enlace, index) => (
                <Link key={index} href={`/${enlace.toLowerCase()}`} className="text-gray-400 hover:text-[#51E171]">{enlace}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
