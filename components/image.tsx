import {Image} from "@chakra-ui/react";

interface ImageProp {
    src: string
}

export const ImagePost = (prop: ImageProp) => (
    <Image px={[0, 0, 20]} src={prop.src} mb={5}/>
)