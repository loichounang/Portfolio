"use client";
import { motion } from "framer-motion";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Salut, je suis <span className="highlight">Loic</span> 👋
      </motion.h1>

      <motion.p
        className="hero-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Développeur Front-End passionné par <span className="text-highlight">Next.js</span>, le design moderne et les interfaces soignées.
      </motion.p>

      <div className="hero-buttons">
        <motion.a
          href="#"
          className="hero-btn primary"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          Voir mes projets
        </motion.a>

        <motion.a
          href="/contact"
          className="hero-btn secondary"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          Me contacter
        </motion.a>
      </div>
    </section>
  );
}
