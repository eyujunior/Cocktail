module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["poppins", "system-ui"],
      title: ["Abril Fatface", "Georgia"],
    },

    extend: {
      colors: {
        green: "#62aa59",
        blue: "#00AAE7",
      },
      backgroundImage: {
        hero: "linear-gradient(to bottom, rgba(0,0,0,.4), rgba(0,0,0,.6)), url('./assets/img/bg.jpg')",
      },
    },
  },
  plugins: [],
};
