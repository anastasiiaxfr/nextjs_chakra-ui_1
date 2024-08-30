// components/Footer.tsx
"use client";
import Link from "next/link";
import {
    Box,
    Grid,
    GridItem,
    Flex,
    VStack,
    Text,
    List,
    ListItem,
    FormControl,
    FormLabel,
    Switch,
    useColorMode,
} from "@chakra-ui/react";
import PageContainer from "../Layout/Container";
import Logo from "@/components/Logo";
import Socials from "@/components/Socials";
import Subscribe from "@/components/Subscribe";
import nav2, { nav1 } from "./constant";

const Footer = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    const opacity = colorMode === "light" ? "0.4" : "0.9";
    const bd = colorMode === "light" ? "whiteAlpha.100" : "light.2";

    return (
        <Box as="footer" borderTop="1px solid" borderColor={bd}>
            <Box>
                <PageContainer>
                    <Grid templateColumns={{ base: '1fr 1fr', sm: 'auto auto', lg: '1fr auto auto' }}
                        gap={{ base: '4', lg: '10%' }} width="full">
                        <GridItem
                            colSpan={{ base: 2, sm: 2, lg: 1 }}
                            p={4}
                        >
                            <VStack gap="4" align="flex-start" justify="space-between">
                                <FormControl display="flex">
                                    <FormLabel htmlFor="switch-theme" fontSize="sm" fontWeight="700" mb="0">
                                        {colorMode === "light" ? "Light" : "Dark"} theme
                                    </FormLabel>
                                    <Switch id="switch-theme" colorScheme="red" onChange={toggleColorMode} />
                                </FormControl>

                                <Logo />

                                <Subscribe />
                            </VStack>
                        </GridItem>
                        <GridItem p={4}>
                            <VStack align="flex-start">
                                <Text fontWeight="700" fontSize={["20px", "xl"]} mb="6">
                                    Dota
                                    <Text color="main" as="b">
                                        2
                                    </Text>
                                    Bro
                                </Text>
                                <List spacing={4} w="full">
                                    {nav1.map((i, ind) => (
                                        <ListItem key={ind} opacity={opacity} _hover={{ opacity: 1, color: "main" }}>
                                            <Link href={i.url}>{i.label}</Link>
                                        </ListItem>
                                    ))}
                                </List>
                            </VStack>
                        </GridItem>
                        <GridItem p={4}>
                            <VStack align="flex-start">
                                <Text fontWeight="700" fontSize={["20px", "xl"]} mb="6">
                                    Support
                                </Text>
                                <List spacing={4} w="full">
                                    {nav2.map((i, ind) => (
                                        <ListItem key={ind} opacity={opacity} _hover={{ opacity: 1, color: "main" }}>
                                            <Link href={i.url}>{i.label}</Link>
                                        </ListItem>
                                    ))}
                                </List>
                            </VStack>
                        </GridItem>

                    </Grid>
                </PageContainer>
            </Box>
            <Box borderTop="1px solid" borderColor={bd}>
                <PageContainer>
                    <Flex align="center" justify="space-between" gap={4} w="full">
                        <Text fontWeight="700" fontSize="18px">
                            D2BroPlayers, Inc. All Rights Reserved
                        </Text>
                        <Socials />
                    </Flex>
                </PageContainer>
            </Box>
        </Box>
    );
};

export default Footer;
