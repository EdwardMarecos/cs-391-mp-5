import { redirect } from "next/navigation";
import getLinkByAlias from "@/lib/getLinkByAlias";

export default async function RedirectPage({
    params,
}: {
    params: Promise<{ alias: string }>;
}) {
    const { alias } = await params;
    console.log("Requested alias for url is:", alias);

    try {
        const linkDoc = await getLinkByAlias(alias);
        if ( linkDoc === null ) {
            console.log("No link found for alias:", alias);
            return redirect("/");
        }
        console.log("Redirected link:", linkDoc.link);
        return redirect(linkDoc.link)
    } catch (err) {
        console.log("error found", err);
        return redirect("/");
    }
}