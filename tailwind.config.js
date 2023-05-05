module.exports = {
  content: ["./src/**/*.{js,jsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#24292e",
      },
      screens: {
        xs: "485px",
      },
      maxWidth: {
        container: "1600px",
      },
      minWidth: {
        container: "280px",
      },
    },
  },
  plugins: [],
};
