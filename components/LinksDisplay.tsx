"use client";
import { PostProps } from "@/types";
import { useState } from "react";
import LinkPreview from "./LinkPreview";
import NewLinkForm from "./NewLinkForm";

export default function LinksDisplay({
    inputPosts,
}: {
    inputPosts: PostProps[];
}) {
    const [posts, setPosts] = useState(inputPosts);

    function append(newPost: PostProps) {
        setPosts([newPost, ...posts]);
    }
    return (
      <div>
          <NewLinkForm append={append}/>
          {posts.map((p) => (
            <LinkPreview key={p.id} post={p} />
          ))}
      </div>
    );
}