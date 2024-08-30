"use client";
import { useState, SyntheticEvent } from 'react'

import {
    useColorModeValue,
    VStack,
    Flex,
    Box,
    Button,
    Text,
    LinkBox,
    LinkOverlay,
    Icon,
    Image,
    AspectRatio,
} from '@chakra-ui/react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

export default function CardItem({ data }: any) {
    const [isLiked, setIsLikes] = useState<boolean>(false)

    const toggleIsLiked = (e: SyntheticEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setIsLikes(!isLiked)
    }

    const bg = useColorModeValue('dark.1', 'light.1')

    return (
        <LinkBox className='card' p='4' boxShadow='xl' borderRadius="2xl" bg={bg}>
            <AspectRatio
                ratio={1}
                width="full"
                overflow="hidden"
                borderRadius="2xl"
                position="relative"
                _after={{
                    content: '"→"',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 12,
                    height: 12,
                    borderRadius: 'full',
                    background: useColorModeValue('main', 'main'),
                    border: '1px solid',
                    borderColor: useColorModeValue('main', 'main'),
                    backdropFilter: 'blur(12px)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    opacity: 0,
                    visibility: 'hidden',
                    transition: 'all 0.5s ease-in-out',
                }}
                sx={{
                    '.card:hover > &:after': {
                        opacity: 1,
                        visibility: 'visible',
                    },
                }}
            >
                <Image
                    objectFit="cover"
                    src={data.avatarfull || ''}
                    transition="transform 1s"
                    sx={{
                        '.card:hover &': {
                            transform: 'scale(1.1)',
                        },
                    }}
                />
            </AspectRatio>
            <VStack spacing={2} pt={3} alignItems="flex-start" w="full">
                <Text isTruncated pb={1} fontSize="sm" maxWidth="full" fontWeight="700" letterSpacing="0.02em">
                    <LinkOverlay href={`#`}>
                        {data.name}
                    </LinkOverlay>
                </Text>
                <Flex w="full" justifyContent="space-between" alignItems="center">
                    <Box as="p" fontSize="sm">
                        <Text as="span" fontWeight="normal" opacity={useColorModeValue('0.4', '0.9')}>
                            {data.team_name}
                        </Text>
                    </Box>
                    <Button
                        aria-label={`${isLiked ? 'Unlike' : 'Like'} post`}
                        p={0}
                        minW="auto"
                        minH="auto"
                        h="auto"
                        variant="unstyled"
                        onClick={(e) => toggleIsLiked(e)}
                        boxShadow="none !important"
                    >
                        <Icon color="main" as={isLiked ? AiFillHeart : AiOutlineHeart} w={4} h={4} />
                    </Button>
                </Flex>
            </VStack>
        </LinkBox>
    )
}