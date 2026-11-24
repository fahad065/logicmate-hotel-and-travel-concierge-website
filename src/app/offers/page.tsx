import Link from "next/link";
import { BadgePercent, Check, Tag } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SafeImg } from "@/components/safe-img";
import { hotelOf } from "@/data/hotels";
import { offers } from "@/data/offers";

export const metadata = { title: "Offers — Azura Hotels & Resorts" };

export default function OffersPage() {
  return (
    <div>
      <PageHero icon={BadgePercent} eyebrow="Offers" title="Offers & packages" subtitle="Only when you book on our own website, by phone or through our chat — add the code to your booking request." />
      <section className="mx-auto grid max-w-6xl gap-6 px-5 py-14 sm:px-8 md:grid-cols-2">
        {offers.map((o) => (
          <article key={o.slug} id={o.slug} className="flex scroll-mt-24 flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
            <SafeImg src={o.image} alt={o.name} className="h-48 w-full object-cover" />
            <div className="flex flex-1 flex-col p-6">
              <h2 className="font-display text-2xl font-semibold text-ink">{o.name}</h2>
              <p className="mt-1 text-sm text-foreground/65">{o.summary}</p>
              <ul className="mt-3 space-y-1.5 text-sm text-foreground/75">{o.benefits.map((b) => <li key={b} className="flex gap-2"><Check className="mt-0.5 size-4 shrink-0 text-gold-dark" /> {b}</li>)}</ul>
              <p className="mt-3 text-xs text-foreground/55">{o.terms}{o.onlyAt ? ` Available at ${o.onlyAt.map((s) => hotelOf(s)?.name).join(", ")}.` : " Available at every hotel."}</p>
              <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-sand px-3 py-1 text-sm font-semibold text-ink"><Tag className="size-3.5" /> {o.code}</span>
                <Link href={`/book?offer=${o.code}${o.onlyAt?.length === 1 ? `&hotel=${o.onlyAt[0]}` : ""}`} className="rounded-full bg-ink px-5 py-2 text-sm font-bold text-white hover:bg-ink-soft">Book this offer</Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
