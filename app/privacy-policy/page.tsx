import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function PrivacyPolicy() {
  return (
    <div data-nav-theme="light" className="py-36">
      <div className="mx-auto max-w-[1700px] px-8">
        <Breadcrumb className="mb-6">
          <BreadcrumbList className="text-md">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Privacyverklaring</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="font-heading mb-36 text-7xl">Privacyverklaring</h1>
        <div className="mx-auto max-w-4xl space-y-24 text-2xl font-medium text-neutral-500">
          <section className="space-y-8">
            <p>
              Özad Elektrotechniek B.V., gevestigd te Rotterdam, is
              verantwoordelijk voor de verwerking van persoonsgegevens zoals
              weergegeven in deze privacyverklaring.
            </p>
            <ul className="list-inside list-disc">
              <p>Contactgegevens:</p>
              <li>
                <Link
                  className="text-blue-600 transition-colors hover:text-black"
                  href="mailto:info@ozadelektrotechniek.nl"
                >
                  info@ozadelektrotechniek.nl
                </Link>
              </li>
              <li>
                <Link
                  className="text-blue-600 transition-colors hover:text-black"
                  href="tel:31626324551"
                >
                  +31 6 26324551
                </Link>
              </li>
            </ul>
          </section>
          <section className="space-y-8">
            <h2 className="text-4xl font-bold text-black">
              Persoonsgegevens die wij verwerken
            </h2>
            <p>
              Özad Elektrotechniek B.V. verwerkt uw persoonsgegevens doordat u
              gebruik maakt van onze diensten en/of omdat u deze gegevens zelf
              aan ons verstrekt.
            </p>
            <ul className="list-inside list-disc">
              <p>
                Hieronder vindt u een overzicht van de persoonsgegevens die wij
                verwerken:
              </p>
              <li>Voor- en achternaam</li>
              <li>Adresgegevens</li>
              <li>Telefoonnummer</li>
              <li>E-mailadres</li>
              <li>Bankrekeningnummer</li>
            </ul>
          </section>
          <section className="space-y-8">
            <h2 className="text-4xl font-bold text-black">
              Bijzondere en/of gevoelige persoonsgegevens die wij verwerken
            </h2>
            <p>
              Onze website en/of dienst heeft niet de intentie gegevens te
              verzamelen over websitebezoekers die jonger zijn dan 16 jaar.
              Tenzij ze toestemming hebben van ouders of voogd. We kunnen echter
              niet controleren of een bezoeker ouder dan 16 is. Wij raden ouders
              dan ook aan betrokken te zijn bij de online activiteiten van hun
              kinderen, om zo te voorkomen dat er gegevens over kinderen
              verzameld worden zonder ouderlijke toestemming. Als u er van
              overtuigd bent dat wij zonder die toestemming persoonlijke
              gegevens hebben verzameld over een minderjarige, neem dan contact
              met ons op via{" "}
              <Link
                className="text-blue-600 transition-colors hover:text-black"
                href="mailto:info@ozadelektrotechniek.nl"
              >
                info@ozadelektrotechniek.nl
              </Link>
              , dan verwijderen wij deze informatie.
            </p>
          </section>
          <section className="space-y-8">
            <h2 className="text-4xl font-bold text-black">
              Met welk doel en op basis van welke grondslag wij persoonsgegevens
              verwerken
            </h2>
            <p>
              Özad Elektrotechniek B.V. verwerkt uw persoonsgegevens voor de
              volgende mogelijke doelen:
            </p>
            <ul className="list-inside list-disc">
              <li>Het leveren van de dienst</li>
              <li>Het afhandelen van uw betaling</li>
              <li>Verzenden van onze nieuwsbrief en/of reclamefolder</li>
              <li>
                U te kunnen bellen of e-mailen indien dit nodig is om onze
                dienstverlening uit te kunnen voeren
              </li>
              <li>
                U te informeren over wijzigingen van onze diensten en producten
              </li>
              <li>U de mogelijkheid te bieden een account aan te maken</li>
              <li>Om goederen en diensten bij u af te leveren</li>
            </ul>
            <p>
              Özad Elektrotechniek B.V. verwerkt ook persoonsgegevens als wij
              hier wettelijk toe verplicht zijn, zoals gegevens die wij nodig
              hebben voor onze belastingaangifte.
            </p>
          </section>
          <section className="space-y-8">
            <h2 className="text-4xl font-bold text-black">
              Geautomatiseerde besluitvorming
            </h2>
            <p>
              Özad Elektrotechniek B.V. neemt geen besluiten op basis van
              geautomatiseerde verwerkingen.
            </p>
          </section>
          <section className="space-y-8">
            <h2 className="text-4xl font-bold text-black">
              Hoe lang we persoonsgegevens bewaren
            </h2>
            <p>
              Özad Elektrotechniek B.V. bewaart uw persoonsgegevens niet langer
              dan strikt nodig is om de doelen te realiseren waarvoor uw
              gegevens worden verzameld.
            </p>
          </section>
          <section className="space-y-8">
            <h2 className="text-4xl font-bold text-black">
              Delen van persoonsgegevens met derden
            </h2>
            <p>
              Özad Elektrotechniek B.V. verkoopt uw gegevens niet aan derden en
              zal deze uitsluitend verstrekken indien dit nodig is voor de
              uitvoering van onze overeenkomst met u of om te voldoen aan een
              wettelijke verplichting. Met bedrijven die uw gegevens verwerken
              in onze opdracht, sluiten wij een bewerkersovereenkomst om te
              zorgen voor eenzelfde niveau van beveiliging en vertrouwelijkheid
              van uw gegevens. Özad Elektrotechniek B.V. blijft verantwoordelijk
              voor deze verwerkingen.
            </p>
          </section>
          <section className="space-y-8">
            <h2 className="text-4xl font-bold text-black">
              Cookies, of vergelijkbare technieken, die wij gebruiken
            </h2>
            <p>
              Özad Elektrotechniek B.V. gebruikt geen cookies of vergelijkbare
              technieken.
            </p>
          </section>
          <section className="space-y-8">
            <h2 className="text-4xl font-bold text-black">
              Gegevens inzien, aanpassen of verwijderen
            </h2>
            <p>
              U heeft het recht om uw persoonsgegevens in te zien, te corrigeren
              of te verwijderen. Daarnaast heeft u het recht om uw eventuele
              toestemming voor de gegevensverwerking in te trekken of bezwaar te
              maken tegen de verwerking van uw persoonsgegevens door Özad
              Elektrotechniek B.V. en heeft u het recht op
              gegevensoverdraagbaarheid. Dat betekent dat u bij ons een verzoek
              kunt indienen om de persoonsgegevens die wij van u beschikken in
              een computerbestand naar u of een ander, door u genoemde
              organisatie, te sturen.
            </p>
            <p>
              U kunt een verzoek tot inzage, correctie, verwijdering,
              gegevensoverdraging van uw persoonsgegevens of verzoek tot
              intrekking van uw toestemming of bezwaar op de verwerking van uw
              persoonsgegevens sturen naar{" "}
              <Link
                className="text-blue-600 transition-colors hover:text-black"
                href="mailto:info@ozadelektrotechniek.nl"
              >
                info@ozadelektrotechniek.nl
              </Link>
              .
            </p>
            <p>
              Om er zeker van te zijn dat het verzoek tot inzage door u is
              gedaan, vragen wij u een kopie van uw identiteitsbewijs met het
              verzoek mee te sturen. Maak in deze kopie uw pasfoto, MRZ (machine
              readable zone, de strook met nummers onderaan het paspoort),
              paspoortnummer en Burgerservicenummer (BSN) zwart. Dit ter
              bescherming van uw privacy. We reageren zo snel mogelijk, maar
              binnen vier weken, op uw verzoek.
            </p>
            <p>
              Özad Elektrotechniek B.V. wil u er tevens op wijzen dat u de
              mogelijkheid heeft om een klacht in te dienen bij de nationale
              toezichthouder, de Autoriteit Persoonsgegevens. Dat kan via de
              volgende link:{" "}
              <Link
                className="text-blue-600 transition-colors hover:text-black"
                href="https://autoriteitpersoonsgegevens.nl/nl/contact-met-de-autoriteit-persoonsgegevens/tip-ons"
              >
                https://autoriteitpersoonsgegevens.nl/nl/contact-met-de-autoriteit-persoonsgegevens/tip-ons
              </Link>
            </p>
          </section>
          <section className="space-y-8">
            <h2 className="text-4xl font-bold text-black">
              Hoe wij persoonsgegevens beveiligen
            </h2>
            <p>
              Özad Elektrotechniek B.V. neemt de bescherming van uw gegevens
              serieus en neemt passende maatregelen om misbruik, verlies,
              onbevoegde toegang, ongewenste openbaarmaking en ongeoorloofde
              wijziging tegen te gaan. Als u het idee heeft dat uw gegevens toch
              niet goed beveiligd zijn of er aanwijzingen zijn van misbruik,
              neem dan contact op via het{" "}
              <Link
                className="text-blue-600 transition-colors hover:text-black"
                href="/contact"
              >
                contactformulier
              </Link>{" "}
              of via{" "}
              <Link
                className="text-blue-600 transition-colors hover:text-black"
                href="mailto:info@ozadelektrotechniek.nl"
              >
                info@ozadelektrotechniek.nl
              </Link>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
