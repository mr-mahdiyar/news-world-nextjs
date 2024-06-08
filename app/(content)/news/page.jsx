"use client"

import NewsList from "@/components/NewsList";
import { DUMMY_NEWS } from "@/dummy-news";
import { useEffect, useState } from "react";

export default function NewsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [news, setNews] = useState([]);
  useEffect(() => {
    async function fetcNews() {
      setIsLoading(true);
      const response = await fetch("http://localhost:8080/news");

      if (!response.ok) {
        setError("Failed to ferch news.");
        setIsLoading(false);
      }

      const news = await response.json();
      setIsLoading(false);
      setNews(news);
    }
    fetcNews();
  }, []);

  if(isLoading) {
    return <p>Loading...</p>
  }
  if(error) {
    return <p>{error}</p>
  }
  let newsContent;
  if(news){
    newsContent = <NewsList news={news} />
  }
  return (
    <>
      <h1>News Page</h1>
      {newsContent}
    </>
  );
}
