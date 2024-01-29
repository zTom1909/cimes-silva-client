/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        whiteBackground: "#FEFEFE",
        blueBackground: "#0A4FAD",
        navText: "#0851AC",
        navUnderline: "#0B50AF",
        navUnderlineHover: "#0B50AF99",
        navUnderlineUnselected: "#0B50AF54",
        productBackground: "#FFD2CF",
        productName: "#E3948F",
      },
      fontFamily: {
        humanist777: ['humanist777', 'sans-serif'],
        feltTipRoman: ['feltTipRoman', 'sans-serif'],
        montserrat: ['montserrat', 'sans-serif']
      },
      backgroundImage: {
        'no-page': "url('utils/images/404-background.jpeg')",
      }
    },
  },
  plugins: [],
}

