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
                        <Link href="/post/hello-world" name="Create Polymorphic Inheritance in SQLAlchemy"/>
                    </Heading>
                    <Text fontSize="sm" mb={5}>
                        18 April 2022
                    </Text>
                    <Text>
                        How to make this
                    </Text>
                </ListItem>
            </List>
        </>
    )
}

export default PostIndex