/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '7/10': '70%',
        '3/10': '30%',
      },
      colors: {
        'primary': '#4CAF50',
        'secondary': '#F2F2F2',
        'tertiary': '#E5E5E5',
        'danger': '#F44336'
      }
    }
  },
  plugins: [],
}
