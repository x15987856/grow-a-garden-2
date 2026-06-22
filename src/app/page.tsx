import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { getCodes, getGameConfig, getItems } from "@/lib/data";
import { buildVideoGameSchema } from "@/lib/seo";

const config = getGameConfig();

export default function HomePage() {
  const items = getItems();
  const codes = getCodes();

  return (
    <>
      <JsonLd data={buildVideoGameSchema()} />
      <section className="hero">
        <div className="shell hero-content">
          <span className="badge">Roblox guide and tools</span>
          <h1>{config.game.name}</h1>
          <p className="lead">
            Track Grow a Garden 2 codes, plan Sheckles goals, compare public tier notes and follow update signals without guessing unverified crop or pet stats.
          </p>
          <div className="button-row">
            <Link className="button primary" href="/codes">Check Codes</Link>
            <Link className="button" href="/calculator">Open Calculator</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <h2>Launch Toolkit</h2>
          <div className="grid">
            <Link className="card" href="/codes">
              <span className="badge">{codes.length} active</span>
              <h3>Codes</h3>
              <p>Current code table with source and check date.</p>
            </Link>
            <Link className="card" href="/calculator">
              <span className="badge">Estimator</span>
              <h3>Sheckles Calculator</h3>
              <p>Plan gear, crop and event budgets with user-entered values.</p>
            </Link>
            <Link className="card" href="/tier-list">
              <span className="badge">{items.length} entries</span>
              <h3>Tier Notes</h3>
              <p>Publicly sourced guide entries with detail pages.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="shell grid two">
          <div>
            <h2>Built for verified data</h2>
            <p>
              Grow a Garden 2 is fresh, so the site separates confirmed information from live-game values that still need testing. That keeps the calculator useful without publishing fake rates.
            </p>
          </div>
          <div className="card">
            <h3>Source coverage</h3>
            {config.sources.map((source) => (
              <p key={source.url}>
                <a href={source.url} target="_blank" rel="noreferrer">{source.name}</a>: {source.note}
              </p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
