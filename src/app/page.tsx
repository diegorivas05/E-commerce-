"use client";

import { useState } from "react";
import { productsData } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { Cart } from "@/components/Cart";
import { Product, CartItem } from "@/types/product";
import { toast } from "sonner";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todas");
  const [cart, setCart] = useState<CartItem[]>([]);

  const categories = [
    "Todas",
    ...Array.from(new Set(productsData.map((p) => p.category))),
  ];

  const filteredProducts =
    selectedCategory === "Todas"
      ? productsData
      : productsData.filter((p) => p.category === selectedCategory);

  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });

    toast.success(`"${product.title}" agregado al carrito`, {
      description: `Precio: $${product.price.toFixed(2)}`,
    });
  };

  const handleUpdateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: number) => {
    const itemToRemove = cart.find((item) => item.id === productId);
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    if (itemToRemove) {
      toast.info(`"${itemToRemove.title}" eliminado del carrito`);
    }
  };

  const handleClearCart = () => {
    if (cart.length === 0) return;
    setCart([]);
    toast.error("El carrito se ha vaciado");
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <header className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              E-Commerce Store
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Catálogo de productos disponibles ({productsData.length} ítems)
            </p>
          </div>

          <div className="flex items-center gap-2 bg-indigo-50 border border-indigo-100 px-4 py-2 rounded-xl">
            <span className="text-lg">🛒</span>
            <span className="text-sm font-semibold text-indigo-900">
              Carrito: {totalCartCount} productos
            </span>
          </div>
        </header>

        {/* Layout Principal: Catálogo a la izquierda, Carrito a la derecha */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Filtro por Categorías */}
            <section>
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Filtrar por Categoría
              </h2>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                      selectedCategory === cat
                        ? "bg-indigo-600 text-white shadow-sm"
                        : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </section>

            {/* Grid del Catálogo */}
            <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </section>
          </div>

          {/* Panel del Carrito */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <Cart
                cart={cart}
                onUpdateQuantity={handleUpdateQuantity}
                onRemoveItem={handleRemoveItem}
                onClearCart={handleClearCart}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}