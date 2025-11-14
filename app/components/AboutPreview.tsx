"use client";
import Link from "next/link";
import "./AboutPreview.css";

export default function AboutPreview() {
  return (
    <section className="about-preview">
      <h2>À propos de moi</h2>

      <p>
        Je suis un développeur web passionné qui aime apprendre, créer et transmettre.
        Actuellement, je travaille sur un e-commerce interne tout en formant des apprenants
        aux outils bureautiques et numériques.
      </p>

      <Link href="/about" className="btn-more">
        En savoir plus
      </Link>
    </section>
  );
}
