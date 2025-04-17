"use server";
import getCollection, { POSTS_COLLECTION } from "@/db";
import { PostProps } from "@/types";
import isValidURL from "./isValidURL"

export default async function createNewLink(
    link: string,
    alias: string,
): Promise<PostProps | string> {  // the errors weren't rendering on deployment, so I will return as string

    console.log("Creating new link", link);

    // Validate the URL using helper function
    if (!isValidURL(link)) {
        return("Invalid URL provided");
    }

    // Check against loops: throw an error if the inputted link would cause one
    const ownDomain = "https://cs-391-mp-5-eight.vercel.app/";
    // const devDomain = "http://localhost:3000/" // for dev testing
    if (link.includes(ownDomain)) { // || link.startsWith(devDomain)) {
        return("Invalid URL: Cycles are not allowed");
    }

    const postsCollection = await getCollection(POSTS_COLLECTION);

    // Check for duplicate alias
    const duplicate = await postsCollection.findOne({ alias });
    if (duplicate) {
        return("Alias is already taken");
    }

    // insert into db
    const p = {
        link: link,
        alias: alias,
    };
    const res = await postsCollection.insertOne({...p});

    if (!res.acknowledged) {
        return("DB insert failed")
    }

    return {...p, id: res.insertedId.toHexString() };
}