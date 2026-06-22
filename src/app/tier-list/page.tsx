import Link from "next/link";
import { getItems } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Grow a Garden 2 Tier List",
  "A source-conscious Grow a Garden 2 tier list for public guide topics, pets, gear and launch codes.",
  "/tier-list"
);

export default function TierListPage() {
  const items = getItems();

  return (
    <main className="section">
      <div className="shell">
        <span className="badge">Verified notes only</span>
        <h1>Grow a Garden 2 Tier List</h1>
        <p className="lead">These tiers rank current search and guide priority, not hidden in-game power values.</p>
        <div className="grid">
          {items.map((item) => (
            <Link className="card" key={item.slug} href={`/tier-list/${item.slug}`}>
              <span className="badge">Tier {item.tier}</span>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
