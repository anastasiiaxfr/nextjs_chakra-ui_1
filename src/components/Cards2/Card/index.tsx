"use client";

import {
  useColorModeValue,
  AspectRatio,
  Text,
  LinkBox,
  LinkOverlay,
  Flex,
  Icon
} from "@chakra-ui/react";
import { IoStar } from "react-icons/io5";

export default function CardItem({ data }: any) {
  const bd = useColorModeValue('dark.1', 'light.2');
  const bg = useColorModeValue('dark.1', 'light.1');
  return (
    <LinkBox
      className="card"
      position="relative"
      transition="box-shadow 0.2s ease-in"
      border="1px solid"
      borderColor={bd}
      borderRadius="2xl"
      gap={2}
      overflow="hidden"
      _hover={{
        boxShadow: "inner",
      }}
      textAlign="center"
    >
      <LinkOverlay href={`#`}>
        <AspectRatio
          ratio={2}
          overflow="hidden"
          position="relative"
          width="full"
          borderRadius="0"
          bg={bg}
          borderBottom="1px solid"
          borderColor={useColorModeValue('dark.1', 'light.3')}
        >
          <Text
            p={4}
            fontWeight="bold"
            fontSize="16px"
            lineHeight="100%"
            textTransform="uppercase"
          >
            {data.name}
          </Text>
        </AspectRatio>

        <Flex
          isTruncated
          align="center"
          justify="center"
          gap="8px"
          my="0"
          p="4"
          fontSize="md"
          whiteSpace="nowrap"
          textAlign="center"
        >
          <Flex
            align="center"
            justify="center"
            my="0"
            gap="4px"
            fontWeight="bold"
          >
            <Icon as={IoStar} color="main" />
            {data.rating}
          </Flex>
          /
          <Text as="span" fontWeight="normal">
            {data.tag}
          </Text>
        </Flex>
      </LinkOverlay>
    </LinkBox>
  );
}
