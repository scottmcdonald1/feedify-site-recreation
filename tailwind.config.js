module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        eerieBlack: "#131523",
        hanPurple: "#5A38FD",
        darkElectricBlue: "#5A607F",
        aliceBlue: "#F4F7FC",
        lavender: "#E6E9F4",
        cornsilk: "#FFF7DE",
        frenchSkyBlue: "#81B1FF",
      },
    },
  },
  plugins: [],
}
