"use client";
import React, { useEffect, useState } from "react";
import { useColorModeValue, Box, Flex, SimpleGrid, VStack, HStack, Container, Heading, Image, Text } from "@chakra-ui/react";
import Search from "@/components/Search";

const BG = "https://cdn.akamai.steamstatic.com/apps/dota2/images/dota_react//home/radiant_dire5.jpg";

// Define the type for team data
interface TeamData {
    team_id: number;
    rating: number;
    wins: number;
    losses: number;
    last_match_time: number;
    name: string;
    tag: string;
}

// Fetch team data from the OpenDota API
async function fetchTeamData(teamId: string): Promise<TeamData> {
    const response = await fetch(`https://api.opendota.com/api/teams/${teamId}`);
    if (!response.ok) {
        throw new Error("Failed to fetch team data");
    }
    const data = await response.json();
    return {
        team_id: data.team_id,
        rating: data.rating,
        wins: data.wins,
        losses: data.losses,
        last_match_time: data.last_match_time,
        name: data.name,
        tag: data.tag,
    };
}

const TeamPage: React.FC<{ params: { team_id: string } }> = ({ params }) => {
    const { team_id } = params;
    const [teamData, setTeamData] = useState<TeamData | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (team_id) {
            fetchTeamData(team_id)
                .then(data => setTeamData(data))
                .catch(err => setError("Failed to fetch team data"));
        } else {
            setError("Team ID is undefined");
        }
    }, [team_id]);

    // Choose gradient colors based on the color mode
    const gradient = useColorModeValue(
        "transparent",
        "linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.9) 100%)"// Dark mode
    );

    return (
        <>
            <Box
                as="section"
                position="relative"
                height={300}
                width="full"
                overflow="hidden"
                borderBottom="1em solid"
                borderColor="transparent"
            >
                <Image
                    src={BG}
                    alt="Dota 2 Background"
                    objectFit="cover"
                    height={300}
                    width="100%"
                    quality={100}
                />
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    width="full"
                    height="full"
                    background={gradient}
                    zIndex={1}
                />
            </Box>
            <VStack spacing={4}>
                <Flex
                    align="center"
                    justify="center"
                    textAlign="center"
                    transform="translateY(-7em)"
                    mb="-5em"
                    width="12em"
                    height="12em"
                    borderRadius="50%"
                    bg="main"
                    color="white"
                    zIndex={1}
                    position="relative"
                >
                    <Heading fontSize="2xl" lineHeight="0.9">
                        {teamData?.name || error || "Unknown Team"}
                    </Heading>
                </Flex>
            </VStack>

            <Container as={VStack} spacing={4} w="full" maxW="1024px" pb={8}>
                <Flex gap={6} rowGap={2} mb={4} w="full" justify="center">
                    <SimpleGrid templateColumns={{ base: 'auto auto', sm: 'auto auto auto', md: 'repeat(5, auto)' }} columnGap={8} rowGap={2}>
                        <HStack>
                            <Text fontWeight="bold">Rating: </Text>
                            <Text>{teamData?.rating || "N/A"}</Text>
                        </HStack>
                        <HStack>
                            <Text fontWeight="bold">Wins: </Text>
                            <Text>{teamData?.wins || "N/A"}</Text>
                        </HStack>
                        <HStack>
                            <Text fontWeight="bold">Losses: </Text>
                            <Text>{teamData?.losses || "N/A"}</Text>
                        </HStack>
                        <HStack>
                            <Text fontWeight="bold">Tag: </Text>
                            <Text>{teamData?.tag || "N/A"}</Text>
                        </HStack>
                        <HStack>
                            <Text fontWeight="bold">Last Match Time: </Text>
                            <Text>
                                {teamData?.last_match_time ? new Date(teamData.last_match_time * 1000).toLocaleDateString() : "N/A"}
                            </Text>
                        </HStack>
                    </SimpleGrid>
                </Flex>
                <Flex gap={6} w="full">
                    <Search />
                </Flex>
            </Container>
        </>
    );
};

export default TeamPage;
