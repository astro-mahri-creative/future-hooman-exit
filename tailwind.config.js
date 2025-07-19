/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'phax-dark': '#2F2545',
        'phax-purple': '#8A72C0',
        'phax-cyan': '#A3E3EC',
        'phax-pink': '#FF3F8C'
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif']
      }
    }
  }
}