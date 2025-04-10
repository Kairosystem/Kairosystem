"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, MessageSquare, Calendar, Send, CheckCircle, X, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export default function CTASection() {
  // Estados para el formulario simple
  const [showForm, setShowForm] = useState(false)
  const [projectType, setProjectType] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [description, setDescription] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

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
      }, 3000)
    }, 1000)
  }

  // Tipos de proyectos disponibles
  const projectTypes = [
    { id: "web", name: "Página Web" },
    { id: "app", name: "Aplicación Móvil" },
    { id: "ecommerce", name: "Tienda Online" },
    { id: "software", name: "Software a Medida" },
    { id: "other", name: "Otro" },
  ]

  return (
    <section id="contacto" className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
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
              <span className="text-[#EDFFCD]">¿Listo para</span> <span className="text-[#51E171]">impulsar</span>{" "}
              <span className="text-[#EDFFCD]">tu presencia digital?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 max-w-2xl mx-auto"
            >
              Contáctanos hoy mismo y transformaremos tus ideas en soluciones digitales excepcionales.
            </motion.p>
          </div>

          {/* Botones principales */}
          <div className="flex flex-col md:flex-row gap-6 justify-center mb-16">
            <motion.button
              onClick={() => setShowForm(true)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group relative px-8 py-5 bg-[#51E171] text-black font-medium rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#51E171]/20 flex items-center justify-center"
            >
              <span className="text-lg">Solicitar Presupuesto Gratuito</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
                style={{ opacity: 0.2 }}
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group relative px-8 py-5 border border-[#51E171]/50 text-[#51E171] font-medium rounded-xl hover:bg-[#51E171]/10 transition-colors duration-300 flex items-center justify-center"
            >
              <Link href="/proyectos" className="flex items-center">
                <MessageSquare className="mr-2 h-5 w-5" />
                <span className="text-lg">Ver Nuestros Proyectos</span>
              </Link>
            </motion.button>
          </div>

          {/* Información de contacto */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center p-6 bg-gray-900/50 border border-gray-800 rounded-xl"
            >
              <div className="p-3 rounded-full bg-[#51E171]/10 text-[#51E171] mb-4">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Email</h3>
              <Link
                href="mailto:kairosystem.dev@gmail.com"
                className="text-gray-300 hover:text-[#51E171] transition-colors text-center"
              >
                kairosystem.dev@gmail.com
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center p-6 bg-gray-900/50 border border-gray-800 rounded-xl"
            >
              <div className="p-3 rounded-full bg-[#51E171]/10 text-[#51E171] mb-4">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Teléfono</h3>
              <Link
                href="tel:+123456789"
                className="text-gray-300 hover:text-[#51E171] transition-colors"
              >
                +11 5097-9192
              </Link>
            </motion.div>
          </div>

          {/* Modal de formulario simple */}
          <AnimatePresence>
            {showForm && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="bg-gray-900 border border-gray-800 rounded-xl p-6 w-full max-w-md relative"
                >
                  <button
                    onClick={() => setShowForm(false)}
                    className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-800 transition-colors"
                  >
                    <X className="h-5 w-5 text-gray-400" />
                  </button>

                  {!isSubmitted ? (
                    <>
                      <h3 className="text-xl font-medium text-[#EDFFCD] mb-6">Solicitar presupuesto</h3>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                            Tu nombre
                          </label>
                          <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#51E171]/50"
                            placeholder="Escribe tu nombre"
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                            Email de contacto
                          </label>
                          <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#51E171]/50"
                            placeholder="tu@email.com"
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-1">
                            Teléfono (opcional)
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#51E171]/50"
                            placeholder="Tu número de teléfono"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="projectType" className="block text-sm font-medium text-gray-400 mb-1">
                            ¿Qué tipo de proyecto necesitas?
                          </label>
                          <select
                            id="projectType"
                            value={projectType}
                            onChange={(e) => setProjectType(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#51E171]/50"
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
                            Cuéntanos brevemente sobre tu proyecto
                          </label>
                          <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#51E171]/50 min-h-[100px]"
                            placeholder="Describe tu idea o necesidad..."
                            required
                          ></textarea>
                        </div>
                        
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          type="submit"
                          className="w-full py-3 bg-[#51E171] text-black font-medium rounded-lg hover:bg-[#51E171]/90 transition-colors flex items-center justify-center"
                        >
                          <span>Enviar solicitud</span>
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
                      <h3 className="text-xl font-medium text-[#EDFFCD] mb-2">¡Solicitud enviada!</h3>
                      <p className="text-gray-300">Nos pondremos en contacto contigo a la brevedad para discutir tu proyecto.</p>
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
