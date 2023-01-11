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
        secondaryDark: "#F4F844",
        tertiary: "#EC625A",
        tertiaryLight: "#F47A78",
        gray: "#B9BDBE",
        gray2: "#D8DEFF",
        grayLight: "#D0D6D9",
        overlay: "#00000099",
        black: "#000000",
        success: "#06ab02",
        warning: "#ec0707"  
      },
      fontFamily: {
        "sans1": [
          "Hey Comic Extrude"
        ],
      }

    },
  },
  plugins: [],
}
