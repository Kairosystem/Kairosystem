export default function ServicesSection() {
    return (
      <section id="servicios" className="py-20 bg-black relative z-30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Nuestros Servicios</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ofrecemos soluciones digitales completas para ayudarte a crecer en el mundo digital
            </p>
          </div>
  
          <div className="grid md:grid-cols-2 gap-8">
            {/* Web Development Card */}
            <div
              id="web"
              className="bg-gray-900 rounded-xl p-8 border border-gray-800 hover:border-green-500 card-hover animate-slide-left"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="h-16 w-16 rounded-full bg-green-500/20 flex items-center justify-center mb-6 animate-pulse-slow">
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
                  className="h-8 w-8 text-green-500"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" x2="22" y1="12" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Páginas Web</h3>
              <p className="text-gray-400 mb-6">
                Diseñamos y desarrollamos sitios web a medida, optimizados para convertir visitantes en clientes.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 hover:translate-x-1 transition-transform">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span>Landing Pages de alto impacto</span>
                </li>
                <li className="flex items-center gap-2 hover:translate-x-1 transition-transform">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span>Sitios web corporativos</span>
                </li>
                <li className="flex items-center gap-2 hover:translate-x-1 transition-transform">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span>Tiendas E-commerce</span>
                </li>
                <li className="flex items-center gap-2 hover:translate-x-1 transition-transform">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span>Soluciones web personalizadas</span>
                </li>
              </ul>
              <button className="btn-outline px-4 py-2 flex items-center group">
                <span className="relative z-10">Conocer más</span>
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
                  className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 relative z-10"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </div>
  
            {/* Software Development Card */}
            <div
              id="software"
              className="bg-gray-900 rounded-xl p-8 border border-gray-800 hover:border-green-500 card-hover animate-slide-right"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="h-16 w-16 rounded-full bg-green-500/20 flex items-center justify-center mb-6 animate-pulse-slow">
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
                  className="h-8 w-8 text-green-500"
                >
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Software a Medida</h3>
              <p className="text-gray-400 mb-6">
                Desarrollamos soluciones de software personalizadas para optimizar tus procesos de negocio.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 hover:translate-x-1 transition-transform">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span>Aplicaciones web empresariales</span>
                </li>
                <li className="flex items-center gap-2 hover:translate-x-1 transition-transform">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span>Sistemas de gestión</span>
                </li>
                <li className="flex items-center gap-2 hover:translate-x-1 transition-transform">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span>Integraciones con APIs</span>
                </li>
                <li className="flex items-center gap-2 hover:translate-x-1 transition-transform">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span>Automatización de procesos</span>
                </li>
              </ul>
              <button className="btn-outline px-4 py-2 flex items-center group">
                <span className="relative z-10">Conocer más</span>
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
                  className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 relative z-10"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }
  