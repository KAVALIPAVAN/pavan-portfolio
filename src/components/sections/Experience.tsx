"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { EXPERIENCE } from "@/lib/data";

function TimelineItem({ exp, index }: { exp: typeof EXPERIENCE[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="relative pl-10 mb-12 last:mb-0"
    >
      {/* Dot */}
      <motion.div
        whileHover={{ boxShadow: "0 0 0 8px var(--accent-glow)" }}
        className="absolute left-0 top-1.5 w-3 h-3 rounded-full transition-all duration-300"
        style={{
          background: "var(--accent)",
          boxShadow: "0 0 0 4px var(--accent-glow)",
        }}
      />

      {/* Card */}
      <motion.div
        whileHover={{ borderColor: "var(--border2)", background: "var(--surface2)" }}
        className="p-7 rounded-2xl border transition-all duration-300"
        style={{ background: "var(--surface)", borderColor: "var(--border)" }}
      >
        <div className="flex justify-between items-start flex-wrap gap-3 mb-1">
          <h3 className="font-syne font-bold text-[1.1rem] text-primary">{exp.company}</h3>
          <span
            className="font-mono-jetbrains text-[0.78rem] px-2.5 py-1 rounded-full"
            style={{ color: "var(--accent)", background: "var(--accent-glow)" }}
          >
            {exp.duration}
          </span>
        </div>
        <p className="text-[0.9rem] font-medium mb-3.5" style={{ color: "var(--text2)" }}>
          {exp.role}
        </p>
        <p className="text-[0.875rem] leading-relaxed mb-4 text-secondary">
          {exp.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {exp.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-full text-[0.73rem] font-medium border font-mono-jetbrains"
              style={{
                background: "var(--bg3)",
                borderColor: "var(--border)",
                color: "var(--text3)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section-pad" style={{ background: "var(--bg2)" }}>
      <SectionHeader
        tag="Career"
        title="Work Experience"
        subtitle="A track record of delivering impact across startups, scale-ups, and enterprise environments."
      />

      {/* Timeline wrapper */}
      <div className="relative max-w-3xl">
        {/* Vertical line */}
        <div
          className="absolute left-[5px] top-0 bottom-0 w-px"
          style={{
            background: "linear-gradient(to bottom, var(--accent), transparent)",
          }}
        />
        {EXPERIENCE.map((exp, i) => (
          <TimelineItem key={exp.company} exp={exp} index={i} />
        ))}
      </div>
    </section>
  );
}
