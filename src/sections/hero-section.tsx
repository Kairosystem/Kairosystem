"use client"

import { useEffect, useRef } from "react"

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  // Asegurar que el video se reproduzca correctamente
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Error reproduciendo el video:", error)
      })
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Video de fondo */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videohero.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento video.
        </video>
      </div>

      {/* Overlay para mejorar legibilidad del texto */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>

      <div className="container mx-auto px-4 pt-24 z-20 relative">
        <div className="max-w-3xl space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Soluciones <span className="text-green-500 animate-pulse-slow">digitales</span> a tu medida
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Desarrollamos páginas web y software personalizado para potenciar tu negocio en el mundo digital.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="btn-primary text-lg py-4 px-8 animate-glow group">
              <span className="relative z-10">Comenzar Ahora</span>
            </button>
            <button className="btn-outline text-lg py-4 px-8 group">
              <span className="relative z-10">Agendar Demo</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-green-500"
        >
          <path d="M12 5v14" />
          <path d="m19 12-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
