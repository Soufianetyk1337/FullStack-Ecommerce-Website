/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'black': '#000000',
      'white': '#ffffff',
      'mercury': '#e1e1e1',
      'burnt-sienna': '#ee6961',
      'bornflower-blue': '#5d94e7',
      'dodger-blue': '#3b93ff',
      'persian-pink': '#f876de',
      'spindle': '#b9d1eb',
      'light-orange': '#ff5218',
      "silver-chalice": '#a1a1a1',
      "youtube-red-color": '#ff0000',
      "meta-blue-color": '#4267b2',
      "twitter-blue-color": '#1da1f2',
      "orange-500": "rgb(249, 115 ,22)",
      "orange-600": "rgb(234 ,88, 12)",
      'silver': 'rgba(201, 197, 197, 0.4)'
    },
    extend: {
      visibility: ["group-hover"],

      gridTemplateColumns: {
        'auto-fit-220': 'repeat(auto-fit, minmax(220px, 1fr))',
        'auto-fit-240': 'repeat(auto-fit, minmax(240px, 1fr))',
        'repeat-3-320': 'repeat(3, minmax(320px, 1fr))',
      },
      backgroundImage: {
        'sienna-to-blue': 'linear-gradient(300deg, #ee6961 50%, #5d94e7 74%)',
        'persian-pink-to-spindle': 'linear-gradient(300deg, #f876de 0%, #b9d1eb 74%)',
        'burnt-sienna-to-cornflower-blue': 'linear-gradient(315deg, rgba(237, 105, 97, 0.25) 30%,rgba(93, 148, 231, 0.25) 70%)',
        'instgram-gradient': 'linear-gradient(90deg,rgba(254, 218, 117, 1) 0%,rgba(250, 126, 30, 1) 20%,rgba(214, 41, 118, 1) 40%,rgba(150, 47, 191, 1) 60%,rgba(79, 91, 213, 1) 100%)',
        'body-gradient': 'radial-gradient(at 0% 0%,hsla(12, 100%, 14%, 1) 0px,transparent 50%), radial-gradient(at 100% 0%, hsla(204, 100%, 14%, 1) 0px, transparent 50%) '
      },
      boxShadow: {
        'largest': '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
      },
      animation: {
        'bounce-in-right': "rightbounce 1s ease"
      },
      keyframes: {
        rightbounce: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-2000px)'
          },
          '60%': {
            opacity: '1',
            transform: "translateX(-30px)"
          },
          '80%': {
            transform: "translateX(10px)"
          },
          '100%': {
            transform: "translateX(0)"
          }
        }
      }
    },
  },
  plugins: [],
}
