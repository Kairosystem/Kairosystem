import { NextResponse } from "next/server"
import { Resend } from "resend"

// Inicializar Resend con la API key
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req) {
  try {
    // Extraer los datos del formulario
    const { name, email, phone, projectType, description } = await req.json()

    // Validar que los campos requeridos estén presentes
    if (!name || !email || !projectType || !description) {
      return NextResponse.json({ error: "Faltan campos obligatorios" }, { status: 400 })
    }

    // Mapear el tipo de proyecto a un nombre más descriptivo
    const projectTypeMap = {
      web: "Página Web",
      app: "Aplicación Móvil",
      ecommerce: "Tienda Online",
      software: "Software a Medida",
      other: "Otro",
    }

    const projectTypeName = projectTypeMap[projectType] || projectType

    // Formatear la fecha actual
    const currentDate = new Date().toLocaleDateString("es-AR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })

    // Enviar el correo electrónico con diseño mejorado
    const { error } = await resend.emails.send({
      from: "Formulario KairoSystem <onboarding@resend.dev>",
      to: "kairosystem.dev@gmail.com",
      subject: `Nueva solicitud de presupuesto: ${projectTypeName}`,
      html: `
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Nueva Solicitud de Presupuesto</title>
          <!--[if mso]>
          <style type="text/css">
            table, td, div, h1, p {font-family: Arial, sans-serif !important;}
            .spacer {line-height: 20px;}
          </style>
          <![endif]-->
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Arial, Helvetica, sans-serif; background-color: #f5f5f5; color: #333333;">
          <!-- Contenedor principal -->
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">
            <tr>
              <td align="center" style="padding: 20px 0;">
                <!-- Contenido del email -->
                <table role="presentation" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse; max-width: 600px; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
                  
                  <!-- Encabezado -->
                  <tr>
                    <td style="background-color: #222222; padding: 30px 40px; text-align: center;">
                      <h1 style="color: #ffffff; font-size: 24px; margin: 0; font-weight: 600;">Nueva Solicitud de Presupuesto</h1>
                      <div style="height: 4px; width: 80px; background-color: #51E171; margin: 15px auto 0;"></div>
                    </td>
                  </tr>
                  
                  <!-- Introducción -->
                  <tr>
                    <td style="padding: 30px 40px 20px;">
                      <p style="margin: 0; font-size: 16px; line-height: 24px; color: #555555;">
                        Se ha recibido una nueva solicitud de presupuesto a través del formulario de contacto. A continuación se detallan los datos proporcionados por el cliente:
                      </p>
                    </td>
                  </tr>
                  
                  <!-- Datos del cliente -->
                  <tr>
                    <td style="padding: 0 40px 20px;">
                      <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse; background-color: #f9f9f9; border-radius: 8px; border-left: 4px solid #222222;">
                        <tr>
                          <td style="padding: 20px;">
                            <h2 style="color: #222222; font-size: 18px; margin: 0 0 15px; font-weight: 600;">Datos del Cliente</h2>
                            <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">
                              <tr>
                                <td width="100" style="padding: 8px 0; color: #666666; font-weight: 600;">Nombre:</td>
                                <td style="padding: 8px 0;">${name}</td>
                              </tr>
                              <tr>
                                <td width="100" style="padding: 8px 0; color: #666666; font-weight: 600;">Email:</td>
                                <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #51E171; text-decoration: none;">${email}</a></td>
                              </tr>
                              <tr>
                                <td width="100" style="padding: 8px 0; color: #666666; font-weight: 600;">Teléfono:</td>
                                <td style="padding: 8px 0;">${phone || "No proporcionado"}</td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  
                  <!-- Detalles del proyecto -->
                  <tr>
                    <td style="padding: 0 40px 30px;">
                      <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse; background-color: #f9f9f9; border-radius: 8px; border-left: 4px solid #51E171;">
                        <tr>
                          <td style="padding: 20px;">
                            <h2 style="color: #222222; font-size: 18px; margin: 0 0 15px; font-weight: 600;">Detalles del Proyecto</h2>
                            <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">
                              <tr>
                                <td width="130" style="padding: 8px 0; color: #666666; font-weight: 600;">Tipo de Proyecto:</td>
                                <td style="padding: 8px 0;">
                                  <span style="background-color: #e8f9ef; color: #51E171; padding: 4px 10px; border-radius: 4px; font-size: 14px; font-weight: 500;">${projectTypeName}</span>
                                </td>
                              </tr>
                            </table>
                            
                            <h3 style="color: #222222; font-size: 16px; margin: 20px 0 10px; font-weight: 600;">Descripción:</h3>
                            <div style="background-color: #ffffff; padding: 15px; border-radius: 6px; border: 1px solid #eeeeee;">
                              <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #444444; white-space: pre-wrap;">${description}</p>
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  
                  <!-- Acciones -->
                  <tr>
                    <td style="padding: 0 40px 30px; text-align: center;">
                      <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">
                        <tr>
                          <td style="padding: 0;">
                            <a href="mailto:${email}" style="display: inline-block; background-color: #51E171; color: #000000; text-decoration: none; padding: 12px 25px; border-radius: 6px; font-weight: 600; font-size: 16px;">Responder al Cliente</a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  
                  <!-- Pie de página -->
                  <tr>
                    <td style="background-color: #f5f5f5; padding: 20px 40px; text-align: center; border-top: 1px solid #eeeeee;">
                      <p style="margin: 0 0 10px; font-size: 14px; color: #777777;">
                        Este correo fue enviado automáticamente desde el formulario de contacto de KairoSystem.
                      </p>
                      <p style="margin: 0; font-size: 14px; color: #777777;">
                        Fecha: ${currentDate}
                      </p>
                      <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse; margin-top: 15px;">
                        <tr>
                          <td align="center">
                            <div style="display: inline-block; height: 3px; width: 30px; background-color: #222222; margin: 0 5px;"></div>
                            <div style="display: inline-block; height: 3px; width: 30px; background-color: #51E171; margin: 0 5px;"></div>
                            <div style="display: inline-block; height: 3px; width: 30px; background-color: #222222; margin: 0 5px;"></div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    })

    if (error) {
      console.error("Error al enviar el correo:", error)
      return NextResponse.json({ error: "Error al enviar el correo" }, { status: 500 })
    }

    return NextResponse.json({ success: true, message: "Solicitud enviada correctamente" }, { status: 200 })
  } catch (error) {
    console.error("Error en el servidor:", error)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
