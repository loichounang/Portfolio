import Hero from "./components/Hero";
import Projects from "./components/Projects";
import AboutPreview from "./components/AboutPreview";
import ContactSection from "./components/ContactSection";



export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <Hero />
      <AboutPreview  />
      <Projects />
      <ContactSection/>
    </main>
  );
}
