import Link from "next/link";
import { getGameConfig } from "@/lib/data";

const config = getGameConfig();

const nav = [
  ["Codes", "/codes"],
  ["Calculator", "/calculator"],
  ["Tier List", "/tier-list"],
  ["Guide", "/beginner-guide"],
  ["Updates", "/updates"],
  ["Wiki", "/wiki"]
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/">
          <span className="brand-mark">G2</span>
          <span>{config.game.name}</span>
        </Link>
        <nav className="nav" aria-label="Primary navigation">
          {nav.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
