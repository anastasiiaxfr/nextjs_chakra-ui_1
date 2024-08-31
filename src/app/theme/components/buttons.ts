import { mode } from "@chakra-ui/theme-tools";

const Button = {
  baseStyle: () => ({
    fontWeight: "bold",
  }),
  sizes: {
    md: {},
  },
  variants: {
    primary: {
      bg: "grad.1",
      backgroundSize: "200% auto",
      color: "white",
      transition: "0.3s",
      _hover: {
        backgroundPosition: "right center",
        boxShadow: "0 1px 7px rgba(235, 20, 132, 0.2)",
        "&[disabled]": {
          bg: "pink.500",
        },
      },
    },
    outline: (props) => ({
      padding: "0.5em 1.5em",
      color: mode("main", "#ff6363")(props),
      border: "2px solid",
      borderColor: mode("main", "#ff6363")(props),
      _hover: {
        bgColor: mode("main", "red.100")(props),
        borderColor: mode("main", "#ff6363")(props),
        color: mode("#fff", "#ff6363")(props),
      },
      _focus: {
        bgColor: mode("main", "red.100")(props),
        borderColor: mode("main", "#ff6363")(props),
        color: mode("#fff", "#ff6363")(props),
      },
    }),
    dark: (props) => ({
      padding: "0.5em 1.5em",
      color: mode("white", "dark")(props),
      bgColor: mode("dark.2", "light.2")(props),
      border: "2px solid",
      borderColor: mode("dark.2", "light.2")(props),
      _hover: {
        bgColor: mode("main", "main")(props),
        borderColor: mode("main", "main")(props),
        color: mode("white", "white")(props),
      },
    }),
  },
};

export default Button;
