import LinksDisplay from "@/components/LinksDisplay";
import getAllLinks from "@/lib/getAllLinks";

export default async function Home() {
    const posts = await getAllLinks();

    return (
        <>
            <div>
                <h1>URL Shortener</h1>
                <h3>Shorten your long URLs</h3>
                <p> content </p>
                <LinksDisplay inputPosts={posts} />
            </div>
        </>
    );
}
