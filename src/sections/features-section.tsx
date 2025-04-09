export default function FeaturesSection() {
    return (
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Tecnología <span className="text-green-500">avanzada</span> para tu negocio
            </h2>
            <p className="text-xl text-gray-400">
              Utilizamos las últimas tecnologías para crear soluciones digitales rápidas, seguras y escalables.
            </p>
          </div>
  
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div
              className="bg-gray-900 bg-opacity-50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-green-500/30 card-hover animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="h-12 w-12 rounded-lg bg-green-500/20 flex items-center justify-center mb-6 animate-float">
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
                  className="h-6 w-6 text-green-500"
                >
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                  <path d="M3 6h18" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">E-commerce</h3>
              <p className="text-gray-400">
                Tiendas online optimizadas para convertir visitantes en clientes y aumentar tus ventas.
              </p>
            </div>
  
            {/* Feature 2 */}
            <div
              className="bg-gray-900 bg-opacity-50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-green-500/30 card-hover animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="h-12 w-12 rounded-lg bg-green-500/20 flex items-center justify-center mb-6 animate-float">
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
                  className="h-6 w-6 text-green-500"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" x2="22" y1="12" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Diseño Responsivo</h3>
              <p className="text-gray-400">
                Sitios web que se adaptan perfectamente a cualquier dispositivo, desde móviles hasta escritorio.
              </p>
            </div>
  
            {/* Feature 3 */}
            <div
              className="bg-gray-900 bg-opacity-50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-green-500/30 card-hover animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="h-12 w-12 rounded-lg bg-green-500/20 flex items-center justify-center mb-6 animate-float">
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
                  className="h-6 w-6 text-green-500"
                >
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Código Limpio</h3>
              <p className="text-gray-400">
                Desarrollo con las mejores prácticas para garantizar un rendimiento óptimo y mantenibilidad.
              </p>
            </div>
          </div>
        </div>
  
        {/* Animated background elements */}
        <div
          className="absolute -bottom-24 -left-24 w-64 h-64 bg-green-500 bg-opacity-10 rounded-full animate-pulse-slow"
          style={{ filter: "blur(60px)" }}
        ></div>
        <div
          className="absolute top-1/2 right-0 w-80 h-80 bg-green-500 bg-opacity-5 rounded-full animate-pulse-slow"
          style={{ filter: "blur(60px)", animationDelay: "1s" }}
        ></div>
      </section>
    )
  }
  