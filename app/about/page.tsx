import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function About() {
  return (
    <div className="py-36">
      <div className="mx-auto max-w-[1700px] px-8">
        <Breadcrumb className="mb-6">
          <BreadcrumbList className="text-md">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Over ons</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="font-heading mb-36 text-8xl">
          Maak kennis met Özad Elektrotechniek
        </h1>
        <div className="mx-auto mb-36 max-w-4xl space-y-24 text-2xl font-medium text-neutral-500">
          <section className="space-y-8">
            <h2 className="text-4xl font-bold text-black">
              Focus op hoogwaardige diensten
            </h2>
            <p>
              Özad Elektrotechniek B.V. is opgericht met passie voor elektrische
              installaties, verlichtingssystemen en domotica oplossingen. Onze
              focus ligt op het leveren van hoogwaardige diensten en het bieden
              van op maat gemaakte oplossingen voor onze klanten. Met jarenlange
              ervaring en expertise zorgen wij voor betrouwbare en veilige
              elektrotechnische oplossingen. Ons team bestaat uit gepassioneerde
              professionals die streven naar perfectie in elk project dat we
              uitvoeren. Wij geloven in het leveren van kwaliteit en
              klanttevredenheid staat bij ons altijd voorop.
            </p>
          </section>
          <section className="space-y-8">
            <h2 className="text-4xl font-bold text-black">
              Ervaring die spreekt
            </h2>
            <p>
              We hebben inmiddels meer dan 1000 woningen opgeleverd, en elk
              daarvan voelt als een belangrijk hoogtepunt. Het is bijzonder om
              te zien hoe onze klanten steeds weer tevreden zijn met het
              resultaat. Of het nu gaat om een compleet nieuwe elektrische
              installatie in een bedrijfspand of een slimme oplossing in een
              woning, we zetten ons altijd 100% in.
            </p>
            <p>
              Bij elk project leren we weer iets nieuws, en die ervaring nemen
              we mee naar de volgende uitdaging. Wat ons het meest trots maakt?
              Dat klanten ons blijven aanbevelen vanwege onze betrouwbaarheid,
              kwaliteit en persoonlijke aanpak. Voor ons draait het niet alleen
              om techniek, maar vooral om het creëren van oplossingen waar
              mensen écht blij van worden.
            </p>
          </section>
        </div>
        <div className="grid grid-cols-2 gap-12">
          <div>
            <AspectRatio ratio={4 / 4}>
              <Image
                src="/images/about/over-ozad-elektrotechniek-2.webp"
                fill
                alt=""
                className="rounded-md object-cover"
                priority
              />
            </AspectRatio>
          </div>
          <div>
            <AspectRatio ratio={4 / 4}>
              <Image
                src="/images/about/over-ozad-elektrotechniek-3.webp"
                fill
                alt=""
                className="rounded-md object-cover"
                priority
              />
            </AspectRatio>
          </div>
        </div>
      </div>
    </div>
  );
}
