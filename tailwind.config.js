/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '##D14F0D',
        secondaryColor: 'E6E6FA',
        headingColor: '#081e21',
        smallTextColor: '#193256',
      }
    },
  },
  plugins: [],
}

