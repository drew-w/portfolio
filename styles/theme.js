import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
// import "@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap');";

const colors = {
  brand: {
    900: "#303C2A",
    800: "#3A4832",
    700: "#07741E",
    600: "#088723",
    500: "#099a28",
    400: "#09A129",
    300: "#0CD438",
    200: "#18F247",
    100: "#B0E8CD",
    50: "#C0EDD7",
  },
  otherBrand: {
    light: "#D6EEFF",
    dark: "#628395",
  },
};

const styles = extendTheme({
  global: (props) => ({
    body: {
      fontFamily: "Roboto",
      color: mode("#516C7B", "#D6EEFF")(props),
      bg: mode("#C0EDD7", "#303C2A")(props),
    },
  }),
});

const fonts = {
  body: "Roboto, sans-serif",
  heading: "Roboto, sans-serif",
};

const theme = extendTheme({ colors, styles, fonts });

export default theme;
