import type { Metadata } from "next";
import React from "react";
import Header from "@/components/Header";

export const metadata: Metadata = {
    title: "MP-5 URL Shortener",
    description: "a URL Shortener application",
    icons: "https://imgcdn.sigstick.com/iNqRWEt8wH6CF38gOGUS/28-1.png" // cute cat image
}

export default function RootLayout({
   children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
            <Header />
                {children}
            </body>
        </html>
    )
}