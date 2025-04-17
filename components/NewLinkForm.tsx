"use client";
import {Button, FormHelperText, TextField} from "@mui/material";
import { useState } from "react";
import createNewLink from "@/lib/createNewLink";
import {PostProps} from "@/types";

export default function NewLinkForm({
   appendAction,    //renamed because I was getting a project error telling me to rename
}: {
   appendAction: (newPost: PostProps) => void;
}) {
    const [link, setLink] = useState("");
    const [alias, setAlias] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();

                // clear any messages that are present (if any)
                setErrorMessage("");
                setSuccessMessage("");

                createNewLink(link, alias)
                .then((p) => {

                    //add the new link if successful
                    if (typeof p === "string") {
                        setErrorMessage(p);
                    } else {
                        //success message
                        setSuccessMessage(`Short URL Created: https://cs-391-mp-5-eight.vercel.app/r/${alias}`);
                        appendAction(p);
                    }

                    //clear form fields
                    setLink("")
                    setAlias("")
                })
                .catch((err) => {
                    console.error(err);
                    setErrorMessage(err || "An error occurred");
                });
            }}
            //styling for form
            className="flex flex-col gap-4 w-full"
        >
            <FormHelperText
                sx = {{
                    fontSize: '1.2vh',
                    fontFamily: "monospace"
                }}
            >
                Enter a long URL to create a shorter, shareable link
            </FormHelperText>

            <div className="flex flex-col gap-1">
                <label className="font-medium"> URL </label>
                <TextField
                    placeholder="URL"
                    variant="outlined"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    sx={{
                        "& label.Mui-focused": {
                            color: "#4a4a4a",
                        },
                        "& .MuiOutlinedInput-root": {
                            "&.Mui-focused fieldset": {
                                borderColor: "#f28b66",
                            },
                        },
                    }}
                />
            </div>
            <div className="flex flex-col gap-1">
                <label className="font-medium">Custom Alias</label>
                <div className="flex items-center gap-2">
                    <FormHelperText
                        sx = {{
                            fontSize: '1.2vh',
                            fontFamily: 'monospace'
                        }}
                    >
                        https://cs-391-mp-5-eight.vercel.app/r/
                    </FormHelperText>
                    <TextField
                        placeholder="alias"
                        variant="outlined"
                        value={alias}
                        onChange={(e) => setAlias(e.target.value)}
                        sx={{
                            "& label.Mui-focused": {
                                color: "#4a4a4a",
                            },
                            "& .MuiOutlinedInput-root": {
                                "&.Mui-focused fieldset": {
                                    borderColor: "#f28b66",
                                },
                            },
                        }}
                    />
                </div>
            </div>
            {/* display the error or success message */}

            {errorMessage && (
                <p className="text-red-500 text-base font-medium">{errorMessage}</p>
            )}
            {successMessage && (
                <p className="text-green-600 text-base font-medium">{successMessage}</p>
            )}

            <Button
                type="submit"
                variant="contained"
                sx={{
                    // buttons default color
                    backgroundColor: "#f28b66",
                    // buttons text color
                    color: "#fff",
                    // on hover
                    "&:hover": {
                        backgroundColor: "#f28b66cc",
                    }
                }}
                disabled={link === "" || alias === ""}
            >
               Shorten!
            </Button>
        </form>
    );
}