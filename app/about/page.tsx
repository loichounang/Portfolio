"use client";
import { motion } from "framer-motion";
import { Code2, Lightbulb, Users, Sparkles, Heart, Target } from "lucide-react";
import "./AboutSection.css";

export default function AboutSection() {
  const highlights = [
    {
      icon: Code2,
      title: "Développement",
      description: "Sites vitrines, e-commerce & CMS",
      color: "#60a5fa"
    },
    {
      icon: Users,
      title: "Formation",
      description: "Accompagnement & transmission",
      color: "#a78bfa"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Projets multi-langues & headless",
      color: "#f59e0b"
    }
  ];

  const values = [
    { icon: Heart, text: "Passion du code" },
    { icon: Target, text: "Satisfaction client" },
    { icon: Sparkles, text: "Amélioration continue" }
  ];

  return (
    <section className="about-section" id="about">
      {/* Orbes décoratifs */}
      <div className="about-orb about-orb-1"></div>
      <div className="about-orb about-orb-2"></div>
      <div className="about-orb about-orb-3"></div>

      <div className="about-container">
        {/* Badge d'introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="about-badge"
        >
          <span className="badge-pulse"></span>
          Qui suis-je ?
        </motion.div>

        {/* Titre principal */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="about-title"
        >
          À propos
        </motion.h1>

        {/* Contenu principal avec cartes */}
        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="about-text-card"
          >
            <div className="card-glow"></div>
            <p className="about-intro">
              Je suis un <span className="highlight">développeur web</span> qui aime apprendre, créer et transmettre.
              Aujourd&apos;hui, je travaille principalement sur un site e-commerce interne
              destiné à la vente de produits en ligne, tout en accompagnant des
              apprenants dans la maîtrise de la bureautique et des outils numériques.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="about-text-card"
          >
            <div className="card-glow"></div>
            <p>
              Au fil du temps, j&apos;ai eu l&apos;opportunité de collaborer sur plusieurs
              projets ambitieux : <span className="highlight">sites vitrines</span>, <span className="highlight">plateformes e-commerce</span>, projets
              multi-langues et systèmes basés sur CMS ou headless (Strapi).
              Certains n&apos;ont pas été menés à terme, mais chaque collaboration m&apos;a
              apporté une meilleure façon de travailler et un sens plus aiguisé
              du besoin client.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="about-text-card quote-card"
          >
            <div className="card-glow"></div>
            <div className="quote-icon">&quot;</div>
            <p className="quote-text">
              Je reste animé par la volonté constante de m&apos;améliorer et d&apos;offrir
              la meilleure expérience possible. Pour moi, la satisfaction du client
              n&apos;est pas un slogan : c&apos;est ma façon de travailler.
            </p>
          </motion.div>
        </div>

        {/* Cartes de compétences */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="highlights-grid"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="highlight-card"
              style={{ '--card-color': item.color } as React.CSSProperties}
            >
              <div className="highlight-icon" style={{ color: item.color }}>
                <item.icon size={28} />
              </div>
              <h3 className="highlight-title">{item.title}</h3>
              <p className="highlight-desc">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Valeurs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="values-section"
        >
          <h3 className="values-title">Mes valeurs</h3>
          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={value.text}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ x: 5 }}
                className="value-item"
              >
                <value.icon size={20} className="value-icon" />
                <span>{value.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}