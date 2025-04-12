"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Send, CheckCircle, X, Mail, Phone, Calendar, Clock } from "lucide-react"
import Link from "next/link"
import type { Dictionary } from "../dictionaries"

export default function CTASection({ dictionary }: { lang: string; dictionary: Dictionary }) {
  // Estados para el formulario y selección
  const [showForm, setShowForm] = useState(false)
  const [projectType, setProjectType] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [description, setDescription] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [formError, setFormError] = useState<string | null>(null)

  // Obtener datos del diccionario
  const { cta: t } = dictionary

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
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormError(null)
    
    // Validar campos requeridos
    if (!name || !email || !projectType || !description) {
      setFormError("Por favor completa todos los campos obligatorios")
      return
    }
    
    setIsSubmitting(true)
    
    try {
      const response = await fetch("/api/mails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          projectType,
          description,
          subject: "Solicitud de presupuesto",
          type: "budget"
        }),
      })
      
      const data = await response.json()
      
      if (!response.ok) {
        throw new Error(data.error || "Error al enviar el formulario")
      }
      
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
    } catch (error) {
      console.error("Error al enviar el formulario:", error)
      setFormError(error instanceof Error ? error.message : "Error al enviar el formulario")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Función para cerrar el formulario
  const handleCloseForm = () => {
    setShowForm(false)
    if (selectedOption === "presupuesto") {
      setSelectedOption(null)
    }
  }

  // Tipos de proyectos disponibles
  const projectTypes = t.tipos_proyecto || [
    { id: "web", nombre: "Página Web" },
    { id: "app", nombre: "Aplicación Móvil" },
    { id: "ecommerce", nombre: "Tienda Online" },
    { id: "software", nombre: "Software a Medida" },
    { id: "other", nombre: "Otro" },
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
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
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
              <span className="text-[#EDFFCD]">{t.titulo_q}</span> <span className="text-[#51E171]">{t.titulo_w}</span>{" "}
              <span className="text-[#EDFFCD]">{t.titulo_s}</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 max-w-2xl mx-auto"
            >
              {t.subtitulo}
            </motion.p>
          </div>

          {/* Selector de opciones interactivo */}
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <motion.button
                onClick={() => handleOptionSelect("presupuesto")}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`relative px-6 py-4 rounded-xl h-full transition-all duration-300 flex items-center justify-center cursor-pointer ${
                  selectedOption === "presupuesto"
                    ? "bg-[#51E171] text-black shadow-lg shadow-[#51E171]/20"
                    : "bg-gray-900/50 border border-gray-800 text-white hover:border-[#51E171]/30"
                }`}
              >
                <div className="flex items-center cursor-pointer">
                  <Mail
                    className={`h-5 w-5 ${selectedOption === "presupuesto" ? "text-black" : "text-[#51E171]"} mr-3`}
                  />
                  <span className="font-medium">{t.opciones.presupuesto.titulo}</span>
                </div>
              </motion.button>

              <motion.button
                onClick={() => handleOptionSelect("llamada")}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`relative px-6 py-4 rounded-xl h-full transition-all duration-300 flex items-center justify-center cursor-pointer ${
                  selectedOption === "llamada"
                    ? "bg-[#51E171] text-black shadow-lg shadow-[#51E171]/20"
                    : "bg-gray-900/50 border border-gray-800 text-white hover:border-[#51E171]/30"
                }`}
              >
                <div className="flex items-center cursor-pointer">
                  <Phone className={`h-5 w-5 ${selectedOption === "llamada" ? "text-black" : "text-[#51E171]"} mr-3`} />
                  <span className="font-medium">{t.opciones.llamada.titulo}</span>
                </div>
              </motion.button>

              <motion.button
                onClick={() => handleOptionSelect("whatsapp")}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`relative px-6 py-4 rounded-xl h-full transition-all duration-300 flex items-center justify-center cursor-pointer ${
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
                  <span className="font-medium">{t.opciones.whatsapp.titulo}</span>
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
                        <h3 className="text-xl font-medium text-white mb-2">{t.opciones.llamada.titulo}</h3>
                        <p className="text-gray-300">
                          {t.opciones.llamada.descripcion}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start">
                      <div className="p-2 rounded-full bg-[#51E171]/10 text-[#51E171] mb-4 sm:mb-0 sm:mr-4">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-white mb-2">{t.opciones.llamada.disponibilidad}</h3>
                        <p className="text-gray-300">
                          {t.opciones.llamada.horarios}
                        </p>
                      </div>
                    </div>

                    <Link href="https://calendly.com/your-calendar-link" className="block mt-6 cursor-pointer">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-4 bg-[#51E171] text-black font-medium rounded-lg hover:bg-[#51E171]/90 transition-colors flex items-center justify-center cursor-pointer"
                      >
                        <span>{t.opciones.llamada.boton}</span>
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
                        <h3 className="text-xl font-medium text-white mb-2">{t.opciones.whatsapp.descripcion}</h3>
                        <p className="text-gray-300">
                          {t.opciones.whatsapp.detalle}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start">
                      <div className="p-2 rounded-full bg-[#51E171]/10 text-[#51E171] mb-4 sm:mb-0 sm:mr-4">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-white mb-2">
                          {t.opciones.whatsapp.atencion}
                        </h3>
                        <p className="text-gray-300">
                          {t.opciones.whatsapp.detalle_atencion}
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
                        <span>{t.opciones.whatsapp.boton}</span>
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
                          <h3 className="text-xl font-medium text-[#EDFFCD] mb-2">
                            {t.formulario.titulo}
                          </h3>
                          <p className="text-gray-300 mb-6">
                            {t.formulario.descripcion}
                          </p>
                          <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                                {t.formulario.nombre}
                              </label>
                              <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#51E171]/50 cursor-text"
                                placeholder={t.formulario.nombre_placeholder}
                                required
                              />
                            </div>

                            <div>
                              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                                {t.formulario.email}
                              </label>
                              <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#51E171]/50 cursor-text"
                                placeholder={t.formulario.email_placeholder}
                                required
                              />
                              <p className="text-xs text-gray-500 mt-1">
                                {t.formulario.email_nota}
                              </p>
                            </div>

                            <div>
                              <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-1">
                                {t.formulario.telefono}
                              </label>
                              <input
                                type="tel"
                                id="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#51E171]/50 cursor-text"
                                placeholder={t.formulario.telefono_placeholder}
                              />
                              <p className="text-xs text-gray-500 mt-1">
                                {t.formulario.telefono_nota}
                              </p>
                            </div>

                            <div>
                              <label htmlFor="projectType" className="block text-sm font-medium text-gray-400 mb-1">
                                {t.formulario.tipo_proyecto}
                              </label>
                              <select
                                id="projectType"
                                value={projectType}
                                onChange={(e) => setProjectType(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#51E171]/50 cursor-pointer appearance-none"
                                required
                              >
                                <option value="">{t.formulario.tipo_proyecto_placeholder}</option>
                                {projectTypes.map((type) => (
                                  <option key={type.id} value={type.id}>
                                    {type.nombre}
                                  </option>
                                ))}
                              </select>
                            </div>

                            <div>
                              <label htmlFor="description" className="block text-sm font-medium text-gray-400 mb-1">
                                {t.formulario.descripcion1}
                              </label>
                              <textarea
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#51E171]/50 min-h-[120px] cursor-text resize-y"
                                placeholder={t.formulario.descripcion_placeholder}
                                required
                              ></textarea>
                              <p className="text-xs text-gray-500 mt-1">
                                {t.formulario.descripcion_nota}
                              </p>
                            </div>

                            {formError && (
                              <div className="p-3 bg-red-900/50 border border-red-800 rounded-lg text-red-200 text-sm">
                                {t.formulario.error}
                              </div>
                            )}

                            <motion.button
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              type="submit"
                              disabled={isSubmitting}
                              className={`w-full py-3 sm:py-4 bg-[#51E171] text-black font-medium rounded-lg hover:bg-[#51E171]/90 transition-colors flex items-center justify-center cursor-pointer mt-4 text-sm sm:text-base ${
                                isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                              }`}
                            >
                              <span className="text-center">
                                {isSubmitting ? t.formulario.enviando : t.formulario.boton_enviar}
                              </span>
                              <Send className="ml-2 mr-2 sm:mr-0 h-4 w-4 sm:h-5 sm:w-5" />
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
                          <h3 className="text-xl font-medium text-[#EDFFCD] mb-2">
                            {t.formulario.exito_titulo}
                          </h3>
                          <p className="text-gray-300 mb-4">
                            {t.formulario.exito_mensaje}
                          </p>
                          <p className="text-sm text-[#51E171]">
                            {t.formulario.exito_nota}
                          </p>
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
