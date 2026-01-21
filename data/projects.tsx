type Project = {
  title: string;
  status?: string;
  description?: string;
  contractor?: string;
  client?: string;
  homes?: number;
  location?: string;
  term?: string;
  image: string;
  href: string;
  sections?: {
    heading?: string | null;
    paragraph?: string;
    list?: string[];
    images?: string[];
  }[];
};

export const projects: Project[] = [
  {
    title: "Canvas Living Brainpark",
    status: "In uitvoering",
    description: "Wij verzorgen gehele e- installatie.",
    contractor: "Waal",
    homes: 614,
    location: "Rotterdam",
    term: "2024 - heden",
    image:
      "/images/projects/canvas-living-brainpark/canvas-living-brainpark.webp",
    href: "/projects/canvas-living-brainpark",
    sections: [
      {
        heading: "Onze opdracht",
        paragraph: "Het verzorgen van de 614 tunnels elektrische installatie",
        list: [
          "614 tunnel installaties (stortwanden)",
          "614 woningen draad trekken / aflassen",
          "353 woningen metalstud afwerken",
        ],
        images: [
          "/images/projects/canvas-living-brainpark/canvas-living-brainpark-2.webp",
          "/images/projects/canvas-living-brainpark/canvas-living-brainpark-3.webp",
        ],
      },
    ],
  },
  {
    title: "Corantijn",
    status: "In uitvoering",
    description:
      "Wij verzorgen de gehele elektrische installatie op dit project.",
    homes: 176,
    location: "Leiden",
    term: "2025 - heden",
    image: "/images/projects/corantijn.webp",
    href: "/projects/corantijn",
    sections: [
      {
        heading: null,
        paragraph:
          "Aan de Paramaribo- en Corantijnstraat heeft Portaal drie portiekflats met 88 woningen in beheer. Portaal wil deze woningen slopen en hier minimaal 178 nieuwe huurappartementen voor terug bouwen. De huidige woningen zijn gebouwd in de jaren '60 en hebben constructieve gebreken. Ze zijn sterk verouderd. Op sommige punten (elektra, ventilatie, brandveiligheid) voldoen ze niet meer aan de huidige eisen. Ook is er geen lift aanwezig en kan de woonomgeving, door de sobere uitstraling van de flats, wel een flinke impuls gebruiken.",
      },
      {
        heading: "Duurzaamheid",
        paragraph:
          "Bij de ontwikkeling van de nieuwe huurappartementen ligt de focus op duurzaamheid en energie-efficiëntie. De nieuwe woningen worden uitgerust met moderne installaties zoals zonnepanelen, energiezuinige verwarmingssystemen en hoogwaardige isolatie. Hiermee wordt niet alleen voldaan aan de huidige milieueisen, maar dragen de appartementen ook bij aan een lagere energierekening voor bewoners en een kleinere ecologische voetafdruk. Dit sluit aan bij Portaal’s ambitie om toekomstbestendige en duurzame woonoplossingen te creëren.",
      },
    ],
  },
  {
    title: "Nieuw Kralingen",
    status: "Opgeleverd",
    description:
      "Wij hebben o.a. een groot deel van de elektrische installatie verzorgd.",
    contractor: "Heijmans & Era contoure",
    homes: 93,
    location: "Rotterdam",
    term: "2022 - 2024",
    image: "/images/projects/nieuw-kralingen/nieuw-kralingen.webp",
    href: "/projects/nieuw-kralingen",
    sections: [
      {
        heading: "Onze opdracht",
        paragraph:
          "Hierbij hebben wij de opdracht gekregen om de gehele elektrische installatie van 50 woningen met parkeergarage + autolift te verzorgen. Ook hebben we meegedraaid aan 43 koopwoningen.",
      },
    ],
  },
  {
    title: "SAWA",
    status: "In uitvoering",
    description:
      "Wij hebben de elektrische installatie van de modelwoningen gerealiseerd.",
    client: "ERA Contour & Nice Developers",
    homes: 93,
    location: "Rotterdam",
    term: "2023 - heden",
    image: "/images/projects/sawa.webp",
    href: "/projects/sawa",
    sections: [
      {
        heading: "Onze opdracht",
        paragraph:
          "Hierbij hebben wij de elektrische installatie van modelwoningen mogen realiseren voor kopers. Ook zijn onze monteurs betrokken bij het project.",
      },
    ],
  },
  {
    title: "Duwboot 22",
    status: "In uitvoering",
    description:
      "Wij verzorgen o.a. de elektrische installatie van spotlampen en lichtrails.",
    contractor: "Dura Vermeer",
    location: "Utrecht",
    term: "2024 - heden",
    image: "/images/projects/duwboot-22.webp",
    href: "/projects/duwboot-22",
    sections: [
      {
        heading: "Onze opdracht",
        list: [
          "350 spotlampen",
          "20 hanglampen",
          "Lichtrails voor de lampen",
          "Afgetakte lichtrails nalopen en corrigeren",
          "Kabels trekken",
        ],
      },
    ],
  },
];
