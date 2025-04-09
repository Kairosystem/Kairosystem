"use client"

import { motion } from "framer-motion"
import { ShoppingBag, Smartphone, Code, Zap, Layers, Lock } from 'lucide-react'

export default function FeaturesSection() {
  const features = [
    {
      icon: <ShoppingBag className="h-6 w-6" />,
      title: "E-commerce",
      description: "Tiendas online optimizadas para convertir visitantes en clientes y aumentar tus ventas.",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Diseño Responsivo",
      description: "Sitios web que se adaptan perfectamente a cualquier dispositivo, desde móviles hasta escritorio.",
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Código Limpio",
      description: "Desarrollo con las mejores prácticas para garantizar un rendimiento óptimo y mantenibilidad.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Alto Rendimiento",
      description: "Aplicaciones rápidas y eficientes que ofrecen una experiencia de usuario excepcional.",
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Escalabilidad",
      description: "Soluciones que crecen con tu negocio, adaptándose a nuevas necesidades y volumen de usuarios.",
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Seguridad",
      description: "Implementación de protocolos de seguridad avanzados para proteger datos e información sensible.",
    },
  ]

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#51E171]/30 to-transparent"></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute -top-[300px] -left-[300px] w-[600px] h-[600px] rounded-full bg-[#51E171]/5 blur-3xl"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute -bottom-[200px] -right-[200px] w-[500px] h-[500px] rounded-full bg-[#51E171]/5 blur-3xl"
      ></motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="h-1 w-20 bg-[#51E171] mx-auto mb-6"
          ></motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#EDFFCD]">
            <span className="text-[#EDFFCD]">Tecnología</span>{" "}
            <span className="text-[#51E171]">avanzada</span> para tu negocio
          </h2>
          <p className="text-xl text-gray-400">
            Utilizamos las últimas tecnologías para crear soluciones digitales rápidas, seguras y escalables.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 hover:border-[#51E171]/30 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#51E171]/10 text-[#51E171] group-hover:bg-[#51E171]/20 transition-all duration-300">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#51E171] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block px-6 py-3 border border-[#51E171]/30 rounded-full bg-[#51E171]/5 text-[#EDFFCD]">
            <span className="text-sm font-medium">Tecnologías de vanguardia para resultados excepcionales</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
