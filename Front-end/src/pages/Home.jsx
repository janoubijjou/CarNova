// src/pages/Home.jsx
import React from "react";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="relative w-full h-screen bg-black text-white">
        {/* Background Video */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/assets/bg-video.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

        {/* Text Content */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
          <h2 className="text-lg md:text-2xl text-gray-300 mb-2">
            Laissez-vous conduire selon vos besoins !
          </h2>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Location de voiture à Casablanca
          </h1>
          <a
            href="#voitures"
            className="bg-violet-600 hover:bg-violet-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300"
          >
            DÉCOUVREZ NOS VÉHICULES
          </a>
        </div>
      </section>
    </>
  );
}
