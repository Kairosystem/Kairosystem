"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Mockupel from "@/../public/mockup_elec.png"
import MockupIsh from "@/../public/mockup_ish.png"
import MockupLeo from "@/../public/mockup_leo.png"
import MockupIde from "@/../public/mockup_ide.png"
import type { Dictionary } from "../dictionaries"

interface PortfolioSectionProps {
  lang: string
  dictionary: Dictionary
}

export default function PortfolioSection({ dictionary }: PortfolioSectionProps) {
  // Estado para controlar cuántos proyectos mostrar
  const [visibleProjects, setVisibleProjects] = useState(3)

  // Obtener los datos del diccionario
  const { portafolio } = dictionary

  // Mapear los proyectos con las imágenes correspondientes
  const projectImages = [Mockupel, MockupLeo, MockupIsh, MockupIde]
  const projects = portafolio.proyectos.map((proyecto, index) => ({
    id: proyecto.id,
    title: proyecto.titulo,
    description: proyecto.descripcion,
    image: projectImages[index],
    url: proyecto.url,
    tags: proyecto.tags,
  }))

  // Función para cargar más proyectos
  const loadMoreProjects = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, projects.length))
  }

  // Función para mostrar menos proyectos
  const showLessProjects = () => {
    setVisibleProjects(3)
  }

  return (
    <section id="portafolio" className="py-24 bg-black relative overflow-hidden lg:px-20">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#51E171]/30 to-transparent"></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute -top-[300px] -right-[300px] w-[600px] h-[600px] rounded-full bg-[#51E171]/5 blur-3xl"
      ></motion.div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Encabezado de sección */}
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-[#EDFFCD]">{portafolio.titulo_nuestro}</span>{" "}
            <span className="text-[#51E171]">{portafolio.titulo_portafolio}</span>
          </h2>
          <p className="text-xl text-gray-400">
            {portafolio.subtitulo}
          </p>
        </motion.div>

        {/* Grid de proyectos */}
        <div className="grid md:grid-cols-3 gap-6 px-4">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group h-full"
            >
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden transition-all duration-300 group-hover:border-[#51E171]/30 group-hover:shadow-lg group-hover:shadow-[#51E171]/5 h-full flex flex-col">
                {/* Imagen del proyecto */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 "
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <Link
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#51E171] flex items-center gap-2 font-medium cursor-pointer"
                    >
                      <span>{portafolio.verMas}</span>
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                {/* Información del proyecto */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-[#51E171]/10 text-[#51E171] rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#51E171] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm flex-grow">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Botón "Ver más" o "Ver menos" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          {visibleProjects < projects.length ? (
            <motion.button
              onClick={loadMoreProjects}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group flex flex-col items-center gap-2 cursor-pointer"
            >
              <span className="text-[#51E171] font-medium">{portafolio.verMasProyectos}</span>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                className="p-2 rounded-full border border-[#51E171]/30 bg-[#51E171]/10 text-[#51E171] group-hover:bg-[#51E171]/20 transition-colors duration-300"
              >
                <ChevronDown className="h-4 w-4" />
              </motion.div>
            </motion.button>
          ) : (
            <motion.button
              onClick={showLessProjects}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group flex flex-col items-center gap-2 cursor-pointer"
            >
              <span className="text-[#51E171] font-medium">{portafolio.verMenosProyectos}</span>
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                className="p-2 rounded-full border border-[#51E171]/30 bg-[#51E171]/10 text-[#51E171] group-hover:bg-[#51E171]/20 transition-colors duration-300"
              >
                <ChevronUp className="h-4 w-4" />
              </motion.div>
            </motion.button>
          )}
        </motion.div>
      </div>
    </section>
  )
}
