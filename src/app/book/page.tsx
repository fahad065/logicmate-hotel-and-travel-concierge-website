import { Suspense } from "react";
import { BookingForm } from "./booking-form";

export const metadata = { title: "Book direct — Azura Hotels & Resorts" };

export default function BookPage() {
  return (
    <Suspense fallback={null}>
      <BookingForm />
    </Suspense>
  );
}
