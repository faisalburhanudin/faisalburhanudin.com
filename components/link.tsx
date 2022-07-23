import NextLink from "next/link";
import {Link as ChakraLink} from "@chakra-ui/react";

interface LinkProp {
    href: string
    name: string
}

export const Link = (prop: LinkProp) => (
    <NextLink href={prop.href} passHref>
        <ChakraLink>
            {prop.name}
        </ChakraLink>
    </NextLink>
)