"use client";

import { useState, type FormEvent } from "react";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Field } from "@/components/field";
import { Success } from "@/components/success";
import { defaultHotel, hotels } from "@/data/hotels";

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", hotel: defaultHotel.slug, topic: "A question before I book", reference: "", message: "" });
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
      <Success title="Message sent" onReset={() => setDone(false)} resetLabel="Send another message">
        Thanks, {form.name.split(" ")[0] || "there"} — the team at {hotels.find((h) => h.slug === form.hotel)?.name} will reply within a few hours.
      </Success>
    );
  }

  return (
    <div>
      <PageHero icon={Mail} eyebrow="Get in touch" title="Contact us" subtitle="Questions before you book, changes to a booking, invoices or feedback — we're here around the clock." />
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[3fr_2fr]">
        <form onSubmit={submit} className="space-y-5 rounded-2xl border border-black/5 bg-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Full name" required><input required value={form.name} onChange={(e) => set("name", e.target.value)} className="input" /></Field>
            <Field label="Email" required><input required type="email" value={form.email} onChange={(e) => set("email", e.target.value)} className="input" /></Field>
            <Field label="Phone (optional)"><input type="tel" value={form.phone} onChange={(e) => set("phone", e.target.value)} className="input" /></Field>
            <Field label="Hotel">
              <select value={form.hotel} onChange={(e) => set("hotel", e.target.value)} className="input">
                {hotels.map((h) => <option key={h.slug} value={h.slug}>{h.name}</option>)}
              </select>
            </Field>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Topic">
              <select value={form.topic} onChange={(e) => set("topic", e.target.value)} className="input">
                {["A question before I book", "Change or cancel a booking", "Invoice or visa letter", "Lost property", "Feedback", "Careers"].map((t) => <option key={t}>{t}</option>)}
              </select>
            </Field>
            <Field label="Booking reference (if you have one)"><input value={form.reference} onChange={(e) => set("reference", e.target.value)} placeholder="e.g. AZ-48213" className="input" /></Field>
          </div>
          <Field label="Message" required><textarea required rows={5} value={form.message} onChange={(e) => set("message", e.target.value)} className="input" /></Field>
          <button disabled={submitting} className="w-full rounded-full bg-ink py-3 text-sm font-bold text-white hover:bg-ink-soft disabled:opacity-60">{submitting ? "Sending…" : "Send message"}</button>
        </form>
        <aside className="space-y-4">
          {hotels.map((h) => (
            <div key={h.slug} className="rounded-2xl bg-sand p-5 text-sm">
              <p className="font-display text-xl font-semibold text-ink">{h.name}</p>
              <p className="mt-1 flex gap-2"><Phone className="mt-0.5 size-4 text-gold-dark" /> {h.phone}</p>
              <p className="flex gap-2"><MessageCircle className="mt-0.5 size-4 text-gold-dark" /> {h.whatsapp}</p>
            </div>
          ))}
          <p className="flex gap-2 text-sm text-foreground/70"><Mail className="mt-0.5 size-4 text-gold-dark" /> stay@azura-hotels.example</p>
        </aside>
      </section>
    </div>
  );
}
