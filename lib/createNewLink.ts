"use server";
import getCollection, { POSTS_COLLECTION } from "@/db";
import { PostProps } from "@/types";
import isValidURL from "./isValidURL"

export default async function createNewLink(
    link: string,
    alias: string,
): Promise<PostProps> {

    console.log("Creating new link", link);

    // Validate the URL using helper function
    if (!isValidURL(link)) {
        throw new Error("Invalid URL provided");
    }


    const postsCollection = await getCollection(POSTS_COLLECTION);

    // Check for duplicate alias
    const duplicate = await postsCollection.findOne({ alias });
    if (duplicate) {
        throw new Error("Alias is already taken");
    }

    // insert into db
    const p = {
        link: link,
        alias: alias,
    };
    const res = await postsCollection.insertOne({...p});

    if (!res.acknowledged) {
        throw new Error("DB insert failed")
    }

    return {...p, id: res.insertedId.toHexString() };
}