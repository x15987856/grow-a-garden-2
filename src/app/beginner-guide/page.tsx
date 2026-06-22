import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Grow a Garden 2 Beginner Guide",
  "A beginner route for Grow a Garden 2 players focused on codes, Sheckles goals, weather tracking and safe data checks.",
  "/beginner-guide"
);

export default function BeginnerGuidePage() {
  return (
    <main className="section">
      <div className="shell">
        <span className="badge">Start here</span>
        <h1>Beginner Guide</h1>
        <div className="grid">
          {[
            ["Redeem launch codes", "Start with the codes page before spending time farming early cash."],
            ["Set a Sheckles goal", "Use the calculator to plan for gear goals such as the public 8,000 Sheckles Megaphone price."],
            ["Track weather windows", "Weather events can change routing value, but exact mutation rates should be checked in-game."],
            ["Verify pet claims", "Rare pet guides move quickly. Treat unsourced multiplier claims as unverified until tested."]
          ].map(([title, text]) => (
            <article className="card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
