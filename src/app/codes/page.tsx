import JsonLd from "@/components/JsonLd";
import { getCodeMeta, getGameConfig } from "@/lib/data";
import { buildFAQSchema, pageMetadata } from "@/lib/seo";

const config = getGameConfig();
const data = getCodeMeta();

export const metadata = pageMetadata(
  "Grow a Garden 2 Codes",
  "Active Grow a Garden 2 Roblox codes checked for June 2026, including source notes and redemption guidance.",
  "/codes"
);

export default function CodesPage() {
  const faq = buildFAQSchema([
    {
      question: "What is the active Grow a Garden 2 code?",
      answer: "TEAMGREENBEAN is tracked as active from PC Gamer coverage checked on June 22, 2026."
    },
    {
      question: "Why are there not more codes listed?",
      answer: "The site only lists codes with a public source or in-game verification instead of copying unverified code lists."
    }
  ]);

  return (
    <main className="section">
      <JsonLd data={faq} />
      <div className="shell">
        <span className="badge">Checked {data.lastChecked}</span>
        <h1>{config.game.name} Codes</h1>
        <p className="lead">Redeem active codes quickly. Roblox game codes can expire with little notice.</p>
        <table className="table">
          <thead>
            <tr>
              <th>Code</th>
              <th>Status</th>
              <th>Reward</th>
              <th>Source</th>
            </tr>
          </thead>
          <tbody>
            {data.codes.map((entry) => (
              <tr key={entry.code}>
                <td className="code">{entry.code}</td>
                <td>{entry.status}</td>
                <td>{entry.reward}</td>
                <td>{entry.source}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
