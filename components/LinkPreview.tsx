import { PostProps } from "@/types";

export default function LinkPreview(
    { post }: { post: PostProps },
) {
    return (
        <div>
            <h4>your shortened link to {post.link}</h4>
            <p>is http://localhost:3000/r/{post.alias}</p>
        </div>
    )
}