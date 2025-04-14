import { PostProps } from "@/types";

// used for debugging and testing. not visible in submission

export default function LinkPreview(
    { post }: { post: PostProps },
) {
    return (
        <div>
            <h4>your shortened link to {post.link}</h4>
            <p>is https://cs-391-mp-5-eight.vercel.app/r/{post.alias}</p>
        </div>
    )
}