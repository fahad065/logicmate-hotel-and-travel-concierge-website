// Azura Hotels & Resorts — demo properties. Illustrative only: hotels, rooms,
// rates, addresses and phone numbers are made up to look like a real hotel group.

export type CountryCode = "AE" | "GB" | "US" | "AU" | "CA";

export interface Country {
  code: CountryCode;
  name: string;
  flag: string;
  currency: string;
  /** Local price = USD base × rate, rounded to `round`. */
  rate: number;
  round: number;
}

export const countries: Country[] = [
  { code: "AE", name: "United Arab Emirates", flag: "🇦🇪", currency: "AED", rate: 3.67, round: 5 },
  { code: "GB", name: "United Kingdom", flag: "🇬🇧", currency: "GBP", rate: 0.79, round: 1 },
  { code: "US", name: "United States", flag: "🇺🇸", currency: "USD", rate: 1, round: 1 },
  { code: "AU", name: "Australia", flag: "🇦🇺", currency: "AUD", rate: 1.53, round: 5 },
  { code: "CA", name: "Canada", flag: "🇨🇦", currency: "CAD", rate: 1.37, round: 5 },
];

export const countryOf = (code: CountryCode) => countries.find((c) => c.code === code)!;

export interface Room {
  slug: string;
  name: string;
  sqm: number;
  beds: string;
  maxGuests: number;
  view: string;
  /** Starting nightly rate in USD (rates change by date). */
  usd: number;
  includes: string[];
  image: string;
}

export interface Dining {
  name: string;
  cuisine: string;
  hours: string;
  note?: string;
}

export interface LocalTip {
  name: string;
  kind: "Eat" | "See" | "Shop" | "Beach" | "Outdoors" | "Family";
  distance: string;
  note: string;
}

export interface Hotel {
  slug: string;
  name: string;
  city: string;
  area: string;
  country: CountryCode;
  type: string;
  tagline: string;
  description: string;
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  timezone: string;
  checkIn: string;
  checkOut: string;
  airport: { name: string; distance: string; transferUsd: number; note: string };
  parking: string;
  languages: string[];
  facilities: string[];
  dining: Dining[];
  spa?: string;
  pets: string;
  taxNote: string;
  rooms: Room[];
  localTips: LocalTip[];
  image: string;
  gallery: string[];
  mapsUrl: string;
}

