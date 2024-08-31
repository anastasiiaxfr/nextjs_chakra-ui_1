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
                    Cookie Policy
                </Heading>

                <Text opacity={useColorModeValue(0.6, 1)} fontSize="lg" mb={8}>
                    This Cookie Policy explains how Dota2Bro uses cookies and similar technologies to recognize you when you visit our website [dota2bro.com](http://dota2bro.com). This policy explains what these technologies are, why we use them, and your rights to control their use.
                </Text>

                <Box mb={8}>
                    <Heading as="h2" sx={theme.textStyles.h3} mb={2}>
                        1. What Are Cookies?
                    </Heading>
                    <Text opacity={useColorModeValue(0.6, 1)} mb={2}>
                        Cookies are small data files placed on your device when you visit a website. They help websites remember your actions and preferences over time.
                    </Text>
                </Box>

                <Box mb={8}>
                    <Heading as="h2" sx={theme.textStyles.h3} mb={2}>
                        2. How We Use Cookies
                    </Heading>
                    <Text opacity={useColorModeValue(0.6, 1)} mb={2}>
                        We use cookies for various purposes, including:
                    </Text>
                    <List spacing={3} opacity={useColorModeValue(0.6, 1)}>
                        <ListItem>• To enhance your experience by remembering your preferences and settings.</ListItem>
                        <ListItem>• To analyze how our website is used and to improve its performance.</ListItem>
                        <ListItem>• To serve personalized content and advertisements.</ListItem>
                    </List>
                </Box>

                <Box mb={8}>
                    <Heading as="h2" sx={theme.textStyles.h3} mb={2}>
                        3. Types of Cookies We Use
                    </Heading>
                    <Text opacity={useColorModeValue(0.6, 1)} mb={2}>
                        We use the following types of cookies on our website:
                    </Text>
                    <List spacing={3} opacity={useColorModeValue(0.6, 1)}>
                        <ListItem>• **Essential Cookies**: Necessary for the website to function and to provide you with the services you request.</ListItem>
                        <ListItem>• **Performance Cookies**: Help us understand how visitors use our website, so we can improve its functionality and performance.</ListItem>
                        <ListItem>• **Functional Cookies**: Allow the website to remember choices you make and provide enhanced features.</ListItem>
                        <ListItem>• **Advertising Cookies**: Used to deliver advertisements relevant to you and to track the effectiveness of our advertising campaigns.</ListItem>
                    </List>
                </Box>

                <Box mb={8}>
                    <Heading as="h2" sx={theme.textStyles.h3} mb={2}>
                        4. Third-Party Cookies
                    </Heading>
                    <Text opacity={useColorModeValue(0.6, 1)} mb={2}>
                        In addition to our own cookies, we also use third-party cookies from partners who provide services on our behalf, such as analytics and advertising services. These third parties may use cookies to collect information about your activities on our site and other sites you visit.
                    </Text>
                </Box>

                <Box mb={8}>
                    <Heading as="h2" sx={theme.textStyles.h3} mb={2}>
                        5. How to Manage Cookies
                    </Heading>
                    <Text opacity={useColorModeValue(0.6, 1)} mb={2}>
                        You can control and manage cookies through your browser settings. Most browsers allow you to:
                    </Text>
                    <List spacing={3} opacity={useColorModeValue(0.6, 1)}>
                        <ListItem>• View and delete cookies on your device.</ListItem>
                        <ListItem>• Block cookies from being placed on your device.</ListItem>
                        <ListItem>• Set your browser to notify you when cookies are set.</ListItem>
                    </List>
                    <Text opacity={useColorModeValue(0.6, 1)} mt={2}>
                        Please note that disabling cookies may affect your experience on our website and limit your ability to use certain features.
                    </Text>
                </Box>

                <Box mb={8}>
                    <Heading as="h2" sx={theme.textStyles.h3} mb={2}>
                        6. Changes to This Cookie Policy
                    </Heading>
                    <Text opacity={useColorModeValue(0.6, 1)} mb={2}>
                        We may update this Cookie Policy from time to time. Any changes will be posted on this page, and your continued use of the website after any such changes will constitute your acceptance of the new policy.
                    </Text>
                </Box>

                <Box mb={8}>
                    <Heading as="h2" sx={theme.textStyles.h3} mb={2}>
                        7. Contact Information
                    </Heading>
                    <Text opacity={useColorModeValue(0.6, 1)} mb={2}>
                        If you have any questions or concerns about our Cookie Policy, please contact us at:
                    </Text>
                    <Text opacity={useColorModeValue(0.6, 1)} mb={2}>
                        Email: <a href="mailto:support@dota2bro.com">support@dota2bro.com</a>
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
