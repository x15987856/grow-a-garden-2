import Link from "next/link";

export default function NotFound() {
  return (
    <main className="section">
      <div className="shell">
        <h1>Page not found</h1>
        <p>The guide route you requested is not available yet.</p>
        <Link className="button primary" href="/">Return Home</Link>
      </div>
    </main>
  );
}
