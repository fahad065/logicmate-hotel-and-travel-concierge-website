import Link from "next/link";
import { countryOf, hotels, type Hotel } from "@/data/hotels";

// Hotel chips: switch which hotel a page shows (rates in that hotel's currency).
export function HotelPicker({ current, basePath, label = "Showing", all }: { current?: Hotel; basePath: string; label?: string; all?: boolean }) {
  const chip = (on: boolean) => `rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${on ? "border-ink bg-ink text-white" : "border-black/10 bg-white text-ink hover:border-ink"}`;
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <span className="mr-1 text-xs font-semibold uppercase tracking-wider text-foreground/50">{label}</span>
      {all && <Link href={basePath} scroll={false} className={chip(!current)}>All hotels</Link>}
      {hotels.map((h) => (
        <Link key={h.slug} href={`${basePath}?hotel=${h.slug}`} scroll={false} className={chip(current?.slug === h.slug)}>
          {countryOf(h.country).flag} {h.city}
        </Link>
      ))}
    </div>
  );
}
