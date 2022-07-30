import {NextPage} from "next";
import {Heading, List, ListItem, Text} from "@chakra-ui/react";
import {Link} from '../../components/link';

const PostIndex: NextPage = () => {
    return (
        <>
            <Heading as="h1" mb={5}>Posts</Heading>
            <List spacing={8}>
                <ListItem>
                    <Heading as="h2" size="md">
                        <Link href="/post/harga-rumah-di-yogyakarta" name="Berapa sih harga rumah di yogyakarta?"/>
                    </Heading>
                    <Text>
                        untuk spesifikasi:<br/>
                        - kamar 3<br/>
                        - maksimal tanah 150 meter persegi<br/>
                        - minimal tanah 70 meter persegi<br/>
                        <br/>
                        rata-rata: 672,450,000<br/>
                        median: 630,000,000
                    </Text>
                </ListItem>
                <ListItem>
                    <Heading as="h2" size="md">
                        <Link href="/post/rata-rata-inflasi-indonesia" name="Berapa rata-rata inflasi di Indonesia?"/>
                    </Heading>
                    <Text>
                        Jawabannya: <strong>5.2%</strong>
                    </Text>
                </ListItem>
            </List>
        </>
    )
}

export default PostIndex