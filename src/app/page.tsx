import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Features from "@/components/Features";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col items-center">
      <Hero />
      <ProductGrid />
      <Features />
      <CTA />
    </main>
  );
}
