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

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.13; // 13% IVA El Salvador
  const total = subtotal + tax;
  const invoiceNumber = `FAC-${Math.floor(100000 + Math.random() * 900000)}`;
  const currentDate = new Date().toLocaleDateString();

  const handleSendEmail = () => {
    toast.success("📧 ¡Factura enviada por correo con éxito!", {
      description: `Se ha enviado una copia a ${user?.email}`,
    });
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 font-bold"
        >
          ✕
        </button>

        {/* Encabezado de Factura */}
        <div className="border-b border-gray-200 pb-4 mb-4">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-bold text-gray-900">FACTURA DE COMPRA</h2>
              <p className="text-xs text-gray-500">Hogar & Muebles Store S.A. de C.V.</p>
            </div>
            <div className="text-right">
              <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded">
                {invoiceNumber}
              </span>
              <p className="text-xs text-gray-400 mt-1">{currentDate}</p>
            </div>
          </div>

          <div className="mt-4 bg-gray-50 p-3 rounded-lg text-xs">
            <p className="font-semibold text-gray-700">Cliente:</p>
            <p className="text-gray-600">{user?.name}</p>
            <p className="text-gray-600">{user?.email}</p>
          </div>
        </div>

        {/* Detalle de Productos */}
        <div className="mb-4">
          <h3 className="text-xs font-bold text-gray-500 uppercase mb-2">Detalle de Ítems</h3>
          <div className="divide-y divide-gray-100">
            {cart.map((item) => (
              <div key={item.id} className="py-2 flex justify-between text-xs">
                <div>
                  <p className="font-medium text-gray-800">{item.title}</p>
                  <p className="text-gray-400">
                    {item.quantity} x ${item.price.toFixed(2)}
                  </p>
                </div>
                <span className="font-semibold text-gray-800">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Totales */}
        <div className="border-t border-gray-200 pt-3 flex flex-col gap-1 text-xs mb-6">
          <div className="flex justify-between text-gray-600">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>IVA (13%):</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm font-bold text-indigo-900 border-t border-dashed pt-2 mt-1">
            <span>Total a Pagar:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        {/* Botón de Confirmación y Envío */}
        <button
          onClick={handleSendEmail}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl text-sm transition shadow-md flex items-center justify-center gap-2 cursor-pointer"
        >
          ✉️ Confirmar Compra y Enviar Factura por Correo
        </button>
      </div>
    </div>
  );
}