"use client";
import Image from "next/image";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ExternalLink, Github, ArrowRight, Filter } from "lucide-react";
import "./Projects.css";

// === TYPE DÉFINI ===
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link?: string;
  github?: string;
  type: "E-commerce" | "Statique" | "WordPress" | "Multi-fonctions";
  tags?: string[];
  year?: string;
  featured?: boolean;
}

const allProjects: Project[] = [
  {
    id: 1,
    title: "Kiddies Care",
    description: "E-commerce pour produits enfants avec interface moderne.",
    image: "https://i.pinimg.com/736x/4b/84/2b/4b842b9ff3b9779928b7fa6b1fbe4547.jpg",
    link: "https://kiddies-care.com",
    type: "E-commerce",
    tags: ["React", "Next.js", "Stripe"],
    year: "2024",
    featured: true,
  },
  {
    id: 2,
    title: "Betuole",
    description: "Site beauté statique, design élégant et moderne.",
    image: "https://i.pinimg.com/736x/4b/84/2b/4b842b9ff3b9779928b7fa6b1fbe4547.jpg",
    link: "https://betuole.com",
    type: "Statique",
    tags: ["HTML", "CSS", "JavaScript"],
    year: "2024",
  },
  {
    id: 3,
    title: "Univsoft",
    description: "Site entreprise statique, vitrine professionnelle.",
    image: "https://i.pinimg.com/736x/4b/84/2b/4b842b9ff3b9779928b7fa6b1fbe4547.jpg",
    link: "https://univsoft.com",
    type: "Statique",
    tags: ["Next.js", "Tailwind"],
    year: "2023",
  },
  {
    id: 4,
    title: "Fluxi",
    description: "Site marketing statique, design orienté conversion.",
    image: "https://i.pinimg.com/736x/4b/84/2b/4b842b9ff3b9779928b7fa6b1fbe4547.jpg",
    link: "https://fluxi.onrender.com/",
    type: "Statique",
    tags: ["React", "Framer Motion"],
    year: "2024",
    featured: true,
  },
  {
    id: 5,
    title: "Digital Cosmetics",
    description: "E-commerce pour produits cosmétiques.",
    image: "https://i.pinimg.com/736x/4b/84/2b/4b842b9ff3b9779928b7fa6b1fbe4547.jpg",
    link: "https://digitals-cosmetic.com",
    type: "E-commerce",
    tags: ["Shopify", "Liquid", "API"],
    year: "2024",
  },
  {
    id: 6,
    title: "Femina237",
    description: "Site WordPress pour un journal féminin.",
    image: "https://i.pinimg.com/736x/4b/84/2b/4b842b9ff3b9779928b7fa6b1fbe4547.jpg",
    link: "https://femina237.com",
    type: "WordPress",
    tags: ["WordPress", "PHP", "Gutenberg"],
    year: "2023",
  },
  {
    id: 7,
    title: "RDCT.tech",
    description: "Site multi-fonctions pour formation, e-commerce et placement de ménagères.",
    image: "https://i.pinimg.com/736x/4b/84/2b/4b842b9ff3b9779928b7fa6b1fbe4547.jpg",
    link: "https://rdct.tech",
    type: "Multi-fonctions",
    tags: ["Full Stack", "Database", "CMS"],
    year: "2024",
    featured: true,
  },
];

const tabs = ["Tous", "Statique", "E-commerce", "WordPress", "Multi-fonctions"] as const;

export default function ProjectsTabs() {
  const [activeTab, setActiveTab] = useState<typeof tabs[number]>("Tous");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);

  // Filtrage intelligent avec recherche
  const filteredProjects = useMemo(() => {
    let filtered = activeTab === "Tous"
      ? allProjects
      : allProjects.filter((p) => p.type === activeTab);

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.tags?.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    return filtered;
  }, [activeTab, searchQuery]);

  const projectCount = filteredProjects.length;
  const featuredCount = filteredProjects.filter((p) => p.featured).length;

  return (
    <section className="projects-section" id="projects">
      <div className="orb"></div>
      <div className="orb orb-secondary"></div>

      <div className="projects-container">
        {/* HEADER ENRICHI */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="projects-header"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="projects-badge"
          >
            <span className="badge-dot"></span>
            Portfolio 2024
          </motion.div>

          <h2 className="projects-title">
            <span className="gradient-text">Mes Projets</span>
          </h2>
          <p className="projects-subtitle">
            Des expériences digitales modernes, performantes et sur mesure.
            <br />
            <span className="stats-text">
              {projectCount} projet{projectCount > 1 ? "s" : ""} • {featuredCount} mis en avant
            </span>
          </p>
        </motion.div>

        {/* BARRE DE RECHERCHE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="search-bar-container"
        >
          <div className="search-bar">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              placeholder="Rechercher un projet, une technologie..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="search-clear"
              >
                ×
              </button>
            )}
          </div>

          <button
            className="filter-toggle"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter size={18} />
          </button>
        </motion.div>

        {/* TABS */}
        <div className="projects-tabs">
          {tabs.map((tab, index) => {
            const count = tab === "Tous"
              ? allProjects.length
              : allProjects.filter((p) => p.type === tab).length;

            return (
              <motion.button
                key={tab}
                className={`tab-btn ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab}
                <span className="tab-count">{count}</span>
              </motion.button>
            );
          })}
        </div>

        {/* GRILLE DE PROJETS */}
        <motion.div
          layout
          className={`projects-grid ${filteredProjects.length === 1 ? "single" : ""} ${viewMode}`}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="no-projects"
              >
                <div className="no-projects-icon">🔍</div>
                <p>Aucun projet trouvé pour {searchQuery}</p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveTab("Tous");
                  }}
                  className="reset-btn"
                >
                  Réinitialiser les filtres
                </button>
              </motion.div>
            ) : (
              filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

// === COMPOSANT CARTE ENRICHI ===
interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{
        duration: 0.4,
        delay: index * 0.08,
        ease: [0.2, 0.8, 0.2, 1],
      }}
      className="project-card-wrapper"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -12 }}
    >
      <div className={`project-card ${project.featured ? "featured" : ""}`}>
        {project.featured && (
          <div className="featured-badge">
            <span>⭐</span> Mis en avant
          </div>
        )}

        <div className="image-container">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="project-image"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
          />
          <div className="image-overlay">
            <div className="overlay-content">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="overlay-btn primary"
                >
                  <ExternalLink size={16} />
                  Voir le site
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="overlay-btn secondary"
                >
                  <Github size={16} />
                  Code source
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="project-content">
          <div className="project-meta">
            <span className="type-badge">{project.type}</span>
            {project.year && <span className="year-badge">{project.year}</span>}
          </div>

          <h3 className="project-title">
            {project.title}
            <motion.span
              className="title-arrow"
              animate={{ x: isHovered ? 4 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight size={18} />
            </motion.span>
          </h3>

          <p className="project-desc">{project.description}</p>

          {project.tags && project.tags.length > 0 && (
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}