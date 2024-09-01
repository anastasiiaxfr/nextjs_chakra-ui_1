"use client";
import React from "react";
import { useColorModeValue, Box, Flex, VStack, Heading, SimpleGrid, Stack, Text, Image, Container } from "@chakra-ui/react";
const Header: React.FC<{ data: any }> = ({ data }) => {
    const gradient = useColorModeValue(
        "transparent",
        "linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.9) 100%)" // Dark mode
    );

    return <>
        <Box
            as="section"
            position="relative"
            width="full"
            bg={useColorModeValue("dark.2", "light.2")}
            mb="6em"
        >
            <Box
                position="absolute"
                top="0"
                left="0"
                width="full"
                height="full"
                background={gradient}
                zIndex="1"
            />
            <VStack spacing={4}>
                <Flex
                    align="center"
                    justify="center"
                    textAlign="center"
                    transform="translateY(6em)"
                    width="12em"
                    height="12em"
                    borderRadius="50%"
                    bg="main"
                    color="white"
                    zIndex={1}
                    position="relative"
                >
                    <Heading fontSize="2xl" lineHeight="0.9">
                        {data.name}
                    </Heading>
                </Flex>
            </VStack>
        </Box>

        <Container w="full" mt={6}>
            <SimpleGrid mx="auto" columnGap={{ base: "2em", sm: "4em" }} rowGap={2} gridTemplateColumns={{ base: "1fr 1fr", sm: "1fr 1fr", md: "repeat(4, auto)" }}>
                <Stack gap="0" direction="column" textAlign="center">
                    <Text fontWeight="700" fontSize="14px" textTransform="uppercase" color="main">Rating:</Text>
                    <Text fontSize="4xl">{data.rating}</Text>
                </Stack>
                <Stack gap="0" direction="column" textAlign="center">
                    <Text fontWeight="700" fontSize="14px" textTransform="uppercase" color="main">Wins:</Text>
                    <Text fontSize="4xl">{data.wins}</Text>
                </Stack>
                <Stack gap="0" direction="column" textAlign="center">
                    <Text fontWeight="700" fontSize="14px" textTransform="uppercase" color="main">Losses:</Text>
                    <Text fontSize="4xl">{data.losses}</Text>
                </Stack>
                <Stack gap="0" direction="column" textAlign="center">
                    <Text fontWeight="700" fontSize="14px" textTransform="uppercase" color="main">Tag:</Text>
                    <Text fontSize="4xl">{data.tag}</Text>
                </Stack>
            </SimpleGrid>
        </Container>
    </>;
};

export default Header;
