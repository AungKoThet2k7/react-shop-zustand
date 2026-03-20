/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "deep-slate": "#36565F",
        "ocean-steel": "#5F8190",
        "cloud-mist": "#E2F0F0",
        "pure-white": "#FFFFFF",
        "jet-black": "#141414",
      },
    },
  },
  plugins: [],
}
