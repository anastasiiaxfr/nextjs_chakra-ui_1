/* theme.ts */
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

import colors from "./colors";
import fonts, { textStyles } from "./typography";
import Button from "./components/buttons";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  colors,
  fonts,
  textStyles,
  components: {
    Button,
  },
  styles: {
    global: (props: any) => ({
      "*": {
        borderColor: mode("dark.1", "light.1")(props),
      },
      "::placeholder": {
        color: mode("light.2", "light.4")(props),
      },
      // Custom scrollbar styles
      "::-webkit-scrollbar": {
        width: "8px",
        height: "8px",
      },
      "::-webkit-scrollbar-thumb": {
        backgroundColor: mode("main", "main")(props),
        borderRadius: "4px",
      },
      "::-webkit-scrollbar-track": {
        background: mode("dark.1", "light.1")(props),
      },
      "::-webkit-scrollbar-thumb:hover": {
        backgroundColor: mode("gray.400", "gray.500")(props),
      },
      body: {
        overflowX: "hidden",
        bg: mode("dark.0", "light.0")(props),
        color: mode("text.dark.0", "text.light.0")(props),
      },
      footer: {
        bg: mode("dark.1", "light.0")(props),
        color: mode("text.dark.0", "text.light.0")(props),
      },
      header: {
        bg: mode("dark.1", "light.1")(props),
        color: mode("text.dark.0", "text.light.0")(props),
      },
    }),
  },
});
