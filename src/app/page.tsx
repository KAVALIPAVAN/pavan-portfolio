"use client"
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="section-divider" />
      <About />
      <div className="section-divider" />
      <Skills />
      <div className="section-divider" />
      <TechStack />
      <div className="section-divider" />
      <Projects />
      <div className="section-divider" />
      <Experience />
      <div className="section-divider" />
      <Contact />
      <Footer />
      {/* Inline divider style */}
      <style jsx global>{`
        .section-divider {
          height: 1px;
          background: linear-gradient(
            to right,
            transparent,
            var(--border2),
            transparent
          );
          margin: 0 clamp(16px, 5vw, 80px);
        }
      `}</style>
    </main>
  );
}
