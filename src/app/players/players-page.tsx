'use client';

import React, { useState, useEffect } from 'react';
import {
    Stack,
    SimpleGrid,
    Button,
    HStack,
    Spinner,
    Heading,
    Text,
    Box,
    Icon,
    Menu,
    MenuButton,
    MenuList,
    MenuItemOption,
    MenuOptionGroup,
    Portal,
    useColorModeValue,
    useMediaQuery,
} from '@chakra-ui/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { BsChevronDown } from 'react-icons/bs';
import PageContainer from '@/components/Layout/Container';
import Card from "@/components/Cards/Card";
import { API_PLAYERS } from '../constant';
import Pagination from '@/components/Pagination'; // Import the Pagination component

interface Player {
    id: number;
    name: string;
    team_name: string;
    avatar: string;
}

const PAGE_SIZE = 8;
const MAX_PAGE_BUTTONS = 5;

const selectItems = [
    { label: 'Sort by Name', value: 'name' },
    { label: 'Sort by Team Name', value: 'team_name' },
];

const AllPlayers = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [players, setPlayers] = useState<Player[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [sortField, setSortField] = useState<string>('team_name'); // Default sort field set to 'team_name'

    useEffect(() => {
        const pageParam = searchParams?.get('page');
        const sortParam = searchParams?.get('sort');
        const pageNumber = pageParam ? parseInt(pageParam, 10) : 1;
        const sortBy = sortParam || 'team_name'; // Default sort field

        setCurrentPage(pageNumber);
        setSortField(sortBy);
    }, [searchParams]);

    useEffect(() => {
        const fetchPlayers = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${API_PLAYERS}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch');
                }
                const data = await response.json();

                const sortedData = data.sort((a: Player, b: Player) => {
                    if (sortField === 'name') {
                        return a.name.localeCompare(b.name);
                    } else if (sortField === 'team_name') {
                        return a.team_name.localeCompare(b.team_name);
                    }
                    return 0;
                });

                const totalPlayers = sortedData.length;
                setTotalPages(Math.ceil(totalPlayers / PAGE_SIZE));

                const startIndex = (currentPage - 1) * PAGE_SIZE;
                const endIndex = startIndex + PAGE_SIZE;
                setPlayers(sortedData.slice(startIndex, endIndex));

                setError(null);
            } catch (error) {
                setError('Failed to fetch players');
                setPlayers([]);
                setTotalPages(1);
            } finally {
                setLoading(false);
            }
        };

        fetchPlayers();
    }, [currentPage, sortField]);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            router.push(`/players?page=${page}&sort=${sortField}`);
        }
    };

    const handleSortChange = (value: string) => {
        setSortField(value);
        setCurrentPage(1);
        router.push(`/players?page=1&sort=${value}`);
    };

    const selectedItem = selectItems.find(item => item.value === sortField);

    return (
        <Stack align="center" justify="center" height="100%" flex="1">
            {loading ? (
                <Stack align="center" justify="center" height="100%" p={8}>
                    <Spinner size="xl" />
                </Stack>
            ) : error ? (
                <Text color="red.500">{error}</Text>
            ) : (
                <PageContainer>
                    <HStack spacing={8} mb={4} justify={{ base: "center", md: "space-between" }} align="center" w="full" wrap="wrap">
                        <Heading as="h2">All Players</Heading>
                        <Box position="relative">
                            <Menu matchWidth>
                                {({ isOpen }) => (
                                    <>
                                        <MenuButton
                                            as={Button}
                                            textAlign="left"
                                            rightIcon={<Icon as={BsChevronDown} w={5} h={5} />}
                                            variant="dark"
                                        >
                                            {selectedItem?.label || selectItems[0].label}
                                        </MenuButton>
                                        <Portal>
                                            <MenuList bg={useColorModeValue('dark.1', 'light.0')} borderColor="transparent">
                                                <MenuOptionGroup
                                                    value={sortField}
                                                    type="radio"
                                                    onChange={(value) => handleSortChange(value as string)}
                                                >
                                                    {selectItems.map((item, i) => (
                                                        <MenuItemOption key={i} value={item.value} bg="transparent">
                                                            {item.label}
                                                        </MenuItemOption>
                                                    ))}
                                                </MenuOptionGroup>
                                            </MenuList>
                                        </Portal>
                                    </>
                                )}
                            </Menu>
                        </Box>
                    </HStack>
                    <SimpleGrid minChildWidth='225px' spacing='20px' w='100%'>
                        {players.length > 0 ? (
                            players.map(player => (
                                <Card key={player.id} data={player} />
                            ))
                        ) : (
                            <Text>No players found.</Text>
                        )}
                    </SimpleGrid>
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </PageContainer>
            )}
        </Stack>
    );
};

export default AllPlayers;
