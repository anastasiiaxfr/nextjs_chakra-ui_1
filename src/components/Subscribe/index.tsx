'use client';
import { Box, HStack, Text, Input, Button, useColorModeValue } from "@chakra-ui/react";

export default function Subscribe() {
    // Use useColorModeValue to get color values based on the color mode
    const inputBg = useColorModeValue('dark.0', 'white');
    const inputBd = useColorModeValue('dark.0', 'light.4');
    const inputBdHover = useColorModeValue('dark.0', 'light.4');

    return (
        <Box w="full">
            <Text fontWeight="700" fontSize={["20px", "xl"]} mb="2" mt="3">
                Get the latest Updates
            </Text>
            <HStack spacing={-5} w={{ lg: '75%' }} position="relative">
                <Input placeholder="email@mail.com" type="email" bg={inputBg} borderColor={inputBd} _hover={{ borderColor: inputBdHover }} _focus={{ borderColor: inputBdHover, boxShadow: 'none' }} />
                <Button zIndex="1" position="absolute" inset="0" left="auto" variant="dark">
                    Email me
                </Button>
            </HStack>
        </Box>
    );
}
