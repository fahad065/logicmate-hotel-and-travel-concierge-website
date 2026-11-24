// Offers, policies and FAQs — illustrative only.

export interface Offer {
  slug: string;
  name: string;
  summary: string;
  benefits: string[];
  terms: string;
  code: string;
  image: string;
  /** Only at these hotels (otherwise every hotel). */
  onlyAt?: string[];
}

const img = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1000&q=60`;

export const offers: Offer[] = [
  { slug: "book-direct", name: "Book Direct & Save", summary: "Our best available rate, only on our own website.", benefits: ["10% off the best available rate", "Free upgrade when available at check-in", "Early check-in or late check-out (subject to availability)"], terms: "Any stay. Not combinable with other offers.", code: "DIRECT10", image: img("photo-1566073771259-6a8506099945") },
  { slug: "stay-longer", name: "Stay 4, Pay 3", summary: "Your fourth night is on us.", benefits: ["Every 4th night free", "Daily breakfast for 2"], terms: "Minimum 4 nights. Blackout dates apply around New Year and major events.", code: "STAY4", image: img("photo-1520250497591-112f2f40a3f4") },
  { slug: "family-escape", name: "Family Escape", summary: "Kids stay and eat free.", benefits: ["Up to 2 children under 12 stay free in a family room or suite", "Kids eat free from the kids' menu", "Welcome pack for little ones"], terms: "Minimum 2 nights. Family Room, suites or lofts only.", code: "FAMILY", image: img("photo-1551882547-ff40c63fe5fa") },
  { slug: "honeymoon", name: "Honeymoon & Anniversary", summary: "For two, with a little extra.", benefits: ["Sparkling wine or mocktails and cake on arrival", "60-minute couples' massage", "Late check-out until 2 pm"], terms: "Minimum 3 nights in a sea-view room or suite. Spa included where the hotel has one.", code: "LOVE", image: img("photo-1544161515-4ab6ce6db874"), onlyAt: ["dubai-palm", "sydney-harbour", "whistler-lodge"] },
  { slug: "ski-and-stay", name: "Ski & Stay", summary: "Lift tickets and a ski valet included.", benefits: ["2-day lift ticket per adult", "Ski valet and boot warmers", "Après fondue for 2"], terms: "Winter season only (late Nov – Apr). Minimum 3 nights.", code: "SKI", image: img("photo-1551524559-8af4e6624178"), onlyAt: ["whistler-lodge"] },
];

export interface Policy {
  title: string;
  body: string;
}

export const policies: Policy[] = [
  { title: "Check-in & check-out", body: "Check-in and check-out times differ by hotel (see each hotel's page). Early check-in and late check-out are free when the room is ready or not needed, otherwise 50% of the nightly rate until 6 pm. Please bring a photo ID or passport for every adult." },
  { title: "Deposits & payment", body: "We take a card at check-in to cover incidentals (about USD 100 a night, released at check-out). Prepaid rates are charged in full when you book. We accept major cards, Apple Pay and Google Pay; cash only in the UAE." },
  { title: "Cancellation", body: "Flexible rates: free cancellation until 2 pm local time, 48 hours before arrival; after that, or a no-show, the first night is charged. Prepaid and offer rates can't be refunded. Groups and festive dates have their own terms." },
  { title: "Children & extra beds", body: "Children under 12 stay free using existing beds. Cots are free; extra beds cost about USD 50 a night (not in every room). Guests under 18 must stay with an adult." },
  { title: "Pets", body: "London, New York and Whistler welcome dogs (see each hotel for fees). Dubai, Abu Dhabi and Sydney accept assistance animals only." },
  { title: "Smoking", body: "All rooms are non-smoking; a cleaning fee of USD 250 applies. Designated outdoor smoking areas are available at each hotel." },
  { title: "Taxes & fees", body: "Local taxes and fees differ by country and are shown on each hotel's page and confirmed before you pay." },
  { title: "Accessibility", body: "Every hotel has step-free access and accessible rooms. Tell us what you need when you book and we'll confirm the right room." },
];

export const faqs: Policy[] = [
  { title: "Is breakfast included?", body: "It depends on the room and rate — each room on our site lists what's included. You can add breakfast at the hotel." },
  { title: "Do you offer airport transfers?", body: "Yes, at every hotel by private car. Prices are on each hotel's page; ask when you book or message us with your flight number." },
  { title: "Can I get an invoice for my company or a visa letter?", body: "Yes. Ask our reservations team with your booking reference and company details. Visa support letters are available for confirmed, prepaid stays in the UAE." },
  { title: "How do I change or cancel my booking?", body: "Contact the hotel's reservations team by email or WhatsApp with your booking reference. Our chat assistant can pass on your request, but only our team can change a reservation." },
  { title: "Can day guests use the pool or spa?", body: "Spa guests can use the pool on the day of their treatment. Day passes are sold at Dubai and Abu Dhabi on weekdays." },
  { title: "Do you host weddings, meetings and group stays?", body: "Yes — every hotel takes group bookings of 10+ rooms, and Dubai, Abu Dhabi and Sydney host weddings and conferences. Use our Events page to send an enquiry." },
];
