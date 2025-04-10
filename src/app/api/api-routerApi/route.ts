import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { messages } = body;

    // Validar el formato de los mensajes
    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "El formato de los mensajes es inválido" },
        { status: 400 }
      );
    }

    // Realizar la solicitud a OpenRouter
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`, // Clave de API desde variables de entorno
        "HTTP-Referer": "https://www.kairosystem.com", // URL de tu sitio
        "X-Title": "KairoSystem", // Nombre de tu sitio
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "mistralai/mistral-small-3.1-24b-instruct:free",
        messages,
      }),
    });

    // Verificar si la respuesta es exitosa
    if (!response.ok) {
      const errorDetails = await response.json();
      console.error("Error en la respuesta de OpenRouter:", errorDetails);
      return NextResponse.json(
        { error: "Error al llamar a OpenRouter", details: errorDetails },
        { status: response.status }
      );
    }

    // Extraer el mensaje del bot
    const data = await response.json();
    const botMessage = data.choices[0].message.content;

    // Responder con el mensaje del bot
    return NextResponse.json({ message: botMessage });
  } catch (error) {
    console.error("Error al procesar la solicitud:", error);
    return NextResponse.json(
      { error: "Error al procesar la solicitud" },
      { status: 500 }
    );
  }
}