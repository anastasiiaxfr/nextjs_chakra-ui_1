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
                    Privacy Policy
                </Heading>

                <Text opacity={useColorModeValue(0.6, 1)} fontSize="lg" mb={8}>
                    Welcome to Dota2Bro! This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [dota2bro.com](http://dota2bro.com). Please read this policy carefully.
                </Text>

                <Box mb={8}>
                    <Heading as="h2" sx={theme.textStyles.h3} mb={2}>
                        1. Information We Collect
                    </Heading>
                    <Text opacity={useColorModeValue(0.6, 1)} mb={2}>
                        We collect information from you when you visit our Site, create an account, or interact with our services. This includes:
                    </Text>
                    <List spacing={3} opacity={useColorModeValue(0.6, 1)}>
                        <ListItem>• Personal Information: Name, email address, and contact details.</ListItem>
                        <ListItem>• Usage Data: IP address, browser type, and other details of your visits.</ListItem>
                        <ListItem>• Cookies: We use cookies to enhance your experience and collect usage data.</ListItem>
                    </List>
                </Box>

                <Box mb={8}>
                    <Heading as="h2" sx={theme.textStyles.h3} mb={2}>
                        2. How We Use Your Information
                    </Heading>
                    <Text opacity={useColorModeValue(0.6, 1)} mb={2}>
                        We use the collected information to:
                    </Text>
                    <List spacing={3} opacity={useColorModeValue(0.6, 1)}>
                        <ListItem>• Provide and improve our services.</ListItem>
                        <ListItem>• Personalize your experience.</ListItem>
                        <ListItem>• Communicate with you and send updates.</ListItem>
                    </List>
                </Box>

                <Box mb={8}>
                    <Heading as="h2" sx={theme.textStyles.h3} mb={2}>
                        3. How We Share Your Information
                    </Heading>
                    <Text opacity={useColorModeValue(0.6, 1)} mb={2}>
                        We do not sell or rent your personal information. We may share it in the following situations:
                    </Text>
                    <List spacing={3} opacity={useColorModeValue(0.6, 1)}>
                        <ListItem>• With service providers who help us operate our Site.</ListItem>
                        <ListItem>• To comply with legal obligations.</ListItem>
                        <ListItem>• During business transfers, such as mergers or acquisitions.</ListItem>
                    </List>
                </Box>

                <Box mb={8}>
                    <Heading as="h2" sx={theme.textStyles.h3} mb={2}>
                        4. Security of Your Information
                    </Heading>
                    <Text opacity={useColorModeValue(0.6, 1)} mb={2}>
                        We implement security measures to protect your information. However, no online transmission is completely secure. We strive to protect your information but cannot guarantee its absolute security.
                    </Text>
                </Box>

                <Box mb={8}>
                    <Heading as="h2" sx={theme.textStyles.h3} mb={2}>
                        5. Your Rights and Choices
                    </Heading>
                    <Text opacity={useColorModeValue(0.6, 1)} mb={2}>
                        You have the following rights regarding your personal information:
                    </Text>
                    <List spacing={3} opacity={useColorModeValue(0.6, 1)}>
                        <ListItem>• Access and update your information.</ListItem>
                        <ListItem>• Opt-out of promotional communications.</ListItem>
                        <ListItem>• Request the deletion of your information.</ListItem>
                    </List>
                </Box>

                <Box mb={8}>
                    <Heading as="h2" sx={theme.textStyles.h3} mb={2}>
                        6. Third-Party Links
                    </Heading>
                    <Text opacity={useColorModeValue(0.6, 1)} mb={2}>
                        Our Site may contain links to other websites. We are not responsible for the privacy practices or content of these third-party sites.
                    </Text>
                </Box>

                <Box mb={8}>
                    <Heading as="h2" sx={theme.textStyles.h3} mb={2}>
                        7. Changes to This Privacy Policy
                    </Heading>
                    <Text opacity={useColorModeValue(0.6, 1)} mb={2}>
                        We may update this Privacy Policy periodically. Changes will be posted on this page, and your continued use of the Site signifies your acceptance of the updated policy.
                    </Text>
                </Box>

                <Box mb={8}>
                    <Heading as="h2" sx={theme.textStyles.h3} mb={2}>
                        8. Contact Information
                    </Heading>
                    <Text opacity={useColorModeValue(0.6, 1)} mb={2}>
                        For questions or concerns about this Privacy Policy, please contact us at:
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
