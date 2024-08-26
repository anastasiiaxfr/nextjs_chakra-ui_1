import { Container, VStack } from '@chakra-ui/react'

export default function PageContainer({ children }: any) {
    return (
        <Container as={VStack} maxW={'1024px'} my={10} spacing={8} alignItems={'flex-start'}>{children}</Container>
    )
}