/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        sand: "rgb(var(--color-sand) / <alpha-value>)",
        gold: "rgb(var(--color-gold) / <alpha-value>)",
        teal: "rgb(var(--color-teal) / <alpha-value>)"
      },
      boxShadow: {
        soft: "0 20px 45px -30px rgba(11, 23, 40, 0.5)",
        card: "0 18px 50px -40px rgba(11, 23, 40, 0.45)"
      }
    }
  },
  plugins: []
};
