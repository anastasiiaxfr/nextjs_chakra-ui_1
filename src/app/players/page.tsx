'use client'

import { Stack, SimpleGrid, Button, HStack, Spinner, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import PageContainer from '@/components/Layout/Container';
import Card from "@/components/Cards/Card";

interface Player {
    id: number;
    name: string;
    team_name: string;
    avatar: string;
}

const PAGE_SIZE = 8;
const MAX_PAGE_BUTTONS = 5;

const AllPlayers = () => {
    const [players, setPlayers] = useState<Player[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);

    useEffect(() => {
        const fetchPlayers = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://api.opendota.com/api/proPlayers`);
                const data = await response.json();

                // Adjust this based on the actual structure of your API response
                const totalPlayers = data.length;
                setTotalPages(Math.ceil(totalPlayers / PAGE_SIZE));

                const startIndex = (currentPage - 1) * PAGE_SIZE;
                const endIndex = startIndex + PAGE_SIZE;
                setPlayers(data.slice(startIndex, endIndex));

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
    }, [currentPage]);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    // Calculate which page numbers to display
    const getPageNumbers = () => {
        const pageNumbers = [];
        const totalPagesToShow = Math.min(MAX_PAGE_BUTTONS, totalPages);

        let startPage = Math.max(1, currentPage - Math.floor(MAX_PAGE_BUTTONS / 2));
        let endPage = Math.min(totalPages, startPage + MAX_PAGE_BUTTONS - 1);

        // Adjust the range if it goes beyond total pages
        if (endPage - startPage + 1 < totalPagesToShow) {
            startPage = Math.max(1, endPage - totalPagesToShow + 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        }

        return pageNumbers;
    };

    const pageNumbers = getPageNumbers();

    return (
        <Stack align="center" justify="center" height="100%" flex="1">
            {loading ? (
                <Stack align="center" justify="center" height="100%">
                    <Spinner size="xl" />
                </Stack>
            ) : error ? (
                <Text color="red.500">{error}</Text>
            ) : (
                <PageContainer>
                    <HStack>
                        <Heading as="h2">All Players</Heading>
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
                    <HStack spacing={4} mt={4}>
                        <Button variant="dark" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                            Previous
                        </Button>
                        <HStack spacing={2}>
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
                        <Button variant="dark" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                            Next
                        </Button>
                    </HStack>
                </PageContainer>
            )}
        </Stack>
    );
};

export default AllPlayers;
