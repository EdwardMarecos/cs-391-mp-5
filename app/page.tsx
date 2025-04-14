import LinksDisplay from "@/components/LinksDisplay";
import getAllLinks from "@/lib/getAllLinks";

export default async function Home() {
    const posts = await getAllLinks();

    return (
        <div className="flex flex-col items-center bg-[#ffe7d9] min-h-screen py-8">
            <h1 className="text-4xl font-bold text-[#f28b66] mb-4">
                URL Shortener
            </h1>
            <h3 className="text-xl text-[#4a4a4a] mb-6">
                Shorten your long URLs into sharable links!
            </h3>
            <div className="bg-white max-w-3xl w-full p-12 rounded-lg shadow-lg">
                <LinksDisplay inputPosts={posts} />
            </div>
        </div>
    );
}
