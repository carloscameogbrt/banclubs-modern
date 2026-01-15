"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Inicio", href: "/#inicio" },
    { label: "Qué hacemos", href: "/#que-hacemos" },
    { label: "Sobre nosotros", href: "/#sobre-nosotros" },
    { label: "Equipo", href: "/equipo" },
    { label: "Partners", href: "/#partners" },
    { label: "Noticias", href: "/#noticias" },
    { label: "Contacto", href: "/#contacto" }
  ];

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleNavigate = () => {
    setIsOpen(false);
  };

  return (
    <header className="border-b border-ink/10 bg-sand/80 backdrop-blur">
      <div className="container-wide flex items-center justify-between py-5">
        <Link className="flex items-center gap-4" href="/" onClick={handleNavigate}>
          <span className="rounded-2xl bg-white/70 px-3 py-2 shadow-sm">
            <Image
              src="/banclubs-logo.png"
              alt="BAnCLUBS"
              width={320}
              height={80}
              className="h-16 w-auto rounded-xl"
              priority
            />
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-ink/70 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} className="hover:text-ink" href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          className="hidden rounded-full border border-ink/20 px-4 py-2 text-sm font-semibold text-ink transition hover:border-ink/40 lg:inline-flex"
          href="/#contacto"
        >
          Agenda una llamada
        </Link>
        <button
          type="button"
          aria-label="Abrir menú"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="inline-flex items-center justify-center rounded-full border border-ink/20 p-2 text-ink transition hover:border-ink/40 lg:hidden"
          onClick={handleToggle}
        >
          <span className="sr-only">Abrir menú</span>
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {isOpen ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <>
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </>
            )}
          </svg>
        </button>
      </div>
      <div
        id="mobile-menu"
        className={`border-t border-ink/10 bg-sand/95 backdrop-blur lg:hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="container-wide flex flex-col gap-4 py-6 text-sm font-medium text-ink/80">
          {navItems.map((item) => (
            <Link
              key={item.href}
              className="hover:text-ink"
              href={item.href}
              onClick={handleNavigate}
            >
              {item.label}
            </Link>
          ))}
          <Link
            className="mt-2 inline-flex w-fit rounded-full border border-ink/20 px-4 py-2 text-sm font-semibold text-ink transition hover:border-ink/40"
            href="/#contacto"
            onClick={handleNavigate}
          >
            Agenda una llamada
          </Link>
        </div>
      </div>
    </header>
  );
}
