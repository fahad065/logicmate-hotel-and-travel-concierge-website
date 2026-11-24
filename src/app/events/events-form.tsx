"use client";

import { useState, type FormEvent } from "react";
import { Check, PartyPopper } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Field } from "@/components/field";
import { Success } from "@/components/success";
import { defaultHotel, hotels } from "@/data/hotels";

const venues = [
  { hotel: "Azura Palm Jumeirah", text: "Beach weddings for up to 300, a ballroom for 400 and two meeting rooms." },
  { hotel: "Azura Corniche Abu Dhabi", text: "Ballroom for 300 theatre-style, 6 meeting rooms and a business centre." },
  { hotel: "Azura Circular Quay", text: "Harbour-view terrace for 120 and a boardroom for 16." },
  { hotel: "London, New York & Whistler", text: "Private dining and group stays of 10+ rooms." },
];

export function EventsForm() {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({ type: "Wedding", hotel: defaultHotel.slug, date: "", guests: "", rooms: "", name: "", company: "", email: "", phone: "", details: "" });
  const set = <K extends keyof typeof form>(k: K, v: (typeof form)[K]) => setForm((f) => ({ ...f, [k]: v }));

  async function submit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    // Demo site — no backend. Simulates a network round trip only.
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setDone(true);
  }

  if (done) {
    return (
      <Success title="Enquiry sent" onReset={() => setDone(false)} resetLabel="Send another enquiry">
        Thanks, {form.name.split(" ")[0] || "there"} — our events team at {hotels.find((h) => h.slug === form.hotel)?.name} will send you options and a proposal within one working day.
      </Success>
    );
  }

  return (
    <div>
      <PageHero icon={PartyPopper} eyebrow="Weddings & events" title="Weddings, meetings & group stays" subtitle="Tell us what you're planning and our events team will come back with spaces, menus and a group rate." />
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[3fr_2fr]">
        <form onSubmit={submit} className="space-y-5 rounded-2xl border border-black/5 bg-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Type of event" required>
              <select value={form.type} onChange={(e) => set("type", e.target.value)} className="input">
                {["Wedding", "Meeting or conference", "Group stay (10+ rooms)", "Private dinner or party", "Other"].map((t) => <option key={t}>{t}</option>)}
              </select>
            </Field>
            <Field label="Hotel" required>
              <select value={form.hotel} onChange={(e) => set("hotel", e.target.value)} className="input">
                {hotels.map((h) => <option key={h.slug} value={h.slug}>{h.name}</option>)}
              </select>
            </Field>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            <Field label="Date"><input type="date" value={form.date} onChange={(e) => set("date", e.target.value)} className="input" /></Field>
            <Field label="Guests" required><input required type="number" min={1} value={form.guests} onChange={(e) => set("guests", e.target.value)} className="input" /></Field>
            <Field label="Rooms needed"><input type="number" min={0} value={form.rooms} onChange={(e) => set("rooms", e.target.value)} className="input" /></Field>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Full name" required><input required value={form.name} onChange={(e) => set("name", e.target.value)} className="input" /></Field>
            <Field label="Company (optional)"><input value={form.company} onChange={(e) => set("company", e.target.value)} className="input" /></Field>
            <Field label="Email" required><input required type="email" value={form.email} onChange={(e) => set("email", e.target.value)} className="input" /></Field>
            <Field label="Phone / WhatsApp" required><input required type="tel" value={form.phone} onChange={(e) => set("phone", e.target.value)} className="input" /></Field>
          </div>
          <Field label="Tell us more"><textarea rows={4} value={form.details} onChange={(e) => set("details", e.target.value)} placeholder="Budget, catering, set-up, timings…" className="input" /></Field>
          <button disabled={submitting} className="w-full rounded-full bg-ink py-3 text-sm font-bold text-white hover:bg-ink-soft disabled:opacity-60">{submitting ? "Sending…" : "Send enquiry"}</button>
        </form>
        <aside className="h-fit space-y-4 rounded-2xl bg-sand p-6">
          <h2 className="font-display text-2xl font-semibold text-ink">Our event spaces</h2>
          <ul className="space-y-3 text-sm text-foreground/75">{venues.map((v) => <li key={v.hotel} className="flex gap-2"><Check className="mt-0.5 size-4 shrink-0 text-gold-dark" /><span><strong className="text-ink">{v.hotel}:</strong> {v.text}</span></li>)}</ul>
        </aside>
      </section>
    </div>
  );
}
