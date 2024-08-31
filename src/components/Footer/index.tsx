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
    useColorMode,
} from "@chakra-ui/react";
import PageContainer from "../Layout/Container";
import Logo from "@/components/Logo";
import Socials from "@/components/Socials";
import Subscribe from "@/components/Subscribe";
import Switcher from "@/components/ThemeSwitcher/Switcher";
import nav2, { nav1 } from "./constant";

const Footer = () => {
    const { colorMode } = useColorMode();

    const opacity = colorMode === "light" ? "0.4" : "0.9";
    const bd = colorMode === "light" ? "whiteAlpha.100" : "light.2";

    return (
        <Box as="footer" borderTop="1px solid" borderColor={bd}>
            <Box>
                <PageContainer>
                    <Grid templateColumns={{ base: '1fr 1fr', sm: 'auto auto', md: '1fr auto auto' }}
                        gap={{ base: '4', lg: '10%' }} width="full">
                        <GridItem
                            colSpan={{ base: 2, sm: 2, md: 1 }}
                            p={4}
                        >
                            <VStack gap="4" align="flex-start" justify="space-between">
                                <Switcher />

                                <Logo />

                                <Subscribe />
                            </VStack>
                        </GridItem>
                        <GridItem colSpan={{ base: 'auto', sm: 'auto', md: 1 }} p={4}>
                            <VStack align="flex-start">
                                <Text fontWeight="700" fontSize={["20px", "xl"]} mb="6">
                                    Dota
                                    <Text color="main" as="b">
                                        2
                                    </Text>
                                    Bro
                                </Text>
                                <List spacing={3} w="full">
                                    {nav1.map((i, ind) => (
                                        <ListItem key={ind} opacity={opacity} _hover={{ opacity: 1, color: "main" }} textTransform="uppercase" fontSize="14px" fontWeight="bold">
                                            <Link href={i.url}>{i.label}</Link>
                                        </ListItem>
                                    ))}
                                </List>
                            </VStack>
                        </GridItem>
                        <GridItem colSpan={{ base: 'auto', sm: 'auto', md: 1 }} p={4}>
                            <VStack align="flex-start">
                                <Text fontWeight="700" fontSize={["20px", "xl"]} mb="6">
                                    Support
                                </Text>
                                <List spacing={3} w="full">
                                    {nav2.map((i, ind) => (
                                        <ListItem key={ind} opacity={opacity} _hover={{ opacity: 1, color: "main" }} textTransform="uppercase" fontSize="14px" fontWeight="bold">
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
                    <Flex wrap="wrap" align="center" justify="space-between" gap={4} px={4} w="full">
                        <Text w={{ base: '100%', sm: 'auto', md: 'auto' }} fontWeight="700" fontSize="18px">
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
