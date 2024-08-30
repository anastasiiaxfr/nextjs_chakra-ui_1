'use client'
import { Button, useColorMode } from "@chakra-ui/react";

export default function ThemeToggleButton() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode}>
      Switch to {colorMode === "dark" ? "Light" : "Dark"} Mode
    </Button>
  );
}
