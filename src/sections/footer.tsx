import Image from "next/image"
import Link from "next/link"
import Logo from "../../public/kairos_logo.png"

export default function Footer() {
  return (
    <footer className="py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <Image
              src={Logo || "/placeholder.svg"}
              alt="KairoSystem Logo"
              width={32}
              height={32}
              className="h-8 w-auto"
            />
            <span className="text-lg font-medium">KairoSystem</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
            <Link href="#servicios" className="text-gray-400 hover:text-green-500 transition-colors">
              Servicios
            </Link>
            <Link href="#web" className="text-gray-400 hover:text-green-500 transition-colors">
              Páginas Web
            </Link>
            <Link href="#software" className="text-gray-400 hover:text-green-500 transition-colors">
              Software
            </Link>
            <Link href="#contacto" className="text-gray-400 hover:text-green-500 transition-colors">
              Contacto
            </Link>
          </div>

          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} KairoSystem. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  )
}
