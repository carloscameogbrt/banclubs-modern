export default function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 bg-sand/80">
      <div className="container-wide flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-ink">BAnCLUBS</p>
          <div className="mt-1 flex flex-wrap gap-2 text-xs text-ink/60">
            <a
              className="hover:text-ink"
              href="https://banclubs.com/aviso-legal/"
              target="_blank"
              rel="noreferrer"
            >
              Aviso Legal
            </a>
            <span>–</span>
            <a
              className="hover:text-ink"
              href="https://banclubs.com/politica-de-privacidad/"
              target="_blank"
              rel="noreferrer"
            >
              Política Privacidad
            </a>
            <span>–</span>
            <a
              className="hover:text-ink"
              href="https://banclubs.com/politica-de-cookies/"
              target="_blank"
              rel="noreferrer"
            >
              Cookies
            </a>
          </div>
        </div>
        <p className="text-xs text-ink/60">
          ©2025 Todos los derechos reservados. Desarrollado por BAnCLUBS
        </p>
      </div>
    </footer>
  );
}
