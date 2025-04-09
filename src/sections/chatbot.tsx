"use client";
import React, { useState } from "react";
import { Bot, X, Send } from "lucide-react";

export default function Chatbot() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
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
            <p className="text-gray-400">¡Hola! ¿En qué puedo ayudarte?</p>
          </div>

          <div className="p-4 bg-[#1a1a1a] border-t border-gray-700 flex items-center">
            <input
              type="text"
              placeholder="Escribe un mensaje..."
              className="flex-1 p-2 bg-[#333333] text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#51E171]"
            />
            <button className="ml-2 p-2 bg-[#51E171] rounded-full hover:bg-[#51E171]/80 transition-colors">
              <Send className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
