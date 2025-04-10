"use client";
import React, { useState } from "react";
import { Bot, X, Send } from "lucide-react";

export default function Chatbot() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState(""); // Estado para el mensaje actual
  const [messages, setMessages] = useState<string[]>([]); // Estado para la lista de mensajes
  const [loading, setLoading] = useState(false); // Estado para indicar si la API está procesando

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleSendMessage = async () => {
    if (message.trim() === "") return;

    // Agregar el mensaje del usuario a la lista
    setMessages((prevMessages) => [...prevMessages, `Tú: ${message}`]);
    setMessage(""); // Limpiar el campo de entrada
    setLoading(true); // Mostrar indicador de carga

    try {
      const response = await fetch("/api/api-openai/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [
            { role: "user", content: [{ type: "text", text: message }] },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error("Error en la respuesta del servidor");
      }

      const data = await response.json();
      const botMessage = data.message;

      // Agregar la respuesta del bot a la lista de mensajes
      setMessages((prevMessages) => [...prevMessages, `Bot: ${botMessage}`]);
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        "Bot: Hubo un error al procesar tu mensaje.",
      ]);
    } finally {
      setLoading(false); // Ocultar indicador de carga
    }
  };

  return (
    <>
      <div
        onClick={toggleChat}
        className="fixed bottom-5 right-5 w-16 h-16 bg-[#51E171] rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-[#51E171]/80 transition-colors z-50"
      >
        <Bot className="h-8 w-8 text-white" />
      </div>

      {isChatOpen && (
        <div className="fixed bottom-5 right-5 w-80 h-96 bg-black rounded-lg shadow-lg z-50 flex flex-col">
          <div className="p-4 bg-[#333333] text-white font-bold rounded-t-lg flex justify-between items-center">
            <span>Chatbot</span>
            <button
              onClick={toggleChat}
              className="text-white hover:text-gray-400"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto">
            {messages.length === 0 ? (
              <p className="text-gray-400">¡Hola! ¿En qué puedo ayudarte?</p>
            ) : (
              messages.map((msg, index) => (
                <p key={index} className="text-white mb-2">
                  {msg}
                </p>
              ))
            )}
            {loading && (
              <p className="text-gray-400">El bot está escribiendo...</p>
            )}
          </div>

          <div className="p-4 bg-[#1a1a1a] border-t border-gray-700 flex items-center">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)} // Actualizar el estado del mensaje
              placeholder="Escribe un mensaje..."
              className="flex-1 p-2 bg-[#333333] text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#51E171]"
            />
            <button
              onClick={handleSendMessage} // Llamar a la función de envío
              className="ml-2 p-2 bg-[#51E171] rounded-full hover:bg-[#51E171]/80 transition-colors"
              disabled={loading} // Deshabilitar el botón mientras se procesa
            >
              <Send className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
