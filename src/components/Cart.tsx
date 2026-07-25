"use client";

import { CartItem } from "@/types/product";

interface CartProps {
  cart: CartItem[];
  onUpdateQuantity: (productId: number, newQuantity: number) => void;
  onRemoveItem: (productId: number) => void;
  onClearCart: () => void;
}

export function Cart({
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}: CartProps) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Tu Carrito de Compras</h2>
        {cart.length > 0 && (
          <button
            onClick={onClearCart}
            className="text-xs text-red-500 hover:underline cursor-pointer font-medium"
          >
            Vaciar Carrito
          </button>
        )}
      </div>

      {cart.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-4xl mb-2">🛒</p>
          <p className="text-gray-500 text-sm">El carrito está vacío</p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <div className="max-h-80 overflow-y-auto pr-1 flex flex-col gap-3">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100"
              >
                {/* Imagen del producto */}
                <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-200 shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&q=80";
                    }}
                  />
                </div>

                {/* Detalles */}
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-bold text-gray-800 truncate">
                    {item.name}
                  </h4>
                  <p className="text-xs text-gray-500">
                    ${item.price.toFixed(2)} c/u
                  </p>

                  {/* Botones de cantidad bien legibles */}
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      className="w-7 h-7 rounded-md bg-white border border-gray-300 flex items-center justify-center text-sm font-black text-gray-900 hover:bg-gray-100 active:scale-95 transition cursor-pointer shadow-xs"
                    >
                      -
                    </button>
                    <span className="text-xs font-bold text-gray-900 px-1">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      className="w-7 h-7 rounded-md bg-white border border-gray-300 flex items-center justify-center text-sm font-black text-gray-900 hover:bg-gray-100 active:scale-95 transition cursor-pointer shadow-xs"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Subtotal y Eliminar */}
                <div className="text-right shrink-0">
                  <p className="text-xs font-bold text-gray-900">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="text-[10px] text-red-500 hover:underline cursor-pointer font-medium mt-1 block"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-100 pt-4 flex justify-between items-center">
            <span className="font-bold text-gray-900">Total a Pagar:</span>
            <span className="text-xl font-black text-indigo-600">
              ${total.toFixed(2)}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}