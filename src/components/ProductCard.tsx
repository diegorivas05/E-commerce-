"use client";

import Image from "next/image";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 flex flex-row items-center gap-4">
      {/* IMAGEN A LA IZQUIERDA USANDO NEXT/IMAGE */}
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 bg-gray-50 rounded-xl overflow-hidden">
        <Image
          src={product.urlImage}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100px, 112px"
          className="object-cover"
        />
      </div>

      {/* INFORMACIÓN Y NOMBRE A LA DERECHA */}
      <div className="flex-1 flex flex-col justify-between h-full py-1">
        <div>
          <span className="text-[10px] font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md uppercase tracking-wider">
            {product.category || "General"}
          </span>
          <h3 className="text-base font-bold text-gray-900 mt-1 line-clamp-1">
            {product.title}
          </h3>
          <p className="text-xs text-gray-500 line-clamp-2 mt-0.5">
            {product.description || "Producto de alta calidad para tu hogar."}
          </p>
        </div>

        <div className="flex items-center justify-between mt-3 pt-2 border-t border-gray-50">
          <span className="text-lg font-black text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={() => onAddToCart(product)}
            className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}