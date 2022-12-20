/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#53BEBF",
        primaryLight: "#80DEDB",
        primaryDark: "#33ADAA",
        secondary: "#F9D557",
        secondaryLight: "#F4E4B0",
        tertiary: "#EC625A",
        tertiaryLight: "#F47A78",
        gray: "#B9BDBE",
        grayLight: "#D0D6D9",
        black: "#000000"  
      }
    },
  },
  plugins: [],
}
