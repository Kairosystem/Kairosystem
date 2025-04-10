"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, MessageSquare, Send, CheckCircle, X, Mail, Phone, Calendar, Clock } from "lucide-react"
import Link from "next/link"

export default function CTASection() {
  // Estados para el formulario y selección
  const [showForm, setShowForm] = useState(false)
  const [projectType, setProjectType] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [description, setDescription] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  // Detectar si es dispositivo móvil
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Verificar al cargar y al cambiar el tamaño de la ventana
    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  // Efecto para manejar el scroll cuando el formulario está abierto
  useEffect(() => {
    if (showForm) {
      // Bloquear el scroll del body cuando el formulario está abierto
      document.body.style.overflow = 'hidden'
    } else {
      // Restaurar el scroll cuando se cierra
      document.body.style.overflow = 'auto'
    }
    
    // Limpiar el efecto al desmontar
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [showForm])

  // Función para manejar el envío del formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Aquí iría la lógica para enviar el formulario
    // Por ahora solo simulamos el envío
    setTimeout(() => {
      setIsSubmitted(true)
      // Resetear el formulario después de 3 segundos
      setTimeout(() => {
        setIsSubmitted(false)
        setShowForm(false)
        setName("")
        setEmail("")
        setPhone("")
        setProjectType("")
        setDescription("")
        setSelectedOption(null)
      }, 3000)
    }, 1000)
  }

  // Función para cerrar el formulario
  const handleCloseForm = () => {
    setShowForm(false)
    if (selectedOption === "presupuesto") {
      setSelectedOption(null)
    }
  }

  // Tipos de proyectos disponibles
  const projectTypes = [
    { id: "web", name: "Página Web" },
    { id: "app", name: "Aplicación Móvil" },
    { id: "ecommerce", name: "Tienda Online" },
    { id: "software", name: "Software a Medida" },
    { id: "other", name: "Otro" },
  ]

  // Función para seleccionar una opción
  const handleOptionSelect = (option: string) => {
    if (selectedOption === option) {
      // Si se clickea la misma opción, deseleccionarla
      setSelectedOption(null)
    } else {
      setSelectedOption(option)
      if (option === "presupuesto") {
        setShowForm(true)
      }
    }
  }

  return (
    <section id="contacto" className="py-16 md:py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
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
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
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
              <span className="text-[#EDFFCD]">¿Querés desarrollar tu</span> <span className="text-[#51E171]">web</span>{" "}
              <span className="text-[#EDFFCD]">o software?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 max-w-2xl mx-auto"
            >
              Elegí la opción que mejor se adapte a tus necesidades y comencemos a trabajar en tu proyecto digital.
            </motion.p>
          </div>

          {/* Selector de opciones interactivo */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row justify-center gap-4 max-w-3xl mx-auto">
              <motion.button
                onClick={() => handleOptionSelect("presupuesto")}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`relative px-6 py-4 rounded-xl flex-1 transition-all duration-300 flex items-center justify-center cursor-pointer ${
                  selectedOption === "presupuesto"
                    ? "bg-[#51E171] text-black shadow-lg shadow-[#51E171]/20"
                    : "bg-gray-900/50 border border-gray-800 text-white hover:border-[#51E171]/30"
                }`}
              >
                <div className="flex items-center cursor-pointer">
                  <Mail
                    className={`h-5 w-5 ${selectedOption === "presupuesto" ? "text-black" : "text-[#51E171]"} mr-3`}
                  />
                  <span className="font-medium">Solicitar Presupuesto</span>
                </div>
              </motion.button>

              <motion.button
                onClick={() => handleOptionSelect("llamada")}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`relative px-6 py-4 rounded-xl flex-1 transition-all duration-300 flex items-center justify-center cursor-pointer ${
                  selectedOption === "llamada"
                    ? "bg-[#51E171] text-black shadow-lg shadow-[#51E171]/20"
                    : "bg-gray-900/50 border border-gray-800 text-white hover:border-[#51E171]/30"
                }`}
              >
                <div className="flex items-center cursor-pointer">
                  <Phone className={`h-5 w-5 ${selectedOption === "llamada" ? "text-black" : "text-[#51E171]"} mr-3`} />
                  <span className="font-medium">Agendar Llamada</span>
                </div>
              </motion.button>

              <motion.button
                onClick={() => handleOptionSelect("whatsapp")}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`relative px-6 py-4 rounded-xl flex-1 transition-all duration-300 flex items-center justify-center cursor-pointer ${
                  selectedOption === "whatsapp"
                    ? "bg-[#51E171] text-black shadow-lg shadow-[#51E171]/20"
                    : "bg-gray-900/50 border border-gray-800 text-white hover:border-[#51E171]/30"
                }`}
              >
                <div className="flex items-center cursor-pointer">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className={`h-5 w-5 ${selectedOption === "whatsapp" ? "text-black" : "text-[#51E171]"} mr-3`}
                  >
                    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                    <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                    <path d="M9.5 13.5c.5 1 1.5 1 2 1s1.5 0 2-1" />
                  </svg>
                  <span className="font-medium">Hablar por WhatsApp</span>
                </div>
              </motion.button>
            </div>
          </div>

          {/* Contenido dinámico basado en la selección */}
          <AnimatePresence mode="wait">
            {selectedOption && selectedOption !== "presupuesto" && (
              <motion.div
                key={selectedOption}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="max-w-2xl mx-auto bg-gray-900/50 border border-gray-800 rounded-xl p-6"
              >
                {selectedOption === "llamada" && (
                  <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row items-start">
                      <div className="p-2 rounded-full bg-[#51E171]/10 text-[#51E171] mb-4 sm:mb-0 sm:mr-4">
                        <Calendar className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-white mb-2">Agenda una llamada con nuestro equipo</h3>
                        <p className="text-gray-300">
                          Una conversación directa nos permitirá entender mejor tu proyecto y ofrecerte la solución más
                          adecuada. Nuestros especialistas te guiarán a través de las opciones disponibles y responderán
                          todas tus dudas.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start">
                      <div className="p-2 rounded-full bg-[#51E171]/10 text-[#51E171] mb-4 sm:mb-0 sm:mr-4">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-white mb-2">Disponibilidad inmediata</h3>
                        <p className="text-gray-300">
                          Contamos con horarios flexibles para adaptarnos a tu agenda. La llamada tiene una duración
                          aproximada de 30 minutos, tiempo suficiente para analizar tus necesidades y proponer
                          soluciones.
                        </p>
                      </div>
                    </div>

                    <Link href="https://calendly.com/your-calendar-link" className="block mt-6 cursor-pointer">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-4 bg-[#51E171] text-black font-medium rounded-lg hover:bg-[#51E171]/90 transition-colors flex items-center justify-center cursor-pointer"
                      >
                        <span>Seleccionar fecha y hora</span>
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </motion.button>
                    </Link>
                  </div>
                )}

                {selectedOption === "whatsapp" && (
                  <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row items-start">
                      <div className="p-2 rounded-full bg-[#51E171]/10 text-[#51E171] mb-4 sm:mb-0 sm:mr-4">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          className="h-6 w-6"
                        >
                          <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                          <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                          <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                          <path d="M9.5 13.5c.5 1 1.5 1 2 1s1.5 0 2-1" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-white mb-2">Comunicación directa y rápida</h3>
                        <p className="text-gray-300">
                          Nuestro equipo está disponible para responder tus consultas de forma inmediata a través de
                          WhatsApp. Esta vía de comunicación es ideal para resolver dudas puntuales o iniciar una
                          conversación sobre tu proyecto.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start">
                      <div className="p-2 rounded-full bg-[#51E171]/10 text-[#51E171] mb-4 sm:mb-0 sm:mr-4">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-white mb-2">Atención personalizada</h3>
                        <p className="text-gray-300">
                          Te atenderá un asesor especializado que podrá guiarte en el proceso de desarrollo de tu
                          proyecto. Podrás compartir referencias, ideas o cualquier información relevante para comenzar
                          a trabajar.
                        </p>
                      </div>
                    </div>

                    <Link
                      href="https://wa.me/5491150979192"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block mt-6 cursor-pointer"
                    >
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-4 bg-[#51E171] text-black font-medium rounded-lg hover:bg-[#51E171]/90 transition-colors flex items-center justify-center cursor-pointer"
                      >
                        <span>Iniciar conversación</span>
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </motion.button>
                    </Link>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Modal de formulario - Versión mejorada y responsive */}
          <AnimatePresence>
            {showForm && (
              <div className="fixed inset-0 bg-black/80 z-50 overflow-hidden flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 overflow-y-auto"
                  onClick={handleCloseForm}
                >
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.9, opacity: 0 }}
                      transition={{ type: "spring", damping: 25, stiffness: 300 }}
                      className="bg-gray-900 border border-gray-800 rounded-xl p-6 w-full max-w-md relative mx-auto"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        onClick={handleCloseForm}
                        className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-800 transition-colors cursor-pointer"
                        aria-label="Cerrar formulario"
                      >
                        <X className="h-5 w-5 text-gray-400" />
                      </button>

                      {!isSubmitted ? (
                        <>
                          <h3 className="text-xl font-medium text-[#EDFFCD] mb-2">Solicitar presupuesto personalizado</h3>
                          <p className="text-gray-300 mb-6">
                            Completa el formulario con los detalles de tu proyecto y te enviaremos una propuesta detallada
                            en menos de 24 horas.
                          </p>
                          <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                                Nombre completo
                              </label>
                              <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#51E171]/50 cursor-text"
                                placeholder="Ingresa tu nombre completo"
                                required
                              />
                            </div>

                            <div>
                              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                                Correo electrónico
                              </label>
                              <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#51E171]/50 cursor-text"
                                placeholder="tu@email.com"
                                required
                              />
                              <p className="text-xs text-gray-500 mt-1">
                                Te enviaremos el presupuesto a esta dirección de correo
                              </p>
                            </div>

                            <div>
                              <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-1">
                                Teléfono de contacto
                              </label>
                              <input
                                type="tel"
                                id="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#51E171]/50 cursor-text"
                                placeholder="Ej: +54 11 1234-5678"
                              />
                              <p className="text-xs text-gray-500 mt-1">
                                Opcional, para consultas adicionales sobre tu proyecto
                              </p>
                            </div>

                            <div>
                              <label htmlFor="projectType" className="block text-sm font-medium text-gray-400 mb-1">
                                Tipo de proyecto
                              </label>
                              <select
                                id="projectType"
                                value={projectType}
                                onChange={(e) => setProjectType(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#51E171]/50 cursor-pointer appearance-none"
                                required
                              >
                                <option value="">Selecciona una opción</option>
                                {projectTypes.map((type) => (
                                  <option key={type.id} value={type.id}>
                                    {type.name}
                                  </option>
                                ))}
                              </select>
                            </div>

                            <div>
                              <label htmlFor="description" className="block text-sm font-medium text-gray-400 mb-1">
                                Descripción del proyecto
                              </label>
                              <textarea
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#51E171]/50 min-h-[120px] cursor-text resize-y"
                                placeholder="Describe tu idea, objetivos, funcionalidades deseadas y cualquier detalle relevante para tu proyecto..."
                                required
                              ></textarea>
                              <p className="text-xs text-gray-500 mt-1">
                                Cuantos más detalles nos proporciones, más preciso será el presupuesto
                              </p>
                            </div>

                            <motion.button
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              type="submit"
                              className="w-full py-4 bg-[#51E171] text-black font-medium rounded-lg hover:bg-[#51E171]/90 transition-colors flex items-center justify-center cursor-pointer mt-4"
                            >
                              <span>Solicitar presupuesto sin compromiso</span>
                              <Send className="ml-2 h-5 w-5" />
                            </motion.button>
                          </form>
                        </>
                      ) : (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="py-8 text-center"
                        >
                          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#51E171]/20 text-[#51E171] mb-4">
                            <CheckCircle className="h-8 w-8" />
                          </div>
                          <h3 className="text-xl font-medium text-[#EDFFCD] mb-2">Solicitud recibida con éxito</h3>
                          <p className="text-gray-300 mb-4">
                            Hemos recibido tu solicitud de presupuesto. Nuestro equipo está analizando tu proyecto y te
                            enviaremos una propuesta detallada en menos de 24 horas.
                          </p>
                          <p className="text-sm text-[#51E171]">Revisa tu bandeja de entrada próximamente</p>
                        </motion.div>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
