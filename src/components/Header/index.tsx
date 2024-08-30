// components/Header.tsx
'use client'
import { Box, Flex } from '@chakra-ui/react';
import ThemeSwitcher from '@/components/ThemeSwitcher'

const Header = () => {
    return (
        <Box as="header" p={4}>
            <Flex align="center" justify="space-between">
                <h1>Header Content</h1>
                <ThemeSwitcher />
            </Flex>
        </Box>
    );
};

export default Header;
