"use client";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Clock, MapPin, Send, Zap } from "lucide-react";
import "./Contact.css";
import ContactSection from "../components/ContactSection";

export default function ContactIntro() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hounangloic21@gmail.com",
      description: "Réponse sous 24h",
      color: "#60a5fa"
    },
    {
      icon: Clock,
      title: "Disponibilité",
      value: "Lun - Ven",
      description: "9h00 - 18h00",
      color: "#a78bfa"
    },
    {
      icon: MapPin,
      title: "Localisation",
      value: "Douala, Cameroun",
      description: "Remote disponible",
      color: "#f59e0b"
    }
  ];

  const reasons = [
    {
      icon: Zap,
      title: "Réponse rapide",
      description: "Je réponds à tous les messages dans les 24h"
    },
    {
      icon: MessageSquare,
      title: "Discussion ouverte",
      description: "Parlons de votre projet sans engagement"
    },
    {
      icon: Send,
      title: "Devis gratuit",
      description: "Estimation personnalisée et transparente"
    }
  ];

  return (
    <section className="contact-intro-section">
      {/* Orbes décoratifs */}
      <div className="contact-orb contact-orb-1"></div>
      <div className="contact-orb contact-orb-2"></div>

      <div className="contact-intro-container">
        {/* Badge */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="contact-badge"
        >
          <span className="contact-badge-dot"></span>
          Travaillons ensemble
        </motion.div> */}

        {/* Titre et description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="contact-intro-header"
        >
          <h2 className="contact-intro-title">
            Parlons de votre <span className="gradient-text">projet</span>
          </h2>
          <p className="contact-intro-subtitle">
            Vous avez une idée, un projet ou simplement une question ? 
            Je suis à votre écoute pour discuter de vos besoins et voir 
            comment je peux vous aider à concrétiser votre vision.
          </p>
        </motion.div>

        {/* Cartes d'informations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="contact-info-grid"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="contact-info-card"
              style={{ '--card-color': info.color } as React.CSSProperties}
            >
              <div className="contact-info-icon" style={{ color: info.color }}>
                <info.icon size={24} />
              </div>
              <div className="contact-info-content">
                <h3 className="contact-info-title">{info.title}</h3>
                <p className="contact-info-value">{info.value}</p>
                <p className="contact-info-desc">{info.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pourquoi me contacter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="reasons-section"
        >
          <h3 className="reasons-title">Pourquoi me contacter ?</h3>
          <div className="reasons-grid">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                whileHover={{ x: 5 }}
                className="reason-item"
              >
                <div className="reason-icon">
                  <reason.icon size={20} />
                </div>
                <div className="reason-content">
                  <h4 className="reason-title">{reason.title}</h4>
                  <p className="reason-desc">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA avec flèche animée */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
          className="contact-cta"
        >
          <div className="cta-arrow">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="arrow-icon"
            >
              ↓
            </motion.div>
          </div>
          <p className="cta-text">Remplissez le formulaire ci-dessous</p>
        </motion.div>
      </div>
      <ContactSection/>
    </section>
  );
}