import { getItems } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Grow a Garden 2 Wiki",
  "Grow a Garden 2 wiki index for sourced pets, gear, systems, codes and event topics.",
  "/wiki"
);

export default function WikiPage() {
  const items = getItems();

  return (
    <main className="section">
      <div className="shell">
        <span className="badge">Index</span>
        <h1>Wiki</h1>
        <div className="grid">
          {items.map((item) => (
            <article className="card" key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p><strong>Category:</strong> {item.category}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
