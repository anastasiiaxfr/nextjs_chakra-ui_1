import { Metadata } from 'next';

import { Box, Button } from '@chakra-ui/react'
import PageContainer from '@/components/Layout/Container';
import Banner from "@/components/Banner"
import Cards from "@/components/Cards"
import Cards2 from "@/components/Cards2"

export const metadata: Metadata = {
  title: "Dota2Bro | Team & Players catalog",
  description: "Generated by create next app & Chakra UI and Anastasiia Berest",
};

export default async function Home() {

  const getTeams = await fetch("https://api.opendota.com/api/teams");
  const teams = await getTeams.json();

  const getPlayers = await fetch("https://api.opendota.com/api/proPlayers");
  const players = await getPlayers.json();

  return (
    <Box as="article">
      <Banner />

      <Box as="section">
        <PageContainer>
          <Box as="h2" textStyle={'h2'}>Top Teams</Box>
          <Cards2 data={teams} />
        </PageContainer>
      </Box>

      <Box as="section">
        <PageContainer>
          <Box as="h2" textStyle={'h2'}>Pro Players</Box>
          <Cards data={players} />

          <Button
            as="a"
            href="/players"
            colorScheme="red"
            variant="outline"
            display="flex"
            w={240}
            mt={4}
            mx="auto"
          >
            View More
          </Button>
        </PageContainer>
      </Box>

    </Box>
  );
}

