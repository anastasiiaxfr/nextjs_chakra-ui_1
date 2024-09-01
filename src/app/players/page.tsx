"use client";

import React, { Suspense } from 'react';
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
    MenuItem,
    Portal,
    useColorModeValue,
    useMediaQuery,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { BsChevronDown } from 'react-icons/bs';
import PageContainer from '@/components/Layout/Container';
import Card from "@/components/Cards/Card";
import { API_PLAYERS } from '../constant';

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
    const [sortField, setSortField] = useState<string>('name');
    const [isSmallScreen] = useMediaQuery('(max-width: 640px)');

    useEffect(() => {
        // Extract page number and sort field from URL
        const pageParam = searchParams?.get('page');
        const sortParam = searchParams?.get('sort');
        const pageNumber = pageParam ? parseInt(pageParam, 10) : 1;
        const sortBy = sortParam || 'name';

        setCurrentPage(pageNumber);
        setSortField(sortBy);
    }, [searchParams]);

    useEffect(() => {
        const fetchPlayers = async () => {
            setLoading(true);
            try {
                const response = await fetch(API_PLAYERS);
                const data = await response.json();

                // Sorting the data based on the selected sort field
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

    const getPageNumbers = () => {
        const pageNumbers = [];
        const totalPagesToShow = Math.min(MAX_PAGE_BUTTONS, totalPages);

        let startPage = Math.max(1, currentPage - Math.floor(MAX_PAGE_BUTTONS / 2));
        let endPage = Math.min(totalPages, startPage + MAX_PAGE_BUTTONS - 1);

        if (endPage - startPage + 1 < totalPagesToShow) {
            startPage = Math.max(1, endPage - totalPagesToShow + 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        }

        return pageNumbers;
    };

    const pageNumbers = getPageNumbers();

    // Find the currently selected sorting option
    const selectedItem = selectItems.find(item => item.value === sortField);

    return (
        <Suspense fallback={<Spinner size="xl" />}>
            <Stack align="center" justify="center" height="100%" flex="1">
                {loading ? (
                    <Stack align="center" justify="center" height="100%">
                        <Spinner size="xl" />
                    </Stack>
                ) : error ? (
                    <Stack align="center" justify="center" height="100%">
                        <Text color="red.500">{error}</Text>
                    </Stack>
                ) : (
                    <PageContainer>
                        <HStack spacing={4} mb={4} justify="space-between" w="full">
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
                        <HStack spacing={4} mt={4} wrap="wrap" justify="center">
                            {isSmallScreen ? (
                                <>
                                    <Button
                                        variant="dark"
                                        onClick={() => handlePageChange(currentPage - 1)}
                                        disabled={currentPage === 1}
                                    >
                                        Previous
                                    </Button>
                                    <Button
                                        variant="dark"
                                        onClick={() => handlePageChange(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                    >
                                        Next
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <Button
                                        variant="dark"
                                        onClick={() => handlePageChange(currentPage - 1)}
                                        disabled={currentPage === 1}
                                    >
                                        Prev
                                    </Button>
                                    <HStack spacing={2} wrap="nowrap">
                                        {pageNumbers.map(pageNumber => (
                                            <Button
                                                key={pageNumber}
                                                variant={pageNumber === currentPage ? 'solid' : 'dark'}
                                                colorScheme={pageNumber === currentPage ? 'red' : 'gray'}
                                                onClick={() => handlePageChange(pageNumber)}
                                                p={2}
                                            >
                                                {pageNumber}
                                            </Button>
                                        ))}
                                    </HStack>
                                    <Button
                                        variant="dark"
                                        onClick={() => handlePageChange(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                    >
                                        Next
                                    </Button>
                                </>
                            )}
                        </HStack>
                    </PageContainer>
                )}
            </Stack>
        </Suspense>
    );
};

export default AllPlayers;
