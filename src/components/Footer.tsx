import Link from "next/link";
import { getGameConfig } from "@/lib/data";

const config = getGameConfig();

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <strong>{config.game.name} Guide & Tools</strong>
          <p>
            Fan-made companion site. Not affiliated with Roblox Corporation or {config.game.developer}.
          </p>
        </div>
        <div className="footer-links">
          <Link href="/about">About</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/privacy-policy">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}
