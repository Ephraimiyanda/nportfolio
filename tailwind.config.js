import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "var(--bg)",
        elevated: "var(--bg-elevated)",
        soft: "var(--bg-soft)",
        ink: "var(--fg)",
        mute: "var(--muted)",
        faint: "var(--faint)",
        accent: "var(--accent)",
        "accent-ink": "var(--accent-ink)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        display: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        accent: "0 0 40px var(--glow)",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};

module.exports = config;
