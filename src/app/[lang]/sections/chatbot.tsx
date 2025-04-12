"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import { Bot, X, Send, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Dictionary } from "../dictionaries";

// Definir tipos para los mensajes
type MessageRole = "user" | "bot";

interface ChatMessage {
  content: string;
  role: MessageRole;
  timestamp: Date;
}

export default function Chatbot({ lang, dictionary }: { lang: string; dictionary: Dictionary }) {
  const t = dictionary.chatbot;
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      content: t.mensaje_bienvenida,
      role: "bot",
      timestamp: new Date(),
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Efecto para hacer scroll al último mensaje
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Efecto para enfocar el input cuando se abre el chat
  useEffect(() => {
    if (isChatOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [isChatOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleSendMessage = async () => {
    if (message.trim() === "") return;

    // Agregar el mensaje del usuario a la lista
    const userMessage: ChatMessage = {
      content: message,
      role: "user",
      timestamp: new Date(),
    };

    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setMessage(""); // Limpiar el campo de entrada
    setLoading(true); // Mostrar indicador de carga

    // Simular efecto de escritura
    setIsTyping(true);

    try {
      const response = await fetch("/api/api-routerApi", {
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

      // Pequeña pausa para simular que el bot está escribiendo
      setTimeout(() => {
        setIsTyping(false);

        // Agregar la respuesta del bot a la lista de mensajes
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            content: botMessage,
            role: "bot",
            timestamp: new Date(),
          },
        ]);

        setLoading(false); // Ocultar indicador de carga
      }, 1000);
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);

      setTimeout(() => {
        setIsTyping(false);
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            content: t.error_mensaje,
            role: "bot",
            timestamp: new Date(),
          },
        ]);
        setLoading(false);
      }, 1000);
    }
  };

  // Manejar envío con Enter
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey && !loading) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Formatear la hora para los mensajes
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <>
      {/* Botón del chatbot */}
      <motion.div
        onClick={toggleChat}
        className="fixed bottom-5 right-5 w-14 h-14 bg-[#51E171] rounded-full flex items-center justify-center shadow-lg cursor-pointer z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <Bot className="h-8 w-8 text-white" />
      </motion.div>

      {/* Ventana del chat */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed z-50 flex flex-col bg-gradient-to-b from-gray-900 to-black rounded-xl overflow-hidden"
            style={{
              bottom: "1.25rem",
              right: "1.25rem",
              width: "calc(100% - 2.5rem)",
              maxWidth: "24rem",
              height: "min(32rem, calc(100vh - 10rem))",
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
            }}
          >
            {/* Header del chat */}
            <div className="flex items-center justify-between bg-gradient-to-r from-[#333333] to-[#222222] p-4 border-b border-gray-700">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-[#51E171] flex items-center justify-center">
                  <Bot className="h-5 w-5 text-black" />
                </div>
                <div>
                  <h3 className="font-medium text-white">
                    {t.titulo}
                  </h3>
                  <div className="flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-[#51E171]"></span>
                    <span className="text-xs text-gray-300">{t.estado}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={toggleChat}
                className="text-gray-400 hover:text-white p-1 rounded-full hover:bg-gray-700/50 transition-colors"
                aria-label={t.cerrar}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Contenido del chat */}
            <div
              className="flex-1 p-4 overflow-y-auto"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "#51E171 #333333",
              }}
            >
              <div className="space-y-4">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      msg.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                        msg.role === "user"
                          ? "bg-[#51E171] text-black rounded-tr-none"
                          : "bg-gray-800 text-white rounded-tl-none"
                      }`}
                    >
                      <div className="text-sm break-words whitespace-pre-wrap">
                        {msg.content}
                      </div>
                      <div
                        className={`text-[10px] mt-1 ${
                          msg.role === "user"
                            ? "text-black/70"
                            : "text-gray-400"
                        } text-right`}
                      >
                        {formatTime(msg.timestamp)}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Indicador de escritura */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-800 text-white rounded-2xl rounded-tl-none px-4 py-3">
                      <div className="flex space-x-1">
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{
                            repeat: Number.POSITIVE_INFINITY,
                            duration: 1,
                          }}
                          className="h-2 w-2 rounded-full bg-gray-400"
                        />
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{
                            repeat: Number.POSITIVE_INFINITY,
                            duration: 1,
                            delay: 0.2,
                          }}
                          className="h-2 w-2 rounded-full bg-gray-400"
                        />
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{
                            repeat: Number.POSITIVE_INFINITY,
                            duration: 1,
                            delay: 0.4,
                          }}
                          className="h-2 w-2 rounded-full bg-gray-400"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Elemento invisible para scroll */}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Footer con input */}
            <div className="p-3 bg-[#1a1a1a] border-t border-gray-800">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder={t.placeholder}
                  className="flex-1 p-3 bg-[#333333] text-white border border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-[#51E171] text-sm"
                  disabled={loading}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSendMessage}
                  className="p-3 bg-[#51E171] rounded-full text-black hover:bg-[#51E171]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={loading || message.trim() === ""}
                >
                  {loading ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <Send className="h-5 w-5" />
                  )}
                </motion.button>
              </div>
              <div className="mt-2 text-center">
                <span className="text-[10px] text-gray-500">
                  {t.powered_by}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
