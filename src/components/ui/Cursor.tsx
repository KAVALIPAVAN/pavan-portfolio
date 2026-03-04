"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth < 900) return;

    let mx = 0, my = 0, fx = 0, fy = 0;

    const move = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = mx + "px";
        dotRef.current.style.top = my + "px";
      }
    };

    let rafId: number;
    const animate = () => {
      fx += (mx - fx) * 0.12;
      fy += (my - fy) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = fx - 16 + "px";
        ringRef.current.style.top = fy - 16 + "px";
      }
      rafId = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", move);
    animate();

    const hoverEls = document.querySelectorAll("a, button, .project-card, .skill-pill, .tech-item");
    const enterHandler = () => {
      if (dotRef.current) dotRef.current.style.transform = "scale(2.5)";
      if (ringRef.current) Object.assign(ringRef.current.style, { transform: "scale(1.5)", opacity: "0.2" });
    };

    const leaveHandler = () => {
      if (dotRef.current) dotRef.current.style.transform = "scale(1)";
      if (ringRef.current) Object.assign(ringRef.current.style, { transform: "scale(1)", opacity: "0.5" });
    };

    hoverEls.forEach((el) => {
      el.addEventListener("mouseenter", enterHandler);
      el.addEventListener("mouseleave", leaveHandler);
    });

    return () => {
      document.removeEventListener("mousemove", move);
      hoverEls.forEach((el) => {
        el.removeEventListener("mouseenter", enterHandler);
        el.removeEventListener("mouseleave", leaveHandler);
      });
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed w-2 h-2 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 mix-blend-difference transition-transform duration-150 hidden md:block"
        style={{ background: "var(--accent)" }}
      />
      <div
        ref={ringRef}
        className="fixed w-8 h-8 rounded-full pointer-events-none z-[9997] border opacity-50 transition-[transform,opacity] duration-300 hidden md:block"
        style={{ borderColor: "var(--accent)" }}
      />
    </>
  );
}
