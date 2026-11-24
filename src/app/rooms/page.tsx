import Link from "next/link";
import { BedDouble, Users } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { HotelPicker } from "@/components/hotel-picker";
import { SafeImg } from "@/components/safe-img";
import { hotelOf, hotels, money } from "@/data/hotels";
import { one } from "@/lib";

export const metadata = { title: "Rooms & rates — Azura Hotels & Resorts" };

export default async function RoomsPage({ searchParams }: PageProps<"/rooms">) {
  const sp = await searchParams;
  const current = hotelOf(one(sp.hotel));
  const list = current ? [current] : hotels;
  return (
    <div>
      <PageHero icon={BedDouble} eyebrow="Rooms & rates" title="Find your room" subtitle="Starting rates per room per night, in each hotel's own currency. Your exact rate depends on your dates." />
      <section className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <HotelPicker current={current} basePath="/rooms" all />
        <div className="mt-10 space-y-12">
          {list.map((h) => (
            <div key={h.slug}>
              <div className="mb-4 flex flex-wrap items-end justify-between gap-3 border-b border-black/10 pb-3">
                <div>
                  <h2 className="font-display text-3xl font-semibold text-ink">{h.name}</h2>
                  <p className="text-sm text-foreground/60">{h.city} · check-in {h.checkIn}, check-out {h.checkOut}</p>
                </div>
                <Link href={`/hotels/${h.slug}`} className="text-sm font-bold text-ink hover:text-gold-dark">Hotel details →</Link>
              </div>
              <ul className="divide-y divide-black/5">
                {h.rooms.map((r) => (
                  <li key={r.slug} className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center">
                    <SafeImg src={r.image} alt={r.name} className="h-24 w-full shrink-0 rounded-xl object-cover sm:w-36" />
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-ink">{r.name}</p>
                      <p className="flex flex-wrap items-center gap-x-3 text-sm text-foreground/60"><span className="flex items-center gap-1"><BedDouble className="size-3.5" /> {r.beds}</span><span className="flex items-center gap-1"><Users className="size-3.5" /> up to {r.maxGuests}</span><span>{r.sqm} m² · {r.view}</span></p>
                      <p className="mt-1 text-sm text-foreground/70">{r.includes.join(" · ")}</p>
                    </div>
                    <div className="flex shrink-0 items-center gap-4">
                      <span className="font-semibold text-ink">{money(r.usd, h, true)}</span>
                      <Link href={`/book?hotel=${h.slug}&room=${r.slug}`} className="rounded-full bg-ink px-4 py-1.5 text-xs font-bold text-white hover:bg-ink-soft">Book</Link>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-2 text-xs text-foreground/50">{h.taxNote}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