const img = (id: string, w = 1200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=60`;

const ROOM_A = img("photo-1582719508461-905c673771fd", 900);
const ROOM_B = img("photo-1590490360182-c33d57733427", 900);
const ROOM_C = img("photo-1611892440504-42a792e24d32", 900);
const ROOM_D = img("photo-1618773928121-c32242e63f39", 900);
const ROOM_E = img("photo-1631049307264-da0ec9d70304", 900);
const SUITE = img("photo-1578683010236-d716f9a3f461", 900);
const POOL = img("photo-1566073771259-6a8506099945");
const RESORT = img("photo-1520250497591-112f2f40a3f4");
const SPA = img("photo-1544161515-4ab6ce6db874");
const DINE = img("photo-1414235077428-338989a2e8c0");
const DINE2 = img("photo-1517248135467-4c7edcad34c4");

export const hotels: Hotel[] = [
  {
    slug: "dubai-palm",
    name: "Azura Palm Jumeirah",
    city: "Dubai",
    area: "Palm Jumeirah",
    country: "AE",
    type: "Beach resort",
    tagline: "A private beach, four pools and the Dubai skyline across the water",
    description: "Our flagship resort on the Palm's East Crescent: 312 rooms and suites, a 400-metre private beach, a kids' club and six restaurants — 25 minutes from Dubai Marina and 35 from Downtown.",
    address: "East Crescent, Palm Jumeirah, Dubai, UAE",
    phone: "+971 4 555 0300",
    whatsapp: "+971 50 555 0300",
    email: "palm@azura-hotels.example",
    timezone: "GST (UTC+4)",
    checkIn: "3:00 pm",
    checkOut: "12:00 pm",
    airport: { name: "Dubai International (DXB)", distance: "45 min", transferUsd: 95, note: "Private car for up to 3 guests; Dubai World Central (DWC) transfers also available." },
    parking: "Free valet parking for hotel guests",
    languages: ["English", "Arabic", "Russian", "Hindi", "French"],
    facilities: ["Private beach", "4 pools incl. adults-only", "Kids' club (4–12 yrs)", "Spa & hammam", "24-hour gym", "Water sports", "Free Wi-Fi", "Airport transfers"],
    dining: [
      { name: "Saffron Terrace", cuisine: "International breakfast & dinner buffet", hours: "6:30–11:00 am · 6:30–10:30 pm" },
      { name: "Marea", cuisine: "Mediterranean seafood, beachfront", hours: "12:30–11:00 pm", note: "Smart casual after 6 pm" },
      { name: "Layali", cuisine: "Lebanese & shisha terrace", hours: "6:00 pm–1:00 am" },
    ],
    spa: "Azura Spa — 10 treatment rooms, Moroccan hammam, couples' suite. 9:00 am–10:00 pm.",
    pets: "Pets aren't allowed (assistance dogs welcome).",
    taxNote: "Rates in AED include VAT and service charge; the Dubai Tourism Dirham fee (AED 20 per room per night) is paid at the hotel.",
    rooms: [
      { slug: "deluxe-sea-view", name: "Deluxe Sea View Room", sqm: 45, beds: "1 king or 2 queens", maxGuests: 3, view: "Sea & Dubai skyline", usd: 340, includes: ["Breakfast for 2", "Balcony", "Beach & pool access"], image: ROOM_A },
      { slug: "family-room", name: "Family Room", sqm: 60, beds: "1 king + 2 singles", maxGuests: 4, view: "Garden & pool", usd: 420, includes: ["Breakfast for 2 adults + 2 kids", "Kids' club access", "Welcome treats"], image: ROOM_B },
      { slug: "beach-suite", name: "One-Bedroom Beach Suite", sqm: 95, beds: "1 king + sofa bed", maxGuests: 4, view: "Direct beach view", usd: 690, includes: ["Breakfast", "Club lounge access", "Late check-out until 3 pm (on request)"], image: SUITE },
    ],
    localTips: [
      { name: "The View at The Palm", kind: "See", distance: "15 min drive", note: "Observation deck on level 52 — book sunset slots ahead." },
      { name: "Dubai Marina Walk", kind: "Eat", distance: "20 min drive", note: "Waterfront cafés and dinner cruises." },
      { name: "Aquaventure Waterpark", kind: "Family", distance: "10 min drive", note: "Our concierge sells discounted day passes." },
      { name: "Desert safari", kind: "Outdoors", distance: "Pick-up from the lobby", note: "Afternoon dune drive, camel ride and BBQ dinner — ask the concierge." },
    ],
    image: RESORT,
    gallery: [POOL, img("photo-1512453979798-5ea266f8880c"), DINE],
    mapsUrl: "https://maps.google.com/?q=East+Crescent+Palm+Jumeirah+Dubai",
  },
  {
    slug: "abu-dhabi-corniche",
    name: "Azura Corniche Abu Dhabi",
    city: "Abu Dhabi",
    area: "Corniche",
    country: "AE",
    type: "City & beach hotel",
    tagline: "Business on the Corniche, a beach club across the road",
    description: "A 220-room city hotel on the Corniche with its own beach club, a rooftop pool and meeting rooms for up to 300 — 10 minutes from the Louvre Abu Dhabi and the Grand Mosque is 20.",
    address: "Corniche Road West, Al Khalidiyah, Abu Dhabi, UAE",
    phone: "+971 2 555 0410",
    whatsapp: "+971 50 555 0410",
    email: "abudhabi@azura-hotels.example",
    timezone: "GST (UTC+4)",
    checkIn: "2:00 pm",
    checkOut: "12:00 pm",
    airport: { name: "Zayed International (AUH)", distance: "30 min", transferUsd: 70, note: "Private car for up to 3 guests." },
    parking: "Free self-parking; valet AED 50 a day",
    languages: ["English", "Arabic", "Hindi", "Tagalog"],
    facilities: ["Beach club (shuttle every 30 min)", "Rooftop pool", "Gym", "Meeting rooms & ballroom", "Business centre", "Free Wi-Fi", "Prayer room"],
    dining: [
      { name: "Corniche Kitchen", cuisine: "All-day dining & breakfast buffet", hours: "6:30 am–11:00 pm" },
      { name: "Dhow & Dates", cuisine: "Emirati & Arabic", hours: "12:00–11:00 pm" },
      { name: "Sky Lounge", cuisine: "Rooftop café & mocktails", hours: "4:00 pm–1:00 am" },
    ],
    pets: "Pets aren't allowed (assistance dogs welcome).",
    taxNote: "Rates in AED include VAT, service charge and Abu Dhabi municipality fees.",
    rooms: [
      { slug: "superior-city", name: "Superior City Room", sqm: 36, beds: "1 king or 2 singles", maxGuests: 2, view: "City", usd: 180, includes: ["Breakfast for 2", "Beach club access"], image: ROOM_C },
      { slug: "deluxe-corniche", name: "Deluxe Corniche View", sqm: 42, beds: "1 king", maxGuests: 3, view: "Sea & Corniche", usd: 230, includes: ["Breakfast for 2", "Beach club access"], image: ROOM_D },
      { slug: "executive-suite", name: "Executive Suite", sqm: 80, beds: "1 king + living room", maxGuests: 3, view: "Sea", usd: 420, includes: ["Breakfast", "Executive lounge", "Pressing of 2 items a day"], image: SUITE },
    ],
    localTips: [
      { name: "Louvre Abu Dhabi", kind: "See", distance: "10 min drive", note: "Closed Mondays; go late afternoon for the light under the dome." },
      { name: "Sheikh Zayed Grand Mosque", kind: "See", distance: "20 min drive", note: "Free entry; modest dress required — abayas provided for women." },
      { name: "Corniche Beach", kind: "Beach", distance: "Across the road", note: "Lifeguarded public beach with a family section." },
      { name: "Yas Island theme parks", kind: "Family", distance: "30 min drive", note: "Ferrari World, Warner Bros. World and Yas Waterworld." },
    ],
    image: img("photo-1542314831-068cd1dbfeeb"),
    gallery: [POOL, DINE2, SPA],
    mapsUrl: "https://maps.google.com/?q=Corniche+Road+West+Abu+Dhabi",
  },
  {
    slug: "london-kensington",
    name: "Azura Kensington",
    city: "London",
    area: "South Kensington",
    country: "GB",
    type: "Boutique city hotel",
    tagline: "A Victorian townhouse hotel, five minutes from the museums",
    description: "Ninety rooms across three white-stucco townhouses, a garden bar and afternoon tea — walk to the V&A, the Natural History Museum and Hyde Park, and the Tube is two minutes away.",
    address: "24 Queen's Gate Terrace, London SW7 5PF, UK",
    phone: "+44 20 7946 0520",
    whatsapp: "+44 7700 900520",
    email: "london@azura-hotels.example",
    timezone: "GMT/BST (UTC+0/+1)",
    checkIn: "3:00 pm",
    checkOut: "11:00 am",
    airport: { name: "Heathrow (LHR)", distance: "45 min by car", transferUsd: 110, note: "Or the Piccadilly line from Heathrow to Gloucester Road (about 40 min)." },
    parking: "No on-site parking; NCP car park 5 min walk (about £40 a day)",
    languages: ["English", "French", "Italian", "Arabic"],
    facilities: ["Garden bar", "Afternoon tea", "Small gym", "Library lounge", "Free Wi-Fi", "Step-free access & 4 accessible rooms", "Luggage storage"],
    dining: [
      { name: "The Garden Room", cuisine: "Breakfast & modern British", hours: "7:00–10:30 am · 6:00–10:00 pm" },
      { name: "Afternoon tea", cuisine: "Sandwiches, scones & cakes", hours: "Daily 1:00–5:00 pm", note: "Book 24 hours ahead" },
    ],
    pets: "Dogs up to 15 kg welcome (£30 a night, max 1 per room).",
    taxNote: "Rates in GBP include 20% VAT.",
    rooms: [
      { slug: "cosy-double", name: "Cosy Double", sqm: 16, beds: "1 double", maxGuests: 2, view: "Courtyard", usd: 260, includes: ["Free Wi-Fi", "Nespresso machine"], image: ROOM_E },
      { slug: "classic-king", name: "Classic King", sqm: 24, beds: "1 king", maxGuests: 2, view: "Street (Queen's Gate)", usd: 330, includes: ["Breakfast for 2", "Nespresso machine"], image: ROOM_A },
      { slug: "garden-junior-suite", name: "Garden Junior Suite", sqm: 38, beds: "1 king + sofa bed", maxGuests: 3, view: "Private garden terrace", usd: 520, includes: ["Breakfast", "Afternoon tea for 2", "Terrace"], image: SUITE },
    ],
    localTips: [
      { name: "Victoria and Albert Museum", kind: "See", distance: "5 min walk", note: "Free entry; Friday late openings." },
      { name: "Natural History Museum", kind: "Family", distance: "6 min walk", note: "Free; book a timed slot at weekends." },
      { name: "Hyde Park & Kensington Gardens", kind: "Outdoors", distance: "8 min walk", note: "Boat hire on the Serpentine in summer." },
      { name: "Harrods", kind: "Shop", distance: "12 min walk", note: "The food halls are worth the visit alone." },
    ],
    image: img("photo-1513635269975-59663e0ac1ad"),
    gallery: [ROOM_E, DINE2, img("photo-1529290130-4ca3753253ae")],
    mapsUrl: "https://maps.google.com/?q=Queen%27s+Gate+Terrace+London",
  },
  {
    slug: "new-york-tribeca",
    name: "Azura Tribeca",
    city: "New York",
    area: "Tribeca",
    country: "US",
    type: "Design hotel",
    tagline: "Loft-style rooms and a rooftop bar over Lower Manhattan",
    description: "A converted 1910 warehouse with 140 loft rooms, a rooftop bar with Hudson River views and a neighbourhood restaurant — walk to SoHo, the 9/11 Memorial and the Hudson River Park.",
    address: "85 Hudson Street, New York, NY 10013, USA",
    phone: "+1 (212) 555-0630",
    whatsapp: "+1 (917) 555-0630",
    email: "newyork@azura-hotels.example",
    timezone: "ET (UTC−5/−4)",
    checkIn: "4:00 pm",
    checkOut: "11:00 am",
    airport: { name: "JFK", distance: "50–70 min", transferUsd: 120, note: "Private car for up to 3 guests; Newark (EWR) and LaGuardia (LGA) also available." },
    parking: "Valet $75 a night",
    languages: ["English", "Spanish", "Mandarin"],
    facilities: ["Rooftop bar", "Gym", "Bikes to borrow", "Free Wi-Fi", "24-hour front desk", "Pet friendly"],
    dining: [
      { name: "Hudson & Pine", cuisine: "American brasserie", hours: "7:00 am–11:00 pm" },
      { name: "The Roof", cuisine: "Cocktails & small plates", hours: "4:00 pm–1:00 am", note: "21+ after 8 pm; weather permitting" },
    ],
    pets: "Dogs welcome, no weight limit ($75 cleaning fee per stay).",
    taxNote: "Rates in USD exclude NYC hotel taxes (about 14.75% + $3.50 per night) and a $35 nightly destination fee (rooftop, bikes, Wi-Fi).",
    rooms: [
      { slug: "loft-queen", name: "Loft Queen", sqm: 22, beds: "1 queen", maxGuests: 2, view: "City", usd: 320, includes: ["Free Wi-Fi", "Rain shower"], image: ROOM_C },
      { slug: "loft-king", name: "Loft King", sqm: 30, beds: "1 king", maxGuests: 2, view: "Hudson Street", usd: 390, includes: ["Free Wi-Fi", "Rain shower", "Record player"], image: ROOM_D },
      { slug: "corner-studio", name: "Corner Studio", sqm: 45, beds: "1 king + sofa bed", maxGuests: 4, view: "Corner windows", usd: 560, includes: ["Kitchenette", "Lounge area"], image: SUITE },
    ],
    localTips: [
      { name: "9/11 Memorial & Museum", kind: "See", distance: "10 min walk", note: "Book museum tickets online; the memorial pools are free." },
      { name: "SoHo shopping", kind: "Shop", distance: "8 min walk", note: "Broadway and Prince Street for flagship stores." },
      { name: "Hudson River Park", kind: "Outdoors", distance: "3 min walk", note: "Pier 25 has mini golf and a playground." },
      { name: "Staten Island Ferry", kind: "See", distance: "15 min by subway", note: "Free ferry with Statue of Liberty views." },
    ],
    image: img("photo-1496442226666-8d4d0e62e6e9"),
    gallery: [ROOM_D, DINE, img("photo-1534430480872-3498386e7856")],
    mapsUrl: "https://maps.google.com/?q=85+Hudson+Street+New+York",
  },
  {
    slug: "sydney-harbour",
    name: "Azura Circular Quay",
    city: "Sydney",
    area: "Circular Quay",
    country: "AU",
    type: "Harbour hotel",
    tagline: "Opera House on one side, Harbour Bridge on the other",
    description: "A 180-room harbourside hotel with an infinity pool, the Opera House a five-minute walk away and ferries to Manly and Taronga Zoo from the wharf across the road.",
    address: "7 Alfred Street, Sydney NSW 2000, Australia",
    phone: "+61 2 5550 0740",
    whatsapp: "+61 412 555 740",
    email: "sydney@azura-hotels.example",
    timezone: "AEST/AEDT (UTC+10/+11)",
    checkIn: "3:00 pm",
    checkOut: "11:00 am",
    airport: { name: "Sydney Airport (SYD)", distance: "25 min", transferUsd: 75, note: "Or the Airport Link train to Circular Quay (about 20 min)." },
    parking: "Valet A$70 a night",
    languages: ["English", "Mandarin", "Japanese", "Italian"],
    facilities: ["Infinity pool", "Day spa", "Gym", "Harbour-view bar", "Free Wi-Fi", "Babysitting on request"],
    dining: [
      { name: "Quay Kitchen", cuisine: "Modern Australian & breakfast", hours: "6:30 am–10:30 pm" },
      { name: "Bridge Bar", cuisine: "Cocktails & oysters", hours: "3:00 pm–midnight" },
    ],
    spa: "Harbour Day Spa — 6 rooms, couples' suite. 9:00 am–8:00 pm.",
    pets: "Pets aren't allowed (assistance animals welcome).",
    taxNote: "Rates in AUD include 10% GST.",
    rooms: [
      { slug: "city-king", name: "City King", sqm: 30, beds: "1 king", maxGuests: 2, view: "City", usd: 250, includes: ["Free Wi-Fi", "Pool & gym"], image: ROOM_A },
      { slug: "harbour-view", name: "Harbour View King", sqm: 34, beds: "1 king or 2 queens", maxGuests: 3, view: "Harbour & Bridge", usd: 340, includes: ["Breakfast for 2", "Pool & gym"], image: ROOM_B },
      { slug: "opera-suite", name: "Opera House Suite", sqm: 70, beds: "1 king + sofa bed", maxGuests: 4, view: "Opera House & harbour", usd: 680, includes: ["Breakfast", "Evening drinks", "Late check-out (on request)"], image: SUITE },
    ],
    localTips: [
      { name: "Sydney Opera House tour", kind: "See", distance: "5 min walk", note: "One-hour guided tour daily; book ahead for the backstage tour." },
      { name: "Manly ferry", kind: "Beach", distance: "Wharf across the road", note: "30-minute ferry to Manly Beach — the best harbour views for the price of a ticket." },
      { name: "Taronga Zoo", kind: "Family", distance: "12 min ferry", note: "Take the Sky Safari cable car up from the wharf." },
      { name: "The Rocks Markets", kind: "Shop", distance: "4 min walk", note: "Weekends 10 am–5 pm." },
    ],
    image: img("photo-1506973035872-a4ec16b8e8d9"),
    gallery: [POOL, SPA, DINE2],
    mapsUrl: "https://maps.google.com/?q=7+Alfred+Street+Sydney",
  },
  {
    slug: "whistler-lodge",
    name: "Azura Whistler Lodge",
    city: "Whistler",
    area: "Whistler Village",
    country: "CA",
    type: "Mountain lodge",
    tagline: "Ski-in, ski-out in winter; lakes and bike trails in summer",
    description: "A 96-room timber lodge at the foot of Whistler Mountain with ski-in, ski-out access, outdoor hot tubs and a ski valet — and in summer, bike trails, lakes and the Peak 2 Peak gondola.",
    address: "4400 Village Gate Blvd, Whistler, BC V8E 1H1, Canada",
    phone: "+1 (604) 555-0850",
    whatsapp: "+1 (778) 555-0850",
    email: "whistler@azura-hotels.example",
    timezone: "PT (UTC−8/−7)",
    checkIn: "4:00 pm",
    checkOut: "11:00 am",
    airport: { name: "Vancouver International (YVR)", distance: "2 hr 15 min", transferUsd: 260, note: "Private SUV for up to 4 guests with ski bags; shared shuttles also run from YVR." },
    parking: "Underground parking C$45 a night",
    languages: ["English", "French", "Japanese"],
    facilities: ["Ski-in, ski-out", "Ski valet & lockers", "Outdoor pool & hot tubs", "Sauna", "Gym", "Free Wi-Fi", "Bike storage (summer)"],
    dining: [
      { name: "Timberline", cuisine: "Pacific Northwest & breakfast", hours: "7:00–11:00 am · 5:30–10:00 pm" },
      { name: "Après Bar", cuisine: "Fondue, burgers & local beer", hours: "2:00–11:00 pm" },
    ],
    spa: "Alpine Spa — massage and recovery treatments. 10:00 am–8:00 pm.",
    pets: "Dogs welcome in selected rooms (C$50 a night).",
    taxNote: "Rates in CAD exclude GST (5%), PST (8%), MRDT (3%) and the Whistler resort fee.",
    rooms: [
      { slug: "village-king", name: "Village King", sqm: 32, beds: "1 king", maxGuests: 2, view: "Village", usd: 280, includes: ["Free Wi-Fi", "Hot tubs & pool"], image: ROOM_E },
      { slug: "mountain-view-studio", name: "Mountain View Studio", sqm: 42, beds: "1 king + sofa bed", maxGuests: 4, view: "Ski runs", usd: 380, includes: ["Fireplace", "Kitchenette", "Ski valet"], image: ROOM_B },
      { slug: "two-bedroom-loft", name: "Two-Bedroom Loft", sqm: 95, beds: "1 king + 2 queens", maxGuests: 6, view: "Mountain", usd: 720, includes: ["Full kitchen", "Fireplace", "Ski valet", "Washer/dryer"], image: SUITE },
    ],
    localTips: [
      { name: "Peak 2 Peak Gondola", kind: "Outdoors", distance: "3 min walk to the base", note: "Year-round; summer sightseeing tickets include both mountains." },
      { name: "Lost Lake", kind: "Outdoors", distance: "15 min walk", note: "Swimming and trails in summer, cross-country skiing in winter." },
      { name: "Scandinave Spa", kind: "See", distance: "10 min drive", note: "Outdoor hot-cold baths in the forest — book ahead at weekends." },
      { name: "Whistler Village Stroll", kind: "Eat", distance: "On the doorstep", note: "Cafés, après bars and shops along the pedestrian village." },
    ],
    image: img("photo-1551524559-8af4e6624178"),
    gallery: [ROOM_E, img("photo-1551632811-561732d1e306"), DINE],
    mapsUrl: "https://maps.google.com/?q=Village+Gate+Blvd+Whistler",
  },
];

export const hotelOf = (slug: string | undefined | null) => hotels.find((h) => h.slug === slug);
export const defaultHotel = hotels[0];
export const roomOf = (hotel: Hotel | undefined, slug: string | undefined | null) => hotel?.rooms.find((r) => r.slug === slug);

/** A USD base price shown in the hotel's local currency, rounded to a clean amount. */
export function money(usd: number, h: Hotel, from = false): string {
  const c = countryOf(h.country);
  const local = Math.max(c.round, Math.round((usd * c.rate) / c.round) * c.round);
  const amount = new Intl.NumberFormat("en", { style: "currency", currency: c.currency, maximumFractionDigits: 0 }).format(local);
  return `${from ? "from " : ""}${amount}`;
}

export const fromRate = (h: Hotel) => Math.min(...h.rooms.map((r) => r.usd));
