"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Globe, Code, Database, MessageSquareText, ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Web from "@/../public/1.png"
import Software from "@/../public/2.png"
import Datos from "@/../public/3.png"
import Chatbot from "@/../public/4.png" // Reemplazar con imagen real de chatbot
import type { Dictionary } from "../dictionaries"

interface ServicesSectionProps {
  lang: string
  dictionary: Dictionary
}

export default function ServicesSection({ lang, dictionary }: ServicesSectionProps) {
  const [activeService, setActiveService] = useState("web")

  // Detectar el hash y parámetros en la URL al cargar la página
  useEffect(() => {
    const hash = window.location.hash.replace("#", "")
    const [hashBase, queryString] = hash.split("?")
    const params = new URLSearchParams(queryString)
    const service = params.get("service")
    const validServices = ["web", "software", "data", "chatbot"]

    if (service && validServices.includes(service)) {
      setActiveService(service)
    } else if (hashBase && validServices.includes(hashBase)) {
      setActiveService(hashBase)
    }
  }, [])

  const { servicios } = dictionary

  const services = [
    {
      id: "web",
      title: servicios.web.titulo,
      icon: <Globe className="h-6 w-6" />,
      description: servicios.web.descripcion,
      features: servicios.web.features,
      benefits: servicios.web.benefits,
      image: Web,
      cta: servicios.web.cta,
      ctaLink: "#contact",
    },
    {
      id: "software",
      title: servicios.software.titulo,
      icon: <Code className="h-6 w-6" />,
      description: servicios.software.descripcion,
      features: servicios.software.features,
      benefits: servicios.software.benefits,
      image: Software,
      cta: servicios.software.cta,
      ctaLink: "#contact",
    },
    {
      id: "data",
      title: servicios.data.titulo,
      icon: <Database className="h-6 w-6" />,
      description: servicios.data.descripcion,
      features: servicios.data.features,
      benefits: servicios.data.benefits,
      image: Datos,
      cta: servicios.data.cta,
      ctaLink: "#contact",
    },
    {
      id: "chatbot",
      title: servicios.chatbot.titulo,
      icon: <MessageSquareText className="h-6 w-6" />,
      description: servicios.chatbot.descripcion,
      features: servicios.chatbot.features,
      benefits: servicios.chatbot.benefits,
      image: Chatbot,
      cta: servicios.chatbot.cta,
      ctaLink: "#contact",
    },
  ]

  const activeServiceData = services.find((service) => service.id === activeService)

  return (
    <section id="servicios" className="py-20 md:py-24 bg-black relative overflow-hidden lg:px-20">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#51E171]/30 to-transparent"></div>
      <div className="absolute -top-[500px] -right-[300px] w-[800px] h-[800px] rounded-full bg-[#51E171]/5 blur-3xl"></div>
      <div className="absolute -bottom-[300px] -left-[200px] w-[600px] h-[600px] rounded-full bg-[#51E171]/5 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Encabezado de sección */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex flex-col items-center text-center mb-6">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-1 w-20 bg-[#51E171] mb-6"
            ></motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-[#EDFFCD]">{servicios.titulo_nuestro}</span> <span className="text-[#51E171]">{servicios.titulo_servicios}</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl">
              {servicios.subtitulo}
            </p>
          </div>
        </motion.div>

        {/* Navegación de servicios */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-12">
          {services.map((service) => (
            <motion.button
              key={service.id}
              onClick={() => {
                setActiveService(service.id)
                window.history.pushState({}, "", `#servicios?service=${service.id}`)
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`relative group p-6 rounded-xl flex flex-col items-center text-center transition-all duration-300 cursor-pointer ${
                activeService === service.id
                  ? "bg-gradient-to-br from-[#51E171]/20 to-[#51E171]/5 border border-[#51E171]/30"
                  : "bg-gray-900/50 border border-gray-800 hover:border-[#51E171]/30"
              }`}
            >
              <div
                className={`p-4 rounded-full mb-4 transition-all duration-300 ${
                  activeService === service.id
                    ? "bg-[#51E171]/20 text-[#51E171]"
                    : "bg-gray-800 text-gray-400 group-hover:text-[#51E171] group-hover:bg-[#51E171]/10"
                }`}
              >
                {service.icon}
              </div>
              <h3
                className={`font-semibold transition-colors duration-300 ${
                  activeService === service.id ? "text-[#51E171]" : "text-white group-hover:text-[#51E171]"
                }`}
              >
                {service.title}
              </h3>

              {activeService === service.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-[#51E171]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Contenido del servicio activo */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Columna de información - Versión minimalista */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-[#51E171]/20 text-[#51E171]">{activeServiceData?.icon}</div>
                  <h3 className="text-3xl font-bold">{activeServiceData?.title}</h3>
                </div>
                <p className="text-xl text-gray-300 leading-relaxed">{activeServiceData?.description}</p>

                {/* Nota especial para Chatbot */}
                {activeService === "chatbot" && (
                  <div className="mt-4 p-3 bg-[#EDFFCD]/10 border border-[#EDFFCD]/20 rounded-lg">
                    <p className="text-sm text-[#EDFFCD]">
                      <strong>{servicios.chatbot.nota_literal}:</strong> {servicios.chatbot.nota}
                    </p>
                  </div>
                )}
              </div>

              {/* Características y beneficios - Diseño minimalista */}
              <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-4 w-4 rounded-full bg-[#51E171]"></div>
                  <h4 className="text-lg font-medium text-[#EDFFCD]">{servicios.chatbot.caracteristicas}</h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                  {activeServiceData?.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-[#51E171]"></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-800">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-4 w-4 rounded-full bg-[#51E171]"></div>
                    <h4 className="text-lg font-medium text-[#EDFFCD]">{servicios.chatbot.beneficios}</h4>
                  </div>

                  <div className="space-y-3">
                    {activeServiceData?.benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle className="h-4 w-4 text-[#51E171] flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Link href={activeServiceData?.ctaLink || "#contact"}>
                  <button className="group relative px-6 py-3 bg-[#51E171] text-black font-medium rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#51E171]/20 flex items-center cursor-pointer">
                    <span>{activeServiceData?.cta}</span>
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    <motion.div
                      className="absolute inset-0 bg-white"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ opacity: 0.2 }}
                    />
                  </button>
                </Link>
              </motion.div>
            </div>

            {/* Columna de imagen */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-full md:max-w-[80%] mx-auto mt-5 md:mt-0"
            >
              <div className="relative rounded-2xl overflow-hidden  shadow-black/50">
                <div className="absolute inset-0 bg-gradient-to-br  z-10"></div>
                <Image
                  src={activeServiceData?.image || "/placeholder.svg"}
                  alt={activeServiceData?.title || "Servicio"}
                  width={1000}
                  height={1000}
                  quality={100}
                  priority
                  className="w-full h-full object-cover"
                  style={{
                    aspectRatio: "1/1",
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>

              {/* Elementos decorativos alrededor de la imagen */}
              <div className="absolute -top-4 md:-top-6 -right-4 md:-right-6 h-8 md:h-12 w-8 md:w-12 border-t-2 border-r-2 border-[#51E171]/30"></div>
              <div className="absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 h-8 md:h-12 w-8 md:w-12 border-b-2 border-l-2 border-[#51E171]/30"></div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Mensaje de cierre */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <p className="text-gray-400">
            {servicios.cierre}{" "}
            <Link href="#contact" className="text-[#51E171] hover:underline">
              {servicios.boton_contacto}
            </Link>{" "}
            {servicios.cierre_contacto}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
