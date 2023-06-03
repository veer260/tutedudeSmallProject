/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["poppins", "sans-serif"],
      },
      colors: {
        "border-gradient": "linear-gradient(45deg, #f9804e, #931479)",
      },
      colors: {
        "regal-purple": "#800080",
        "regal-orange": "#FB824E",
      },
    },
  },
  plugins: [],
};
