import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Grow a Garden 2 Updates",
  "Grow a Garden 2 update tracker for codes, weather events, pets and gear notes.",
  "/updates"
);

export default function UpdatesPage() {
  return (
    <main className="section">
      <div className="shell">
        <span className="badge">June 2026</span>
        <h1>Updates</h1>
        <div className="grid">
          <article className="card">
            <h3>June 22, 2026</h3>
            <p>Site launch data refresh. Active code table checked against public coverage.</p>
          </article>
          <article className="card">
            <h3>June 18, 2026</h3>
            <p>Megaphone guide coverage surfaced with 8,000 Sheckles price and sound ID usage notes.</p>
          </article>
          <article className="card">
            <h3>June 16, 2026</h3>
            <p>PC Gamer published Grow a Garden 2 codes coverage and linked the Roblox game page.</p>
          </article>
        </div>
      </div>
    </main>
  );
}
