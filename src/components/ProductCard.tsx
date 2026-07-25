"use client";

import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col justify-between hover:shadow-md transition">
      <div className="relative h-48 w-full bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-gray-700 text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm">
          {product.category}
        </span>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-gray-900 text-base mb-1 line-clamp-1">
            {product.name}
          </h3>
          <p className="text-gray-500 text-xs line-clamp-2 mb-4 leading-relaxed">
            {product.description}
          </p>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <div>
            <span className="text-xs text-gray-400 block">Precio</span>
            <span className="text-lg font-extrabold text-indigo-600">
              ${product.price.toFixed(2)}
            </span>
          </div>

          <button
            onClick={() => onAddToCart(product)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-xs px-4 py-2.5 rounded-xl transition cursor-pointer shadow-sm active:scale-95"
          >
            + Agregar
          </button>
        </div>
      </div>
    </div>
  );
}