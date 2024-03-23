/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/Images/heroPattern.png')",
      },
      colors: {
        'gray-text': 'rgba(250, 250, 250, 0.80)',
        'gray-light': 'rgba(138, 133, 133, 0.17)',
        'gray-dark': 'rgba(185, 185, 185, 0.07)',
      }
    },
  },
  plugins: [],
}

