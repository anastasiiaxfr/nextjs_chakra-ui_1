
import React from 'react';
import PlayerClient from './player-detail';
import { API_PLAYER } from '@/app/constant';

interface PlayerData {
    profile: {
        avatarfull: string;
        personaname: string;
    };
    team_name: string;
    win: number;
    games: number;
}

async function fetchPlayerData(id: string): Promise<PlayerData> {
    const response = await fetch(`${API_PLAYER}/${id}/pros`);
    if (!response.ok) {
        throw new Error('Failed to fetch player data');
    }
    const data = await response.json();

    return {
        profile: {
            avatarfull: data[0]?.avatarfull || '',
            personaname: data[0]?.name || '',
        },
        team_name: data[0]?.team_name || 'Unknown Team',
        win: data[0]?.win || 0,
        games: data[0]?.games || 0,
    };
}

const PlayerPage = async ({ params }: { params: { id: string } }) => {
    const { id } = params;

    try {
        const playerData = await fetchPlayerData(id);

        return <PlayerClient playerData={playerData} />;
    } catch (error: any) {
        return <div>Error: {error.message}</div>;
    }
};

export default PlayerPage;
