import Image from "next/image";
import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="border-b border-ink/10 bg-sand/80 backdrop-blur">
      <div className="container-wide flex items-center justify-between py-5">
        <Link className="flex items-center gap-4" href="/">
          <span className="rounded-xl bg-white/70 px-2 py-1 shadow-sm">
            <Image
              src="/banclubs-logo.png"
              alt="BAnCLUBS"
              width={260}
              height={64}
              className="h-14 w-auto rounded-lg"
              priority
            />
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-ink/70 lg:flex">
          <Link className="hover:text-ink" href="/#inicio">
            Inicio
          </Link>
          <Link className="hover:text-ink" href="/#que-hacemos">
            Qué hacemos
          </Link>
          <Link className="hover:text-ink" href="/#sobre-nosotros">
            Sobre nosotros
          </Link>
          <Link className="hover:text-ink" href="/equipo">
            Equipo
          </Link>
          <Link className="hover:text-ink" href="/#partners">
            Partners
          </Link>
          <Link className="hover:text-ink" href="/#noticias">
            Noticias
          </Link>
          <Link className="hover:text-ink" href="/#contacto">
            Contacto
          </Link>
        </nav>
        <Link
          className="hidden rounded-full border border-ink/20 px-4 py-2 text-sm font-semibold text-ink transition hover:border-ink/40 lg:inline-flex"
          href="/#contacto"
        >
          Agenda una llamada
        </Link>
      </div>
    </header>
  );
}
