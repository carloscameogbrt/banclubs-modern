import Image from "next/image";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

const founders = [
  {
    name: "Nacho Alonso",
    role: "Cofundador y Presidente",
    image: "/team/nacho-alonso.png",
    linkedin: "https://es.linkedin.com/in/nacho-alonso-cembrano-37309b4"
  },
  {
    name: "Guillermo Soto",
    role: "Cofundador",
    image: "/team/guillermo-soto.png",
    linkedin: "https://es.linkedin.com/in/guillermosotougalde"
  },
  {
    name: "Andrea Alonso-Bernaola",
    role: "CEO",
    image: "/team/andrea-alonso.png",
    linkedin: "https://es.linkedin.com/in/andrea-daniel-alonso-bernaola-ruiz-5a1a76176"
  },
  {
    name: "Alejandro Soto",
    role: "CFO/Analista de Inversiones",
    image: "/team/alejandro-soto.png",
    linkedin: "https://es.linkedin.com/in/ccameo"
  },
  {
    name: "Carlos Cameo",
    role: "CTO/Consejero de Tecnología",
    image: "/team/carlos-cameo.png",
    linkedin: "https://es.linkedin.com/in/ccameo"
  }
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
          <h1 className="text-4xl font-semibold leading-tight text-ink md:text-5xl">
            Sobre Nosotros
          </h1>
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
            <h3 className="text-xl font-semibold text-sand">Valores</h3>
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
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold text-ink">Equipo Fundador</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {founders.map((member) => (
              <a
                key={member.name}
                className="overflow-hidden rounded-2xl bg-white shadow-card transition hover:-translate-y-1"
                href={member.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <div className="h-64 w-full bg-sand">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={480}
                    height={360}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="p-6">
                  <p className="text-lg font-semibold text-ink">{member.name}</p>
                  <p className="mt-2 text-sm text-ink/70">{member.role}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section pattern-surface">
        <div className="container-wide grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-ink">¿Quieres saber más?</h2>
            <p className="text-ink/70">
              Escríbenos para agendar una llamada con un miembro de nuestro equipo
              gestor y estaremos encantados de darte más información y estudiar tu
              caso concreto para ofrecerte una propuesta personalizada.
            </p>
          </div>
          <div className="rounded-3xl border border-ink/10 bg-white p-8 shadow-card">
            <p className="text-sm font-semibold text-ink">Contáctanos</p>
            <p className="mt-2 text-sm text-ink/70">partners@banclubs.com</p>
            <p className="mt-4 text-sm font-semibold text-ink">Síguenos</p>
            <a
              className="mt-2 block text-sm text-ink/70"
              href="https://www.linkedin.com/company/banclubs/"
              target="_blank"
              rel="noreferrer"
            >
              Seguir
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
