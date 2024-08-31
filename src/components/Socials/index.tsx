"use client";
import { Flex, Box, Popover, PopoverTrigger, PopoverContent } from "@chakra-ui/react";
import Icon1 from "@/assets/img/icon/soc/x.svg";
import Icon2 from "@/assets/img/icon/soc/im.svg";
import Icon3 from "@/assets/img/icon/soc/ytb.svg";
import Icon4 from "@/assets/img/icon/soc/tk.svg";

const soc = [
    {
        url: "#",
        title: "Twitter",
        icon: <Icon1 width="24" height="24" />,
    },
    {
        url: "#",
        title: "Instagram",
        icon: <Icon2 width="24" height="24" />,
    },
    {
        url: "#",
        title: "Youtube",
        icon: <Icon3 width="24" height="24" />,
    },
    {
        url: "#",
        title: "TikTok",
        icon: <Icon4 width="24" height="24" />,
    },
];

export default function Socials() {
    return (
        <Flex gap={4} wrap="wrap">
            {soc.map((i, ind) => (
                <Popover key={ind} trigger="hover" placement="top">
                    <PopoverTrigger>
                        <Box
                            as="a"
                            href={i.url}
                            title={i.title}
                            _hover={{ color: 'main' }}
                            display="flex"
                            alignItems="center"
                            p={1}
                        >
                            {i.icon}
                        </Box>
                    </PopoverTrigger>
                    <PopoverContent
                        w="120"
                        py={1}
                        bg='main'
                        color='white'
                        borderColor="transparent"
                        px={3}
                    >
                        {i.title}
                    </PopoverContent>
                </Popover>
            ))}
        </Flex>
    );
}
