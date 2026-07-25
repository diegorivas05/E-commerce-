"use client";

import { useState } from "react";
import { toast } from "sonner";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (user: { name: string; email: string }) => void;
}

export function AuthModal({
  isOpen,
  onClose,
  onLoginSuccess,
}: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim() || !password.trim() || (!isLogin && !name.trim())) {
      toast.warning("Campos incompletos", {
        description: "Por favor llena todos los campos solicitados.",
      });
      return;
    }

    if (password.length < 4) {
      toast.error("Contraseña muy corta", {
        description: "La contraseña debe tener al menos 4 caracteres.",
      });
      return;
    }

    const userName = isLogin ? email.split("@")[0] : name;
    const userData = { name: userName, email };

    // Guardar sesión
    localStorage.setItem("user_session", JSON.stringify(userData));
    onLoginSuccess(userData);

    // Alertas de UX con Sonner
    if (isLogin) {
      toast.success(`¡Bienvenido de nuevo, ${userName}! 👋`, {
        description: "Has iniciado sesión correctamente.",
      });
    } else {
      toast.success(`¡Cuenta creada con éxito! 🎉`, {
        description: `Bienvenido a Hogar & Muebles, ${userName}.`,
      });
    }

    // Resetear formulario y cerrar
    setName("");
    setEmail("");
    setPassword("");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white w-full max-w-md rounded-2xl p-6 sm:p-8 shadow-2xl relative border border-gray-100 animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 font-bold text-lg cursor-pointer"
        >
          ✕
        </button>

        <div className="text-center mb-6">
          <div className="text-3xl mb-1">{isLogin ? "🔐" : "📝"}</div>
          <h2 className="text-2xl font-black text-gray-900 tracking-tight">
            {isLogin ? "Iniciar Sesión" : "Crear Cuenta"}
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            {isLogin
              ? "Ingresa tus datos para continuar con tu compra"
              : "Regístrate para obtener una experiencia personalizada"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Nombre Completo
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ej. Diego Rivas"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-gray-900 placeholder:text-gray-400 text-sm focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
              />
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Correo Electrónico
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="correo@ejemplo.com"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-gray-900 placeholder:text-gray-400 text-sm focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-gray-900 placeholder:text-gray-400 text-sm focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-xl transition cursor-pointer shadow-md mt-2"
          >
            {isLogin ? "Entrar a mi Cuenta" : "Completar Registro"}
          </button>
        </form>

        <div className="text-center mt-5 pt-4 border-t border-gray-100">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-xs text-indigo-600 hover:underline font-semibold cursor-pointer"
          >
            {isLogin
              ? "¿No tienes cuenta? Regístrate aquí"
              : "¿Ya tienes cuenta? Inicia sesión"}
          </button>
        </div>
      </div>
    </div>
  );
}