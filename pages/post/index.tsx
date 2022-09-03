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
            href: "/post/does-investing-in-gold-make-us-rich",
            name: "Does investing in gold make us rich?",
            shortDescription: <Text>
                Yes, but just slightly<br/>

                with average inflation at <strong>8.32%</strong> and average return in gold at <strong>10.4%</strong>.

                that makes our real return to be <strong>2.08%</strong>
            </Text>
        },
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
        },
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
                            <Text as={"u"} color={"gray.500"}>
                                <Link href={post.href} name="read more"/>
                            </Text>
                        </ListItem>
                    )
                )}\
            </List>
        </>
    )
}

export default PostIndex