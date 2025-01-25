"use client";

import React, { useState } from "react";
import {  User, Camera, Paperclip, Loader2, Send } from "lucide-react";
import Nav from "@/components/Nav";
import Link from "next/link";

const MediSage = () => {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "system",
      text: "Welcome to MediSage! I'm your AI health assistant powered by Google's Gemini. How can I help you today?",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const examples = [
    {
      text: "Review my MRI report and provide insights",
      icon: "🔍",
    },
    {
      text: "Compare my blood test results",
      icon: "🩺",
    },
    {
      text: "Analyze my symptoms: nausea, fatigue, loss of appetite",
      icon: "📋",
    },
  ];

  const handleExampleClick = (example: string) => {
    setInputValue(example);
  };

  const sendMessage = async () => {
    if (!inputValue.trim()) return;
  
    const userMessage = { sender: "user", text: inputValue };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);
  
    try {
      const response = await fetch("http://localhost:3001/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: inputValue,
          history: messages.map(msg => ({
            role: msg.sender === "user" ? "user" : "model",  // Changed from 'assistant' to 'model'
            content: msg.text
          }))
        }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error);
      }
      
      setMessages((prev) => [
        ...prev,
        { sender: "gemini", text: data.response },
      ]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          sender: "system",
          text: error instanceof Error
            ? error.message
            : "I apologize, but I encountered an error. Please try again.",
        },
      ]);
    }finally {
      setIsLoading(false);
    }
  };
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-50 to-gray-50">
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-lg">
          <div className="p-6">
            <Link href="/home">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-lime-400 to-green-500 rounded-xl flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-lime-600 to-green-600 bg-clip-text text-transparent">
                  MediSage
                </span>
              </div>
            </Link>
          </div>
          <Nav />
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="p-6 bg-white shadow-sm">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                Your Personal Health Assistant
              </h1>
              <p className="text-gray-600">
                Powered by advanced AI to analyze, predict, and guide your health journey
              </p>
            </div>
          </div>

          {/* Chat container */}
          <div className="flex-1 overflow-hidden flex flex-col max-w-4xl mx-auto w-full p-6">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto space-y-4 pb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                      message.sender === "user"
                        ? "bg-gradient-to-r from-lime-500 to-green-500 text-white"
                        : "bg-white shadow-sm text-gray-800"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white shadow-sm px-4 py-3 rounded-2xl">
                    <Loader2 className="w-5 h-5 animate-spin text-lime-500" />
                  </div>
                </div>
              )}
            </div>

            {/* Examples */}
            {messages.length === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {examples.map((example, index) => (
                  <div
                    key={index}
                    onClick={() => handleExampleClick(example.text)}
                    className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <div className="text-2xl mb-2">{example.icon}</div>
                    <p className="text-gray-600 text-sm">{example.text}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Input area */}
            <div className="mt-4 bg-white rounded-2xl shadow-sm p-3 flex items-center gap-2">
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Type your message here..."
                className="flex-1 resize-none border-0 focus:ring-0 text-base p-2 max-h-32 min-h-[2.5rem]"
                rows={1}
              />
              <div className="flex items-center gap-2 px-2">
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <Camera className="w-5 h-5 text-gray-400" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <Paperclip className="w-5 h-5 text-gray-400" />
                </button>
                <button
                  onClick={sendMessage}
                  disabled={isLoading || !inputValue.trim()}
                  className="p-2 bg-gradient-to-r from-lime-500 to-green-500 text-white rounded-full hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediSage;
