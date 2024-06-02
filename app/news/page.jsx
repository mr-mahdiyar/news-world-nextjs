import NewsList from "@/components/NewsList";
import { DUMMY_NEWS } from "@/dummy-news";
import Link from "next/link";

export default function NewsPage() {
  return (
    <>
      <h1>News Page</h1>
      <NewsList news={DUMMY_NEWS} />
    </>
  );
}
