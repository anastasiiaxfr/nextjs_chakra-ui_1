// app/404.tsx
import React from 'react';
import { Box, Text, Button, VStack } from '@chakra-ui/react';
import PageContainer from '@/components/Layout/Container';
import Logo from '@/components/Logo';

export const metadata = {
  title: '404 - Page Not Found | Dota2Bro',
  description: 'The page you are looking for does not exist. Go back to the homepage.',
};

const Custom404: React.FC = () => {
  return (
    <PageContainer>
      <VStack spacing={6} align="center" justify="center" minHeight="100vh">
        <Logo />
        <Box textAlign="center">
          <Text fontSize="6xl" fontWeight="bold" color="red.500">
            404
          </Text>
          <Text fontSize="lg" color="gray.600">
            Oops! The page you are looking for does not exist.
          </Text>
        </Box>
        <Button as="a" href="/" colorScheme="red" variant="solid" size="lg">
          Go to Home
        </Button>
      </VStack>
    </PageContainer>
  );
};

export default Custom404;
