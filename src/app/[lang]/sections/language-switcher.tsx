"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { Globe, ChevronDown } from 'lucide-react'
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface LanguageSwitcherProps {
  currentLang: string
  label?: string
  variant?: "default" | "minimal"
}

export default function LanguageSwitcher({ 
  currentLang, 
  variant = "default" 
}: LanguageSwitcherProps) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Get the path without the locale
  const pathWithoutLang = pathname.replace(`/${currentLang}`, "") || "/"

  // Available languages
  const languages = [
    { code: "en", label: "English" },
    { code: "es", label: "Español" }
  ]

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Animation variants
  const dropdownVariants = {
    hidden: { 
      opacity: 0, 
      y: -5, 
      scale: 0.95,
      transition: { duration: 0.2, ease: "easeInOut" }
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.2, ease: "easeOut" }
    }
  }

  if (variant === "minimal") {
    return (
      <div className="relative" ref={ref}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1.5 text-gray-300 hover:text-[#51E171] transition-colors"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <Globe size={16} />
          <span className="sr-only">Change language</span>
        </button>
        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={dropdownVariants}
              className="absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-gray-900 border border-gray-800 overflow-hidden z-50"
            >
              <div className="py-1">
                {languages.map((lang) => (
                  <Link
                    key={lang.code}
                    href={`/${lang.code}${pathWithoutLang}`}
                    className={`block px-4 py-2 text-sm ${
                      currentLang === lang.code
                        ? "bg-[#51E171]/10 text-[#51E171]"
                        : "text-gray-300 hover:bg-gray-800"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {lang.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-md text-white hover:text-[#51E171] transition-colors hover:cursor-pointer"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe size={16} className="text-[#51E171]" />
        <span>{currentLang === "en" ? "English" : "Español"}</span>
        <ChevronDown 
          size={14} 
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} 
        />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={dropdownVariants}
            className="absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-gray-900 border border-gray-800 overflow-hidden z-50"
          >
            <div className="py-1">
              {languages.map((lang) => (
                <Link
                  key={lang.code}
                  href={`/${lang.code}${pathWithoutLang}`}
                  className={`block px-4 py-2 text-sm ${
                    currentLang === lang.code
                      ? "bg-[#51E171]/10 text-[#51E171]"
                      : "text-gray-300 hover:bg-gray-800"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {lang.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
