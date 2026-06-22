import configData from "@/data/game.config.json";
import itemData from "@/data/items.json";
import codeData from "@/data/codes.json";

export interface GameConfig {
  game: {
    name: string;
    slug: string;
    robloxId: string;
    developer: string;
    genre: string;
    currentVersion: string;
    lastUpdated: string;
    platforms: string[];
  };
  stats: {
    visits: string;
    favorites: string;
    likes: string;
    onlineNow: string;
    serverSize: number;
    active: boolean;
  };
  seo: {
    siteTitle: string;
    siteDescription: string;
    baseUrl: string;
    primaryKeywords: string[];
    secondaryKeywords: string[];
    defaultOgImage: string;
  };
  routes: { path: string; title: string; priority: string }[];
  sources: { name: string; url: string; note: string }[];
}

export interface GuideItem {
  id: string;
  slug: string;
  name: string;
  category: string;
  tier: "S" | "A" | "B" | "C";
  description: string;
  tags: string[];
  verifiedFacts: string[];
  source: string;
}

export interface GameCode {
  code: string;
  status: "active" | "expired";
  reward: string;
  source: string;
  checkedAt: string;
}

const config = configData as GameConfig;
const items = (itemData as { items: GuideItem[] }).items;
const codes = (codeData as { codes: GameCode[]; expired: GameCode[]; lastChecked: string }).codes;

export function getGameConfig(): GameConfig {
  return config;
}

export function getItems(): GuideItem[] {
  return items;
}

export function getItemBySlug(slug: string): GuideItem | undefined {
  return items.find((item) => item.slug === slug);
}

export function getItemsByCategory(category: string): GuideItem[] {
  return items.filter((item) => item.category === category);
}

export function getCodes(): GameCode[] {
  return codes;
}

export function getCodeMeta() {
  return codeData as { codes: GameCode[]; expired: GameCode[]; lastChecked: string };
}
