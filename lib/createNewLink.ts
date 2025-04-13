"use server";
import getCollection, { POSTS_COLLECTION } from "@/db";
import { PostProps } from "@/types";

export default async function createNewLink(
    link: string,
    alias: string,
): Promise<PostProps> {
    console.log("Creating new link", link);
    const p = {
        link: link,
        alias: alias,
    };

    // insert into db
    const postsCollection = await getCollection(POSTS_COLLECTION);
    const res = await postsCollection.insertOne({...p});

    if (!res.acknowledged) {
        throw new Error("DB insert failed")
    }

    return {...p, id: res.insertedId.toHexString() };
}