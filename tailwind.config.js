/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bgPrimary: '#1C2333',
        bgCard: '#252D3F',
        bgDark: '#151A27',
        gold: '#E6A817',
        coral: '#D94452',
        textGray: '#A0A8B8',
        linkGray: '#8B95A5',
        greenAccent: '#4CAF50',
      },
      fontFamily: {
        sans: ['Vazirmatn', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
