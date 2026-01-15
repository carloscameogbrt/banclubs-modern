import Image from "next/image";

export default function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 bg-sand/80">
      <div className="container-wide flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-ink">BAnCLUBS</p>
          <div className="mt-1 flex flex-wrap gap-2 text-xs text-ink/60">
            <a
              className="hover:text-ink"
              href="/aviso-legal"
            >
              Aviso Legal
            </a>
            <span>–</span>
            <a
              className="hover:text-ink"
              href="/politica-de-privacidad"
            >
              Política Privacidad
            </a>
            <span>–</span>
            <a
              className="hover:text-ink"
              href="/politica-de-cookies"
            >
              Cookies
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-3 text-xs text-ink/60 md:items-end">
          <p>©2025 Todos los derechos reservados. Desarrollado por BAnCLUBS</p>
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-ink">Patrocina:</span>
            <a
              href="https://www.cdti.es/programa-innvierte"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/partners/innvierte.png"
                alt="Innvierte"
                width={120}
                height={40}
                className="h-6 w-auto object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
