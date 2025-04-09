export default function CTASection() {
    return (
      <section id="contacto" className="py-20" style={{ background: "linear-gradient(to bottom, #000000, #111111)" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gray-900 rounded-2xl p-8 md:p-12 border border-gray-800 relative overflow-hidden animate-fade-in">
            <div
              className="absolute top-0 right-0 w-64 h-64 bg-green-500 bg-opacity-10 rounded-full -translate-y-1/2 translate-x-1/2 animate-pulse-slow"
              style={{ filter: "blur(60px)" }}
            ></div>
  
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                ¿Listo para impulsar tu presencia digital?
              </h2>
              <p className="text-xl text-gray-400 text-center mb-8">
                Contáctanos hoy mismo y comienza a transformar tu negocio con soluciones digitales a medida.
              </p>
  
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="btn-primary text-lg py-4 px-8 animate-glow group">
                  <span className="relative z-10">Solicitar Presupuesto</span>
                </button>
                <button className="btn-outline text-lg py-4 px-8 group">
                  <span className="relative z-10">Agendar Llamada</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  