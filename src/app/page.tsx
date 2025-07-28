import Hero from "@/app/Hero";
import Features from "@/app/Features";
import CTA from "@/app/CTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col items-center">
      <Hero />
      <Features />
      <CTA />
    </main>
  );
}
