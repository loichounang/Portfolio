"use client";
import { useState } from "react";
import Link from "next/link";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Nouvelle fonction pour fermer le menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <h1 className="logo">Loic.dev</h1>

      {/* Le bouton du menu bascule l'état (ouvre/ferme) */}
      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        {/* Ajout de l'événement onClick={closeMenu} à chaque Link */}
        <li><Link href="/" onClick={closeMenu}>Accueil</Link></li>
        <li><Link href="/about" onClick={closeMenu}>À propos</Link></li>
        <li><Link href="#" onClick={closeMenu}>Projets</Link></li>
        <li><Link href="/skills" onClick={closeMenu}>Compétences</Link></li>
        <li><Link href="#" onClick={closeMenu}>Blog</Link></li>
        <li><Link href="/contact" onClick={closeMenu}>Contact</Link></li>
      </ul>
    </nav>
  );
}