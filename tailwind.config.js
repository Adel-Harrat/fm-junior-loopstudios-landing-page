/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "tw-white": "hsl(0, 0%, 100%)",
        "tw-black": "hsl(0, 0%, 0%)",
        "tw-gray": "hsl(0, 0%, 55%)",
        "tw-dark-gray": "hsl(0, 0%, 41%)",
      },
      fontFamily: {
        "tw-title": ["'Josefin Sans'", "sans-serif"],
        "tw-body": ["'Alata'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
