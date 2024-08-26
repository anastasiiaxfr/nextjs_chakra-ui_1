/* theme.ts */
import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: "var(--font-rubik)",
    body: "var(--font-rubik)",
  },
  textStyles: {
    h1: {
      // you can also use responsive styles
      fontSize: ["48px", "72px"],
      fontWeight: "bold",
      lineHeight: "110%",
      letterSpacing: "-2%",
    },
    h2: {
      fontSize: ["2xl", "4xl", "4xl", "5xl"],
      fontWeight: "thin",
      lineHeight: "110%",
      letterSpacing: "-1%",
    },
  },
});
