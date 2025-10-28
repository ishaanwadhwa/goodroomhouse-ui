import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Ralph Lauren–inspired tones
        primary: {
          DEFAULT: "#1A2238", // Deep Navy Royale
          dark: "#0E1624", // Richer navy for hover/active states
          light: "#2E3A58", // For gradients or muted overlays
        },

        // Backgrounds and neutrals
        background: {
          DEFAULT: "#F8F5ED", // Champagne Ivory — main page background
          soft: "#D4CBB8", // Stone Taupe — cards / secondary sections
          dark: "#3D2F2F", // Cigar Brown — footer / deep contrast
        },

        // Accents
        accent: {
          DEFAULT: "#A33E3E", // Crimson Merlot — CTA buttons, links
          hover: "#8E3434", // Hover or focus states
          gold: "#C4A26C", // Brass Luxe — subtle decorative highlight
          olive: "#3E4E3C", // Hunter Olive — secondary accent
        },

        // Text colors
        text: {
          DEFAULT: "#2B2B2B", // Charcoal base
          light: "#4A4A4A", // Muted body text
          inverse: "#F8F5ED", // On dark backgrounds
        },

        // Border / outlines
        border: {
          DEFAULT: "#C4A26C", // Gold accent border
          subtle: "#D4CBB8", // Soft border for cards
        },

        // Back-compat for existing uses
        brand: {
          DEFAULT: "#C4A26C", // map brand to accent.gold
          dark: "#8E3434",
          light: "#D4CBB8",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 12px rgba(0, 0, 0, 0.08)",
        deep: "0 4px 20px rgba(0, 0, 0, 0.15)",
      },
      backgroundImage: {
        "nav-gradient": "linear-gradient(180deg, #1A2238 0%, #0E1624 100%)",
      },
    },
  },
  plugins: [nextui()],
};

export default config;


