'use client';
import React from 'react';
import {
    Heading,
    Text,
    Box,
    List,
    ListItem,
    Container,
    Divider,
    useTheme,
    useColorModeValue
} from "@chakra-ui/react";

import PageContainer from "@/components/Layout/Container";

const SinglePage: React.FC = () => {
    const theme = useTheme();

    return (
        <PageContainer>
            <Container maxW="100%" py={{ base: 0, lg: 6 }}>
                <Heading as="h1" mb={4}>
                    Terms of Service
                </Heading>

                <Text opacity={useColorModeValue(0.6, 1)} fontSize="lg" mb={8}>
                    Welcome to Dota2Bro! By accessing or using our website, you agree to comply with and be bound by the following terms and conditions.
                </Text>

                <Box mb={8}>
                    <Heading as="h2" sx={theme.textStyles.h3} mb={2}>
                        1. Acceptance of Terms
                    </Heading>
                    <Text opacity={useColorModeValue(0.6, 1)} mb={2}>
                        By accessing or using Dota2Bro, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our website.
                    </Text>
                </Box>

                <Box mb={8}>
                    <Heading as="h2" sx={theme.textStyles.h3} mb={2}>
                        2. Changes to Terms
                    </Heading>
                    <Text opacity={useColorModeValue(0.6, 1)} mb={2}>
                        We reserve the right to modify these terms at any time. Any changes will be posted on this page, and your continued use of the website will constitute acceptance of those changes.
                    </Text>
                </Box>

                <Box mb={8}>
                    <Heading as="h2" sx={theme.textStyles.h3} mb={2}>
                        3. User Responsibilities
                    </Heading>
                    <Text opacity={useColorModeValue(0.6, 1)} mb={2}>
                        You are responsible for your own actions while using the website and for ensuring that your use complies with all applicable laws and regulations.
                    </Text>
                    <List spacing={3} opacity={useColorModeValue(0.6, 1)}>
                        <ListItem>• You agree not to use the website for any unlawful purpose.</ListItem>
                        <ListItem>• You will not engage in any activity that interferes with or disrupts the website.</ListItem>
                    </List>
                </Box>

                <Box mb={8}>
                    <Heading as="h2" sx={theme.textStyles.h3} mb={2}>
                        4. Intellectual Property
                    </Heading>
                    <Text opacity={useColorModeValue(0.6, 1)} mb={2}>
                        All content on Dota2Bro, including text, graphics, logos, and images, is the property of Dota2Bro or its content suppliers and is protected by intellectual property laws.
                    </Text>
                </Box>

                <Box mb={8}>
                    <Heading as="h2" sx={theme.textStyles.h3} mb={2}>
                        5. Limitation of Liability
                    </Heading>
                    <Text opacity={useColorModeValue(0.6, 1)} mb={2}>
                        To the maximum extent permitted by law, Dota2Bro will not be liable for any indirect, incidental, or consequential damages arising from your use of the website.
                    </Text>
                </Box>

                <Box mb={8}>
                    <Heading as="h2" sx={theme.textStyles.h3} mb={2}>
                        6. Governing Law
                    </Heading>
                    <Text opacity={useColorModeValue(0.6, 1)} mb={2}>
                        These Terms of Service are governed by and construed in accordance with the laws of the jurisdiction in which Dota2Bro operates.
                    </Text>
                </Box>

                <Box mb={8}>
                    <Heading as="h2" sx={theme.textStyles.h3} mb={2}>
                        7. Contact Information
                    </Heading>
                    <Text opacity={useColorModeValue(0.6, 1)} mb={2}>
                        If you have any questions about these Terms of Service, please contact us at support@dota2bro.com.
                    </Text>
                </Box>

                <Divider my={6} />

                <Text opacity={useColorModeValue(0.6, 1)} fontSize="sm" color="gray.500">
                    Last updated: August 31, 2024
                </Text>
            </Container>
        </PageContainer>
    );
};

export default SinglePage;
