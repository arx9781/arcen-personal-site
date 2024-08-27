/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "satoshi-variable": ["Satoshi-Variable", "sans-serif"],
        "satoshi-variable-italic": ["Satoshi-VariableItalic", "sans-serif"],
      },
      colors: {
        // dark mode
        "background-dark": "#0a0a0b",
        "text-primary-dark": "#d6d6d6",
        "text-secondary-dark": "#444444",
        "translucent-accent-dark": "#232323",
        "lightMode-icon": "#b5873c",

        // light mode
        "background-light": "#d6d6d6",
        "text-primary-light": "#0a0a0b",
        "text-secondary-light": "#444444",
        "translucent-accent-light": "#b8b8b8",
        "darkMode-icon": "#7b2c96",
      },
    },
  },
  plugins: [],
};
