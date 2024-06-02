// Parallel routes are created using named slots. Slots are defined with the @folder convention

import { getAvailableNewsMonths, getAvailableNewsYears } from "@/lib/news";
import Link from "next/link";

//Slots are passed as props to the shared parent layout.
export default function ArchivePage() {
  const links = getAvailableNewsYears();
  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link}>
              <Link href={`/archive/${link}`}>{link}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
