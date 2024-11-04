"use client";

import LoginForm from "@/components/login-form";
import Link from "next/link";
import { useState } from "react";

function LoadingScreen() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <p className="text-white text-2xl">Carregando...</p>
    </div>
  );
}

export default function Page() {
  const [loading, setLoading] = useState(false);

  const handleLoading = (isLoading: boolean) => {
    setLoading(isLoading);
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div
      className="h-screen flex items-center justify-center"
      style={{ backgroundColor: "#9CAEDB" }}
    >
      <main className="flex">
        <div
          style={{
            width: "30vw",
            height: "70vh",
            background: "white",
            borderLeft: "solid",
            borderLeftColor: "white",
            borderTopLeftRadius: "20px",
            borderBottomLeftRadius: "20px",
          }}
        >
          <section>
            <Link href="/">
              <img
                className="p-1 hover:scale-110 transition-transform duration-500 inline-block"
                src="/img/home.png"
                alt="Home"
              />
            </Link>
            <div
              style={{ marginTop: "-23px" }}
              className="flex flex-col justify-center items-center font-bebas text-5xl text-black mb-24"
            >
              <h1 className="text-7xl">BEM-VINDO</h1>
              <h2 style={{ marginTop: "-10px" }}>NOVAMENTE!</h2>
            </div>
            <div className="flex justify-end relative top-2 left-1">
              <img className="w-5/6" src="/img/car.png" alt="Carro" />
            </div>
          </section>
        </div>
        <div
          style={{
            width: "30vw",
            height: "70vh",
            background: "#8C9CC2",
            borderRight: "solid",
            borderRightColor: "#8C9CC2",
            borderTopRightRadius: "20px",
            borderBottomRightRadius: "20px",
          }}
        >
          <section className="flex justify-center items-center mt-11">
            <h1 className="font-bebas text-7xl text-white">LOGIN</h1>
          </section>
          <section>
            <LoginForm setLoading={handleLoading} /> {/* Passa o callback de loading */}
          </section>
        </div>
      </main>
    </div>
  );
}
