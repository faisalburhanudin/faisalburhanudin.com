import '../styles/globals.css'
import {AppProps} from "next/app";
import {ChakraMDXProvider} from '@mdx-lib/chakra';


function MyApp({Component, pageProps}: AppProps) {
    return (
        <ChakraMDXProvider>
            <Component {...pageProps} />
        </ChakraMDXProvider>
    )
}

export default MyApp