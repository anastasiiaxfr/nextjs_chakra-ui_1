import { Text, Image, Stack, Heading, Divider, ButtonGroup, Button } from '@chakra-ui/react'
import { Card, CardBody, CardFooter } from '@chakra-ui/react'

export default function CardItem({ data }: any) {

    return (
        <Card boxShadow="2xl">
            <CardBody pb="0">
                <Image
                    src={data.avatarfull}
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{data.personaname}</Heading>
                </Stack>
            </CardBody>
            <CardFooter pt="0">
                <Button variant='ghost' colorScheme='blue'>
                    like
                </Button>
            </CardFooter>
        </Card>
    )
}