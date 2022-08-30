import {NextPage} from "next";
import {Heading, List, ListItem, Text} from "@chakra-ui/react";
import {Link} from '../../components/link';


interface Post {
    href: string
    name: string
    shortDescription: JSX.Element
}

const PostIndex: NextPage = () => {
    let posts: Post[] = [
        {
            href: "/post/harga-rumah-di-yogyakarta",
            name: "Berapa sih harga rumah di yogyakarta?",
            shortDescription: <Text>
                untuk spesifikasi:<br/>
                - kamar 3<br/>
                - maksimal tanah 150 meter persegi<br/>
                - minimal tanah 70 meter persegi<br/>
                <br/>
                rata-rata: 672,450,000<br/>
                median: 630,000,000
            </Text>
        },
        {
            href: "/post/rata-rata-inflasi-indonesia",
            name: "Berapa rata-rata inflasi di Indonesia?",
            shortDescription: <Text>
                Jawabannya: <strong>5.2%</strong>
            </Text>
        }
    ]


    return (
        <>
            <Heading as="h1" mb={5}>Posts</Heading>
            <List spacing={8}>
                {posts.map(
                    post => (
                        <ListItem key={post.name}>
                            <Heading as="h2" size="md">
                                <Link href={post.href} name={post.name}/>
                            </Heading>
                            {post.shortDescription}
                            <Text as={"u"}>
                                <Link href={post.href} name="read ..."/>
                            </Text>
                        </ListItem>
                    )
                )}\
            </List>
        </>
    )
}

export default PostIndex