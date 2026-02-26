import Image from "next/image";

export default function Hero() {
  return (
    <section
      data-nav-theme="dark"
      className="relative h-[50vh] w-full overflow-hidden lg:h-screen"
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
        <div className="mx-auto h-full max-w-[1700px] px-4 md:px-8">
          <div className="relative z-10 flex h-full max-w-5xl items-end py-12 md:max-w-lg lg:max-w-5xl lg:py-36">
            <h1 className="font-heading text-4xl leading-tight text-white md:text-5xl lg:text-8xl">
              Uw <span className="text-blue-600">Betrouwbare</span> Partner in
              Stroom & Techniek
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
