import Link from "next/link";
import { FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";
import Image from "next/image";

const servicesLinks = [{ title: "Alle vacatures", href: "/vacatures" }];

const projectsLinks = [{ title: "Alle projecten", href: "/projecten" }];

const companyLinks = [
  { title: "Over ons", href: "/over-ons" },
  { title: "Contact", href: "/contact" },
];

const certificateLogos = [
  { alt: "gpi Logo", Image: "/images/logos/certificates/gpi-logo.webp" },
  { alt: "SBB Logo", Image: "/images/logos/certificates/sbb-logo.webp" },
  { alt: "vca Logo", Image: "/images/logos/certificates/vca-logo.webp" },
];

const legacyLinks = [
  { title: "Disclaimer", href: "/disclaimer" },
  { title: "Privacyverklaring", href: "/privacyverklaring" },
];

const socialLinks = [
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/abdullah-aydemir-00a13a205/",
  },
  { icon: FaWhatsapp, href: "https://api.whatsapp.com/send?phone=31686297002" },
  { icon: FaInstagram, href: "https://instagram.com/ozadelektro" },
];

export default function Footer() {
  return (
    <div className="bg-neutral-900 pt-24 2xl:pt-48">
      <div className="mx-auto max-w-[1700px] px-4 md:px-8">
        <div className="justify-between gap-12 space-y-12 text-sm font-medium lg:flex 2xl:text-base">
          <div className="space-y-8 text-neutral-300 lg:space-y-8">
            <ul className="text-white">
              <li>+31 6 26324551</li>
              <li>info@ozadelektrotechniek.nl</li>
            </ul>
            <ul>
              <li>
                <b>KvK:</b> 94848181
              </li>
              <li>
                <b>BTW:</b> NL866912459B01
              </li>
            </ul>
            <ul className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href }) => (
                <li key={href}>
                  <Link href={href}>
                    <Icon className="size-7 transition-colors hover:text-white 2xl:size-8" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-12 text-sm font-medium text-neutral-300 md:grid-cols-3 2xl:text-base">
            <ul className="space-y-2">
              <p className="mb-4 font-bold text-white">Diensten</p>
              {servicesLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-white"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              <p className="mb-4 font-bold text-white">Projecten</p>
              {projectsLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-white"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              <p className="mb-4 font-bold text-white">Özad Elektrotechniek</p>
              {companyLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-white"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-24 items-center justify-between space-y-8 text-white md:mt-24 md:mb-12 md:flex md:space-y-0 2xl:mt-48">
          <div>
            <Link href="/">
              <Image
                src="/images/logos/ozad-elektrotechniek-logo-white.webp"
                width={175}
                height={175}
                alt="Özad Elektrotechniek Logo"
                priority
                className="w-24 2xl:w-36"
              />
            </Link>
          </div>
          <ul className="flex items-center gap-4 grayscale">
            {certificateLogos.map((item) => (
              <li key={item.alt}>
                <Image
                  src={item.Image}
                  width={100}
                  height={100}
                  alt={item.alt}
                  priority
                  className="w-16 2xl:w-24"
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-8 items-center justify-between space-y-4 border-t border-neutral-800 py-10 text-xs text-neutral-400 md:flex md:space-y-0 2xl:text-sm">
          <p>©{new Date().getFullYear()} Özad Elektrotechniek B.V.</p>
          <ul className="flex gap-6">
            {legacyLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-white"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
