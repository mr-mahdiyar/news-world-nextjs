export default function NewsDetailPage({ params }) {
  const newsId = { params };
  return <>
  <h1>News Detail Page</h1>
  <p>news id: {newsId}</p>
  </>;
}
