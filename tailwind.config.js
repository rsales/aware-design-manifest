const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  theme: {
    colors: {
      primary: "#fbad18",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      yellow: colors.yellow,
      green: colors.green,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.purple,
    },
    screens: {
      sm: "600px",
      md: "960px",
      lg: "1264px",
      xl: "1904px"
    },
    extend: {}
  },
  variants: {},
  plugins: []
};
