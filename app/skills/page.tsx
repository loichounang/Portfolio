"use client";
import { motion } from "framer-motion";
import { 
  Code2, 
  Palette, 
  Database, 
  Layers, 
  Zap,
  Globe,
  Settings,
  TrendingUp,
  LucideIcon
} from "lucide-react";
import { useState } from "react";
import "./skill.css";

interface Skill {
  name: string;
  level: number;
  icon?: string;
  color: string;
}

interface SkillCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  color: string;
  skills: Skill[];
}

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const categories: SkillCategory[] = [
    {
      id: "frontend",
      title: "Frontend",
      icon: Code2,
      color: "#60a5fa",
      skills: [
        { name: "React / Next.js", level: 90, color: "#61dafb" },
        { name: "TypeScript", level: 85, color: "#3178c6" },
        { name: "HTML / CSS", level: 95, color: "#e34c26" },
        { name: "Tailwind CSS", level: 90, color: "#06b6d4" },
        { name: "JavaScript", level: 90, color: "#f7df1e" },
        { name: "Framer Motion", level: 80, color: "#ff0055" }
      ]
    },
    {
      id: "backend",
      title: "Backend",
      icon: Database,
      color: "#a78bfa",
      skills: [
        { name: "Node.js", level: 80, color: "#339933" },
        { name: "Express", level: 75, color: "#000000" },
        { name: "MongoDB", level: 70, color: "#47a248" },
        { name: "PostgreSQL", level: 65, color: "#336791" },
        { name: "REST API", level: 85, color: "#ff6c37" },
        { name: "Strapi", level: 75, color: "#2f2e8b" }
      ]
    },
    {
      id: "tools",
      title: "Outils & CMS",
      icon: Settings,
      color: "#f59e0b",
      skills: [
        { name: "Git / GitHub", level: 90, color: "#f05032" },
        { name: "WordPress", level: 85, color: "#21759b" },
        { name: "Shopify", level: 80, color: "#96bf48" },
        { name: "Figma", level: 75, color: "#f24e1e" },
        { name: "VS Code", level: 95, color: "#007acc" },
        { name: "Vercel / Netlify", level: 85, color: "#000000" }
      ]
    },
    {
      id: "design",
      title: "Design & UX",
      icon: Palette,
      color: "#ec4899",
      skills: [
        { name: "UI Design", level: 80, color: "#ff6b6b" },
        { name: "Responsive Design", level: 95, color: "#4ecdc4" },
        { name: "Animations", level: 85, color: "#a78bfa" },
        { name: "Prototypage", level: 75, color: "#fbbf24" },
        { name: "Accessibilité", level: 80, color: "#10b981" }
      ]
    }
  ];

  const stats = [
    { icon: Layers, value: "7+", label: "Projets réalisés" },
    { icon: Globe, value: "3+", label: "Ans d'expérience" },
    { icon: Zap, value: "15+", label: "Technologies" },
    { icon: TrendingUp, value: "100%", label: "Satisfaction" }
  ];

  const activeData = categories.find(cat => cat.id === activeCategory) || categories[0];

  return (
    <section className="skills-section" id="skills">
      {/* Orbes */}
      <div className="skills-orb skills-orb-1"></div>
      <div className="skills-orb skills-orb-2"></div>
      <div className="skills-orb skills-orb-3"></div>

      <div className="skills-container">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="skills-badge"
        >
          <span className="skills-badge-dot"></span>
          Mes compétences
        </motion.div>

        {/* Titre */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="skills-title"
        >
          Expertise <span className="gradient-text">Technique</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="skills-subtitle"
        >
          Technologies et outils que je maîtrise pour créer des expériences digitales exceptionnelles
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="stats-grid"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="stat-card"
            >
              <div className="stat-icon">
                <stat.icon size={24} />
              </div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tabs catégories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="skills-tabs"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 + index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`skills-tab ${activeCategory === category.id ? "active" : ""}`}
              onClick={() => setActiveCategory(category.id)}
              style={{ '--tab-color': category.color } as React.CSSProperties}
            >
              <category.icon size={20} />
              {category.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Barres de compétences */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="skills-content"
        >
          <div className="skills-grid">
            {activeData.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="skill-item"
              >
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar-container">
                  <motion.div
                    className="skill-bar"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                    style={{ backgroundColor: skill.color }}
                  >
                    <div className="skill-bar-glow" style={{ backgroundColor: skill.color }}></div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
          className="skills-cta"
        >
          <div className="cta-content">
            <h3 className="cta-title">Prêt à collaborer ?</h3>
            <p className="cta-description">
              Discutons de votre projet et voyons comment je peux vous aider
            </p>
          </div>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(79, 70, 229, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="cta-button"
          >
            Me contacter
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}