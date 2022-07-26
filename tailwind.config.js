/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      visibility: ["group-hover"],
      gridTemplateColumns: {
        'auto-fit-220': 'repeat(auto-fit, minmax(220px, 1fr))',
      },
    },
  },
  plugins: [],
}
