import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Disclaimer() {
  return (
    <div data-nav-theme="light" className="py-24 lg:py-36">
      <div className="mx-auto max-w-[1700px] px-4 md:px-8">
        <Breadcrumb className="mb-4 lg:mb-6">
          <BreadcrumbList className="text-xs lg:text-base">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Disclaimer</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="font-heading mb-12 text-4xl md:mb-24 md:text-5xl lg:mb-36 lg:text-7xl">
          Disclaimer
        </h1>
        <div className="mx-auto max-w-4xl space-y-12 font-medium text-neutral-500 md:px-12 lg:space-y-24 lg:px-0 lg:text-2xl">
          <section>
            <p>
              Op deze pagina vindt u de disclaimer van{" "}
              <Link
                className="text-blue-600 transition-colors hover:text-black"
                href="https://www.ozadelektrotechniek.nl"
              >
                https://www.ozadelektrotechniek.nl
              </Link>
              , zoals deze beschikbaar is gesteld door Özad Elektrotechniek
              B.V.. In deze disclaimer geven wij aan onder welk voorbehoud wij
              de informatie op onze website aan u aanbieden.
            </p>
          </section>
          <section className="space-y-4 lg:space-y-8">
            <h2 className="text-xl font-bold text-black md:text-2xl lg:text-4xl">
              Intellectueel eigendom
            </h2>
            <p>
              Het gebruik van de informatie op deze website is gratis zolang u
              deze informatie niet kopieert, verspreidt of op een andere manier
              gebruikt of misbruikt. U mag de informatie op deze website alleen
              hergebruiken volgens de regelingen van het dwingend recht.
            </p>
            <p>
              Zonder uitdrukkelijke schriftelijke toestemming van Özad
              Elektrotechniek B.V. is het niet toegestaan tekst, fotomateriaal
              of andere materialen op deze website her te gebruiken. Het
              intellectueel eigendom berust bij Özad Elektrotechniek B.V..
            </p>
          </section>
          <section className="space-y-4 lg:space-y-8">
            <h2 className="text-xl font-bold text-black md:text-2xl lg:text-4xl">
              Geen garantie op juistheid
            </h2>
            <p>
              Voor eventuele prijzen of andere informatie die op onze website
              staan, geldt dat wij streven naar een zo zorgvuldig mogelijke
              weergave van de realiteit en de bedoelde prijzen en informatie.
              Fouten die daarbij ontstaan en herkenbaar zijn als programmeer dan
              wel typefouten, vormen nooit een aanleiding om een contract dan
              wel overeenkomst met Özad Elektrotechniek B.V. te mogen claimen of
              te veronderstellen.
            </p>
            <p>
              Özad Elektrotechniek B.V. streeft naar een zo actueel mogelijke
              website. Mocht ondanks deze inspanningen de informatie van of de
              inhoud op deze website onvolledig en of onjuist zijn, dan kunnen
              wij daarvoor geen aansprakelijkheid aanvaarden.
            </p>
            <p>
              De informatie en/of producten op deze website worden aangeboden
              zonder enige vorm van garantie en/of aanspraak op juistheid. Wij
              behouden ons het recht voor om deze inhoud te wijzigen, te
              verwijderen of opnieuw te plaatsen zonder enige voorafgaande
              mededeling. Özad Elektrotechniek B.V. aanvaardt geen
              aansprakelijkheid voor enige informatie staat waarnaar wij via
              hyperlinks verwijzen.
            </p>
          </section>
          <section className="space-y-4 lg:space-y-8">
            <h2 className="text-xl font-bold text-black md:text-2xl lg:text-4xl">
              Wijzigingen
            </h2>
            <p>
              Mocht deze disclaimer wijzigen, dan vindt u de meest recente
              versie van de disclaimer van{" "}
              <Link
                className="text-blue-600 transition-colors hover:text-black"
                href="https://www.ozadelektrotechniek.nl"
              >
                https://www.ozadelektrotechniek.nl
              </Link>{" "}
              op deze pagina.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
