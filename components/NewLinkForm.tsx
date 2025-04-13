"use client";
import {Button, FormHelperText, TextField} from "@mui/material";
import { useState } from "react";

export default function NewLinkForm() {
    const [link, setLink] = useState("");
    const [alias, setAlias] = useState("");

    return (
        <form>
            <TextField>
                label="Link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
            </TextField>
            <TextField>
                label="Alias"
            </TextField>
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