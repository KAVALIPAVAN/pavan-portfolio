"use client";
import { motion } from "framer-motion";
import { FiArrowRight} from "react-icons/fi";
import { useTypewriter } from "@/hooks/useTypewriter";
import { PERSONAL, STATS, TYPED_PHRASES } from "@/lib/data";

export default function Hero() {
  const typed = useTypewriter(TYPED_PHRASES);

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] },
  });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: "100px", padding: "100px clamp(16px,5vw,80px) 80px" }}
    >
      {/* ─── Background ─────────────────────────── */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
          }}
        />
        {/* Blobs */}
        {[
          { cls: "w-[600px] h-[600px] -top-1/5 -left-[10%]", color: "var(--accent)", delay: "0s" },
          { cls: "w-[500px] h-[500px] -bottom-[10%] -right-[10%]", color: "var(--accent-coral)", delay: "-3s" },
          { cls: "w-[400px] h-[400px] top-[30%] right-[20%]", color: "var(--accent-teal)", delay: "-6s" },
        ].map((b, i) => (
          <div
            key={i}
            className={`absolute rounded-full ${b.cls}`}
            style={{
              background: b.color,
              filter: "blur(80px)",
              opacity: 0.12,
              animation: `blobFloat 8s ease-in-out infinite alternate`,
              animationDelay: b.delay,
            }}
          />
        ))}
      </div>

      {/* ─── Content ────────────────────────────── */}
      <div className="relative z-10 max-w-3xl">
        {/* Badge */}
        <motion.div {...fadeUp(0.5)}>
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[0.8rem] font-medium mb-7 border"
            style={{ background: "var(--surface2)", borderColor: "var(--border2)", color: "var(--text2)" }}
          >
            <span
              className="w-[7px] h-[7px] rounded-full animate-pulse-dot"
              style={{ background: "var(--accent-teal)", boxShadow: "0 0 8px var(--accent-teal)" }}
            />
            Open to opportunities · Available for hire
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          {...fadeUp(0.7)}
          className="font-syne font-extrabold tracking-tight leading-[1.05] mb-4"
          style={{ fontSize: "clamp(2.8rem,7vw,6rem)" }}
        >
          <span className="block text-primary">Hi, I&apos;m {PERSONAL.name}</span>
          <span className="block text-grad">{PERSONAL.tagline}</span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          {...fadeUp(0.9)}
          className="flex items-center gap-1 mb-6 font-syne font-semibold"
          style={{ fontSize: "clamp(1.3rem,3vw,2rem)", color: "var(--text2)", minHeight: "2.5rem" }}
        >
          <span>{typed}</span>
          <span
            className="inline-block w-[3px] rounded-sm animate-[blink_1s_infinite]"
            style={{ height: "1.2em", background: "var(--accent)" }}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          {...fadeUp(1.1)}
          className="text-secondary leading-relaxed max-w-xl mb-10"
          style={{ fontSize: "clamp(1rem,1.5vw,1.15rem)" }}
        >
          {PERSONAL.shortBio}
        </motion.p>

        {/* Buttons */}
        <motion.div {...fadeUp(1.3)} className="flex gap-4 flex-wrap">
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-[0.95rem] text-white border-none cursor-pointer transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: "var(--grad)",
              boxShadow: "0 4px 24px var(--accent-glow)",
            }}
          >
            View Projects <FiArrowRight size={16} />
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-[0.95rem] cursor-pointer transition-all duration-300 border hover:border-[var(--accent)] hover:text-[var(--accent)] bg-transparent"
            style={{ borderColor: "var(--border2)", color: "var(--text)" }}
          >
            Get in Touch
          </button>
        </motion.div>
      </div>

      {/* ─── Stats (Desktop) ────────────────────── */}
      <div className="absolute right-[clamp(16px,5vw,80px)] top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-5 z-10">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4 + i * 0.1, duration: 0.5 }}
            whileHover={{ x: -4 }}
            className="text-center px-6 py-5 rounded-2xl border backdrop-blur-sm min-w-[120px] transition-all duration-300 hover:border-[var(--accent)]"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <div className="font-syne text-3xl font-extrabold text-grad">{stat.num}</div>
            <div className="text-[0.75rem] mt-1" style={{ color: "var(--text3)" }}>{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* ─── Scroll indicator ───────────────────── */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10" style={{ color: "var(--text3)" }}>
        <div
          className="w-px h-12 animate-scroll-line rounded-full"
          style={{ background: "linear-gradient(to bottom, var(--accent), transparent)" }}
        />
        <span className="text-xs tracking-widest uppercase">Scroll</span>
      </div>

      {/* blink keyframe */}
      <style jsx global>{`
        @keyframes blink { 0%,100%{opacity:1}50%{opacity:0} }
      `}</style>
    </section>
  );
}
