import {Heading} from "@chakra-ui/react";

export const MDXComponents: any = {
    h1: (p: any) => <Heading as="h1" my={5} {...p}/>,
}