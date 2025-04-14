import type { Metadata } from "next";
import React from "react";
import Header from "@/components/Header";
import { IBM_Plex_Mono } from 'next/font/google'
import "./globals.css"

const ibmPlexMono = IBM_Plex_Mono({
    // font ( using information provided by next.js docs for font optimization )
    subsets: ['latin'],
    weight: "400"
});

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
        <html lang="en" className={ibmPlexMono.className}>
            <body>
            <Header />
                {children}
            </body>
        </html>
    );
}