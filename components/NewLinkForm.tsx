"use client";
import {Button, FormHelperText, TextField} from "@mui/material";
import { useState } from "react";
import createNewLink from "@/lib/createNewLink";
import {PostProps} from "@/types";

export default function NewLinkForm({
   append,
}: {
   append: (newPost: PostProps) => void;
}) {
    const [link, setLink] = useState("");
    const [alias, setAlias] = useState("");

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                createNewLink(link, alias)
                .then((p) => append(p))
                .catch((err) => console.error(err));
            }}
        >
            <TextField
                label="Link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
            />
            <TextField
                label="Alias"
                value={alias}
                onChange={(e) => setAlias(e.target.value)}
            />
            <FormHelperText>Write the link you want to shorten</FormHelperText>
            <Button
                type="submit"
                disabled={link === "" || alias === ""}
            >
               Shorten!
            </Button>
        </form>
    );
}