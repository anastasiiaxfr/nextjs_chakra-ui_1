'use client';

import { Providers } from './providers';
import { fonts } from './fonts';
import { VStack, Box } from '@chakra-ui/react';
import NextNProgress from 'nextjs-progressbar';

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fonts.montserrat.variable} ${fonts.lato.variable}`}>
      <body>
        <Providers>
          {/* Configure the progress bar */}
          <NextNProgress
            color="#00BFFF" // You can set your preferred color here
            height={3} // Height of the progress bar
            options={{ showSpinner: false }} // Hide spinner if you prefer
          />

          <VStack
            flex={1}
            spacing={0}
            alignItems="stretch"
            w="full"
            minH={{ md: '100vh' }}
          >
            <Header />
            <Box as="main" flex={1} w="full" display="flex" flexDir="column">
              {children}
            </Box>
            <Footer />
          </VStack>
        </Providers>
      </body>
    </html>
  );
}
