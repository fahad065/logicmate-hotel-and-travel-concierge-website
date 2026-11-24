import Link from "next/link";
import { ArrowRight, BadgePercent, CalendarCheck, Globe2, MessageCircle, Plane, Sparkles, Star } from "lucide-react";
import { SafeImg } from "@/components/safe-img";
import { countryOf, fromRate, hotels, money } from "@/data/hotels";
import { offers } from "@/data/offers";

const reviews = [
  { name: "Mariam K.", from: "Riyadh", stay: "Azura Palm Jumeirah", text: "The kids lived in the pool and the kids' club while we finally relaxed. The chat answered every question before we even landed." },
  { name: "Tom & Beth", from: "Manchester", stay: "Azura Whistler Lodge", text: "Ski valet, hot tubs, fondue — and they sorted our airport shuttle from Vancouver in two messages." },
  { name: "Ana P.", from: "São Paulo", stay: "Azura Tribeca", text: "Beautiful loft room, great rooftop. I asked in Portuguese at 2am and got an answer straight away." },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-white">
        <SafeImg src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1800&q=60" alt="Azura resort pool at sunset" className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/20" />
        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            <Sparkles className="size-3.5" /> {hotels.length} hotels · beach, city &amp; mountains
          </span>
          <h1 className="font-display max-w-2xl text-balance text-5xl font-semibold leading-[1.05] sm:text-6xl">Stay somewhere that feels like yours.</h1>
          <p className="mt-5 max-w-xl text-lg text-white/75">
            Beach resorts in Dubai and Abu Dhabi, townhouse and loft hotels in London and New York, a harbour hotel in Sydney and a
            ski lodge in Whistler — with our best rate when you book direct.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/book" className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3 text-sm font-bold text-ink hover:bg-gold-dark">
              <CalendarCheck className="size-4" /> Check rates &amp; book
            </Link>
            <Link href="/hotels" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3 text-sm font-bold text-white hover:border-gold hover:text-gold">
              Explore our hotels <ArrowRight className="size-4" />
            </Link>
          </div>
          <p className="mt-6 flex items-center gap-2 text-sm text-white/60"><MessageCircle className="size-4 text-gold" /> Questions about rooms, transfers or check-in? Ask our chat assistant — any language, any hour.</p>
        </div>
      </section>

      {/* Hotels */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">Our hotels</p>
          <h2 className="font-display mt-2 text-4xl font-semibold text-ink">Where would you like to wake up?</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {hotels.map((h) => (
            <Link key={h.slug} href={`/hotels/${h.slug}`} className="group overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-md">
              <div className="h-52 overflow-hidden"><SafeImg src={h.image} alt={h.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" /></div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-gold-dark">{countryOf(h.country).flag} {h.city} · {h.type}</p>
                <h3 className="font-display mt-1 text-2xl font-semibold text-ink">{h.name}</h3>
                <p className="mt-1 text-sm text-foreground/60">{h.tagline}</p>
                <p className="mt-3 text-sm font-semibold text-ink">{money(fromRate(h), h, true)} <span className="font-normal text-foreground/55">/ night</span></p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why book direct */}
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 md:grid-cols-3">
          {[
            { icon: BadgePercent, title: "Best rate, booked direct", text: "10% off our best available rate with code DIRECT10, plus a free upgrade when one's available at check-in." },
            { icon: Plane, title: "From the airport to your door", text: "Private transfers at every hotel. Send us your flight number and a driver meets you in arrivals." },
            { icon: Globe2, title: "We speak your language", text: "Our teams speak more than a dozen languages between them — and our chat assistant answers in yours, day or night." },
          ].map((f) => (
            <div key={f.title} className="rounded-2xl border border-black/5 p-6">
              <f.icon className="mb-3 size-7 text-gold-dark" />
              <h3 className="font-display text-2xl font-semibold text-ink">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/65">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Offers */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">Offers</p>
            <h2 className="font-display mt-2 text-4xl font-semibold text-ink">More for your stay</h2>
          </div>
          <Link href="/offers" className="inline-flex items-center gap-1 text-sm font-bold text-ink hover:text-gold-dark">All offers <ArrowRight className="size-4" /></Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {offers.slice(0, 3).map((o) => (
            <Link key={o.slug} href="/offers" className="group relative h-64 overflow-hidden rounded-2xl">
              <SafeImg src={o.image} alt={o.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
              <div className="absolute bottom-0 p-5 text-white">
                <h3 className="font-display text-2xl font-semibold">{o.name}</h3>
                <p className="text-sm text-white/75">{o.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-sand py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark">Guest reviews</p>
            <h2 className="font-display mt-2 text-4xl font-semibold text-ink">What our guests say</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {reviews.map((r) => (
              <figure key={r.name} className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="mb-3 flex gap-0.5 text-gold">{Array.from({ length: 5 }, (_, i) => <Star key={i} className="size-4 fill-current" />)}</div>
                <blockquote className="text-sm leading-relaxed text-foreground/75">&ldquo;{r.text}&rdquo;</blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-ink">{r.name}, {r.from} <span className="font-normal text-foreground/55">· {r.stay}</span></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-5 py-16 text-center sm:px-8">
        <h2 className="font-display text-4xl font-semibold text-ink">Planning a wedding, a conference or a group trip?</h2>
        <p className="mx-auto mt-3 max-w-xl text-foreground/65">Ballrooms, beach weddings, meeting rooms and group rates for 10 rooms or more.</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link href="/events" className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3 text-sm font-bold text-white hover:bg-ink-soft">Send an event enquiry</Link>
          <Link href="/explore" className="inline-flex items-center gap-2 rounded-full border border-black/15 px-7 py-3 text-sm font-bold text-ink hover:border-ink">See our local guides</Link>
        </div>
      </section>
    </div>
  );
}
