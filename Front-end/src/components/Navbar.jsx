// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black bg-opacity-70 text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-violet-500">
          BR Location
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-violet-400">Accueil</Link>
          <Link to="/voitures" className="hover:text-violet-400">Véhicules</Link>
          <Link to="/contact" className="hover:text-violet-400">Contact</Link>
          <Link to="/login" className="hover:text-violet-400">Connexion</Link>
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black bg-opacity-90 px-4 pb-4 space-y-2">
          <Link to="/" className="block hover:text-violet-400">Accueil</Link>
          <Link to="/voitures" className="block hover:text-violet-400">Véhicules</Link>
          <Link to="/contact" className="block hover:text-violet-400">Contact</Link>
          <Link to="/login" className="block hover:text-violet-400">Connexion</Link>
        </div>
      )}
    </header>
  );
}
