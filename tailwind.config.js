/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {screens: {
      'md': '768px',
      'lg': '1440px' 
    },},
  },
  plugins: [],
}

