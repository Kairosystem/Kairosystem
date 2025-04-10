"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Logo from "../../public/kairos_logo.png"

const navItems = [
  { name: 'Servicios', href: '#servicios' },
  { name: 'Web', href: '#web' },
  { name: 'Software', href: '#software' },
  { name: 'Contacto', href: '#contacto' },
]

const mobileNavVariants = {
  hidden: {
    opacity: 0,
    y: -20,
    scale: 0.95,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
}

const underlineVariants = {
  hidden: { width: 0, left: "50%" },
  show: { 
    width: "100%",
    left: "0%",
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
}

const menuItemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4
    }
  })
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  
  useEffect(() => {
    const handleScroll = () => {
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

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      <div className="" />
      <nav 
        aria-label="Navegación principal"
        className="static top-0 left-0 right-0 z-50 bg-black"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/" className="flex items-center gap-2">
                <Image src={Logo} alt="KairoSystem Logo" width={40} height={40} className="h-10 w-auto" />
                <span className="text-xl font-medium">KairoSystem</span>
              </Link>
            </motion.div>

            <div className="hidden lg:flex items-center space-x-10">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  className="relative"
                  whileHover="show"
                  initial="hidden"
                >
                  <Link
                    href={item.href}
                    className={`text-sm font-medium text-gray-300 hover:text-green-400 transition-colors ${
                      activeSection === item.href.substring(1) ? "text-green-500" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                  <motion.div
                    variants={underlineVariants}
                    className="absolute bottom-0 h-[2px] bg-gradient-to-r from-green-500 to-green-400"
                  />
                </motion.div>
              ))}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#contacto"
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-green-500 to-green-400 text-black font-medium text-sm hover:opacity-90 transition-opacity shadow-lg shadow-green-500/20"
                >
                  Contactar
                </Link>
              </motion.div>
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-green-400"
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isOpen ? <X /> : <Menu />}
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div 
              variants={mobileNavVariants}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="lg:hidden fixed inset-x-0 top-20 h-[calc(100vh-5rem)] bg-black bg-opacity-95 backdrop-blur-md z-40"
            >
              <div className="flex flex-col items-start justify-start h-full space-y-8 px-4 pt-8">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.name}
                    custom={i}
                    variants={menuItemVariants}
                    initial="hidden"
                    animate="show"
                    className="w-full text-left"
                  >
                    <Link
                      href={item.href}
                      className={`text-xl font-medium hover:text-green-400 transition-colors block py-2 ${
                        activeSection === item.href.substring(1) ? "text-green-500" : "text-gray-300"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  custom={navItems.length}
                  variants={menuItemVariants}
                  initial="hidden"
                  animate="show"
                  className="mt-8"
                >
                  <Link
                    href="#contacto"
                    className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-green-500 to-green-400 text-black font-medium text-lg hover:opacity-90 transition-opacity shadow-lg shadow-green-500/20"
                    onClick={() => setIsOpen(false)}
                  >
                    Contactar
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  )
}
