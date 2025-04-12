import "server-only"

// Define el tipo de diccionario
export interface Dictionary {
  navbar: {
    servicios: string
    portafolio: string
    contacto: string
    menu: {
      abrir: string
      cerrar: string
    }
  }
  hero: {
    titulo: string
    titulo_literal: string
    titulo_literal_2: string
    subtitulo: string
    boton_portafolio: string
    boton_contacto: string
    badge: string
  }
  servicios: {
    titulo_nuestro: string
    titulo_servicios: string
    subtitulo: string
    web: {
      titulo: string
      descripcion: string
      features: string[]
      benefits: string[]
      cta: string
    }
    software: {
      titulo: string
      descripcion: string
      features: string[]
      benefits: string[]
      cta: string
    }
    data: {
      titulo: string
      descripcion: string
      features: string[]
      benefits: string[]
      cta: string
    }
    chatbot: {
      titulo: string
      descripcion: string
      features: string[]
      benefits: string[]
      cta: string
      nota: string
      nota_literal: string
      caracteristicas: string
      beneficios: string
    }
    cierre: string
    boton_contacto: string
    cierre_contacto: string
  }
  portafolio: {
    titulo_nuestro: string
    titulo_portafolio: string
    subtitulo: string
    verMas: string
    verMasProyectos: string
    verMenosProyectos: string
    proyectos: {
      id: number
      titulo: string
      descripcion: string
      tags: string[]
      url: string
    }[]
  }
  chatbot: {
    titulo: string
    estado: string
    mensaje_bienvenida: string
    placeholder: string
    enviar: string
    escribiendo: string
    error_mensaje: string
    powered_by: string
    cerrar: string
  }
  cta: {
    titulo_q: string
    titulo_w: string
    titulo_s: string
    subtitulo: string
    opciones: {
      presupuesto: {
        titulo: string
        descripcion: string
      }
      llamada: {
        titulo: string
        descripcion: string
        disponibilidad: string
        horarios: string
        boton: string
      }
      whatsapp: {
        titulo: string
        descripcion: string
        detalle: string
        atencion: string
        detalle_atencion: string
        boton: string
      }
    }
    formulario: {
      titulo: string
      descripcion: string
      nombre: string
      nombre_placeholder: string
      email: string
      email_placeholder: string
      email_nota: string
      telefono: string
      telefono_placeholder: string
      telefono_nota: string
      tipo_proyecto: string
      tipo_proyecto_placeholder: string
      descripcion1: string
      descripcion_placeholder: string
      descripcion_nota: string
      boton_enviar: string
      enviando: string
      error: string
      exito_titulo: string
      exito_mensaje: string
      exito_nota: string
    }
    tipos_proyecto: {
      id: string
      nombre: string
    }[]
  }
  footer: {
    logo: {
      descripcion: string
    }
    enlaces_rapidos: {
      titulo: string
      links: string[]
    }
    contacto: {
      titulo: string
      email: string
      telefono: string
      ubicacion: string
    }
    newsletter: {
      titulo: string
      placeholder: string
      boton: string
      gracias: string
    }
    derechos: string
    enlaces_legales: string[]
  }
}

// Cargadores de diccionarios
const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default) as Promise<Dictionary>,
  es: () => import("./dictionaries/es.json").then((module) => module.default) as Promise<Dictionary>,
}

export const getDictionary = async (locale: string): Promise<Dictionary> => {
  // Verificar si el idioma solicitado existe, si no, usar español como predeterminado
  const validLocale = locale in dictionaries ? locale : 'es'
  return (dictionaries as any)[validLocale]()
}
