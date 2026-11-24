import Link from "next/link";
import { Compass, HeartHandshake, Leaf, Users } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SafeImg } from "@/components/safe-img";
import { hotels } from "@/data/hotels";

export const metadata = { title: "About — Azura Hotels & Resorts" };

const timeline = [
  { year: "2009", text: "Azura opens its first resort on Palm Jumeirah, Dubai." },
  { year: "2013", text: "Azura Corniche opens in Abu Dhabi, with our first beach club and ballroom." },
  { year: "2017", text: "Three Victorian townhouses become Azura Kensington, London." },
  { year: "2020", text: "A 1910 Tribeca warehouse reopens as Azura Tribeca, New York." },
  { year: "2023", text: "Azura Circular Quay in Sydney and Azura Whistler Lodge in Canada join the group." },
];

export default function AboutPage() {
  return (
    <div>
      <PageHero icon={Compass} eyebrow="Our story" title="About Azura" subtitle="An independent hotel group with one idea: every guest should feel like a regular, even on their first night." />
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="font-display text-3xl font-semibold text-ink">{hotels.length} hotels, one way of looking after you</h2>
          <p className="mt-4 leading-relaxed text-foreground/70">We started with one resort in Dubai and a promise that guests would never wait for an answer. Today our hotels sit on beaches, in old townhouses, in a converted warehouse and at the foot of a mountain — but every team works the same way.</p>
          <p className="mt-3 leading-relaxed text-foreground/70">Our concierges write the local guides themselves, and our reservations teams answer in your language, day or night.</p>
        </div>
        <SafeImg src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=60" alt="Azura hotel" className="h-80 w-full rounded-2xl object-cover" />
      </section>
      <section className="bg-white py-14">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 sm:px-8 md:grid-cols-3">
          {[
            { icon: HeartHandshake, title: "Genuine hospitality", text: "Teams who stay for years and remember how you like your coffee." },
            { icon: Leaf, title: "Lighter footprint", text: "No single-use plastic in rooms, refillable amenities and local suppliers first." },
            { icon: Users, title: "Part of the neighbourhood", text: "We hire locally and send guests to the independent places our teams love." },
          ].map((v) => (
            <div key={v.title} className="rounded-2xl border border-black/5 p-6">
              <v.icon className="size-7 text-gold-dark" />
              <h3 className="font-display mt-3 text-2xl font-semibold text-ink">{v.title}</h3>
              <p className="mt-2 text-sm text-foreground/65">{v.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-5 py-14 sm:px-8">
        <h2 className="font-display text-3xl font-semibold text-ink">Our journey</h2>
        <ol className="mt-6 space-y-4 border-l-2 border-gold/40 pl-6">
          {timeline.map((t) => <li key={t.year}><p className="font-display text-xl font-semibold text-gold-dark">{t.year}</p><p className="text-foreground/70">{t.text}</p></li>)}
        </ol>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/hotels" className="rounded-full bg-ink px-6 py-2.5 text-sm font-bold text-white hover:bg-ink-soft">Explore our hotels</Link>
          <Link href="/contact" className="rounded-full border border-black/15 px-6 py-2.5 text-sm font-bold text-ink hover:border-ink">Contact us</Link>
        </div>
      </section>
    </div>
  );
}
