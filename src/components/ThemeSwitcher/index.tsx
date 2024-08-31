'use client';

import { Button, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { BsSun, BsMoonStarsFill } from 'react-icons/bs';

export default function ColorModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();

  // Define color values based on the current color mode
  const bg = useColorModeValue('dark.2', 'transparent'); // Background color
  const btnHover = useColorModeValue('red.600', 'red.100'); // Hover color
  const btnColor = useColorModeValue('white', 'main'); // Text color
  const btnBd = useColorModeValue('dark.1', 'main'); // Border color

  return (
    <Button
      aria-label="Toggle Color Mode"
      onClick={toggleColorMode}
      _hover={{ bg: btnHover }} // Apply hover effect
      w="fit-content"
      border="2px solid" // Corrected border style
      borderColor={btnBd} // Apply border color
      bg={bg} // Apply background color
      color={btnColor} // Apply text color
    >
      {colorMode === 'dark' ? <BsMoonStarsFill /> : <BsSun />}
    </Button>
  );
}
