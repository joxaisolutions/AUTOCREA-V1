import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#0A0E27",
        foreground: "#FFFFFF",
        primary: {
          DEFAULT: "#4A90E2",
          50: "#EBF4FB",
          100: "#D7E9F7",
          200: "#AFD3EF",
          300: "#87BDE7",
          400: "#5FA7DF",
          500: "#4A90E2",
          600: "#3B73B5",
          700: "#2C5688",
          800: "#1E3A5A",
          900: "#0F1D2D",
        },
        secondary: {
          DEFAULT: "#9B59B6",
          50: "#F4ECF7",
          100: "#E9D9EF",
          200: "#D3B3DF",
          300: "#BD8DCF",
          400: "#A767BF",
          500: "#9B59B6",
          600: "#7C4792",
          700: "#5D356D",
          800: "#3E2449",
          900: "#1F1224",
        },
        accent: {
          DEFAULT: "#00D9FF",
          50: "#E6F9FF",
          100: "#CCF3FF",
          200: "#99E7FF",
          300: "#66DBFF",
          400: "#33CFFF",
          500: "#00D9FF",
          600: "#00AECC",
          700: "#008299",
          800: "#005766",
          900: "#002B33",
        },
        surface: {
          DEFAULT: "#1a1f3a",
          light: "#242b4a",
          dark: "#0A0E27",
        },
        destructive: {
          DEFAULT: "#EF4444",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#1a1f3a",
          foreground: "#9CA3AF",
        },
        popover: {
          DEFAULT: "#1a1f3a",
          foreground: "#FFFFFF",
        },
        card: {
          DEFAULT: "#1a1f3a",
          foreground: "#FFFFFF",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
