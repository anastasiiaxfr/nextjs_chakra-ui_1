import React from 'react';
import TeamSingle from './team-detail';
import { API_TEAMS } from '@/app/constant';

interface TeamData {
    team_id: number;
    rating: number;
    wins: number;
    losses: number;
    last_match_time: number;
    name: string;
    tag: string;
}

async function fetchTeamData(teamId: string): Promise<TeamData> {
    const url = `${API_TEAMS}/${teamId}`;
    console.log(`Fetching data from: ${url}`);

    try {
        const response = await fetch(url);

        console.log(`Response Status: ${response.status}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch team data: ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Fetched Data:', data);

        return {
            team_id: data.team_id,
            rating: data.rating,
            wins: data.wins,
            losses: data.losses,
            last_match_time: data.last_match_time,
            name: data.name,
            tag: data.tag,
        };
    } catch (error: any) {
        console.error('Fetch Error:', error);
        throw new Error(`Failed to fetch team data: ${error.message}`);
    }
}

const TeamPage = async ({ params }: { params: { id: string } }) => {
    const { id } = params;

    if (!id) {
        return <div>Error: Team ID is missing</div>;
    }

    try {
        const teamData = await fetchTeamData(id);
        return <TeamSingle teamData={teamData} />;
    } catch (error: any) {
        return <div>Error: {error.message}</div>;
    }
};

export default TeamPage;
