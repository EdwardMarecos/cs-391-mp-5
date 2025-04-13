import { redirect } from "next/navigation";
import getLinkByAlias from "@/lib/getLinkByAlias";

export default async function RedirectPage({
    params,
}: {
    params: Promise<{ alias: string }>;
}) {
    const { alias } = await params;
    console.log("Requested alias for url is:", alias);

    const linkDoc = await getLinkByAlias(alias);

    try {
        if ( linkDoc === null ) {
            console.log("No link found for alias:", alias);
            return redirect("/");
        }
    } catch (err) {
        console.log("error found", err);
        return redirect("/");
    }
    console.log("Redirected link:", linkDoc.link);
    return redirect(linkDoc.link)
}