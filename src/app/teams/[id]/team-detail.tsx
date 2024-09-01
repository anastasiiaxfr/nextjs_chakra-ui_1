'use client';

import React, { useEffect, useState } from 'react';
import Header from "./page-header";
import PageContainer from "@/components/Layout/Container";
import { SimpleGrid, Text } from "@chakra-ui/react";
import CardItem from '@/components/Cards/Card';

interface TeamData {
    team_id: number;
    rating: number;
    wins: number;
    losses: number;
    last_match_time: number;
    name: string;
    tag: string;
}

interface PlayerData {
    account_id: number;
    avatarfull?: string;
    name: string;
    team_name?: string;
}

interface TeamSingleProps {
    teamData: TeamData;
}

const fetchPlayersForTeam = async (teamId: number) => {
    const response = await fetch(`https://api.opendota.com/api/teams/${teamId}/players`);
    if (!response.ok) {
        throw new Error('Failed to fetch team players');
    }
    return response.json();
};

const fetchPlayerDetails = async (accountId: number): Promise<PlayerData> => {
    const response = await fetch(`https://api.opendota.com/api/players/${accountId}/pros`);
    if (!response.ok) {
        throw new Error('Failed to fetch player details');
    }
    const data = await response.json();

    if (data.length === 0) {
        return {
            account_id: accountId,
            avatarfull: 'https://via.placeholder.com/150', // Fallback image
            name: 'NoName',
            team_name: 'No Team'
        };
    }

    const playerData = data[0];

    return {
        account_id: playerData.account_id,
        avatarfull: playerData.avatarfull || 'https://via.placeholder.com/150', // Fallback image
        name: playerData.name || 'NoName',
        team_name: playerData.team_name || 'No Team'
    };
};

const TeamSingle: React.FC<TeamSingleProps> = ({ teamData }) => {
    const [players, setPlayers] = useState<PlayerData[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const teamPlayers = await fetchPlayersForTeam(teamData.team_id);
                console.log('Team players:', teamPlayers); // Debug log

                // Fetch player details for each player
                const playerDetails = await Promise.all(
                    teamPlayers
                        .filter((player: { account_id: number }) => player.account_id) // Ensure account_id exists
                        .map((player: { account_id: number }) => fetchPlayerDetails(player.account_id))
                );

                console.log('Player details:', playerDetails); // Debug log

                // Remove duplicates and filter out "NoName"
                const uniquePlayers = Array.from(
                    new Map(
                        playerDetails
                            .filter(player => player.name !== 'NoName') // Exclude "NoName"
                            .map(player => [player.account_id, player]) // Map account_id to player
                    ).values()
                );

                setPlayers(uniquePlayers);
            } catch (err) {
                console.error(err);
                setError("Failed to fetch player data");
            }
        };
        fetchData();
    }, [teamData.team_id]);

    return (
        <>
            <Header data={teamData} />
            <PageContainer>
                {error && <Text color="red.500">{error}</Text>} {/* Display error if any */}
                <SimpleGrid minChildWidth='220px' spacing='20px' w='100%'>
                    {players.length ? players.map(player => (
                        <CardItem
                            key={player.account_id}
                            data={player}
                        />
                    )) : (
                        <Text textAlign="center">No players found</Text>
                    )}
                </SimpleGrid>
            </PageContainer>
        </>
    );
};

export default TeamSingle;
