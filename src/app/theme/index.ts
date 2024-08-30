/* theme.ts */
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

import colors from "./colors";
import fonts, { textStyles } from "./typography";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  colors,
  fonts,
  textStyles,

  styles: {
    global: (props: any) => ({
      "*": {
        borderColor: mode("dark.1", "white.1")(props),
      },
      "::placeholder": {
        color: mode("light.2", "light.4")(props),
      },
      body: {
        overflowX: "hidden",
        bg: mode("dark.0", "light.0")(props),
        color: mode("text.dark.0", "text.light.0")(props),
      },
      footer: {
        bg: mode("dark.1", "light.1")(props),
        color: mode("text.dark.0", "text.light.0")(props),
      },
      header: {
        bg: mode("dark.1", "light.1")(props),
        color: mode("text.dark.0", "text.light.0")(props),
      },
    }),
  },
});
