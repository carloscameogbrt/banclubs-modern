import Link from "next/link";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

const founders = [
  { name: "Nacho Alonso", role: "Cofundador y Presidente" },
  { name: "Guillermo Soto", role: "Cofundador" },
  { name: "Andrea Alonso-Bernaola", role: "CEO" },
  { name: "Alejandro Soto", role: "CFO/Analista de Inversiones" },
  { name: "Carlos Cameo", role: "CTO/Consejero de Tecnología" }
];

const values = ["Integridad", "Colaboración", "Rigor", "Transparencia"];

export default function EquipoPage() {
  return (
    <main>
      <SiteHeader />

      <section className="section hero-surface relative overflow-hidden">
        <div className="animated-orb h-48 w-48 bg-gold/40 -left-10 top-6" />
        <div className="animated-orb delay h-64 w-64 bg-teal/20 right-10 top-24" />
        <div className="container-wide relative space-y-6">
          <p className="eyebrow">Sobre nosotros</p>
          <h1 className="text-4xl font-semibold leading-tight text-ink md:text-5xl">
            Equipo fundador con experiencia en inversión y gestión de clubs
          </h1>
          <p className="max-w-3xl text-lg text-ink/70">
            Contribuimos al fortalecimiento del ecosistema emprendedor-inversor
            español fomentando la creación y la óptima llevanza de clubs de inversión
            en startups en fases tempranas.
          </p>
        </div>
      </section>

      <section className="section pattern-surface">
        <div className="container-wide grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <p className="eyebrow">Misión</p>
            <p className="text-ink/70">
              Contribuir al fortalecimiento y desarrollo del ecosistema
              emprendedor-inversor español fomentando la creación y facilitando la
              óptima llevanza de clubs de inversión en startups en fases tempranas.
            </p>
            <p className="eyebrow pt-6">Visión</p>
            <p className="text-ink/70">
              Convertirnos en referente y principal catalizador de la proliferación
              de clubs de business angels a partir de la prestación de servicios
              profesionales reconocidos en el ecosistema por su calidad e impacto.
            </p>
          </div>
          <div className="rounded-3xl bg-ink p-8 text-sand shadow-soft">
            <p className="eyebrow text-sand/70">Valores</p>
            <ul className="mt-6 space-y-3 text-sm text-sand/80">
              {values.map((value) => (
                <li key={value} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-gold" />
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-white/60">
        <div className="container-wide">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <p className="eyebrow">Equipo fundador</p>
              <h2 className="text-3xl font-semibold text-ink">
                Un equipo comprometido con la excelencia operativa
              </h2>
            </div>
            <p className="text-ink/70 md:max-w-md">
              Experiencia en inversión, tecnología y finanzas para acompañar la
              creación y gestión de clubs de business angels.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {founders.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl bg-white p-6 shadow-card transition hover:-translate-y-1"
              >
                <p className="text-lg font-semibold text-ink">{member.name}</p>
                <p className="mt-2 text-sm text-ink/70">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section pattern-surface">
        <div className="container-wide grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <p className="eyebrow">¿Quieres saber más?</p>
            <h2 className="text-3xl font-semibold text-ink">
              Agenda una llamada con nuestro equipo gestor
            </h2>
            <p className="text-ink/70">
              Estaremos encantados de darte más información y estudiar tu caso
              concreto para ofrecerte una propuesta personalizada.
            </p>
            <Link
              className="inline-flex rounded-full bg-ink px-6 py-3 text-sm font-semibold text-sand transition hover:bg-ink/90"
              href="/#contacto"
            >
              Ir al formulario de contacto
            </Link>
          </div>
          <div className="rounded-3xl border border-ink/10 bg-white p-8 shadow-card">
            <p className="text-sm font-semibold text-ink">Contáctanos</p>
            <p className="mt-2 text-sm text-ink/70">contacto@banclubs.com</p>
            <p className="mt-4 text-sm font-semibold text-ink">Síguenos</p>
            <a
              className="mt-2 block text-sm text-ink/70"
              href="https://www.linkedin.com/company/banclubs/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
