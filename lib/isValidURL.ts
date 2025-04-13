
export default function isValidURL(url: string): boolean {
    try {
        new URL(url);
        return true;
    } catch (err) {
        console.error("Invalid url", err);
        return false;
    }
}