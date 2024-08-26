import { Box, Heading } from '@chakra-ui/react'
import PageContainer from '@/components/Layout/Container';
import Banner from "@/components/Banner"
import Cards from "@/components/Cards"



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
          <Heading as="h2" textStyle={'h2'}>Top Teams</Heading>

        </PageContainer>
      </Box>

      <Box as="section">
        <PageContainer>
          <Heading as="h2" textStyle={'h2'}>Most popular Players</Heading>
          <Cards data={players} />
        </PageContainer>
      </Box>

    </Box>
  );
}

