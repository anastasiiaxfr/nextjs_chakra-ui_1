"use client";
import { FormControl, FormLabel, Switch, useColorMode } from "@chakra-ui/react";

export default function ThemeToggleButton() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <FormControl display="flex">
      <FormLabel htmlFor="switch-theme" fontSize="sm" fontWeight="700" mb="0">
        {colorMode === "light" ? "Light" : "Dark"} theme
      </FormLabel>
      <Switch id="switch-theme" colorScheme="red" onChange={toggleColorMode} />
    </FormControl>
  );
}
