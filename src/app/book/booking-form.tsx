"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { CalendarCheck } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Field } from "@/components/field";
import { Success } from "@/components/success";
import { defaultHotel, hotelOf, hotels, money, roomOf } from "@/data/hotels";
import { offers } from "@/data/offers";

const nightsBetween = (a: string, b: string) => {
  if (!a || !b) return 0;
  const n = Math.round((new Date(b).getTime() - new Date(a).getTime()) / 86_400_000);
  return n > 0 ? n : 0;
};

export function BookingForm() {
  const params = useSearchParams();
  const preHotel = hotelOf(params.get("hotel")) ?? defaultHotel;
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({
    hotel: preHotel.slug,
    room: roomOf(preHotel, params.get("room"))?.slug ?? "",
    checkIn: "", checkOut: "", adults: "2", children: "0",
    name: "", phone: "", email: "",
    code: params.get("offer") ?? "",
    transfer: "no", requests: "",
  });
  const set = <K extends keyof typeof form>(k: K, v: (typeof form)[K]) => setForm((f) => ({ ...f, [k]: v }));
  const hotel = hotelOf(form.hotel) ?? defaultHotel;
  const room = roomOf(hotel, form.room);
  const nights = nightsBetween(form.checkIn, form.checkOut);
  const guests = Number(form.adults) + Number(form.children);
  const tooMany = room ? guests > room.maxGuests : false;

  async function submit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    // Demo site — no backend and no payment. Simulates a network round trip only.
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setDone(true);
  }

  if (done) {
    return (
      <Success title="Booking request sent" onReset={() => setDone(false)} resetLabel="Make another request">
        Thanks, {form.name.split(" ")[0] || "there"} — your request{room ? <> for a <strong>{room.name}</strong></> : ""} at <strong>{hotel.name}</strong>
        {nights ? <> for {nights} night{nights > 1 ? "s" : ""}</> : ""} is with our reservations team. We&apos;ll confirm availability and your exact rate
        by email{form.phone ? " or WhatsApp" : ""} — usually within a few hours. Nothing is charged until you confirm. (Demo site — no booking was made.)
      </Success>
    );
  }

  return (
    <div>
      <PageHero icon={CalendarCheck} eyebrow="Book direct" title="Request your stay" subtitle="Tell us your dates and room. Our reservations team confirms availability and your exact rate — usually within a few hours." />
      <section className="mx-auto max-w-2xl px-5 py-14 sm:px-8">
        <form onSubmit={submit} className="space-y-5 rounded-2xl border border-black/5 bg-white p-6 shadow-sm sm:p-8">
          <Field label="Hotel" required>
            <select required value={form.hotel} onChange={(e) => setForm((f) => ({ ...f, hotel: e.target.value, room: "" }))} className="input">
              {hotels.map((h) => <option key={h.slug} value={h.slug}>{h.name} — {h.city}</option>)}
            </select>
          </Field>
          <Field label="Room">
            <select value={form.room} onChange={(e) => set("room", e.target.value)} className="input">
              <option value="">Not sure yet — suggest one</option>
              {hotel.rooms.map((r) => <option key={r.slug} value={r.slug}>{r.name} — {money(r.usd, hotel, true)} / night</option>)}
            </select>
          </Field>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Check-in" required><input required type="date" value={form.checkIn} onChange={(e) => set("checkIn", e.target.value)} className="input" /></Field>
            <Field label="Check-out" required><input required type="date" min={form.checkIn || undefined} value={form.checkOut} onChange={(e) => set("checkOut", e.target.value)} className="input" /></Field>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Adults" required>
              <select value={form.adults} onChange={(e) => set("adults", e.target.value)} className="input">{["1", "2", "3", "4", "5", "6"].map((n) => <option key={n}>{n}</option>)}</select>
            </Field>
            <Field label="Children (under 12)">
              <select value={form.children} onChange={(e) => set("children", e.target.value)} className="input">{["0", "1", "2", "3", "4"].map((n) => <option key={n}>{n}</option>)}</select>
            </Field>
          </div>
          {tooMany && <p className="rounded-lg bg-sand px-3 py-2 text-sm text-foreground/75">The {room!.name} sleeps up to {room!.maxGuests}. We&apos;ll suggest a larger room or two connecting rooms.</p>}
          {room && nights > 0 && (
            <p className="rounded-lg bg-sand px-3 py-2 text-sm text-foreground/75">
              {nights} night{nights > 1 ? "s" : ""} from about <strong>{money(room.usd * nights, hotel)}</strong> before any offer. {hotel.taxNote}
            </p>
          )}
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Full name" required><input required value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="As on your passport or ID" className="input" /></Field>
            <Field label="Phone / WhatsApp" required><input required type="tel" value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="Include your country code" className="input" /></Field>
          </div>
          <Field label="Email" required><input required type="email" value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="you@example.com" className="input" /></Field>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Offer code">
              <input list="offer-codes" value={form.code} onChange={(e) => set("code", e.target.value.toUpperCase())} placeholder="e.g. DIRECT10" className="input" />
              <datalist id="offer-codes">{offers.map((o) => <option key={o.code} value={o.code}>{o.name}</option>)}</datalist>
            </Field>
            <Field label="Airport transfer">
              <select value={form.transfer} onChange={(e) => set("transfer", e.target.value)} className="input">
                <option value="no">No, thanks</option>
                <option value="arrival">Arrival — {money(hotel.airport.transferUsd, hotel)}</option>
                <option value="both">Arrival &amp; departure — {money(hotel.airport.transferUsd * 2, hotel)}</option>
              </select>
            </Field>
          </div>
          <Field label="Special requests"><textarea rows={3} value={form.requests} onChange={(e) => set("requests", e.target.value)} placeholder="Arrival time, flight number, celebration, cot, accessibility needs…" className="input" /></Field>
          <button disabled={submitting} className="w-full rounded-full bg-ink py-3 text-sm font-bold text-white hover:bg-ink-soft disabled:opacity-60">{submitting ? "Sending…" : "Send booking request"}</button>
          <p className="text-center text-xs text-foreground/50">No payment now. We never ask for card details by chat or email — you pay through a secure link once we confirm.</p>
        </form>
      </section>
    </div>
  );
}
