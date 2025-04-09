"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  // Variantes de animación para elementos
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  }

  const buttonHoverEffect = {
    scale: 1.05,
    transition: { duration: 0.2 },
  }

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Contenido alineado a la izquierda y en pantallas grandes desplazado a la derecha */}
      <div className="container mx-auto px-6 z-20 relative h-full">
        <div className="md:mt-24 max-w-2xl lg:ml-[5%]">
          <motion.div initial="hidden" animate="visible" custom={0} variants={fadeIn} className="space-y-2">
            <span className="inline-block px-3 py-1 bg-[#51E171]/10 text-[#51E171] rounded-full text-xs font-medium mb-2">
              Kairosystem
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-[#EDFFCD]">
              Soluciones <span className="text-[#51E171]">digitales</span> a tu medida
            </h1>
          </motion.div>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeIn}
            className="text-base sm:text-lg  text-gray-200 mt-6"
          >
            Transformamos ideas en experiencias digitales impactantes. Desarrollo web y software personalizado para
            potenciar tu presencia online.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeIn}
            className="flex flex-row gap-4 mt-8"
          >
            <motion.button
              whileHover={buttonHoverEffect}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-[#51E171] text-black font-medium rounded-lg shadow-lg shadow-[#51E171]/25"
            >
              <Link href="/portafolio" className="flex items-center justify-center">
                Ver Portafolio
              </Link>
            </motion.button>

            <motion.button
              whileHover={buttonHoverEffect}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border border-[#51E171]/50 text-[#51E171] font-medium rounded-lg hover:bg-[#51E171]/10 transition-colors duration-300"
            >
              <Link href="/contacto" className="flex items-center justify-center">
                Contacto
              </Link>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Video de fondo a pantalla completa */}
      <div className="absolute inset-0 z-0 top-[35%] lg:top-0">
        <video
          className="w-full h-full object-contain lg:object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          style={{ objectPosition: "center 30%" }}
        >
          <source src="/videohero.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento video.
        </video>
        {/* Overlay para mejorar legibilidad */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
          <ChevronDown className="text-[#51E171] w-6 h-6" />
        </motion.div>
      </motion.div>

      {/* Elemento decorativo sutil */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent z-10"></div>
    </section>
  )
}
