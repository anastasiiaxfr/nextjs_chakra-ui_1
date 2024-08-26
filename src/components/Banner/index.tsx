import { Box, Flex, Heading } from '@chakra-ui/react'
import PageContainer from '@/components/Layout/Container'

export default function Banner() {
    const circleStyles = {
        content: '""',
        position: 'absolute',
        width: '40vmin',
        height: '40vmin',
        borderRadius: '50%',
        background: 'whiteAlpha.400',
    }
    return (
        <Box as="section">
            <PageContainer>
                <Flex align="center" bgGradient='linear(120deg, #9C27B0, #673AB7 66%, #3F51B5)' color="#FFF"
                    py={{ base: 14, lg: 24 }}
                    px={12}
                    w="full"
                    borderRadius="3xl"
                    position="relative"
                    overflow="hidden"
                    _before={{
                        ...circleStyles,
                        left: '-18%',
                        top: '-58%',
                    }}
                    _after={{
                        ...circleStyles,
                        right: '-6%',
                        bottom: '-50%',
                    }}>
                    <Heading as="h1" textStyle='h1' fontSize={{ base: '2xl', md: '4xl', lg: '4xl', xl: '5xl' }}
                        fontWeight="800">
                        Explore, Connect, and Showcase Elite Teams and Players
                    </Heading>
                </Flex>
            </PageContainer>
        </Box>
    )
}