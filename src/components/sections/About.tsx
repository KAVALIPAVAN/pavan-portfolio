"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { PERSONAL } from "@/lib/data";
import { FiDownload } from "react-icons/fi";

const HIGHLIGHTS = [
  { icon: "🌐", title: "Web Dev", text: "Building fast, accessible, pixel-perfect web apps" },
  { icon: "📊", title: "Data Analytics", text: "Turning raw data into actionable business insights" },
  { icon: "🤖", title: "ML Engineering", text: "Training & deploying production ML models" },
  { icon: "🔬", title: "Data Science", text: "Statistical modeling & predictive analytics" },
];

function HighlightCard({ item, index }: { item: typeof HIGHLIGHTS[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ borderColor: "var(--accent)", background: "var(--surface2)" }}
      className="flex items-start gap-3 p-3.5 rounded-xl border transition-all duration-300 cursor-default"
      style={{ background: "var(--surface)", borderColor: "var(--border)" }}
    >
      <div
        className="w-9 h-9 min-w-9 rounded-lg flex items-center justify-center text-lg"
        style={{ background: "var(--accent-glow)" }}
      >
        {item.icon}
      </div>
      <div>
        <div className="font-semibold text-sm text-primary">{item.title}</div>
        <div className="text-[0.82rem] leading-snug mt-0.5 text-secondary">{item.text}</div>
      </div>
    </motion.div>
  );
}

export default function About() {
  const leftRef = useRef(null);
  const leftInView = useInView(leftRef, { once: true, margin: "-60px" });

  return (
    <section id="about" className="section-pad" style={{ background: "var(--bg2)" }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">

        {/* ─── Image column ─────────────────────── */}
        <motion.div
          ref={leftRef}
          initial={{ opacity: 0, x: -30 }}
          animate={leftInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          {/* Photo placeholder */}
          <div
            className="relative w-full max-w-[420px] rounded-3xl border overflow-hidden flex items-center justify-center"
            style={{
              aspectRatio: "3/4",
              background: `linear-gradient(135deg, var(--bg3), var(--bg))`,
              borderColor: "var(--border)",
            }}
          >
            <span
              className="font-syne text-[8rem] font-extrabold text-grad opacity-30 select-none"
            >
              KP
            </span>
            <div
              className="absolute bottom-0 right-0 w-48 h-48 rounded-full"
              style={{ background: "var(--accent)", filter: "blur(80px)", opacity: 0.15 }}
            />
          </div>

          {/* Floating card 1 */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-5 -right-5 flex items-center gap-2.5 px-4 py-3 rounded-2xl border shadow-xl"
            style={{ background: "var(--bg2)", borderColor: "var(--border2)" }}
          >
            <span className="text-2xl">🏆</span>
            <div>
              <div className="font-bold text-sm text-primary">Top Rated</div>
              <div className="text-xs text-muted">Developer</div>
            </div>
          </motion.div>

          {/* Floating card 2 */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-5 -right-8 flex items-center gap-2.5 px-4 py-3 rounded-2xl border shadow-xl"
            style={{ background: "var(--bg2)", borderColor: "var(--border2)" }}
          >
            <span className="text-2xl">⚡</span>
            <div>
              <div className="font-bold text-sm text-primary">Fast Delivery</div>
              <div className="text-xs text-muted">Always On Time</div>
            </div>
          </motion.div>
        </motion.div>

        {/* ─── Text column ──────────────────────── */}
        <div>
          <SectionHeader
            tag="About Me"
            title="Developer by craft,<br/>Scientist by curiosity"
            subtitle={PERSONAL.bio}
          />

          <div className="grid grid-cols-2 gap-3 mb-8">
            {HIGHLIGHTS.map((item, i) => (
              <HighlightCard key={item.title} item={item} index={i} />
            ))}
          </div>

          <div className="flex gap-3 flex-wrap">
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white border-none cursor-pointer transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: "var(--grad)", boxShadow: "0 4px 20px var(--accent-glow)" }}
            >
              Hire Me
            </button>
            <a
              href={PERSONAL.cvUrl}
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm cursor-pointer transition-all duration-300 border hover:border-[var(--accent)] hover:text-[var(--accent)]"
              style={{ borderColor: "var(--border2)", color: "var(--text)" }}
            >
              <FiDownload size={15} /> Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
