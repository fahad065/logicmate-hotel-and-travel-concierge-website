# Azura Hotels & Resorts — Demo Hotel Website

A standalone, frontend-only Next.js demo site built to showcase the LogicMate
hotel chatbot widget on a realistic international hotel group — two hotels in
the UAE (a Palm Jumeirah beach resort and a city hotel on the Abu Dhabi
Corniche) and four abroad (London, New York, Sydney and a ski lodge in
Whistler), with room rates in each hotel's own currency. **This is not a real
business** — hotels, rooms, rates, addresses, phone numbers, offers and reviews
are illustrative, built to look like a real, live hotel site for demo purposes
only.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- `lucide-react` + `react-icons/fa` for icons
- `Playfair Display` (headings) + `Inter` (body) via `next/font/google`
- No backend, no database, no API calls — all content lives in `src/data/*.ts`.
  Forms (Book direct, Weddings & events, Contact) simulate a network request
  and show a success state, but submit nowhere. No booking is made and no
  payment is taken.

## Running locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Pages

- `/` — Home: hotels, book-direct benefits, offers, guest reviews
- `/hotels` — 6 hotels with type, area, check-in/out and airport
- `/hotels/<slug>` — One page per hotel: rooms with starting rates, facilities, dining, spa, check-in/out, airport transfer price, parking, pets, taxes, contact, local tips, photos
- `/rooms` — Every room with starting rates; `?hotel=<slug>` shows one hotel
- `/offers` — 5 offers with codes (Book Direct, Stay 4 Pay 3, Family, Honeymoon, Ski & Stay)
- `/explore` — Local guides and airport transfers per hotel; `?hotel=<slug>`
- `/events` — Weddings, meetings and group stays enquiry (mock submit)
- `/policies` — Check-in, deposits, cancellation, children, pets, smoking, taxes, accessibility + FAQ
- `/book` — Booking request (mock submit); `?hotel=<slug>`, `?room=<slug>`, `?offer=<code>` preselect
- `/about`, `/contact`

## Setting up the matching chatbot

To demo the bot answering about *this* hotel group, copy the content from
`src/data/` into the chatbot dashboard:

- **Knowledge Base tab** — one **Text + link** entry per room type in
  `hotels.ts`: question like "Tell me about the Deluxe Sea View Room at the
  Palm", answer with size, beds, maximum guests, view, starting rate and what's
  included, link = `https://<this-site>/hotels/<slug>#<room-slug>`. Attach room
  photos. Add entries for each hotel's dining, spa, parking, pets, taxes and
  airport transfer, one per offer in `offers.ts` (link `/offers`), one per
  policy and FAQ (link `/policies`) and one per hotel for local tips (link
  `/explore?hotel=<slug>`).
- **Locations tab** — one location per hotel (address, phone, check-in/out
  times as hours, and the facilities under "Facilities & amenities").
- **Overview → Room booking link** — `https://<this-site>/book`.

Useful demo questions: "Is breakfast included in the family room in Dubai?",
"Can I bring my dog to Sydney?" (no — London, New York and Whistler only),
"How much is a transfer from JFK?", "What's your cancellation policy?",
"I want to change my booking" (hand-off to the team), "Ski packages?".

## Adding the LogicMate chatbot widget

Open `src/app/layout.tsx` and find the commented placeholder inside `<head>`.
Paste the `<script>` snippet from your chatbot's **Channels → Website** tab
right there — it self-injects a floating chat bubble, nothing else on the
page needs to change.

## Notes

- Images are hotlinked from Unsplash and fall back to a branded gradient
  (`src/components/safe-img.tsx`) if a URL fails to load — check them on the
  machine you're demoing from.
- Rates are USD base prices converted with fixed illustrative exchange rates
  (`src/data/hotels.ts`), rounded to clean amounts.
