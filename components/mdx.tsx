import {Heading, Link, ListItem, Text, UnorderedList} from "@chakra-ui/react";

export const MDXComponents: any = {
    h1: (p: any) => <Heading as="h1" my={5} size={"lg"} {...p}/>,
    h2: (p: any) => <Heading as="h2" my={5} size={"md"} {...p}/>,
    h3: (p: any) => <Heading as="h2" my={5} size={"sm"} {...p}/>,
    ul: (p: any) => <UnorderedList {...p}/>,
    li: (p: any) => <ListItem {...p}/>,
    p: (p: any) => <Text mb={5} {...p}/>,
    a: (p: any) => <Link color='teal.500' {...p}/>,
}