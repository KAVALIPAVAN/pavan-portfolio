"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { SKILLS } from "@/lib/data";

function SkillCard({ category, index }: { category: typeof SKILLS[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -4, borderColor: "var(--border2)" }}
      className="relative p-7 rounded-2xl border overflow-hidden group cursor-default transition-all duration-300"
      style={{ background: "var(--surface)", borderColor: "var(--border)" }}
    >
      {/* Top accent on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "var(--grad)" }}
      />

      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center text-xl"
          style={{ background: "var(--accent-glow)" }}
        >
          {category.icon}
        </div>
        <h3 className="font-syne font-bold text-[1.05rem] text-primary">{category.title}</h3>
      </div>

      {/* Pills */}
      <div className="flex flex-wrap gap-2">
        {category.pills.map((pill) => (
          <motion.span
            key={pill}
            whileHover={{
              borderColor: "var(--accent)",
              color: "var(--accent)",
              background: "var(--accent-glow)",
            }}
            className="px-3.5 py-1 rounded-full text-[0.8rem] font-medium border cursor-default transition-all duration-200 skill-pill"
            style={{
              background: "var(--bg3)",
              borderColor: "var(--border)",
              color: "var(--text2)",
            }}
          >
            {pill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-pad" style={{ background: "var(--bg)" }}>
      <SectionHeader
        tag="Expertise"
        title="Skills & Technologies"
        subtitle="A versatile toolkit built across years of hands-on projects, research, and production deployments."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {SKILLS.map((cat, i) => (
          <SkillCard key={cat.title} category={cat} index={i} />
        ))}
      </div>
    </section>
  );
}
