
import React from 'react';
import { Suspense } from 'react';
import AllTeams from './team-page';
const TeamsPage: React.FC = () => {
    return (
        <Suspense>
            <AllTeams />
        </Suspense>
    );
};

export default TeamsPage;
