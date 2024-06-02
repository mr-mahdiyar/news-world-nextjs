import NewsList from "@/components/NewsList";
import { getLatestNews } from "@/lib/news"

// In this case, a default.js file can be rendered for subpages that don't match the current URL.
export default function LatestNewsPage () {
    const latestNews = getLatestNews();
    return <>
    <h2>
        Latest news
    </h2>
    <NewsList news={latestNews} />
    </>
}