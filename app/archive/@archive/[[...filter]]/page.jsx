import NewsList from "@/components/NewsList";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import Link from "next/link";
export default function FilteredNewsPage({ params }) {
  const filter = params.filter;
  const selectedYear = filter?.[0];
  const selectedMounth = filter?.[1];

  let news;
  let links = getAvailableNewsYears();

  if (selectedYear && !selectedMounth) {
    news = getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
  }

  if (selectedYear && selectedMounth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMounth);
    links = [];
  }
  let newsContent = <p>No news found for the selected period.</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  if (
    (selectedYear && !getAvailableNewsYears().includes(+selectedYear)) ||
    (selectedMounth && !getAvailableNewsMonths().includes(+selectedMounth))
  ) {
    throw new Error("Invalid filter.")
  }
    return (
      <>
        <header id="archive-header">
          <nav>
            <ul>
              {links.map((link) => {
                const href = selectedYear
                  ? `/archive/${selectedYear}/${link}`
                  : `/archive/${link}`;
                return (
                  <li key={link}>
                    <Link href={href}>{link}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </header>
        {newsContent}
      </>
    );
}
