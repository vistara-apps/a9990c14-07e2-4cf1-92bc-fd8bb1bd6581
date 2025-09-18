import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(220 14% 96%)",
        foreground: "hsl(0 0% 0%)",
        // Design system color tokens from specification
        bg: "hsl(220 14% 96%)",
        accent: "hsl(262 61% 44%)",
        primary: "hsl(204 70% 53%)",
        surface: "hsl(0 0% 100%)",
        // Extended color palette
        primary: {
          DEFAULT: "hsl(204 70% 53%)",
          50: "hsl(204 70% 98%)",
          100: "hsl(204 70% 95%)",
          200: "hsl(204 70% 88%)",
          300: "hsl(204 70% 78%)",
          400: "hsl(204 70% 65%)",
          500: "hsl(204 70% 53%)",
          600: "hsl(204 70% 45%)",
          700: "hsl(204 70% 38%)",
          800: "hsl(204 70% 32%)",
          900: "hsl(204 70% 28%)",
          950: "hsl(204 70% 20%)",
        },
        accent: {
          DEFAULT: "hsl(262 61% 44%)",
          50: "hsl(262 61% 98%)",
          100: "hsl(262 61% 95%)",
          200: "hsl(262 61% 88%)",
          300: "hsl(262 61% 78%)",
          400: "hsl(262 61% 65%)",
          500: "hsl(262 61% 44%)",
          600: "hsl(262 61% 38%)",
          700: "hsl(262 61% 32%)",
          800: "hsl(262 61% 28%)",
          900: "hsl(262 61% 24%)",
          950: "hsl(262 61% 18%)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        chart: {
          1: "var(--chart-1)",
          2: "var(--chart-2)",
          3: "var(--chart-3)",
          4: "var(--chart-4)",
          5: "var(--chart-5)",
        },
      },
      borderRadius: {
        lg: "16px",
        md: "10px",
        sm: "6px",
      },
      spacing: {
        lg: "20px",
        md: "12px",
        sm: "8px",
      },
      boxShadow: {
        card: "0 4px 12px hsla(0,0%,0%,0.08)",
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
  plugins: [],
};
export default config;
