import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  originalPrice?: number;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const isOnSale = product.originalPrice && product.originalPrice > product.price;

  return (
    <div className="group cursor-pointer">
      <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-3 relative">
        <Image 
          src={product.image} 
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {isOnSale && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            SALE
          </div>
        )}
      </div>
      <div className="space-y-1">
        <p className="text-sm text-gray-500 uppercase tracking-wide">{product.category}</p>
        <h3 className="font-medium text-gray-900 group-hover:text-pink-600 transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-gray-900">${product.price}</span>
          {isOnSale && (
            <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export type { Product };