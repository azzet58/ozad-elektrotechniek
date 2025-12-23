import "./globals.css";
import { Inter, Anton } from "next/font/google";
import { ReactLenis } from "@/utils/lenis";
import "lenis/dist/lenis.css";

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
        <body className={`font-sans antialiased`}>
          <main>{children}</main>
        </body>
      </ReactLenis>
    </html>
  );
}
