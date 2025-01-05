import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import animatePlugin from "tailwindcss-animate";
import fluid, { extract, screens, fontSize } from "fluid-tailwind";

export default {
  content: {
    files: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    extract,
  },
  theme: {
    screens,
    fontSize: {
      ...fontSize,
      display: "3rem",
      h1: "2.5rem",
      h2: ["2rem", "1.3"],
      h3: ["1.75rem", "1.2"],
      h4: ["1.25rem", "1.2"],
    },
    extend: {
      fontFamily: {
        sans: ["CeraPro", ...fontFamily.sans],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        main: "1.25rem",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: {
          DEFAULT: "hsl(var(--foreground))",
          accent: "hsl(var(--foreground-accent))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          accent: "hsl(var(--primary-accent))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: {
          DEFAULT: "hsl(var(--border))",
          accent: "hsl(var(--border-accent))",
        },
        gold: "hsl(var(--gold))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        heading: {
          h2: "hsl(var(--heading-h2))",
          h3: {
            DEFAULT: "hsl(var(--heading-h3))",
            accent: "hsl(var(--heading-h3-accent))",
          },
          h4: "hsl(var(--heading-h4))",
        },
      },
    },
  },
  plugins: [animatePlugin, fluid({ checkSC144: false })],
} satisfies Config;
