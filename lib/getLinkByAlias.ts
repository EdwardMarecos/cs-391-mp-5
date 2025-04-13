import getCollection, { POSTS_COLLECTION } from "@/db";
import { PostProps } from "@/types";

export default async function getLinkByAlias(
    alias: string,
): Promise<PostProps | null> {

    const postsCollection = await getCollection(POSTS_COLLECTION);
    const data = await postsCollection.findOne({ alias });

    if (data === null) {
        return null;
    }

    return {
        id: data._id.toHexString(),
        link: data.link,
        alias: alias,
    };
}