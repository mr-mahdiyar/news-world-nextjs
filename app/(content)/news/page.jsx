import NewsList from "@/components/NewsList";
import { getAllNews } from "@/lib/news";
export default async function NewsPage() {
  const news = getAllNews();
  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
}
