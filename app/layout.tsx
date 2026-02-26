import "./globals.css";
import { Inter, Anton } from "next/font/google";
import { ReactLenis } from "@/utils/lenis";
import "lenis/dist/lenis.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LenisScrollToTop from "@/utils/lenis-scroll-to-top";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-anton",
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
          <footer>
            <Footer />
          </footer>
        </body>
      </ReactLenis>
    </html>
  );
}
