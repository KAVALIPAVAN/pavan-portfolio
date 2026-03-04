"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { PERSONAL } from "@/lib/data";
import {
  FiMail, FiLinkedin, FiGithub, FiSend,
} from "react-icons/fi";
// import { FiTwitter} from "react-icons/fi";

const CONTACT_LINKS = [
  // { icon: FiMail, label: "Email", value: "kavalipavan22@gmail.com", href: `mailto:${PERSONAL.email}` },
  { icon: FiMail, label: "Email", value: "kavalipavan22@gmail.com", href: `https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL.email}` },
  { icon: FiLinkedin, label: "LinkedIn", value: "linkedin.com/in/kavali-pavan-598515274/", href: PERSONAL.linkedin },
  { icon: FiGithub, label: "GitHub", value: "github.com/KAVALIPAVAN/", href: PERSONAL.github },
  // { icon: FiTwitter, label: "Twitter / X", value: "@kavali_pavan", href: PERSONAL.twitter },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const leftRef = useRef(null);
  const leftInView = useInView(leftRef, { once: true, margin: "-60px" });
  const rightRef = useRef(null);
  const rightInView = useInView(rightRef, { once: true, margin: "-60px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      formRef.current?.reset();
    }, 1500);
  };

  return (
    <section id="contact" className="section-pad" style={{ background: "var(--bg)" }}>
      <SectionHeader tag="Contact" title="Let&#39;s Work Together" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start max-w-5xl">

        {/* ─── Left: Info ───────────────────────── */}
        <motion.div
          ref={leftRef}
          initial={{ opacity: 0, x: -30 }}
          animate={leftInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4"
        >
          <h3 className="font-syne text-2xl md:text-3xl font-extrabold leading-tight text-primary">
            Let&apos;s build something{" "}
            <span className="text-grad">remarkable</span>
          </h3>
          <p className="text-secondary leading-relaxed">
            I&apos;m open to new opportunities — freelance, full-time, or collaborative projects.
            Drop me a line and let&apos;s create something great together.
          </p>

          {CONTACT_LINKS.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={leftInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              whileHover={{ x: 6, borderColor: "var(--accent)" }}
              className="flex items-center gap-4 px-5 py-4 rounded-2xl border no-underline transition-all duration-300"
              style={{ background: "var(--surface)", borderColor: "var(--border)", color: "var(--text)" }}
            >
              <div
                className="w-10 h-10 min-w-10 rounded-xl flex items-center justify-center"
                style={{ background: "var(--accent-glow)" }}
              >
                <link.icon size={18} style={{ color: "var(--accent)" }} />
              </div>
              <div>
                <div className="text-[0.75rem] font-medium" style={{ color: "var(--text3)" }}>{link.label}</div>
                <div className="text-[0.9rem] font-semibold text-primary">{link.value}</div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* ─── Right: Form ──────────────────────── */}
        <motion.div
          ref={rightRef}
          initial={{ opacity: 0, x: 30 }}
          animate={rightInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-8 rounded-2xl border"
          style={{ background: "var(--surface)", borderColor: "var(--border)" }}
        >
          {status === "sent" ? (
            <div className="text-center py-8">
              <div className="text-4xl mb-4">✓</div>
              <p className="font-syne font-bold text-xl text-primary mb-2">Message Sent!</p>
              <p className="text-secondary text-sm">I&apos;ll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "First Name", placeholder: "John" },
                  { label: "Last Name", placeholder: "Doe" },
                ].map((f) => (
                  <div key={f.label}>
                    <label className="block text-[0.85rem] font-semibold mb-2 text-secondary">
                      {f.label}
                    </label>
                    <input
                      type="text"
                      placeholder={f.placeholder}
                      required
                      className="w-full px-4 py-3 rounded-xl border text-[0.9rem] outline-none transition-all duration-200 focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_var(--accent-glow)]"
                      style={{
                        background: "var(--bg)",
                        borderColor: "var(--border2)",
                        color: "var(--text)",
                        fontFamily: "inherit",
                      }}
                    />
                  </div>
                ))}
              </div>
              {[
                { label: "Email", type: "email", placeholder: "john@example.com" },
                { label: "Subject", type: "text", placeholder: "Project Collaboration" },
              ].map((f) => (
                <div key={f.label}>
                  <label className="block text-[0.85rem] font-semibold mb-2 text-secondary">
                    {f.label}
                  </label>
                  <input
                    type={f.type}
                    placeholder={f.placeholder}
                    required
                    className="w-full px-4 py-3 rounded-xl border text-[0.9rem] outline-none transition-all duration-200 focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_var(--accent-glow)]"
                    style={{
                      background: "var(--bg)",
                      borderColor: "var(--border2)",
                      color: "var(--text)",
                      fontFamily: "inherit",
                    }}
                  />
                </div>
              ))}
              <div>
                <label className="block text-[0.85rem] font-semibold mb-2 text-secondary">
                  Message
                </label>
                <textarea
                  placeholder="Tell me about your project, timeline, and budget..."
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border text-[0.9rem] outline-none transition-all duration-200 resize-y focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_var(--accent-glow)]"
                  style={{
                    background: "var(--bg)",
                    borderColor: "var(--border2)",
                    color: "var(--text)",
                    fontFamily: "inherit",
                  }}
                />
              </div>
              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full font-semibold text-white border-none cursor-pointer transition-all duration-200 disabled:opacity-60"
                style={{ background: "var(--grad)" }}
              >
                <FiSend size={15} />
                {status === "sending" ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
