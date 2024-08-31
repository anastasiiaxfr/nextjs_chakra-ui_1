// components/Header.tsx
'use client'
import {
    useColorMode, HStack, Box, Flex, Button, List,
    ListItem,
} from '@chakra-ui/react';
import Logo from "@/components/Logo";
import ThemeSwitcher from '@/components/ThemeSwitcher'
import nav from "./constant"
import Link from "next/link"
import Search from "@/components/Search";

const Header = () => {
    const { colorMode } = useColorMode();
    const bd = colorMode === "light" ? "whiteAlpha.100" : "light.2";
    const headerBg = colorMode === "light" ? "black.1" : "whiteAlpha.900";

    return (
        <Box as="header" p={4} borderBottom="1px solid" borderColor={bd} boxShadow="0 2px 0 rgba(0, 0, 0, 0.05)" bg={headerBg} position="sticky"
            top={0} zIndex={2} backdropFilter="saturate(180%) blur(7px)"
        >
            <Flex align="center" justify="space-between" gap={6}>
                <Logo height={40} />
                <Search />
                <HStack w="" ml="auto" mr={0}>
                    <List display="inline-flex" gap={6}>
                        {nav.map((i, ind) => (
                            <ListItem key={ind} _hover={{ opacity: 1, color: "main" }} textTransform="uppercase" fontSize="14px" fontWeight="bold">
                                <Link href={i.url}>{i.label}</Link>
                            </ListItem>
                        ))}
                    </List>
                </HStack>
                <Flex gap={2}>
                    <Button variant="primary">
                        Create Item
                    </Button>
                    <ThemeSwitcher />
                </Flex>
            </Flex>
        </Box>
    );
};

export default Header;
