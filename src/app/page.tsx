import { Box, useColorMode } from '@chakra-ui/react'
import PageContainer from '@/components/Layout/Container';
import Banner from "@/components/Banner"
import Cards from "@/components/Cards"
import Cards2 from "@/components/Cards2"



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
        </PageContainer>
      </Box>

    </Box>
  );
}

