import Link from "next/link";
import { notFound } from "next/navigation";
import { BedDouble, Car, Check, Clock, Dog, Globe2, Mail, MapPin, MessageCircle, Phone, Plane, Receipt, Sparkles, Users, Utensils } from "lucide-react";
import { SafeImg } from "@/components/safe-img";
import { countryOf, hotelOf, hotels, money } from "@/data/hotels";

export function generateStaticParams() {
  return hotels.map((h) => ({ slug: h.slug }));
}

export async function generateMetadata({ params }: PageProps<"/hotels/[slug]">) {
  const { slug } = await params;
  const h = hotelOf(slug);
  return { title: h ? `${h.name} — Azura Hotels & Resorts` : "Hotel — Azura Hotels & Resorts" };
}

export default async function HotelPage({ params }: PageProps<"/hotels/[slug]">) {
  const { slug } = await params;
  const h = hotelOf(slug);
  if (!h) notFound();
  const c = countryOf(h.country);

  return (
    <div>
      <section className="relative overflow-hidden bg-ink text-white">
        <SafeImg src={h.image} alt={h.name} className="absolute inset-0 h-full w-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
        <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <Link href="/hotels" className="text-sm text-white/60 hover:text-gold">← All hotels</Link>
          <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-gold">{c.flag} {h.city}, {c.name} · {h.type}</p>
          <h1 className="font-display mt-1 text-5xl font-semibold">{h.name}</h1>
          <p className="mt-4 max-w-2xl text-white/75">{h.description}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href={`/book?hotel=${h.slug}`} className="rounded-full bg-gold px-6 py-2.5 text-sm font-bold text-ink hover:bg-gold-dark">Book this hotel</Link>
            <a href={h.mapsUrl} target="_blank" rel="noreferrer" className="rounded-full border border-white/30 px-6 py-2.5 text-sm font-bold hover:border-gold hover:text-gold">Directions</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <h2 className="font-display text-3xl font-semibold text-ink">Rooms &amp; suites</h2>
        <p className="mt-1 text-sm text-foreground/60">Starting rates per room per night in {c.currency}. Your exact rate depends on dates. {h.taxNote}</p>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {h.rooms.map((r) => (
            <article key={r.slug} id={r.slug} className="flex scroll-mt-24 flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
              <SafeImg src={r.image} alt={r.name} className="h-48 w-full object-cover" />
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-2xl font-semibold text-ink">{r.name}</h3>
                <ul className="mt-2 space-y-1 text-sm text-foreground/65">
                  <li className="flex gap-2"><BedDouble className="mt-0.5 size-4 text-gold-dark" /> {r.beds} · {r.sqm} m²</li>
                  <li className="flex gap-2"><Users className="mt-0.5 size-4 text-gold-dark" /> Up to {r.maxGuests} guests · {r.view}</li>
                </ul>
                <ul className="mt-3 space-y-1 text-sm text-foreground/75">{r.includes.map((i) => <li key={i} className="flex gap-2"><Check className="mt-0.5 size-4 shrink-0 text-gold-dark" /> {i}</li>)}</ul>
                <div className="mt-auto flex items-center justify-between gap-3 pt-5">
                  <span className="font-semibold text-ink">{money(r.usd, h, true)}<span className="text-sm font-normal text-foreground/55"> / night</span></span>
                  <Link href={`/book?hotel=${h.slug}&room=${r.slug}`} className="rounded-full bg-ink px-4 py-1.5 text-sm font-bold text-white hover:bg-ink-soft">Book</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-semibold text-ink">Facilities</h2>
            <ul className="mt-4 grid gap-2 text-sm sm:grid-cols-2">{h.facilities.map((f) => <li key={f} className="flex gap-2"><Sparkles className="mt-0.5 size-4 shrink-0 text-gold" /> {f}</li>)}</ul>
            {h.spa && <p className="mt-4 rounded-xl bg-sand px-4 py-3 text-sm text-foreground/75">{h.spa}</p>}
          </div>
          <div>
            <h2 className="font-display text-3xl font-semibold text-ink">Dining</h2>
            <ul className="mt-4 space-y-3">
              {h.dining.map((d) => (
                <li key={d.name} className="flex gap-3 text-sm">
                  <Utensils className="mt-0.5 size-4 shrink-0 text-gold-dark" />
                  <span><span className="font-semibold text-ink">{d.name}</span> — {d.cuisine}<br /><span className="text-foreground/60">{d.hours}{d.note ? ` · ${d.note}` : ""}</span></span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-semibold text-ink">Good to know</h2>
          <ul className="mt-4 space-y-3 text-sm text-foreground/75">
            <li className="flex gap-2"><Clock className="mt-0.5 size-4 shrink-0 text-gold-dark" /> Check-in from {h.checkIn}, check-out by {h.checkOut} ({h.timezone})</li>
            <li className="flex gap-2"><Plane className="mt-0.5 size-4 shrink-0 text-gold-dark" /> {h.airport.name}, {h.airport.distance}. Private transfer {money(h.airport.transferUsd, h)} one way. {h.airport.note}</li>
            <li className="flex gap-2"><Car className="mt-0.5 size-4 shrink-0 text-gold-dark" /> {h.parking}</li>
            <li className="flex gap-2"><Dog className="mt-0.5 size-4 shrink-0 text-gold-dark" /> {h.pets}</li>
            <li className="flex gap-2"><Receipt className="mt-0.5 size-4 shrink-0 text-gold-dark" /> {h.taxNote}</li>
            <li className="flex gap-2"><Globe2 className="mt-0.5 size-4 shrink-0 text-gold-dark" /> Our team speaks {h.languages.join(", ")}</li>
          </ul>
          <Link href="/policies" className="mt-4 inline-block text-sm font-bold text-ink hover:text-gold-dark">Cancellation, deposits &amp; children →</Link>
        </div>
        <div>
          <h2 className="font-display text-3xl font-semibold text-ink">Contact the hotel</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2"><MapPin className="mt-0.5 size-4 shrink-0 text-gold-dark" /> <a href={h.mapsUrl} target="_blank" rel="noreferrer" className="hover:underline">{h.address}</a></li>
            <li className="flex gap-2"><Phone className="mt-0.5 size-4 shrink-0 text-gold-dark" /> {h.phone}</li>
            <li className="flex gap-2"><MessageCircle className="mt-0.5 size-4 shrink-0 text-gold-dark" /> WhatsApp {h.whatsapp}</li>
            <li className="flex gap-2"><Mail className="mt-0.5 size-4 shrink-0 text-gold-dark" /> {h.email}</li>
          </ul>
        </div>
      </section>

      <section className="bg-sand py-12">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2 className="font-display text-3xl font-semibold text-ink">Our team&apos;s local tips</h2>
            <Link href={`/explore?hotel=${h.slug}`} className="text-sm font-bold text-ink hover:text-gold-dark">More in {h.city} →</Link>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {h.localTips.map((t) => (
              <div key={t.name} className="rounded-2xl bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-gold-dark">{t.kind} · {t.distance}</p>
                <p className="mt-1 font-semibold text-ink">{t.name}</p>
                <p className="mt-1 text-sm text-foreground/65">{t.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-5 py-12 sm:grid-cols-3 sm:px-8">
        {h.gallery.map((g, i) => <SafeImg key={g} src={g} alt={`${h.name} ${i + 1}`} className="h-56 w-full rounded-2xl object-cover" />)}
      </section>
    </div>
  );
}
