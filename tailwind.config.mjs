/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        purple: { DEFAULT: "#7C3AED", dark: "#6D28D9", light: "#A78BFA", soft: "#EDE9FE" },
        ink: { DEFAULT: "#0F0A1E", 2: "#171029", 3: "#0B0713" },
        surface: "#FFFFFF",
        muted: { DEFAULT: "#6B7280", light: "#9CA3AF" },
        star: "#FBBF24",
        positive: "#34D399",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 10px 40px -10px rgba(124,58,237,0.25)",
        soft: "0 8px 30px rgba(15,10,30,0.08)",
      },
      borderRadius: { xl2: "1.25rem" },
    },
  },
  plugins: [],
};
