"use client"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center">
      {/* Overlay para mejorar legibilidad del texto */}
      <div className="absolute inset-0 bg-opacity-40"></div>

      <div className="container mx-auto px-4 z-20 relative mt-0 sm:mt-0 md:mt-0 lg:bottom-40 md:bottom-20 sm:bottom-10">
        <div className="max-w-3xl space-y-4 sm:space-y-5 md:space-y-6 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
            Soluciones <span className="text-green-500">digitales</span> a tu medida
          </h1>
          <p className="text-base sm:text-lg md:text-lg text-gray-200 max-w-2xl">
            Desarrollamos páginas web y software personalizado para potenciar tu negocio en el mundo digital.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-3">
            <button className="btn-primary text-base py-2 sm:py-2.5 md:py-3 px-4 sm:px-5 md:px-6 animate-glow group">
              <span className="relative z-10">Comenzar Ahora</span>
            </button>
            <button className="btn-outline text-base py-2 sm:py-2.5 md:py-3 px-4 sm:px-5 md:px-6 group">
              <span className="relative z-10">Agendar Demo</span>
            </button>
          </div>
        </div>
      </div>

      {/* Video posicionado de manera responsiva - debajo del texto en móvil, arriba en desktop */}
      <div className="w-full z-10 flex justify-center items-center mt-8 sm:mt-6 md:absolute md:top-[20%] sm:absolute sm:top-[15%]">
        <video
          className="w-[95%] sm:w-[90%] md:w-[80%] h-auto object-cover rounded-lg shadow-lg"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/videohero.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento video.
        </video>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
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
