"use client"

import { motion } from "framer-motion"
import { ArrowRight, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function CTASection() {
  return (
    <section id="contacto" className="py-24 bg-black relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#51E171]/30 to-transparent"></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 2 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#51E171]/5 blur-3xl"
      ></motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Elementos decorativos */}
            <div className="absolute -top-10 -left-10 w-20 h-20 border-t-2 border-l-2 border-[#51E171]/30"></div>
            <div className="absolute -bottom-10 -right-10 w-20 h-20 border-b-2 border-r-2 border-[#51E171]/30"></div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-10 md:p-16">
              <div className="text-center mb-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="h-1 w-20 bg-[#51E171] mx-auto mb-6"
                ></motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
                >
                  <span className="text-[#EDFFCD]">¿Listo para</span> <span className="text-[#51E171]">impulsar</span>{" "}
                  <span className="text-[#EDFFCD]">tu presencia digital?</span>
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-xl text-gray-400 max-w-2xl mx-auto"
                >
                  Contáctanos hoy mismo y comienza a transformar tu negocio con soluciones digitales a medida.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row justify-center gap-6"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 bg-[#51E171] text-black font-medium rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#51E171]/20 flex items-center justify-center"
                >
                  <Link href="/contacto" className="flex items-center">
                    <span>Solicitar Presupuesto</span>
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  <motion.div
                    className="absolute inset-0 bg-white"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ opacity: 0.2 }}
                  />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 border border-[#51E171]/50 text-[#51E171] font-medium rounded-lg hover:bg-[#51E171]/10 transition-colors duration-300 flex items-center justify-center"
                >
                  <Link href="/agenda" className="flex items-center">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    <span>Agendar Llamada</span>
                  </Link>
                </motion.button>
              </motion.div>
            </div>
          </div>

          {/* Información adicional */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-gray-400">
              ¿Preferis contactarnos directamente?{" "}
              <Link href="mailto:kairosystem.dev@gmail.com" className="text-[#51E171] hover:underline">
                kairosystem.dev@gmail.com
              </Link>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
