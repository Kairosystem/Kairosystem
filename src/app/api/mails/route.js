import { NextResponse } from "next/server";
import { Resend } from "resend";

// Inicializar Resend con la API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    // Extraer los datos del formulario
    const { name, email, phone, projectType, description } = await req.json();

    // Validar que los campos requeridos estén presentes
    if (!name || !email || !projectType || !description) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios" },
        { status: 400 }
      );
    }

    // Mapear el tipo de proyecto a un nombre más descriptivo
    const projectTypeMap = {
      web: "Página Web",
      app: "Aplicación Móvil",
      ecommerce: "Tienda Online",
      software: "Software a Medida",
      other: "Otro",
    };

    const projectTypeName = projectTypeMap[projectType] || projectType;

    // Enviar el correo electrónico
    const { data, error } = await resend.emails.send({
      from: "Formulario KairoSystem <onboarding@resend.dev>",
      to: "kairosystem.dev@gmail.com",
      subject: `Nueva solicitud de presupuesto: ${projectTypeName}`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 650px; margin: 0 auto; padding: 30px; border-radius: 12px; border: 1px solid #e0e0e0; box-shadow: 0 6px 18px rgba(0,0,0,0.08); background-color: #ffffff;">
          <div style="text-align: center; margin-bottom: 30px; padding-bottom: 20px; border-bottom: 1px solid #eaeaea;">
            <h1 style="color: #222222; font-size: 28px; margin-bottom: 15px; font-weight: 600;">Nueva Solicitud de Presupuesto</h1>
            <div style="height: 5px; width: 100px; background: linear-gradient(90deg, #333333, #51E171); margin: 0 auto; border-radius: 10px;"></div>
          </div>
          
          <div style="background: linear-gradient(145deg, #f8f9fa, #ffffff); padding: 20px; border-radius: 10px; margin-bottom: 25px; border-left: 4px solid #333333; box-shadow: 0 3px 10px rgba(0,0,0,0.03);">
            <h2 style="color: #333333; font-size: 20px; margin-top: 0; margin-bottom: 15px; font-weight: 600;">Datos del Cliente</h2>
            <p style="margin: 8px 0; font-size: 16px; color: #444;"><strong style="color: #222;">Nombre:</strong> ${name}</p>
            <p style="margin: 8px 0; font-size: 16px; color: #444;"><strong style="color: #222;">Email:</strong> ${email}</p>
            <p style="margin: 8px 0; font-size: 16px; color: #444;"><strong style="color: #222;">Teléfono:</strong> ${phone || "No proporcionado"}</p>
          </div>
          
          <div style="background: linear-gradient(145deg, #f8f9fa, #ffffff); padding: 20px; border-radius: 10px; margin-bottom: 25px; border-left: 4px solid #51E171; box-shadow: 0 3px 10px rgba(0,0,0,0.03);">
            <h2 style="color: #333333; font-size: 20px; margin-top: 0; margin-bottom: 15px; font-weight: 600;">Detalles del Proyecto</h2>
            <p style="margin: 8px 0; font-size: 16px; color: #444;"><strong style="color: #222;">Tipo de Proyecto:</strong> <span style="background-color: #51E17120; padding: 3px 8px; border-radius: 4px;">${projectTypeName}</span></p>
            <div style="margin-top: 20px;">
              <h3 style="color: #333333; font-size: 18px; margin-bottom: 10px; font-weight: 500;">Descripción:</h3>
              <p style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; border-left: 4px solid #51E171; font-size: 15px; line-height: 1.5; color: #333;">${description}</p>
            </div>
          </div>
          
          <div style="text-align: center; color: #666; font-size: 14px; margin-top: 35px; padding-top: 20px; border-top: 1px solid #eaeaea;">
            <p style="margin: 5px 0;">Este correo fue enviado automáticamente desde el formulario de contacto de KairoSystem.</p>
            <p style="margin: 5px 0;">Fecha: ${new Date().toLocaleDateString('es-AR', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
            <div style="margin-top: 15px;">
              <div style="display: inline-block; height: 3px; width: 40px; background-color: #333333; margin: 0 5px; border-radius: 3px;"></div>
              <div style="display: inline-block; height: 3px; width: 40px; background-color: #51E171; margin: 0 5px; border-radius: 3px;"></div>
              <div style="display: inline-block; height: 3px; width: 40px; background-color: #333333; margin: 0 5px; border-radius: 3px;"></div>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Error al enviar el correo:", error);
      return NextResponse.json(
        { error: "Error al enviar el correo" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Solicitud enviada correctamente" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error en el servidor:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
