/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./asset/style/*.css"],
  theme: {
    container: {
      center: true,
    },
    colors: {
      primary: "#000000",
      secondary: "#333333",
      text: "#b8b8b8",
      background: "#f8f8f8",
    },
    extend: {
      fontSize: {
        "xxs": "0.6rem",
        "3xl": "2rem",
      },
      lineHeight: {
        '18': '1.125rem',
      }  
    },
  },
  plugins: [],
};
