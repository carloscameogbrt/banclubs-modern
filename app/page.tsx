import Image from "next/image";
import ContactForm from "./components/ContactForm";
import CookieBanner from "./components/CookieBanner";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";

const focusItems = [
  {
    title: "Divulgamos",
    description:
      "Impulsamos los clubs como un complemento diversificador en las carteras de los ahorradores privados."
  },
  {
    title: "Formamos",
    description: "Transferimos metodologías profesionales para analizar, invertir y acompañar proyectos."
  },
  {
    title: "Creamos y llevamos",
    description:
      "Utilizamos procesos rigurosos y eficientes, apoyados en tecnología de última generación, compatibles con portfolio único, pledge fund, SPV y otros modelos de inversión."
  },
  {
    title: "Activamos la participación voluntaria de los Socios",
    description:
      "Aseguramos que los miembros de los clubs se impliquen de forma voluntaria en actividades clave como la toma de decisiones de inversión, la estrategia o el apoyo a las participadas."
  }
];

const numbers = [
  { label: "M€ invertidos", value: "16" },
  { label: "Empresas financiadas", value: "400" },
  { label: "Clubes creados y llevados", value: "7" },
  { label: "Años de experiencia", value: "13" }
];

const news = [
  {
    image: "/news/nazari.png",
    title: "Presentación de Nazarí Ventures",
    date: "04 dic 2025",
    description: "El nuevo club de inversión en startups en Granada.",
    href: "https://www.linkedin.com/posts/banclubs_granada-granada-innvierte-activity-7402652863027482624-MBNk"
  },
  {
    image: "/news/oeca.png",
    title: "Jornada OECA – Inversión en startups",
    date: "17 nov 2025",
    description: "Promoción de la inversión en startups con impacto en Asturias.",
    href: "https://www.linkedin.com/posts/banclubs_onepager-inversi%C3%B3n-en-startups-con-foco-en-activity-7389402652314394624-Y9N9"
  },
  {
    image: "/news/ephyx.png",
    title: "Presentación de Ephyx Ventures",
    date: "17 sept 2025",
    description: "El nuevo club de inversión en startups en Málaga.",
    href: "https://www.linkedin.com/posts/upperyclub_startups-andalucaeda-inversiaejn-ugcPost-7376632077313708033-tr5j"
  },
  {
    image: "/news/invision.png",
    title: "Nacimiento de Invision Club Deal",
    date: "30 jul 2025",
    description: "El primer club de inversión en startups con impacto positivo en Baleares.",
    href: "https://www.linkedin.com/posts/banclubs_el-invision-club-deal-se-presenta-y-prepara-activity-7356391270828621826-JTW0"
  }
];

const clubLogos = [
  {
    name: "Pinama Ventures",
    src: "/clients/pinama-5.png",
    href: "https://www.pinama.es/p13"
  },
  {
    name: "Impact Angels",
    src: "/clients/pinama-2.png",
    href: "https://impactangelsbs.com/"
  },
  {
    name: "Pinama Club",
    src: "/clients/pinama.webp",
    href: "https://www.pinama.es/copia-de-p13-home"
  },
  {
    name: "The BANC",
    src: "/clients/pinama-1.png",
    href: "https://thebanc.io/"
  },
  {
    name: "Invision Club Deal",
    src: "/clients/invision-club-deal.png",
    href: "https://www.linkedin.com/posts/banclubs_el-invision-club-deal-se-presenta-y-prepara-activity-7356391270828621826-JTW0"
  },
  {
    name: "Core Angels Madrid",
    src: "/clients/pinama-4.png",
    href: "https://www.coreangels.com/angel-groups/madrid"
  },
  {
    name: "Pinama 23",
    src: "/clients/pinama.png",
    href: "https://www.pinama.es/pinama23"
  }
];

