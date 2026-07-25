"use client";

import Image from "next/image";
import { Product } from "@/types/product";

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: Product[];
  onUpdateQuantity: (id: number, delta: number) => void;
  onRemoveItem: (id: number) => void;
  onClearCart: () => void;
  onCheckout: () => void;
}

export function Cart({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onCheckout,
}: CartProps) {
  if (!isOpen) return null;

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-end">
      <div className="bg-white w-full max-w-md h-full flex flex-col shadow-2xl">
        {/* ENCABEZADO */}
        <div className="p-5 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">🛒</span>
            <h2 className="text-lg font-bold text-gray-900">
              Carrito de Compras
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 font-bold text-lg cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* LISTA DE PRODUCTOS */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-12 text-gray-400">
              <p className="text-4xl mb-2">🛍️</p>
              <p className="text-sm font-medium">Tu carrito está vacío</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100"
              >
                {/* IMAGEN A LA IZQUIERDA USANDO NEXT/IMAGE */}
                <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-white">
                  <Image
                    src={item.urlImage}
                    alt={item.title}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>

                {/* DETALLES A LA DERECHA */}
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-bold text-gray-900 truncate">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-0.5">
                    ${item.price.toFixed(2)} c/u
                  </p>

                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => onUpdateQuantity(item.id, -1)}
                      className="w-6 h-6 rounded-md bg-white border border-gray-200 text-gray-700 font-bold text-xs flex items-center justify-center hover:bg-gray-100 cursor-pointer"
                    >
                      -
                    </button>
                    <span className="text-xs font-bold text-gray-800">
                      {item.quantity || 1}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, 1)}
                      className="w-6 h-6 rounded-md bg-white border border-gray-200 text-gray-700 font-bold text-xs flex items-center justify-center hover:bg-gray-100 cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex flex-col items-end justify-between self-stretch">
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="text-red-500 hover:text-red-700 text-xs font-semibold cursor-pointer"
                  >
                    🗑️
                  </button>
                  <span className="text-sm font-black text-gray-900">
                    ${((item.quantity || 1) * item.price).toFixed(2)}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* PIE DEL CARRITO */}
        {cartItems.length > 0 && (
          <div className="p-5 border-t border-gray-100 bg-gray-50/50 space-y-3">
            <div className="flex justify-between items-center text-sm font-bold text-gray-900">
              <span>Total Estimado:</span>
              <span className="text-xl text-indigo-600">${total.toFixed(2)}</span>
            </div>

            <button
              onClick={onCheckout}
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-xl transition cursor-pointer shadow-md"
            >
              Proceder al Pago 💳
            </button>

            <button
              onClick={onClearCart}
              className="w-full py-2 bg-gray-100 hover:bg-red-50 text-gray-600 hover:text-red-600 text-xs font-semibold rounded-xl transition cursor-pointer"
            >
              Vaciar Carrito 🗑️
            </button>
          </div>
        )}
      </div>
    </div>
  );
}