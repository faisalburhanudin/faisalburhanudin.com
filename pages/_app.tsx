import '../styles/globals.css'
import {AppProps} from "next/app";
import {ChakraProvider, Container, HStack} from "@chakra-ui/react";
import {MDXProvider} from "@mdx-js/react";
import {MDXComponents} from '../components/mdx';
import {Link} from '../components/link';


function MyApp({Component, pageProps}: AppProps) {
    return (
        <ChakraProvider>
            <MDXProvider components={MDXComponents}>
                <Container>
                    <HStack spacing={5} my={10}>
                        <Link href="/" name="About"/>
                        <Link href="/post" name="Blog"/>
                    </HStack>
                    <Component {...pageProps} />
                </Container>
            </MDXProvider>
        </ChakraProvider>
    )
}

export default MyApp