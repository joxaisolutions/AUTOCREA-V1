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
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#001F4C",
          dark: "#081046",
          50: "#E8F0FF",
          100: "#D1E0FF",
          200: "#A3C1FF",
          300: "#75A2FF",
          400: "#4783FF",
          500: "#001F4C",
          600: "#081046",
          700: "#06082D",
          800: "#04041F",
          900: "#020211",
        },
        accent: {
          DEFAULT: "#A300FF",
          bright: "#B400FF",
          50: "#F5E6FF",
          100: "#EBCCFF",
          200: "#D799FF",
          300: "#C366FF",
          400: "#AF33FF",
          500: "#A300FF",
          600: "#8200CC",
          700: "#620099",
          800: "#410066",
          900: "#210033",
        },
        highlight: {
          DEFAULT: "#00FFFF",
          electric: "#00CCFF",
          50: "#E6FFFF",
          100: "#CCFFFF",
          200: "#99FFFF",
          300: "#66FFFF",
          400: "#33FFFF",
          500: "#00FFFF",
          600: "#00CCCC",
          700: "#009999",
          800: "#006666",
          900: "#003333",
        },
        secondary: {
          DEFAULT: "#B0B0C4",
          neutral: "#6D6D83",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
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
