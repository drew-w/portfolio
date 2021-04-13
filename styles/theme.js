import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#303C2A",
    800: "#628395",
    700: "#07741E",
    600: "#088723",
    500: "#099a28",
    400: "#09A129",
    300: "#0CD438",
    200: "#18F247",
    100: "#C0ECD7",
    50: "#D6EEFF",
  },
};

const theme = extendTheme({ colors });

export default theme;
