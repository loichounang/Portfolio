import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        © {new Date().getFullYear()} <span className="footer-brand">Loic.dev</span> — Tous droits réservés.
      </p>

      <div className="footer-links">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          GitHub
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          LinkedIn
        </a>
        <a href="/contact" className="footer-link">
          Contact
        </a>
      </div>
    </footer>
  );
}
