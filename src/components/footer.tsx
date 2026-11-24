import Link from "next/link";
import { Compass, MapPin, Mail } from "lucide-react";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { countryOf, hotels } from "@/data/hotels";

export function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-4">
        <div>
          <div className="mb-3 flex items-center gap-2.5">
            <span className="flex size-8 items-center justify-center rounded-full bg-gold text-ink"><Compass className="size-4" /></span>
            <span className="font-display text-xl font-semibold text-white">Azura Hotels</span>
          </div>
          <p className="text-sm leading-relaxed text-white/55">
            {hotels.length} hotels and resorts — by the beach, in the city and in the mountains. Book direct for our best rate and
            the little extras.
          </p>
          <div className="mt-4 flex gap-3">
            <a href="#" aria-label="Instagram" className="text-white/55 hover:text-gold"><FaInstagram className="size-5" /></a>
            <a href="#" aria-label="Facebook" className="text-white/55 hover:text-gold"><FaFacebook className="size-5" /></a>
            <a href="#" aria-label="WhatsApp" className="text-white/55 hover:text-gold"><FaWhatsapp className="size-5" /></a>
          </div>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold">Plan your stay</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/rooms" className="hover:text-gold">Rooms &amp; rates</Link></li>
            <li><Link href="/offers" className="hover:text-gold">Offers</Link></li>
            <li><Link href="/explore" className="hover:text-gold">Local guides</Link></li>
            <li><Link href="/events" className="hover:text-gold">Weddings, meetings &amp; groups</Link></li>
            <li><Link href="/book" className="hover:text-gold">Book direct</Link></li>
            <li><Link href="/about" className="hover:text-gold">About us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold">Our hotels</h4>
          <ul className="space-y-2 text-sm">
            {hotels.map((h) => (
              <li key={h.slug}><Link href={`/hotels/${h.slug}`} className="flex items-center gap-2 hover:text-gold"><MapPin className="size-4 shrink-0 text-gold" />{h.name}, {countryOf(h.country).name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold">Reservations</h4>
          <p className="flex items-center gap-2 text-sm"><Mail className="size-4 text-gold" /> stay@azura-hotels.example</p>
          <p className="mt-3 text-xs leading-relaxed text-white/45">
            Rates shown are starting rates per room per night and change by date. Your exact rate, taxes and fees are confirmed
            before you pay.
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/35">
        © {new Date().getFullYear()} Azura Hotels &amp; Resorts. Demo site for illustrative purposes — not a real business.
      </div>
    </footer>
  );
}
