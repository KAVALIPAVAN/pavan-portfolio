"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { TECH_STACK } from "@/lib/data";

export default function TechStack() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="tech" className="section-pad" style={{ background: "var(--bg2)" }}>
      <SectionHeader
        tag="Tech Stack"
        title="Tools I Work With"
        subtitle="Technologies I rely on to build, analyze, and deploy high-impact products every day."
      />
      <div
        ref={ref}
        className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-4"
      >
        {TECH_STACK.map((tech, i) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.04, duration: 0.4 }}
            whileHover={{
              y: -6,
              scale: 1.04,
              borderColor: "var(--accent)",
              boxShadow: "0 12px 40px var(--accent-glow)",
            }}
            className="tech-item flex flex-col items-center gap-2 p-4 rounded-2xl border text-center cursor-default transition-all duration-300"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-11 h-11 rounded-xl flex items-center justify-center text-[1.6rem]"
              style={{ background: "var(--bg3)" }}
            >
              {tech.icon}
            </motion.div>
            <span className="text-[0.75rem] font-semibold" style={{ color: "var(--text2)" }}>
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
