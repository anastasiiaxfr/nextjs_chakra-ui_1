import { SimpleGrid } from '@chakra-ui/react'
import Card from "./Card"

export default function Cards({ data }: any) {
    return (
        <SimpleGrid minChildWidth='200px' spacing='20px' w='100%'>
            {data.slice(0, 12).map((i: any, ind: number) => (
                <Card key={ind} data={i} />))}
        </SimpleGrid>
    )
}