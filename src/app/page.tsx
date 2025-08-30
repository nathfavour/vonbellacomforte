import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedProducts from "@/components/FeaturedProducts";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col">
      <Header />
      <HeroBanner />
      <CategoryGrid />
      <FeaturedProducts />
      <ProductGrid />
      <Newsletter />
      <Footer />
    </main>
  );
}
