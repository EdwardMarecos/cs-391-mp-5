import { PostProps } from "@/types";

export default function LinkPreview(
    { post }: { post: PostProps },
) {
    return (
        <div>
            <h4>your link is {post.link}</h4>
            <p>{post.alias}</p>
        </div>
    )
}