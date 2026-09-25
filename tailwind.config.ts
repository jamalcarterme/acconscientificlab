import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0F2135",
        "ink-2": "#16304a",
        teal: "#1F6F78",
        "teal-light": "#2C8E97",
        amber: "#E8A33D",
        "amber-dark": "#C9822A",
        mist: "#F5F7F8",
        "mist-2": "#EAEEF0",
        slate: "#55636B",
        line: "#D8DEE1",
      },
      fontFamily: {
        head: ["var(--font-archivo)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(15,33,53,0.06), 0 8px 24px -12px rgba(15,33,53,0.18)",
      },
      keyframes: {
        ringPulse: {
          "0%": { transform: "scale(1)", opacity: "0.55" },
          "80%": { transform: "scale(1.9)", opacity: "0" },
          "100%": { transform: "scale(1.9)", opacity: "0" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
      },
      animation: {
        ring: "ringPulse 2.2s cubic-bezier(0.2,0.6,0.4,1) infinite",
        "ring-delay": "ringPulse 2.2s cubic-bezier(0.2,0.6,0.4,1) infinite 1.1s",
        blink: "blink 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
