/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'], // Add Montserrat as a font family
        pacifico: ['Pacifico', 'sans-serif'],
      },
      
      colors: {
        // Dark theme
        darkBg: "#222",
        darkPrimaryText: "#fff",
        darkSecondaryText: "#fff",
        darkBtnBg: "#eee",
        darkHoverBtnBg: "#0d5e8c",
        darkActiveBtnBg: "#1e88e5",

        // Light theme
        lightBg: "#fff",
        lightPrimaryText: "#000",
        lightSecondaryText: "#575757",
        lightBtnBg: "#222",
        lightHoverBtnBg: "#167bce",
        lightActiveBtnBg: "#2196f3",
      },
    },
  },
  plugins: [],
}

