/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#10b981",
        "primary-dark": "#059669",
        "primary-light": "#6ee7b7",
        accent: "#8b5cf6",
        "accent-light": "#a78bfa",
        "bg-dark": "#0f1419",
        "bg-card": "#1a1f2e",
        "bg-hover": "#252d3d",
        "text-primary": "#e4e9f1",
        "text-secondary": "#a0aac0",
        "border-color": "#2a3344",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #10b981, #8b5cf6)",
        "gradient-subtle-1":
          "linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(139, 92, 246, 0.05))",
        "gradient-subtle-2":
          "linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(16, 185, 129, 0.05))",
      },
      fontSize: {
        "heading-lg": "3.5rem",
        "heading-md": "2.5rem",
        "heading-sm": "1.5rem",
      },
      boxShadow: {
        "glow-primary": "0 0 30px rgba(16, 185, 129, 0.2)",
        "glow-accent": "0 0 30px rgba(139, 92, 246, 0.2)",
      },
    },
  },
  plugins: [],
};
