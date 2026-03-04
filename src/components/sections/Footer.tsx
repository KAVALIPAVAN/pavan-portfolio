"use client";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
// FiTwitter
import { PERSONAL } from "@/lib/data";
import { motion } from "framer-motion";

const SOCIALS = [
  { icon: FiGithub, href: PERSONAL.github, label: "GitHub" },
  { icon: FiLinkedin, href: PERSONAL.linkedin, label: "LinkedIn" },
  // { icon: FiTwitter, href: PERSONAL.twitter, label: "Twitter" },
  { icon: FiMail, href: `mailto:${PERSONAL.email}`, label: "Email" },
];

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        background: "var(--bg2)",
        borderColor: "var(--border)",
        padding: "40px clamp(16px,5vw,80px)",
      }}
    >
      <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
        {/* Logo */}
        <span className="font-syne text-xl font-extrabold text-grad">Pavan.dev</span>

        {/* Copy */}
        <span className="text-[0.82rem]" style={{ color: "var(--text3)" }}>
          © {new Date().getFullYear()} Kavali Pavan · Built with ❤️ in Next.js
        </span>

        {/* Socials */}
        <div className="flex gap-2.5">
          {SOCIALS.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, borderColor: "var(--accent)", color: "var(--accent)" }}
              className="w-9 h-9 rounded-full flex items-center justify-center border no-underline transition-all duration-200"
              style={{
                background: "var(--surface)",
                borderColor: "var(--border2)",
                color: "var(--text2)",
              }}
              aria-label={s.label}
            >
              <s.icon size={15} />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
