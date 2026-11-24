import Link from "next/link";
import { Compass, Plane } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { HotelPicker } from "@/components/hotel-picker";
import { hotelOf, hotels, money } from "@/data/hotels";
import { one } from "@/lib";

export const metadata = { title: "Explore — Azura Hotels & Resorts" };

export default async function ExplorePage({ searchParams }: PageProps<"/explore">) {
  const sp = await searchParams;
  const current = hotelOf(one(sp.hotel));
  const list = current ? [current] : hotels;
  return (
    <div>
      <PageHero icon={Compass} eyebrow="Concierge" title="Our local guides" subtitle="Where our teams eat, swim, shop and take their own families — plus how to get from the airport to your room." />
      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <HotelPicker current={current} basePath="/explore" label="Guide for" all />
        <div className="mt-10 space-y-12">
          {list.map((h) => (
            <div key={h.slug}>
              <h2 className="font-display text-3xl font-semibold text-ink">{h.city} <span className="text-foreground/45">· near {h.name}</span></h2>
              <p className="mt-2 flex gap-2 text-sm text-foreground/70"><Plane className="mt-0.5 size-4 shrink-0 text-gold-dark" /> From {h.airport.name}: {h.airport.distance}. Private transfer {money(h.airport.transferUsd, h)} one way. {h.airport.note}</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {h.localTips.map((t) => (
                  <div key={t.name} className="rounded-2xl border border-black/5 bg-white p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gold-dark">{t.kind}</p>
                    <p className="mt-1 font-semibold text-ink">{t.name}</p>
                    <p className="text-xs text-foreground/50">{t.distance}</p>
                    <p className="mt-2 text-sm text-foreground/65">{t.note}</p>
                  </div>
                ))}
              </div>
              <Link href={`/book?hotel=${h.slug}`} className="mt-4 inline-block text-sm font-bold text-ink hover:text-gold-dark">Stay at {h.name} →</Link>
            </div>
          ))}
        </div>
        <p className="mt-12 text-center text-sm text-foreground/55">Opening times and prices change — our concierge confirms and books tours, tables and transfers for you.</p>
      </section>
    </div>
  );
}
