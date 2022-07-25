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