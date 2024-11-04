"use client"

import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <header className="bg-[#233561] py-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="text-lg font-bold cursor-default w-10 h-10 flex items-center justify-center rounded-full bg-[#354ead] text-gray-800">
              A
            </div>
          </div>
          {/* Menu para desktop */}
          <nav className="hidden sm:flex space-x-4 md:space-x-8 text-lg">
            <a href="/" className="text-gray-300 hover:text-white transition duration-300">Home</a>
            <a href="/auth/registro" className="text-gray-300 hover:text-white transition duration-300">Registrar</a>
            <a href="/sobre-nos" className="text-gray-300 hover:text-white transition duration-300">Sobre nós</a>
            <a href="/auth/login" className="text-gray-300 hover:text-white transition duration-300">Login</a>
          </nav>
          {/* Botão de menu hambúrguer para dispositivos móveis */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Menu mobile que expande e recolhe */}
        {isOpen && (
          <div className="sm:hidden bg-[#233561]">
            <nav className="flex flex-col items-center space-y-4 py-4">
              <a href="/" className="text-gray-300 hover:text-white transition duration-300">Home</a>
              <a href="/auth/registro" className="text-gray-300 hover:text-white transition duration-300">Registrar</a>
              <a href="/sobre-nos" className="text-gray-300 hover:text-white transition duration-300">Sobre nós</a>
              <a href="/auth/login" className="text-gray-300 hover:text-white transition duration-300">Login</a>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
}
