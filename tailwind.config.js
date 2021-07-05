module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js","./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fdfdff",
          100: "#d5dbf9",
          200: "#adb9f3",
          300: "#8596ed",
          400: "#5d74e7",
          500: "#3552e1",
          600: "#2b44bf",
          700: "#21369c",
          800: "#17277a",
          900: "#0d1957",
        },
        accent: {
          50: "#f7fef8",
          100: "#effcf0",
          200: "#d6f8db",
          300: "#bdf3c5",
          400: "#8cea99",
          500: "#5ae16d",
          600: "#51cb62",
          700: "#44a952",
          800: "#368741",
          900: "#2c6e35",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
