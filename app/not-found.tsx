import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-36">
      <div className="mx-auto max-w-[1700px] px-8">
        <p className="mb-12">Breadcrumb</p>
        <h1 className="font-heading mb-36 px-12 text-8xl">
          Pagina niet gevonden
        </h1>
        <div className="mx-auto max-w-4xl space-y-8 text-2xl font-medium text-neutral-500">
          <p>Helaas, de pagina die u zocht is niet gevonden of beschikbaar.</p>
          <ul className="list-inside list-disc">
            <p>Ga direct naar:</p>
            <li>
              <Link
                className="text-blue-600 transition-colors hover:text-black"
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-blue-600 transition-colors hover:text-black"
                href="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
