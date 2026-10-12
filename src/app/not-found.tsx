import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Home, Mail } from "lucide-react";

export const metadata = {
  title: "404 - Página no encontrada · OKCODE",
  description:
    "La página que estás buscando no existe o ha sido movida. Regresa al inicio de OKCODE.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased flex flex-col justify-between selection:bg-blue-600 selection:text-white">
      {/* Header */}
      <header className="w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 group"
            aria-label="OKCODE - Inicio"
          >
            <Image
              src="/ok-logo-mark.webp"
              alt="OKCODE Logo"
              width={32}
              height={38}
              className="h-8 w-auto object-contain rounded-xs transition-transform duration-200 group-hover:scale-105"
              priority
            />
            <span className="font-mono font-bold tracking-tight text-slate-900 text-lg sm:text-xl">
              OKCODE
            </span>
            <span className="text-[11px] font-mono text-slate-400 font-normal">
              .es
            </span>
          </Link>

          <div className="inline-flex items-center gap-2 text-xs font-mono text-slate-500">
            <Link href="/" className="hover:text-slate-900 transition-colors">
              ES
            </Link>
            <span>·</span>
            <Link href="/en" className="hover:text-slate-900 transition-colors">
              EN
            </Link>
            <span>·</span>
            <Link href="/zh" className="hover:text-slate-900 transition-colors">
              ZH
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono text-slate-600">
            <span className="font-bold text-slate-900">404</span>
            <span>·</span>
            <span>Página no encontrada</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 font-sans">
            Esta página no existe o ha cambiado de ruta.
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            La dirección web que has introducido no corresponde a ningún documento
            activo en nuestro servidor editorial.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 text-white font-medium text-sm hover:bg-slate-800 transition-colors shadow-xs"
            >
              <Home className="w-4 h-4" />
              <span>Volver al inicio</span>
            </Link>

            <Link
              href="/#contacto"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-slate-100 text-slate-800 font-medium text-sm hover:bg-slate-200 transition-colors border border-slate-200/80"
            >
              <Mail className="w-4 h-4 text-slate-500" />
              <span>Contactar</span>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200/60 py-6 text-center text-xs font-mono text-slate-400">
        <p>OKCODE · Por el oficio de crear buen software · Madrid · 2026</p>
      </footer>
    </div>
  );
}
