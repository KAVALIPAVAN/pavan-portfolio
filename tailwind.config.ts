import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        dm: ["var(--font-dm-sans)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      colors: {
        accent: {
          DEFAULT: "#6c63ff",
          coral: "#ff6b6b",
          teal: "#00d9c0",
        },
        dark: {
          base: "#07080d",
          surface: "#0d0f18",
          card: "#12151f",
        },
      },
      backgroundImage: {
        "grad-primary": "linear-gradient(135deg, #6c63ff, #ff6b6b)",
        "grad-secondary": "linear-gradient(135deg, #00d9c0, #6c63ff)",
      },
      animation: {
        "blob-float": "blobFloat 8s ease-in-out infinite alternate",
        "pulse-dot": "pulseDot 2s infinite",
        "scroll-line": "scrollLine 2s ease infinite",
        float: "float 4s ease-in-out infinite alternate",
      },
      keyframes: {
        blobFloat: {
          "0%": { transform: "translate(0,0) scale(1)" },
          "100%": { transform: "translate(30px,20px) scale(1.08)" },
        },
        pulseDot: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
        scrollLine: {
          "0%": { transform: "scaleY(0)", transformOrigin: "top", opacity: "0" },
          "50%": { transform: "scaleY(1)", transformOrigin: "top", opacity: "1" },
          "100%": { transform: "scaleY(0)", transformOrigin: "bottom", opacity: "0" },
        },
        float: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
