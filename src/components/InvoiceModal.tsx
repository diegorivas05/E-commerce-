"use client";

import { CartItem } from "@/types/product";
import { toast } from "sonner";

interface InvoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  user: { name: string; email: string } | null;
  onClearCart: () => void;
}

export function InvoiceModal({
  isOpen,
  onClose,
  cart,
  user,
  onClearCart,
}: InvoiceModalProps) {
  if (!isOpen) return null;

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.13; // IVA 13%
  const total = subtotal + tax;

  const handleConfirmPurchase = () => {
    toast.success("¡Compra realizada con éxito!", {
      description: "Tu factura ha sido generada y enviada a tu correo.",
    });
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl p-6 sm:p-8 overflow-hidden relative border border-gray-100">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 font-bold text-xl cursor-pointer"
        >
          ✕
        </button>

        <div className="text-center mb-6">
          <div className="text-4xl mb-2">🧾</div>
          <h2 className="text-2xl font-black text-gray-900 tracking-tight">
            Factura de Compra
          </h2>
          <p className="text-xs text-gray-500">
            Hogar & Muebles Store - Comprobante Digital
          </p>
        </div>

        {/* Datos del Cliente */}
        <div className="bg-gray-50 p-4 rounded-xl mb-6 text-xs text-gray-600 border border-gray-100 space-y-1">
          <p>
            <strong className="text-gray-800">Cliente:</strong>{" "}
            {user?.name || "Cliente General"}
          </p>
          <p>
            <strong className="text-gray-800">Correo:</strong>{" "}
            {user?.email || "N/A"}
          </p>
          <p>
            <strong className="text-gray-800">Fecha:</strong>{" "}
            {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Detalle de Productos */}
        <div className="max-h-48 overflow-y-auto mb-6 pr-1 divide-y divide-gray-100">
          {cart.map((item) => (
            <div
              key={item.id}
              className="py-2.5 flex justify-between items-center text-xs"
            >
              <div className="flex-1 pr-4">
                <p className="font-semibold text-gray-800">{item.name}</p>
                <p className="text-gray-400">
                  {item.quantity} x ${item.price.toFixed(2)}
                </p>
              </div>
              <span className="font-bold text-gray-900">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
            </div>
          ))}
        </div>

        {/* Resumen de Totales */}
        <div className="border-t border-gray-200 pt-4 space-y-2 mb-6 text-xs">
          <div className="flex justify-between text-gray-500">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-500">
            <span>IVA (13%)</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-base font-extrabold text-gray-900 pt-2 border-t border-gray-100">
            <span>Total a Pagar</span>
            <span className="text-emerald-600">${total.toFixed(2)}</span>
          </div>
        </div>

        {/* Botones de Acción */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="w-1/2 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-xs rounded-xl transition cursor-pointer"
          >
            Cancelar
          </button>
          <button
            onClick={handleConfirmPurchase}
            className="w-1/2 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl transition shadow-md cursor-pointer"
          >
            Confirmar Pago
          </button>
        </div>
      </div>
    </div>
  );
}