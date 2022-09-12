import '../styles/globals.css'
import {AppProps} from "next/app";
import {Box, ChakraProvider, Container, HStack} from "@chakra-ui/react";
import {MDXProvider} from "@mdx-js/react";
import {MDXComponents} from '../components/mdx';
import {Link} from '../components/link';
import Script from 'next/script';


function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <ChakraProvider>
                <MDXProvider components={MDXComponents}>
                    <Container>
                        <HStack spacing={5} my={10}>
                            <Link href="/" name="About"/>
                            <Link href="/post" name="Blog"/>
                        </HStack>
                        <Component {...pageProps} />
                        <Box mt={10}></Box>
                    </Container>
                </MDXProvider>
            </ChakraProvider>

            {/*Google tag (gtag.js)*/}
            <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-8MBC0BQ97F"></Script>
            <Script id="google-analytics" strategy="afterInteractive">
                {
                    `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-8MBC0BQ97F');`
                }
            </Script>
        </>
    )
}

export default MyApp