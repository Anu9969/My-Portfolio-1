/** @type {import('tailwindcss').Config} */
import prelinePlugin from "preline/plugin";

export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/preline/preline.js",
  ],
  theme: {
    extend: {
      colors: {
        text: 'var(--text) !important',
        background: 'var(--background) !important',
        primary: 'var(--primary) !important',
        secondary: 'var(--secondary) !important',
        accent: 'var(--accent) !important',
      },
    },
  },
  plugins: [prelinePlugin],
};