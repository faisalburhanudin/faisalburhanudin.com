import '../styles/globals.css'
import {AppProps} from "next/app";
import {ChakraProvider, Container, HStack, Link} from "@chakra-ui/react";
import {MDXProvider} from "@mdx-js/react";
import {MDXComponents} from '../components/mdx';


function MyApp({Component, pageProps}: AppProps) {
    return (
        <ChakraProvider>
            <MDXProvider components={MDXComponents}>
                <Container>
                    <HStack spacing={5} my={10}>
                        <Link>About</Link>
                        <Link>Blog</Link>
                    </HStack>
                    <Component {...pageProps} />
                </Container>
            </MDXProvider>
        </ChakraProvider>
    )
}

export default MyApp