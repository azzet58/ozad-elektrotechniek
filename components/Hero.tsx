import Image from "next/image";

export default function Hero() {
  return (
    <section
      data-nav-theme="dark"
      className="relative h-screen w-full overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-banner.webp"
          alt="Hero banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent"></div>
        <div className="mx-auto h-full max-w-[1700px] px-8">
          <div className="relative z-10 flex h-full items-end py-36">
            <h1 className="font-heading text-8xl leading-tight text-white">
              Uw <span className="text-blue-600">Betrouwbare</span> Partner{" "}
              <br />
              in Stroom & Techniek
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
