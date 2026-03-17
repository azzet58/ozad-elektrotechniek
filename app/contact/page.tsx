import type { Metadata } from "next";
import Contact from "./contact-client";

export const metadata: Metadata = {
  title: "Contact | Özad Elektrotechniek",
  description:
    "Neem contact op met Özad Elektrotechniek B.V. via ons contactformulier of WhatsApp. Gevestigd in Rotterdam.",
};

export default function Page() {
  return <Contact />;
}
