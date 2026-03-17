import "./globals.css";
import { Inter, Anton } from "next/font/google";
import { ReactLenis } from "@/utils/lenis";
import "lenis/dist/lenis.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LenisScrollToTop from "@/utils/lenis-scroll-to-top";
import { FadeIn } from "@/components/animations/fade-in";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Özad Elektrotechniek | Elektro-installatiebedrijf Rotterdam",
  description:
    "Özad Elektrotechniek B.V. is een elektro-installatiebedrijf gevestigd in Rotterdam. Gespecialiseerd in nieuwbouw, utiliteitsbouw, renovatie en brandveiligheid.",
  keywords: [
    "elektricien Rotterdam",
    "elektro-installatie",
    "nieuwbouw elektra",
    "utiliteitsbouw",
    "brandveiligheid",
    "Özad Elektrotechniek",
  ],
  openGraph: {
    title: "Özad Elektrotechniek | Elektro-installatiebedrijf Rotterdam",
    description:
      "Gespecialiseerd in nieuwbouw, utiliteitsbouw, renovatie en brandveiligheid.",
    url: "https://www.ozadelektrotechniek.nl",
    siteName: "Özad Elektrotechniek",
    locale: "nl_NL",
    type: "website",
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-anton",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="nl"
      className={`${inter.variable} ${anton.variable}`}
      suppressHydrationWarning
    >
      <ReactLenis root>
        <LenisScrollToTop />
        <body className={`flex min-h-screen flex-col font-sans antialiased`}>
          <header>
            <Navbar />
          </header>
          <main className="grow">{children}</main>
          <footer className="bg-neutral-900">
            <FadeIn>
              <Footer />
            </FadeIn>
          </footer>
        </body>
      </ReactLenis>
    </html>
  );
}
