/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'inner-strong': 'inset 0 6px 10px rgba(0, 0, 0, 0.7)', // Inner shadow ที่ชัดขึ้น
        '3D': '0 6px 10px rgba(0, 0, 0, 2)',
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
}

