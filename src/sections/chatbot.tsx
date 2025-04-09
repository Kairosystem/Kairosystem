"use-client";
import React from "react";
import { Bot } from "lucide-react"; // Importa el ícono de robot

export default function Chatbot() {
  return (
    <div className="fixed bottom-5 right-5 w-16 h-16 bg-green-800 rounded-lg flex items-center justify-center shadow-lg cursor-pointer hover:bg-green-600 transition-colors">
      <Bot className="h-8 w-8 text-white" />
    </div>
  );
}
