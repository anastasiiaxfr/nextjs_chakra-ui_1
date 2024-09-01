
import React from 'react';
import { Suspense } from 'react';
import AllPlayers from './players-page';

const PlayersPage: React.FC = () => {
    return (
        <Suspense>
            <AllPlayers />
        </Suspense>
    );
};

export default PlayersPage;
