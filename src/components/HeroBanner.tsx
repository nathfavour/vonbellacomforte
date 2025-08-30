'use client';
import { useHero } from "@/hooks/useHero";

export default function HeroBanner() {
  const { title, subtitle, cta, backgroundUrl } = useHero();
  return (
    <section className="relative h-[60vh] md:h-[80vh] min-h-[480px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundUrl})` }}
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">{title}</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">{subtitle}</p>
        <a
          href={cta.href}
          className="bg-gray-900 text-white font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
        >
          {cta.label}
        </a>
      </div>
    </section>
  );
}
