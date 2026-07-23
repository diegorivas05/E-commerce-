"use client";

import Image from "next/image";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 bg-white p-4 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
      {/* Imagen a la izquierda usando next/image */}
      <div className="relative w-28 h-28 flex-shrink-0">
        <Image
          src={product.urlImage}
          alt={product.title}
          fill
          className="object-cover rounded-lg"
          sizes="112px"
        />
      </div>

      {/* Información del producto a la derecha */}
      <div className="flex-1 text-left w-full">
        <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">
          {product.category}
        </span>
        <h3 className="text-lg font-bold text-gray-800 mt-1">{product.title}</h3>
        <p className="text-xs text-gray-500 line-clamp-2 my-1">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-3">
          <span className="text-xl font-black text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors cursor-pointer"
          >
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  );
};