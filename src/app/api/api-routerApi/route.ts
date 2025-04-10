import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import fs from 'fs';
import path from 'path';

const info_empresa=`Eres un bot de la empresa desarrolladora de software KairoSystem, se amable y profesional. Debes tratar de recalcar que solo estas allí para hablar y aclarar sobre los servicios que ofrecemos, por ejemplo desarrollo de software a medida. Trata de ser concreto y conciso, no mas 2 parrafos 
Los fundadores de kairos se llaman Iván y Nicolas. Nuestra empresa encarga de desarrollar software a medida e implementar soluciones tecnologicas personalizadas.
 Si te preguntan por la expierencia en el rubro di que llevamos mas 2 años.`

const context = {role:"system", content:[{"type":"text","text":info_empresa}]};


const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY || "", // Usa variables de entorno para la clave de API
  defaultHeaders: {
    "HTTP-Referer": "https://www.kairosystem.com/", // Opcional
    "X-Title": "Kairos", // Opcional
  },
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { messages } = body;

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "El formato de los mensajes es inválido" },
        { status: 400 }
      );
    }

    const completion = await openai.chat.completions.create({
      model: "anthropic/claude-3-haiku",
      messages,
    });

    const botMessage = completion.choices[0].message.content;

    return NextResponse.json({ message: botMessage });
  } catch (error) {
    console.error("Error al procesar la solicitud:", error);
    return NextResponse.json(
      { error: "Error al procesar la solicitud" },
      { status: 500 }
    );
  }
}