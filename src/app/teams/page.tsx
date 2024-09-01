"use client";

import {
    Stack,
    SimpleGrid,
    HStack,
    Spinner,
    Heading,
    Text,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItemOption,
    MenuOptionGroup,
    Portal,
    useColorModeValue,
    Icon,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { BsChevronDown } from 'react-icons/bs';
import PageContainer from '@/components/Layout/Container';
import Card from "@/components/Cards2/Card";
import Pagination from '@/components/Pagination';
import { API_TEAMS } from '../constant';

interface Team {
    team_id: number;
    name: string;
    rating: number;
    tag: string;
}

const PAGE_SIZE = 8;

const sortOptions = [
    { label: 'Name', value: 'name' },
    { label: 'Rating', value: 'rating' },
    { label: 'Tag', value: 'tag' },
];

const AllTeams: React.FC = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [teams, setTeams] = useState<Team[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [sortOption, setSortOption] = useState<string>('rating'); // Default sort option is 'rating'

    // Move useColorModeValue to top level
    const menuBg = useColorModeValue('dark.1', 'light.0');
    const buttonVariant = 'dark'; // Adjust if necessary

    useEffect(() => {
        const pageParam = searchParams?.get('page');
        const pageNumber = pageParam ? parseInt(pageParam, 10) : 1;
        setCurrentPage(pageNumber);
    }, [searchParams]);

    useEffect(() => {
        const fetchTeams = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(API_TEAMS);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();

                if (!Array.isArray(data)) {
                    throw new Error('Unexpected data format');
                }

                let sortedData = [...data];

                if (sortOption === 'name' || sortOption === 'tag') {
                    sortedData = sortedData.filter((team: Team) => team[sortOption as keyof Team] !== undefined && team[sortOption as keyof Team] !== null);
                }

                sortedData = sortedData.sort((a: Team, b: Team) => {
                    switch (sortOption) {
                        case 'rating':
                            return b.rating - a.rating;
                        case 'tag':
                            return a.tag.localeCompare(b.tag);
                        case 'name':
                        default:
                            return a.name.localeCompare(b.name);
                    }
                });

                const totalTeams = sortedData.length;
                setTotalPages(Math.ceil(totalTeams / PAGE_SIZE));

                const startIndex = (currentPage - 1) * PAGE_SIZE;
                const endIndex = startIndex + PAGE_SIZE;
                setTeams(sortedData.slice(startIndex, endIndex));
            } catch (error) {
                console.error('Error fetching teams:', error);
                setError('Failed to fetch teams');
                setTeams([]);
                setTotalPages(1);
            } finally {
                setLoading(false);
            }
        };

        fetchTeams();
    }, [currentPage, sortOption]);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            router.push(`/teams?page=${page}&sort=${sortOption}`);
        }
    };

    const handleSortChange = (value: string) => {
        setSortOption(value);
        setCurrentPage(1); // Reset to the first page when sorting changes
        router.push(`/teams?page=1&sort=${value}`);
    };

    return (
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
                        <Heading as="h2">All Teams</Heading>
                        <Menu>
                            {({ isOpen }) => (
                                <>
                                    <MenuButton
                                        as={Button}
                                        textAlign="left"
                                        rightIcon={<Icon as={BsChevronDown} w={5} h={5} />}
                                        variant={buttonVariant}
                                    >
                                        {sortOptions.find(option => option.value === sortOption)?.label || sortOptions[0].label}
                                    </MenuButton>
                                    <Portal>
                                        <MenuList bg={menuBg} borderColor="transparent">
                                            <MenuOptionGroup
                                                value={sortOption}
                                                type="radio"
                                                onChange={(value) => handleSortChange(value as string)}
                                            >
                                                {sortOptions.map((item, i) => (
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
                    </HStack>
                    <SimpleGrid minChildWidth='225px' spacing='20px' w='100%'>
                        {teams.length > 0 ? (
                            teams.map(team => (
                                <Card key={team.team_id} data={team} />
                            ))
                        ) : (
                            <Text>No teams found.</Text>
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

export default AllTeams;
