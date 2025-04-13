"use client";
import { PostProps } from "@/types";
import { useState } from "react";
import LinkPreview from "./LinkPreview";

export default function LinksDisplay({
    inputPosts,
}: {
    inputPosts: PostProps[];
}) {
    const [posts, setPosts] = useState(inputPosts);

    return (
      <div>
          {posts.map((p) => (
            <LinkPreview key={p.id} post={p} />
          ))}
      </div>
    );
}