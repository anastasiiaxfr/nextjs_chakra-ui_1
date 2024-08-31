// components/Header.tsx
'use client'
import Link from "next/link"
import {
    useColorMode, useDisclosure, Stack,
    HStack, Box, Flex, Button, IconButton, List,
    ListItem
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'


import nav from "./constant"
import Logo from "@/components/Logo";
import ThemeSwitcher from '@/components/ThemeSwitcher'
import Search from "@/components/Search";


const Header = () => {
    const { colorMode } = useColorMode();

    const btnBg = colorMode === 'light' ? 'dark.2' : 'transparent'; // Background color
    const btnHover = colorMode === 'light' ? 'red.600' : 'red.100'; // Hover color
    const btnColor = colorMode === 'light' ? 'white' : 'main'; // Text color
    const btnBd = colorMode === 'light' ? 'dark.2' : 'main';
    // Hov
    const bd = colorMode === "light" ? "whiteAlpha.100" : "light.2";
    const headerBg = colorMode === "light" ? "black.1" : "whiteAlpha.900";
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box as="header" p={4} borderBottom="1px solid" borderColor={bd} boxShadow="0 2px 0 rgba(0, 0, 0, 0.05)" bg={headerBg} position="sticky"
            top={0} zIndex={2} backdropFilter="saturate(180%) blur(7px)"
        >
            <Flex align="center" justify="space-between" gap={6}>
                <Logo height={40} />
                <Box display={{ base: 'none', md: 'flex' }} maxW="lg" w="full"><Search /></Box>
                <HStack w="" ml="auto" mr={0} display={{ base: 'none', lg: 'flex' }}>
                    <List display="inline-flex" gap={6}>
                        {nav.map((i, ind) => (
                            <ListItem key={ind} _hover={{ opacity: 1, color: "main" }} textTransform="uppercase" fontSize="14px" fontWeight="bold">
                                <Link href={i.url}>{i.label}</Link>
                            </ListItem>
                        ))}
                    </List>
                </HStack>
                <Flex gap={2}>
                    <Button variant="primary" display={{ base: 'none', md: 'flex' }}>
                        Create Item
                    </Button>
                    <ThemeSwitcher />

                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ lg: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                        color={btnColor}
                        border="2px solid"
                        borderColor={btnBd}
                        bg={btnBg}
                        _hover={{ bg: btnHover }}
                    />

                </Flex>
            </Flex>

            {isOpen ? (
                <Box pb={4} mt={4} display={{ lg: 'none' }}>
                    <Stack as={'nav'} spacing={4}>
                        {nav.map((link) => (
                            <Link key={link.label} href={link.url}>{link.label}</Link>
                        ))}
                    </Stack>
                </Box>
            ) : null}
        </Box>
    );
};

export default Header;
