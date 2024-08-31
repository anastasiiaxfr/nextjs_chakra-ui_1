'use client';

import React from 'react';
import {
    Container,
    SimpleGrid,
    HStack,
    VStack,
    Heading,
    Text,
    Box,
    Button,
    AspectRatio,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    useDisclosure,
    useColorModeValue,
} from '@chakra-ui/react';

interface PlayerData {
    profile: {
        avatarfull: string;
        personaname: string;
    };
    team_name: string;
    win: number;
    games: number;
}

interface PlayerClientProps {
    playerData: PlayerData;
}

const PlayerClient = ({ playerData }: PlayerClientProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Container maxW={'1024px'} my={0} px={8}>
            <SimpleGrid columns={{ md: 2 }} spacing={0} w="full">
                <Box py={8} pr={{ md: 12 }} flex={1} justifyContent="flex-end">
                    <AspectRatio
                        ratio={1}
                        width="full"
                        bg={useColorModeValue('gray.100', 'black.4')}
                        overflow="hidden"
                        borderRadius="2xl"
                    >
                        <img src={playerData.profile.avatarfull} alt={playerData.profile.personaname} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </AspectRatio>
                </Box>
                <VStack
                    alignItems="flex-start"
                    pb={8}
                    pt={{ base: 0, md: 8 }}
                    spacing={4}
                    pl={{ md: 7 }}
                    borderLeftWidth={{ md: 3 }}
                    borderColor={useColorModeValue('dark.1', 'light.1')}
                    flex={1}
                >
                    <Heading as="h3">{playerData.profile.personaname}</Heading>
                    <Text>
                        From{' '}
                        <Text fontWeight="bold" as="span">
                            {playerData.team_name || 'Unknown Team'}
                        </Text>
                    </Text>

                    <HStack spacing={4}>
                        <Text fontSize="lg" fontWeight="bold">Wins:</Text>
                        <Text>{playerData.win || 'N/A'}</Text>
                    </HStack>

                    <HStack spacing={4}>
                        <Text fontSize="lg" fontWeight="bold">Games:</Text>
                        <Text>{playerData.games || 'N/A'}</Text>
                    </HStack>

                    <Tabs colorScheme="red" variant="enclosed" width="full">
                        <TabList borderBottom="2px solid" borderColor={useColorModeValue('gray.300', 'gray.600')}>
                            <Tab border="0" _selected={{ borderBottom: '2px solid', borderColor: 'red.500' }}>Details</Tab>
                            <Tab border="0" _selected={{ borderBottom: '2px solid', borderColor: 'red.500' }}>Offers</Tab>
                            <Tab border="0" _selected={{ borderBottom: '2px solid', borderColor: 'red.500' }}>History</Tab>
                        </TabList>

                        <TabPanels>
                            <TabPanel px={0}>
                                <Text lineHeight="1.54">
                                    {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`}
                                </Text>
                            </TabPanel>
                            <TabPanel px={0}>
                                <Text>No offers</Text>
                            </TabPanel>
                            <TabPanel px={0}>
                                <Text>History is empty</Text>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>

                    <HStack spacing={4} w="full">
                        <Button variant="primary" flex={1} onClick={onOpen}>
                            Play Game
                        </Button>

                        <Button variant="outline" colorScheme="pink" flex={1}>
                            Make Offer
                        </Button>
                    </HStack>
                </VStack>
            </SimpleGrid>
        </Container>
    );
};

export default PlayerClient;
