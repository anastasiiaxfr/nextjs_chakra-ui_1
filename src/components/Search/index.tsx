"use client";

import { useState, SyntheticEvent, useRef } from "react";
import { RiSearchLine, RiCloseFill } from "react-icons/ri";
import {
    Box,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Input,
    Icon,
    Avatar,
    Text,
    Spinner,
    useColorModeValue,
    Portal,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuGroup,
    useOutsideClick,
    HStack,
} from "@chakra-ui/react";

export default function Search() {
    const [searchValue, setSearchValue] = useState("");
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [players, setPlayers] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const containerRef = useRef<HTMLDivElement>(null);

    const inputBg = useColorModeValue('dark.2', 'transparent');
    const inputBdHover = useColorModeValue('dark.0', 'light.2');
    const menuColor = useColorModeValue('gray.300', 'gray.700');

    // Handle input change
    const handleChange = async (e: SyntheticEvent<HTMLInputElement>) => {
        const { value } = e.currentTarget;
        setSearchValue(value);
        setIsOpenMenu(value.length > 0);

        if (value.length > 0) {
            setLoading(true);
            try {
                const response = await fetch(`https://api.opendota.com/api/proPlayers`);
                const data = await response.json();
                setPlayers(data.filter((player: any) => player.name.toLowerCase().includes(value.toLowerCase())));
                setError("");
            } catch (err) {
                setError("Failed to fetch players");
            } finally {
                setLoading(false);
            }
        } else {
            setPlayers([]);
        }
    };

    const handleClose = () => {
        setSearchValue("");
        setIsOpenMenu(false);
        setPlayers([]);
    };

    useOutsideClick({
        ref: containerRef,
        handler: () => {
            if (isOpenMenu) {
                handleClose();
            }
        },
    });

    return (
        <HStack width="full" ref={containerRef} position="relative">
            <Menu isOpen={isOpenMenu} matchWidth isLazy>
                <MenuButton as={Box} w="full">
                    <InputGroup pointerEvents="visible">
                        <InputLeftElement fontSize="2xl">
                            <Icon as={RiSearchLine} color="light.4" />
                        </InputLeftElement>
                        <Input
                            placeholder="Search players"
                            value={searchValue}
                            onChange={handleChange}
                            bg={inputBg}
                            borderColor={inputBdHover}
                            _hover={{ borderColor: inputBdHover }}
                        />
                        {!!searchValue?.length && (
                            <InputRightElement fontSize="2xl" cursor="pointer" onClick={handleClose}>
                                <Icon as={RiCloseFill} />
                            </InputRightElement>
                        )}
                    </InputGroup>
                </MenuButton>

                <Portal>
                    <MenuList
                        zIndex={2}
                        position="absolute"
                        top="100%"
                        width="full"
                        bg={useColorModeValue("dark.1", "light.0")}
                        boxShadow="lg"
                        maxH="300px"
                        overflowY="auto"
                    >
                        {loading && <MenuItem bg="transparent" color={menuColor}>Loading...</MenuItem>}
                        {error && <MenuItem color="red.500">{error}</MenuItem>}
                        {!loading && !error && players.length === 0 && <MenuItem>No players found</MenuItem>}
                        {players.length > 0 && (
                            <>
                                <MenuGroup>
                                    {players.map((player: any) => (
                                        <MenuItem
                                            key={player.id}
                                            onClick={handleClose}
                                            bg="transparent"
                                            borderBottom="1px solid"
                                            borderColor={inputBdHover}
                                            _hover={{ bg: useColorModeValue("dark.2", "light.1") }}
                                            display="flex"
                                            alignItems="center"
                                        >
                                            <Avatar src={player.avatar} name={player.name} size="sm" mr={3} />
                                            <Box>
                                                <Text fontWeight="bold">{player.name}</Text>
                                                <Text fontSize="sm" opacity="0.6">
                                                    {player.team_name}
                                                </Text>
                                            </Box>
                                        </MenuItem>
                                    ))}
                                </MenuGroup>
                                {!!players.length && (
                                    <MenuItem
                                        borderTopWidth={1}
                                        bg="transparent"
                                        _hover={{ bg: 'transparent', cursor: 'default' }}
                                    >
                                        <Text fontSize="sm" color={menuColor}>
                                            Press Enter to see all results
                                        </Text>
                                    </MenuItem>
                                )}
                            </>
                        )}
                    </MenuList>
                </Portal>
            </Menu>
        </HStack>
    );
}
