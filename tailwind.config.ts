import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        crimson: "#DC2626",
        "crimson-light": "#EF4444",
        electric: "#3B82F6",
        dark: {
          900: "#09090B",
          800: "#0F0F12",
          700: "#18181B",
          600: "#27272A",
          500: "#3F3F46",
        },
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      animation: {
        "pulse-crimson": "pulseCrimson 2s ease-in-out infinite",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-in-left": "fadeInLeft 0.6s ease-out forwards",
        "fade-in-right": "fadeInRight 0.6s ease-out forwards",
        "scale-up": "scaleUp 0.5s ease-out forwards",
        "glow": "glow 2s ease-in-out infinite alternate",
        "scan": "scan 8s linear infinite",
      },
      keyframes: {
        pulseCrimson: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(220, 38, 38, 0.4)" },
          "50%": { boxShadow: "0 0 40px rgba(220, 38, 38, 0.8)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInLeft: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeInRight: {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleUp: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        glow: {
          "0%": { textShadow: "0 0 10px rgba(220, 38, 38, 0.5)" },
          "100%": { textShadow: "0 0 30px rgba(220, 38, 38, 1), 0 0 60px rgba(220, 38, 38, 0.5)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      boxShadow: {
        "crimson": "0 0 20px rgba(220, 38, 38, 0.3)",
        "crimson-lg": "0 0 40px rgba(220, 38, 38, 0.4)",
        "crimson-xl": "0 0 60px rgba(220, 38, 38, 0.5)",
        "electric": "0 0 20px rgba(59, 130, 246, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
