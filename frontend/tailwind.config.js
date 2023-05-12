/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGray: "#696969",
        darkGray2: "#1E1E1E",
        darkGray3: "#353A40",
        darkGray4: "#636A73",
        lightGray: "#D9D9D9",
        lightGray2: "#AEAEAE",
        lightGray3: "#F0F0F0",
        lightBg: "#F8F8F8",
        blue: "#1CB5B1",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
