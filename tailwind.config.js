/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],  theme: {
    extend: {
      fontFamily: {
        'general-sans': ['General Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

