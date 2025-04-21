"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";
import Image from "next/image";

interface ChatMessage {
  text: string;
  isUser: boolean;
}

export default function RobotAssistant() {
  const [isMinimized, setIsMinimized] = useState(true);
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
    {
      text: "Hallo! Ik ben Turbino, uw persoonlijke assistent van TriviTurbo. Hoe kan ik u vandaag helpen met uw website wensen?",
      isUser: false,
    },
  ]);
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const handleMinimize = () => {
    setIsMinimized(true);
  };

  const handleMaximize = () => {
    setIsMinimized(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || isLoading) return;

    const userMessage = { text: userInput, isUser: true };
    setChatHistory((prev) => [...prev, userMessage]);
    setUserInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userInput,
          history: chatHistory,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const data = await response.json();

      setChatHistory((prev) => [...prev, { text: data.response, isUser: false }]);
    } catch (error) {
      console.error("Error getting AI response:", error);
      setChatHistory((prev) => [
        ...prev,
        {
          text: "Er lijkt een probleem te zijn met mijn verbinding. Probeer het later nog eens of neem direct contact op via het contactformulier.",
          isUser: false,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isMounted) return null;

  return (
    <>
      <AnimatePresence>
        {!isMinimized ? (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed bottom-4 right-4 z-50 w-80 md:w-96 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(7,42,200,0.3)]"
          >
            <div className="bg-gradient-to-r from-[#072ac8] to-[#1e96fc] p-4 flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-12 h-12 mr-3 relative bg-white rounded-full p-1 shadow-md">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-[#a2d6f9] to-[#1e96fc] flex items-center justify-center">
                    <Image src="/turbino.png" alt="Turbino" width={40} height={40} className="rounded-full" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#ffc600] rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <div className="text-sm text-white font-bold">Turbino</div>
                  <div className="text-xs text-white/80">TriviTurbo Assistent</div>
                </div>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={handleMinimize}
                  className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                  aria-label="Minimaliseren"
                >
                  <div className="w-3 h-0.5 bg-white rounded-full"></div>
                </button>
              </div>
            </div>

            <div className="bg-white border border-gray-100 shadow-inner p-4">
              <div
                ref={chatContainerRef}
                className="h-96 overflow-y-auto pr-2 space-y-4 mb-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
              >
                {chatHistory.length > 0 && (
                  <>
                    {chatHistory.map((message, index) => (
                      <div key={index} className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}>
                        {!message.isUser && (
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#a2d6f9] to-[#1e96fc] flex items-center justify-center mr-2 flex-shrink-0 shadow-sm">
                            <Image src="/turbino.png" alt="Turbino" width={32} height={32} className="rounded-full" />
                          </div>
                        )}
                        <div
                          className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                            message.isUser
                              ? "bg-[#072ac8] text-white rounded-br-none"
                              : "bg-gray-100 text-gray-800 rounded-bl-none border border-gray-200"
                          }`}
                        >
                          {message.text}
                        </div>
                        {message.isUser && (
                          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center ml-2 flex-shrink-0">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-gray-600"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                              />
                            </svg>
                          </div>
                        )}
                      </div>
                    ))}
                    {isLoading && (
                      <div className="flex justify-start">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#a2d6f9] to-[#1e96fc] flex items-center justify-center mr-2 flex-shrink-0">
                          <Image src="/turbino.png" alt="Turbino" width={32} height={32} className="rounded-full" />
                        </div>
                        <div className="bg-gray-100 rounded-2xl p-3 rounded-bl-none flex items-center space-x-2 border border-gray-200">
                          <Loader2 className="h-4 w-4 text-[#072ac8] animate-spin" />
                          <span className="text-gray-600 text-sm">Turbino denkt na...</span>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>

              <form onSubmit={handleSubmit} className="relative">
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder="Stel een vraag over onze diensten..."
                  className="w-full bg-gray-100 text-gray-800 rounded-full py-3 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-[#072ac8] border border-gray-200"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  className={`absolute right-2 top-2 ${
                    isLoading || !userInput.trim() ? "bg-gray-400" : "bg-[#072ac8] hover:bg-[#1e96fc]"
                  } text-white p-2 rounded-full transition-colors disabled:cursor-not-allowed`}
                  disabled={!userInput.trim() || isLoading}
                >
                  {isLoading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  )}
                </button>
              </form>

              <div className="mt-3 text-center">
                <p className="text-xs text-gray-500">
                  Powered by{" "}
                  <span className="font-semibold bg-gradient-to-r from-[#072ac8] to-[#1e96fc] bg-clip-text text-transparent">
                    TriviTurbo
                  </span>{" "}
                  AI
                </p>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleMaximize}
            className="fixed bottom-4 right-4 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-[#072ac8] to-[#1e96fc] flex items-center justify-center shadow-[0_0_20px_rgba(7,42,200,0.3)]"
            aria-label="Open chat assistent"
          >
            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Image src="/turbino.png" alt="Turbino" width={40} height={40} className="rounded-full animate-bounce" />
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
