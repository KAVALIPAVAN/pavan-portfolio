"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { PROJECTS } from "@/lib/data";
import { FiGithub} from "react-icons/fi";

function ProjectCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -6, boxShadow: "0 20px 60px rgba(0,0,0,0.35)" }}
      className="project-card relative rounded-2xl border overflow-hidden cursor-default transition-all duration-300 group"
      style={{ background: "var(--surface)", borderColor: "var(--border)" }}
    >
      {/* Featured badge */}
      {project.featured && (
        <span
          className="absolute top-4 left-4 z-10 text-white text-[0.7rem] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full"
          style={{ background: "var(--grad)" }}
        >
          ⭐ Featured
        </span>
      )}

      {/* Preview area */}
      <div
        className="relative h-48 flex items-center justify-center overflow-hidden"
        style={{ background: project.gradient }}
      >
        <span
          className="font-syne text-5xl font-extrabold opacity-[0.07] z-[1] relative select-none text-white"
        >
          {project.label}
        </span>
        <span
          className="absolute top-4 right-4 font-mono-jetbrains text-[0.75rem] opacity-70"
          style={{ color: "var(--accent)" }}
        >
          {project.num}
        </span>
        {/* gradient overlay on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: "linear-gradient(to top, var(--bg), transparent)" }}
        />
      </div>

      {/* Body */}
      <div className="p-6">
        <h3 className="font-syne font-bold text-[1.1rem] mb-2 text-primary">
          {project.title}
        </h3>
        <p className="text-[0.875rem] leading-relaxed mb-4 text-secondary">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-full text-[0.73rem] font-medium font-mono-jetbrains border"
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

        {/* Links */}
        <div className="flex gap-2.5">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[0.82rem] font-semibold border transition-all duration-200 hover:text-primary hover:border-[var(--accent)] no-underline"
            style={{
              background: "var(--bg3)",
              borderColor: "var(--border2)",
              color: "var(--text2)",
            }}
          >
            <FiGithub size={14} /> GitHub
          </a>
          {/* <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[0.82rem] font-semibold text-white border-none transition-all duration-200 hover:opacity-90 no-underline"
            style={{ background: "var(--grad)" }}
          >
            <FiExternalLink size={14} /> Live Demo
          </a> */}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-pad" style={{ background: "var(--bg)" }}>
      <SectionHeader
        tag="Portfolio"
        title="Selected Projects"
        subtitle="A curated collection of projects spanning web development, data science, and machine learning."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.num} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
