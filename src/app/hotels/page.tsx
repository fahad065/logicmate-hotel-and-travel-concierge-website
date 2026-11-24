import Link from "next/link";
import { Building2, Clock, MapPin, Plane } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SafeImg } from "@/components/safe-img";
import { countryOf, fromRate, hotels, money } from "@/data/hotels";

export const metadata = { title: "Our hotels — Azura Hotels & Resorts" };

export default function HotelsPage() {
  return (
    <div>
      <PageHero icon={Building2} eyebrow="Our hotels" title="Six hotels, five countries" subtitle="Beach resorts, city hotels and a mountain lodge. Every hotel shows rates in its own currency." />
      <section className="mx-auto max-w-6xl space-y-8 px-5 py-14 sm:px-8">
        {hotels.map((h) => {
          const c = countryOf(h.country);
          return (
            <article key={h.slug} className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm md:grid md:grid-cols-[2fr_3fr]">
              <SafeImg src={h.image} alt={h.name} className="h-56 w-full object-cover md:h-full" />
              <div className="p-6 sm:p-8">
                <p className="text-sm text-foreground/55">{c.flag} {h.city}, {c.name} · {h.type}</p>
                <h2 className="font-display text-3xl font-semibold text-ink">{h.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">{h.description}</p>
                <div className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
                  <p className="flex gap-2"><MapPin className="mt-0.5 size-4 shrink-0 text-gold-dark" /> {h.area}</p>
                  <p className="flex gap-2"><Clock className="mt-0.5 size-4 shrink-0 text-gold-dark" /> Check-in {h.checkIn} · out {h.checkOut}</p>
                  <p className="flex gap-2 sm:col-span-2"><Plane className="mt-0.5 size-4 shrink-0 text-gold-dark" /> {h.airport.name} — {h.airport.distance}</p>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <span className="mr-2 text-lg font-semibold text-ink">{money(fromRate(h), h, true)} <span className="text-sm font-normal text-foreground/55">/ night</span></span>
                  <Link href={`/hotels/${h.slug}`} className="rounded-full bg-ink px-5 py-2 text-sm font-bold text-white hover:bg-ink-soft">View hotel</Link>
                  <Link href={`/book?hotel=${h.slug}`} className="rounded-full border border-black/15 px-5 py-2 text-sm font-bold text-ink hover:border-ink">Book</Link>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}
