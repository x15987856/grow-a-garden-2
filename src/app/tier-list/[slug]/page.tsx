import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { getGameConfig, getItemBySlug, getItems } from "@/lib/data";
import { buildBreadcrumbSchema } from "@/lib/seo";

const config = getGameConfig();

export function generateStaticParams() {
  return getItems().map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = getItemBySlug(params.slug);
  if (!item) return { title: "Not Found" };
  return {
    title: `${item.name} Guide`,
    description: item.description,
    alternates: { canonical: `${config.seo.baseUrl}/tier-list/${item.slug}` }
  };
}

export default function TierDetailPage({ params }: { params: { slug: string } }) {
  const item = getItemBySlug(params.slug);
  if (!item) notFound();

  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", item: config.seo.baseUrl },
    { name: "Tier List", item: `${config.seo.baseUrl}/tier-list` },
    { name: item.name, item: `${config.seo.baseUrl}/tier-list/${item.slug}` }
  ]);

  return (
    <main className="section">
      <JsonLd data={breadcrumb} />
      <div className="shell">
        <Link className="pill" href="/tier-list">Back to tier list</Link>
        <h1>{item.name}</h1>
        <p className="lead">{item.description}</p>
        <div className="grid two">
          <section className="card">
            <span className="badge">Tier {item.tier}</span>
            <h2>Verified facts</h2>
            <ul>
              {item.verifiedFacts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          </section>
          <section className="card">
            <h2>Source</h2>
            <p>{item.source}</p>
            <p>Tags: {item.tags.join(", ")}</p>
          </section>
        </div>
      </div>
    </main>
  );
}
