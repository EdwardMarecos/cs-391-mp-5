import LinkPreview from "@/components/LinkPreview";

export default function Home() {

    return(
        <>
            <div>
                <h1>URL Shortener</h1>
                <h3>Shorten your long URLs</h3>

                <p> content </p>
                <LinkPreview
                    post={{
                        link: "https://imgcdn.sigstick.com/iNqRWEt8wH6CF38gOGUS/28-1.png",
                        alias: "cute cat photo"
                    }}
                />
            </div>
        </>
    );
}