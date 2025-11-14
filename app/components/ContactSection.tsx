"use client";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import "./ContactSection.css";

export default function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        
        <div className="contact-header">
          <span className="contact-badge">Contact</span>
          <h2 className="contact-title">
            Parlons <span className="title-highlight">Ensemble</span>
          </h2>
          <p className="contact-subtitle">
            Que ce soit pour un projet web, une collaboration, une formation ou
            une question, tu peux me contacter facilement.
          </p>
        </div>

        <div className="contact-grid">
          
          {/* INFO CARDS */}
          <div className="contact-info">
            <div className="info-card">
              <Mail className="info-icon" size={22} />
              <div>
                <h3>Email</h3>
                <p>hounangloic21@gmail.com</p>
              </div>
            </div>

            <div className="info-card">
              <Phone className="info-icon" size={22} />
              <div>
                <h3>Téléphone</h3>
                <p>+237 694 074 474</p>
              </div>
            </div>

            <div className="info-card">
              <MapPin className="info-icon" size={22} />
              <div>
                <h3>Localisation</h3>
                <p>Douala, Cameroun</p>
              </div>
            </div>
          </div>

          {/* FORMULAIRE */}
          <form className="contact-form">
            <div className="form-group">
              <label>Nom</label>
              <input type="text" placeholder="Votre nom" />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Votre adresse email" />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Votre message..."></textarea>
            </div>

            <button className="contact-btn" type="submit">
              Envoyer le message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}
