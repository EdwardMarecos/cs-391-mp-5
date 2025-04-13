import getCollection, { POSTS_COLLECTION } from "@/db";
import { PostProps } from "@/types";

export default async function getAllLinks(): Promise<PostProps[]> {
    const postCollection = await getCollection(POSTS_COLLECTION);
    const data = await postCollection.find().toArray();

    const links: PostProps[] = data.map((p) => ({
        id: p.id.toHexString(),
        link: p.link,
        alias: p.alias,
}));

    return links.reverse();
}