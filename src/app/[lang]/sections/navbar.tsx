"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Logo from "@/../public/kairos_logo.png"
import LanguageSwitcher from "./language-switcher"
import type { Dictionary } from "../dictionaries"

interface NavbarProps {
  lang: string
  dictionary: Dictionary
}

const mobileNavVariants = {
  hidden: {
    opacity: 0,
    clipPath: "inset(0 0 100% 0)",
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  show: {
    opacity: 1,
    clipPath: "inset(0 0 0 0)",
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
}

const menuItemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
}

export default function Navbar({ lang, dictionary }: NavbarProps) {
  const { navbar } = dictionary
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: navbar.servicios, href: `/${lang}/#servicios` },
    { name: navbar.portafolio, href: `/${lang}/#portafolio` },
    { name: navbar.contacto, href: `/${lang}/#contact` },
  ]

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    // Clean up on unmount
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  // Check if a nav item is active
  const isActive = (href: string) => {
    if (href.includes("#")) {
      const [basePath, hash] = href.split("#")
      return pathname === basePath.slice(0, -1) || pathname.includes(hash)
    }
    return pathname === href
  }

  return (
    <nav
      aria-label="Navegación principal"
      className="static top-0 left-0 right-0 z-50 bg-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href={`/${lang}`} className="flex items-center gap-2">
                <Image src={Logo} alt="KairoSystem Logo" width={40} height={40} className="h-10 w-auto" />
              </Link>
            </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={`text-sm font-medium transition-colors py-2 ${
                    isActive(item.href) ? "text-white" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#51E171] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            ))}
            <LanguageSwitcher currentLang={lang} />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <LanguageSwitcher currentLang={lang} variant="minimal" />

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-300 hover:text-[#51E171] transition-colors z-50"
              aria-label={isOpen ? navbar.menu.cerrar : navbar.menu.abrir}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? "close" : "menu"}
                  initial={{ opacity: 0, rotate: isOpen ? -90 : 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: isOpen ? 90 : -90 }}
                  transition={{ duration: 0.3 }}
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileNavVariants}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="lg:hidden fixed inset-0 top-20 bg-black/95 backdrop-blur-md z-40 flex flex-col"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8 px-4 pt-8">
              {navItems
                .map((item, i) => (
                  <motion.div key={item.name} variants={menuItemVariants} className="w-full text-center">
                    <Link
                      href={item.href}
                      className={`text-2xl font-medium transition-colors block py-3 ${
                        isActive(item.href) ? "text-[#51E171]" : "text-gray-300 hover:text-[#51E171]"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

              {/* Decorative element */}
              <motion.div variants={menuItemVariants} className="w-12 h-1 bg-[#51E171]/30 rounded-full my-4" />

              {/* Background decorative elements */}
              <div className="absolute -top-[300px] -right-[300px] w-[600px] h-[600px] rounded-full bg-[#51E171]/5 blur-3xl"></div>
              <div className="absolute -bottom-[300px] -left-[200px] w-[600px] h-[600px] rounded-full bg-[#51E171]/5 blur-3xl"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
