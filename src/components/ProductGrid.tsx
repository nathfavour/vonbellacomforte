'use client';

import { useState, useEffect, useCallback } from 'react';
import ProductCard, { Product } from './ProductCard';

const SAMPLE_PRODUCTS: Product[] = [
  { id: 1, name: "Silk Midi Dress", price: 189, originalPrice: 249, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400", category: "Dresses" },
  { id: 2, name: "Leather Crossbody Bag", price: 129, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400", category: "Bags" },
  { id: 3, name: "Cashmere Sweater", price: 159, image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400", category: "Sweaters" },
  { id: 4, name: "Gold Chain Necklace", price: 89, image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400", category: "Jewelry" },
  { id: 5, name: "High-Waisted Jeans", price: 79, originalPrice: 99, image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400", category: "Denim" },
  { id: 6, name: "Pointed Toe Heels", price: 139, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400", category: "Shoes" },
  { id: 7, name: "Oversized Blazer", price: 199, image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400", category: "Blazers" },
  { id: 8, name: "Statement Earrings", price: 49, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400", category: "Jewelry" },
];

export default function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const loadMoreProducts = useCallback(() => {
    if (loading) return;
    
    setLoading(true);
    
    setTimeout(() => {
      const newProducts = SAMPLE_PRODUCTS.map((product) => ({
        ...product,
        id: product.id + (page - 1) * SAMPLE_PRODUCTS.length,
        name: `${product.name} ${page > 1 ? `#${page}` : ''}`.trim()
      }));
      
      setProducts(prev => [...prev, ...newProducts]);
      setPage(prev => prev + 1);
      setLoading(false);
    }, 800);
  }, [loading, page]);

  useEffect(() => {
    loadMoreProducts();
  }, [loadMoreProducts]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop
        >= document.documentElement.offsetHeight - 1000
      ) {
        loadMoreProducts();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadMoreProducts]);

  return (
    <section id="products" className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Collection</h2>
        <p className="text-gray-600">Discover luxury fashion and accessories curated just for you</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {loading && (
        <div className="flex justify-center items-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-pink-600"></div>
          <span className="ml-2 text-gray-600">Loading more products...</span>
        </div>
      )}
    </section>
  );
}