const investments = [
  {
    name: "Luda Partners",
    src: "/investments/luda.png",
    href: "https://ludapartners.com/"
  },
  {
    name: "PLD Space",
    src: "/investments/pldspace.png",
    href: "https://pldspace.com/es/"
  },
  {
    name: "IMU Biosciences",
    src: "/investments/imu-biosciences.webp",
    href: "https://www.imubiosciences.com/"
  },
  {
    name: "Biohope",
    src: "/investments/biohope.png",
    href: "https://biohope.eu/"
  },
  {
    name: "Singularu",
    src: "/investments/singularu.jpg",
    href: "https://singularu.com/"
  }
];

const partners = [
  {
    name: "Talianz",
    src: "/partners/talianz.png",
    href: "https://talianz.com/"
  },
  {
    name: "Diligo",
    src: "/partners/diligo.png",
    href: "https://www.diligo.io/"
  },
  {
    name: "Token City",
    src: "/partners/token-city.png",
    href: "https://www.token-city.com/es"
  },
  {
    name: "Innvierte",
    src: "/partners/innvierte.png",
    href: "https://www.cdti.es/programa-innvierte"
  }
];

export default function HomePage() {
  return (
    <main>
      <SiteHeader />

      <section id="inicio" className="section hero-surface relative overflow-hidden">
        <div className="animated-orb h-48 w-48 bg-gold/40 -left-10 top-6" />
        <div className="animated-orb delay h-64 w-64 bg-teal/20 right-10 top-24" />
        <div className="animated-orb slow h-40 w-40 bg-ink/10 left-1/2 bottom-10" />
        <div className="container-wide relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="eyebrow">PROSPERIDAD A TRAVÉS DE LA INNOVACIÓN</p>
            <h1 className="text-4xl font-semibold leading-tight text-ink md:text-5xl">
              Impulsa la innovación en tu territorio creando un Club de Business Angels con
              nosotros
            </h1>
            <p className="text-lg text-ink/70">
              Optimizamos los procesos administrativos de los clubs de inversión en startups
              para mitigar riesgos, maximizar retornos y potenciar el impacto económico y
              social.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-sand transition hover:bg-ink/90"
                href="#contacto"
              >
                Quiero más información
              </a>
              <a
                className="rounded-full border border-ink/20 px-6 py-3 text-sm font-semibold text-ink transition hover:border-ink/40"
                href="#que-hacemos"
              >
                Conoce nuestro trabajo
              </a>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              {numbers.map((item) => (
                <div
                  key={item.label}
                  className="glass-card rounded-2xl bg-white/70 p-4 shadow-card transition hover:-translate-y-1 hover:shadow-soft"
                >
                  <p className="text-2xl font-semibold text-ink">{item.value}</p>
                  <p className="text-xs uppercase tracking-wide text-ink/60">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-card rounded-3xl p-6 shadow-soft float-slow">
            <div className="rounded-2xl bg-ink p-6 text-sand">
              <p className="text-sm uppercase tracking-[0.25em] text-sand/70">Te ayudamos</p>
              <h2 className="mt-4 text-3xl font-semibold">
                Llevanza profesionalizada de clubs de inversión en startups
              </h2>
              <p className="mt-4 text-sm text-sand/80">
                Desde la constitución hasta la última desinversión, con procesos adaptados a
                su modelo de funcionamiento.
              </p>
            </div>
            <div className="mt-6 space-y-4 text-sm text-ink/70">
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-gold" />
                <p>Llevanza completa del ciclo de inversión y desinversión.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-gold" />
                <p>Plataforma tecnológica para maximizar retornos y minimizar costes.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-gold" />
                <p>Equipo profesional con años de experiencia.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="que-hacemos" className="section bg-white/60 pattern-surface">
        <div className="container-wide grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div className="space-y-4">
            <p className="eyebrow">Qué hacemos</p>
            <h2 className="text-3xl font-semibold text-ink">
              Generamos prosperidad creando experiencias de inversión únicas a partir de un
              modelo colaborativo y profesionalizado
            </h2>
            <p className="text-ink/70">
              Prestamos servicios administrativos especializados para todas las fases del
              ciclo de vida de los clubs, desde su constitución hasta su liquidación.
            </p>
            <p className="text-ink/70">
              Nuestro objetivo es contribuir a crear prosperidad en los diferentes
              territorios generando, al mismo tiempo, retornos emocionales y financieros
              atractivos a los inversores.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
            {focusItems.map((item) => (
              <div
                key={item.title}
                className="glass-card flex h-full flex-col rounded-3xl bg-white/80 p-5 shadow-card transition hover:-translate-y-1 hover:shadow-soft"
              >
                <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm text-ink/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-wide grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-6">
            <p className="eyebrow">Cómo lo hacemos</p>
            <h2 className="text-3xl font-semibold text-ink">
              Valores sólidos, amplia experiencia, talento compartido, procesos eficientes y
              tecnología avanzada
            </h2>
            <p className="text-ink/70">
              Trabajamos con la integridad, la transparencia, el rigor y la colaboración como
              pilares de nuestras decisiones y actuaciones.
            </p>
            <p className="text-ink/70">
              Aplicamos nuestra experiencia de más de 13 años invirtiendo 16 millones de euros
              en más de 400 startups a todas las actividades de nuestros clubs, incluyendo el
              acceso a las mejores oportunidades de inversión por la presencia que mantenemos
              en el ecosistema innovador y nuestra sólida red de contactos.
            </p>
          </div>
          <div className="glass-card rounded-3xl bg-white/80 p-6 shadow-card">
            <p className="text-sm uppercase tracking-[0.25em] text-ink/60">Talento y procesos</p>
            <div className="mt-6 space-y-4 text-ink/70">
              <p>
                Compartimos el talento de nuestro equipo de especialistas entre los
                diferentes clubs que llevamos, garantizando la confidencialidad y evitando
                conflictos de interés.
              </p>
              <p>
                Seguimos con rigor procesos eficientes probados en múltiples clubs de
                inversión exitosos.
              </p>
              <p>
                Utilizamos tecnología avanzada para optimizar los resultados de cada uno de
                los clubs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre-nosotros" className="section pattern-surface">
        <div className="container-wide grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-4">
            <p className="eyebrow">Sobre nosotros</p>
            <h2 className="text-3xl font-semibold text-ink">
              Experiencia real, inversión en startups, apoyo a empresas participadas y
              llevanza de clubs
            </h2>
            <p className="text-ink/70">
              Contamos con una dilatada trayectoria en la inversión y acompañamiento de
              startups, y en la llevanza de clubs de business angels.
            </p>
            <p className="text-ink/70">
              Estamos expuestos directa o indirectamente a través de clubs de inversión y
              fondos de capital riesgo a más de 400 inversiones y hemos llevado múltiples
              proyectos de base tecnológica.
            </p>
          </div>
          <div className="rounded-3xl bg-ink p-8 text-sand shadow-soft">
            <h3 className="text-xl font-semibold text-sand">¿Qué nos avala?</h3>
            <p className="mt-3 text-sand/80">
              La combinación de experiencia, presencia en el ecosistema, procesos,
              tecnología y conocimiento financiero asegura nuestra capacidad de entregar
              servicios de calidad y de responder a la ambición de convertirnos en un
              agente dinamizador y de referencia dentro del ecosistema emprendedor-inversor
              nacional.
            </p>
            <a
              className="mt-6 inline-flex rounded-full border border-sand/40 px-5 py-2 text-sm font-semibold text-sand transition hover:border-sand/80"
              href="/equipo"
            >
              Ver más
            </a>
          </div>
        </div>
        <div className="container-wide mt-12 grid gap-4 sm:grid-cols-3 lg:grid-cols-7">
          {clubLogos.map((logo) => (
            <a
              key={logo.name}
              className="flex items-center justify-center rounded-2xl border border-ink/10 bg-white/90 p-4 shadow-card transition hover:-translate-y-1 hover:shadow-soft"
              href={logo.href}
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={160}
                height={64}
                className="h-10 w-auto object-contain"
              />
            </a>
          ))}
        </div>
      </section>

      <section className="section pattern-surface-dark text-sand">
        <div className="container-wide">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <p className="eyebrow text-sand/70">Nuestros números</p>
              <h2 className="text-3xl font-semibold text-sand">Resultados por encima de la media</h2>
              <p className="text-sand/80">
                Una trayectoria sólida con impacto en el ecosistema emprendedor.
              </p>
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {numbers.map((item) => (
              <div
                key={item.label}
                className="glass-card rounded-2xl bg-white/10 p-6 shadow-card transition hover:-translate-y-1"
              >
                <p className="text-3xl font-semibold text-sand">{item.value}</p>
                <p className="mt-2 text-sm text-sand/80">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white/60">
        <div className="container-wide grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <p className="eyebrow">Inversiones</p>
            <h2 className="text-3xl font-semibold text-ink">Algunas de nuestras inversiones</h2>
            <p className="text-ink/70">
              Diversificamos por sectores, etapas y geografías para construir carteras
              resilientes y con potencial de retorno.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {investments.map((item) => (
              <a
                key={item.name}
                className="flex items-center justify-between rounded-2xl border border-ink/10 bg-sand p-5 transition hover:-translate-y-1 hover:shadow-soft"
                href={item.href}
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={item.src}
                  alt={item.name}
                  width={180}
                  height={64}
                  className="h-9 w-auto object-contain"
                />
                <span className="text-xs text-ink/60">Ver más</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="partners" className="section pattern-surface relative overflow-hidden">
        <div className="animated-orb drift h-40 w-40 bg-gold/30 -left-10 top-10" />
        <div className="animated-orb delay h-52 w-52 bg-teal/15 right-6 top-16" />
        <div className="container-wide relative">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <p className="eyebrow">Partners y patrocinadores</p>
              <h2 className="text-3xl font-semibold text-ink">Construimos alianzas estratégicas</h2>
            </div>
            <p className="text-ink/70 md:max-w-md">
              Colaboramos con instituciones, corporates y redes de inversión para ampliar el
              alcance de cada club.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {partners.map((item) => (
              <a
                key={item.name}
                className="flex items-center justify-center rounded-2xl bg-white px-6 py-4 shadow-card transition hover:-translate-y-1 hover:shadow-soft"
                href={item.href}
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={item.src}
                  alt={item.name}
                  width={180}
                  height={64}
                  className="h-10 w-auto object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="noticias" className="section bg-ink text-sand">
        <div className="container-wide">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <p className="eyebrow text-sand/70">Noticias destacadas</p>
              <h2 className="text-3xl font-semibold">Sigue de cerca nuestro día a día</h2>
              <p className="text-sand/80">
                Jornadas, nuevos clubs, colaboraciones y los hitos más relevantes de nuestra
                actividad.
              </p>
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {news.map((item) => (
              <article key={item.title} className="rounded-2xl bg-sand/10 p-6">
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={520}
                    height={320}
                    className="h-40 w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>
                <p className="mt-4 text-xs uppercase tracking-[0.25em] text-sand/70">
                  {item.date}
                </p>
                <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm text-sand/80">{item.description}</p>
                <a
                  className="mt-5 inline-flex text-sm font-semibold text-sand"
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver más
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="section pattern-surface relative overflow-hidden">
        <div className="animated-orb drift h-44 w-44 bg-gold/25 left-6 top-10" />
        <div className="animated-orb delay h-56 w-56 bg-teal/15 right-4 top-4" />
        <div className="container-wide relative grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-4">
            <p className="eyebrow">¿Quieres saber cómo funciona?</p>
            <h2 className="text-3xl font-semibold text-ink">Agenda una llamada con nuestro equipo</h2>
            <p className="text-ink/70">
              Escríbenos para conocer más sobre cómo crear un Club de Business Angels en tu
              región. Estaremos encantados de estudiar tu caso.
            </p>
            <div className="rounded-2xl border border-ink/10 bg-white p-6">
              <p className="text-sm font-semibold text-ink">Contáctanos</p>
              <p className="mt-2 text-sm text-ink/70">partners@banclubs.com</p>
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
          <ContactForm />
        </div>
      </section>

      <SiteFooter />

      <CookieBanner />
    </main>
  );
}
