/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#37cdbe",
          secondary: "#f6d860",
          accent: "#0000ff",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },

}