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
      // 28px at 640px and 40px at 1536px
      h1: [
        "clamp(1.75rem, 1.2143rem + 1.3393vw, 2.5rem)",
        "clamp(2.1rem, 1.4571rem + 1.6071vw, 3rem)",
      ],
      // 24px at 640px and 32px at 1536px
      h2: [
        "clamp(1.5rem, 1.1429rem + 0.8929vw, 2rem)",
        "clamp(1.8rem, 1.2286rem + 1.4286vw, 2.6rem)",
      ],
      h3: [
        "clamp(1.25rem, 0.8929rem + 0.8929vw, 1.75rem)",
        "clamp(1.5rem, 1.0714rem + 1.0714vw, 2.1rem)",
      ],
      // 16px at 640px and 20px at 1536px
      h4: [
        "clamp(1rem, 0.8214rem + 0.4464vw, 1.25rem)",
        "clamp(1.2rem, 0.9857rem + 0.5357vw, 1.5rem)",
      ],
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
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
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
