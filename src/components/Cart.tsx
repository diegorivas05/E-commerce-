"use client";

import Image from "next/image";
import { CartItem } from "@/types/product";

interface CartProps {
  cart: CartItem[];
  onUpdateQuantity: (productId: number, newQuantity: number) => void;
  onRemoveItem: (productId: number) => void;
  onClearCart: () => void;
}

export const Cart = ({
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}: CartProps) => {
  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
        <span className="text-4xl block mb-2">🛒</span>
        <h3 className="text-lg font-bold text-gray-800">El carrito está vacío</h3>
        <p className="text-sm text-gray-500 mt-1">
          Agrega productos desde el catálogo para comenzar tu compra.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-6">
      <div className="flex items-center justify-between border-b border-gray-100 pb-4">
        <h2 className="text-xl font-bold text-gray-900">Tu Carrito de Compras</h2>
        <button
          onClick={onClearCart}
          className="text-xs font-semibold text-red-600 hover:text-red-800 transition-colors cursor-pointer"
        >
          Vaciar Carrito
        </button>
      </div>

      {/* Lista de productos en el carrito */}
      <div className="flex flex-col gap-4 max-h-[400px] overflow-y-auto pr-1">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between gap-3 border-b border-gray-50 pb-3"
          >
            <div className="relative w-14 h-14 flex-shrink-0">
              <Image
                src={item.urlImage}
                alt={item.title}
                fill
                className="object-cover rounded-md"
                sizes="56px"
              />
            </div>

            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-gray-800 truncate">
                {item.title}
              </h4>
              <p className="text-xs text-gray-500">
                ${item.price.toFixed(2)} c/u
              </p>
            </div>

            {/* Controles de cantidad */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                className="w-7 h-7 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold flex items-center justify-center transition-colors cursor-pointer"
              >
                -
              </button>
              <span className="text-sm font-semibold text-gray-800 w-5 text-center">
                {item.quantity}
              </span>
              <button
                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                className="w-7 h-7 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold flex items-center justify-center transition-colors cursor-pointer"
              >
                +
              </button>
            </div>

            {/* Subtotal y Eliminar */}
            <div className="text-right flex flex-col items-end gap-1">
              <span className="text-sm font-bold text-gray-900">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
              <button
                onClick={() => onRemoveItem(item.id)}
                className="text-xs text-red-500 hover:text-red-700 transition-colors cursor-pointer"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Resumen y Total */}
      <div className="border-t border-gray-100 pt-4 flex flex-col gap-3">
        <div className="flex justify-between items-center text-lg font-extrabold text-gray-900">
          <span>Total a Pagar:</span>
          <span className="text-indigo-600">${totalAmount.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};