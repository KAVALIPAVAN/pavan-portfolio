"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

const NAV_LINKS = [
  { label: "Home", href: "#hero", section: "hero" },
  { label: "About", href: "#about", section: "about" },
  { label: "Skills", href: "#skills", section: "skills" },
  { label: "Stack", href: "#tech", section: "tech" },
  { label: "Projects", href: "#projects", section: "projects" },
  { label: "Experience", href: "#experience", section: "experience" },
  { label: "Contact", href: "#contact", section: "contact" },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      // Active section detection
      const sections = NAV_LINKS.map((l) => l.section);
      let current = "hero";
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 130) current = id;
      });
      setActive(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <>
      {/* ─── Desktop / Main Nav ────────────────────────────── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[500] h-[70px] flex items-center justify-between nav-pad transition-all duration-300 ${
          scrolled
            ? "border-b backdrop-blur-xl"
            : ""
        }`}
        style={
          scrolled
            ? {
                background: theme === "dark" ? "rgba(7,8,13,0.75)" : "rgba(245,245,250,0.8)",
                borderColor: "var(--border)",
              }
            : {}
        }
      >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-syne text-2xl font-extrabold text-grad bg-none border-none cursor-pointer"
        >
          Pavan.dev
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1 list-none">
          {NAV_LINKS.map((link) => (
            <li key={link.section}>
              <button
                onClick={() => handleNavClick(link.href)}
                className={`text-sm font-medium px-4 py-1.5 rounded-full transition-all duration-200 cursor-pointer border-none bg-none ${
                  active === link.section
                    ? "text-[var(--accent)]"
                    : "text-secondary hover:text-primary"
                }`}
                style={
                  active === link.section
                    ? { background: "var(--surface2)" }
                    : {}
                }
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {mounted && (
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-surface2 cursor-pointer border"
              style={{
                background: "var(--surface)",
                borderColor: "var(--border2)",
                color: "var(--text2)",
              }}
              aria-label="Toggle theme"
            >
              {theme === "light" ? <FiMoon size={16} /> : <FiSun size={16} />}
            </button>
          )}
          <button
            className="md:hidden flex flex-col gap-[5px] cursor-pointer p-2 bg-none border-none"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <FiX size={22} style={{ color: "var(--text)" }} />
            ) : (
              <FiMenu size={22} style={{ color: "var(--text)" }} />
            )}
          </button>
        </div>
      </nav>

      {/* ─── Mobile Menu ────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-[590] bg-black/60 md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full z-[600] flex flex-col gap-2 pt-20 px-8 pb-8 md:hidden border-l"
              style={{
                width: "min(320px, 85vw)",
                background: "var(--bg2)",
                borderColor: "var(--border)",
              }}
            >
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.section}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left py-3 font-syne text-xl font-semibold border-b cursor-pointer bg-none border-x-0 border-t-0 transition-all duration-200 hover:pl-2"
                  style={{
                    borderColor: "var(--border)",
                    color: active === link.section ? "var(--accent)" : "var(--text2)",
                  }}
                >
                  {link.label}
                </motion.button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
