import React from 'react';
import { Box, Skeleton, Stack, useBreakpointValue } from '@chakra-ui/react';

const SkeletonCard: React.FC = () => {
    const minChildWidth = useBreakpointValue({ base: '100px', md: '225px' });

    return (
        <Box borderWidth='1px' borderRadius='md' overflow='hidden'>
            <Skeleton height='200px' width='100%' />
            <Box p='6'>
                <Stack spacing='4'>
                    <Skeleton height='20px' width='60%' />
                    <Skeleton height='20px' width='80%' />
                    <Skeleton height='20px' width='40%' />
                </Stack>
            </Box>
        </Box>
    );
};

export default SkeletonCard;
