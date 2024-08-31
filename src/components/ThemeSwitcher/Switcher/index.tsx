"use client";
import { FormControl, FormLabel, Switch, Text, useColorMode } from "@chakra-ui/react";

export default function ThemeToggleButton() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <FormControl display="flex">
      <FormLabel htmlFor="switch-theme" fontSize="sm" fontWeight="700" mb="0">
        <Text as="b">{colorMode === "light" ? "Light" : "Dark"}</Text>   theme
      </FormLabel>
      <Switch id="switch-theme" colorScheme="red" onChange={toggleColorMode} />
    </FormControl>
  );
}
