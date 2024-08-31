import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import Card from "./Card";

interface CardData {
    id: string;
}

interface CardsProps {
    data?: CardData[];
}

const Cards: React.FC<CardsProps> = ({ data = [] }) => {
    const items = Array.isArray(data) ? data : [];

    return (
        <SimpleGrid minChildWidth='150px' spacing='20px' w={'100%'}>
            {items.slice(0, 5).map((item) => (
                <Card key={item.id} data={item} />
            ))}
        </SimpleGrid>
    );
}

export default Cards;
