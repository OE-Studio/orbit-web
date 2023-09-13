/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: 'Inter',
        clash: 'Clash Display',
        dmsans: 'DM Sans'
      },
      colors: {
        primaryColor: "#A700FF",
        darkText: "#646464",
        purple5: "#fdfaff",
        purple25: "#f9efff",
        purple50: "#f6e5ff",
        purple100: "#edccff",
        purple150: "#e5b2ff",
        purple200: "#dc99ff",
        purple300: "#ca66ff",
        purple400: "#b933ff",
        purple500: "#a700ff",

        grey5: "#F2F2F2",
        grey10: "#EAEAEA",
        grey15: "#d9d9d9",
        grey25: "#d1d1d1",
        grey50: "#c2c2c2",
        grey100: "#b3b3b3",
        grey150: "#a5a5a5",
        grey200: "#969696",
        grey300: "#787878",
        grey400: "#5b5b5b",
        grey500: "#3d3d3d",
        grey600: "#1b1b1b",

        orange50: "#FDF4EC",
        orange100: "#FCEADA",
        orange150: "#FADFC7",
        orange200: "#F9D5B5",
        orange300: "#F5C08F",
        orange400: "#F2AB6A",
        orange500: "#EF9645",

        red50: "#FDECEC",
        red100: "#FCEADA",
        red150: "#FADFC7",
        red200: "#F9D5B5",
        red300: "#F5C08F",
        red400: "#F26969",
        red500: "#EF4444",
        red600: "#C13737",

        green50: "#F1F7EE",
        green100: "#CCFFE9",
        green150: "#B2FFDE",
        green200: "#99FFD3",
        green300: "#ABD097",
        green400: "#8FC074",
        green500: "#73B051",
        green600: "#00CC74",
        green700: "#00AA61",

        newGreen50: "#E5FFF4",
        newGreen100: "#E3EFDC",
        newGreen150: "#D5E7CB",
        newGreen200: "#99FFD3",
        newGreen300: "#66FFBD",
        newGreen400: "#33FFA7",
        newGreen500: "#00FF91",
        newGreen600: "#00CC74",
        newGreen700: "#00AA61",


        blue25: "#7FBBF8",
        blue50: "#EFF7FD",
        blue100: "#DFEFFB",
        blue150: "#CEE6F9",
        blue200: "#4E80B3",
        blue300: "#9ECEF4",
        blue400: "#1D456E",
        blue500: "#04274B",
        blue600: '#031F3C',
        oldblue500: '#5DADEC',

        teal50: "#ECF8F6",
        teal100: "#DAF0EE",
        teal150: "#C7E9E5",
        teal200: "#B5E2DC",
        teal300: "#8FD3CB",
        teal400: "#6AC5B9",
        teal500: "#45B6A8",

        neutral50: "#ECF8F6",
        neutral100: "#F2F7FA",
        neutral150: "#C7E9E5",
        neutral200: "#E5ECF5",
        neutral300: "#A6B0BF",
        neutral400: "#6AC5B9",
        neutral500: "#45B6A8",


        text100: "#71879C",
        text200: "#E5ECF5",
        text300: "#A0ABBB",

      }
    },
  },
  plugins: [],
}
