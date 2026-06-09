import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import logoAsset from "@/assets/logo.asset.json";
import sopranoAsset from "@/assets/soprano.asset.json";
import flowers from "@/assets/flowers.png";
import heroImg from "@/assets/hero.jpg";
import laserImg from "@/assets/laser.jpg";
import facialImg from "@/assets/facial.jpg";
import bodyImg from "@/assets/body.jpg";
import { useLuxuryAnimations } from "@/lib/use-luxury-animations";
import { wa, WA_CONTACTS, waLink } from "@/lib/whatsapp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Equilibrio Clinic – El lugar que tu cuerpo necesita" },
      {
        name: "description",
        content:
          "Clínica estética en Cartagena: depilación láser definitiva con Soprano Ice Titanium, moldeamiento corporal, rejuvenecimiento facial y dermatología.",
      },
      { property: "og:title", content: "Equilibrio Clinic – Estética Premium en Cartagena" },
      {
        property: "og:description",
        content: "Depilación láser premium y estética avanzada en Cartagena.",
      },
    ],
  }),
  component: Index,
});

const NAV = [
  { label: "Inicio", href: "#inicio" },
  { label: "Depilación Láser", href: "#laser" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

const PROMOS = [
  "Glúteos de impacto",
  "Glúteos perfectos",
  "Rejuvenecimiento 360°",
  "Depilación Láser – 8 sesiones Bikini",
  "Depilación Láser – 12 Sesiones",
  "Combos 12 Sesiones Depilación Láser",
  "Tratamientos Faciales",
  "Drenaje Linfático",
  "Masajes Reductores",
  "Maderoterapia",
  "Relajación Muscular",
  "Post-operatorio Regenerativo",
  "Transformación Integral del Cuerpo",
  "Grasa Rebelde Inteligente",
  "Paquete Anticelulítico Completo",
  "Músculo fuerte + Piel firme",
  "Desinflama + Regenera + Remodela",
  "Combo 8 sesiones Axila + Bikini",
  "12 sesiones Axila",
  "12 sesiones Combo Axila + Bikini",
  "Combo Axila + Bikini + Media Pierna",
  "12 Sesiones Bikini",
  "Combo Axila + Bikini + Pierna Completa",
  "8 Sesiones Bozo",
  "12 Sesiones Bozo",
];

const SERVICES = [
  {
    img: laserImg,
    title: "Depilación Láser",
    desc: "Soprano Ice Titanium — la tecnología láser más avanzada del mundo, segura para todo tipo de piel.",
    msg: "Hola, quisiera información sobre Depilación Láser.",
  },
  {
    img: bodyImg,
    title: "Moldeamiento Corporal",
    desc: "Tratamientos integrales para esculpir, tonificar y rediseñar tu figura.",
    msg: "Hola, me interesa Moldeamiento Corporal.",
  },
  {
    img: facialImg,
    title: "Rejuvenecimiento Facial",
    desc: "Devuelve la luminosidad, firmeza y vitalidad a tu rostro con tecnología de gama médica.",
    msg: "Hola, quiero saber sobre Rejuvenecimiento Facial.",
  },
  {
    img: heroImg,
    title: "Cejas y Pestañas",
    desc: "Micropigmentación, diseño y realce. Una mirada armónica y duradera.",
    msg: "Hola, info de Cejas y Pestañas por favor.",
  },
];

const ZONAS = [
  { name: "Axilas", desc: "Comodidad y frescura todo el año." },
  { name: "Bikini", desc: "Tratamiento delicado y profesional." },
  { name: "Combos Especiales", desc: "Combina sesiones entre diferentes áreas del cuerpo." },
  { name: "Rostro", desc: "Elimina el vello facial no deseado de forma definitiva." },
  { name: "Piernas Completas", desc: "Piernas suaves y libres de vello para siempre." },
  { name: "Espalda", desc: "Eliminación completa del vello dorsal." },
];

const PROCESO = [
  {
    n: "01",
    t: "Valoración Inicial",
    d: "Evaluamos tu tipo de piel y vello para personalizar el tratamiento según tus necesidades.",
  },
  {
    n: "02",
    t: "Aplicación Láser",
    d: "Tecnología Soprano Titanium con tres longitudes de onda para máxima efectividad.",
  },
  {
    n: "03",
    t: "Cuidado Post-Tratamiento",
    d: "Recomendaciones para optimizar resultados y cuidar tu piel a largo plazo.",
  },
];

function Index() {
  const scope = useRef<HTMLElement | null>(null);
  useLuxuryAnimations(scope);

  return (
    <main ref={scope} className="overflow-x-hidden bg-background text-foreground">
      {/* ─────────── Promo top banner ─────────── */}
      <div className="bg-gradient-copper text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 py-2 text-center text-xs sm:text-sm">
          <span>🌸 Semana de la Mujer: combos especiales en depilación láser ✨</span>
          <a
            href={wa("Hola, quiero info sobre la promo de la Semana de la Mujer.")}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 hover:opacity-80"
          >
            ❤️ Agenda aquí
          </a>
        </div>
      </div>

      {/* ─────────── Navigation ─────────── */}
      <header className="sticky top-0 z-40 border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
          <a href="#inicio" className="flex items-center">
            <img src={logoAsset.url} alt="Equilibrio Clinic" className="h-8 w-auto md:h-10" />
          </a>
          <ul className="hidden items-center gap-8 text-sm tracking-wider-2 uppercase lg:flex">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="text-foreground/70 transition-colors duration-300 hover:text-primary"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={wa("Hola, quisiera agendar una cita en Equilibrio Clinic.")}
            target="_blank"
            rel="noreferrer"
            className="cta-breathe inline-flex items-center rounded-full bg-gradient-copper px-6 py-2.5 text-xs font-medium tracking-wider-2 uppercase text-primary-foreground shadow-soft transition hover:opacity-95"
          >
            Agenda tu cita
          </a>
        </nav>
      </header>

      {/* ─────────── HERO ─────────── */}
      <section id="inicio" className="hero relative overflow-hidden bg-gradient-coral">
        <img
          src={flowers}
          alt=""
          aria-hidden
          className="hero-flower hero-flower-tl pointer-events-none absolute -top-10 -left-10 w-64 select-none opacity-90 md:w-96"
        />
        <img
          src={flowers}
          alt=""
          aria-hidden
          className="hero-flower hero-flower-br pointer-events-none absolute -right-10 -bottom-10 w-64 rotate-180 select-none opacity-90 md:w-96"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div className="relative z-10 text-primary-foreground">
            <p className="hero-eyebrow tracking-luxury text-xs uppercase text-primary-foreground/90">
              • Especial •
            </p>
            <h1 className="hero-title mt-4 font-display text-5xl leading-[1.05] md:text-7xl">
              El lugar que <br />
              <span className="font-script text-6xl text-copper md:text-8xl">tu cuerpo</span>
              <br />
              necesita
            </h1>
            <div className="hero-sub mt-8 max-w-md space-y-6">
              <p className="text-base text-primary-foreground/95 md:text-lg">
                Clínica estética premium en Cartagena. Expertos en depilación láser
                definitiva, estética avanzada y dermatología.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={wa("Hola, quisiera agendar una cita.")}
                  target="_blank"
                  rel="noreferrer"
                  className="cta-breathe inline-flex items-center rounded-full bg-foreground px-8 py-3.5 text-xs tracking-wider-2 uppercase text-background shadow-soft transition hover:opacity-90"
                >
                  Agenda tu cita
                </a>
                <a
                  href="#servicios"
                  className="inline-flex items-center rounded-full border border-primary-foreground/60 px-8 py-3.5 text-xs tracking-wider-2 uppercase text-primary-foreground transition hover:bg-primary-foreground/10"
                >
                  Ver servicios
                </a>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="hero-image relative aspect-[4/5] overflow-hidden rounded-3xl shadow-soft">
              <img
                src={heroImg}
                alt="Mujer con piel luminosa"
                className="h-full w-full object-cover"
                width={1080}
                height={1350}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── PROMOS DE LA SEMANA DE LA MUJER ─────────── */}
      <section id="promos" className="reveal-section relative bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="tracking-luxury text-xs uppercase text-primary">• Especial •</p>
            <h2 className="mt-4 font-display text-4xl md:text-6xl">
              <span className="reveal-line">
                <span>Promos de la</span>
              </span>{" "}
              <span className="reveal-line">
                <span className="font-script text-coral-deep">Semana de la Mujer</span>
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
              Una selección curada de tratamientos para celebrarte.
            </p>
          </div>

          <div className="promo-grid mt-14 flex flex-wrap justify-center gap-3">
            {PROMOS.map((p) => (
              <a
                key={p}
                href={wa(`Hola, quiero información sobre: ${p}`)}
                target="_blank"
                rel="noreferrer"
                className="promo-chip group inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm transition hover:border-primary hover:shadow-card"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-coral-deep transition group-hover:scale-150" />
                {p}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── SERVICIOS ─────────── */}
      <section id="servicios" className="reveal-section relative bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="tracking-luxury text-xs uppercase text-primary">• Nuestros servicios •</p>
            <h2 className="mt-4 font-display text-4xl md:text-6xl">
              <span className="reveal-line">
                <span>Tratamientos de</span>
              </span>{" "}
              <span className="reveal-line">
                <span className="font-script text-coral-deep">alta gama</span>
              </span>
            </h2>
          </div>

          <div className="cards-grid mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s) => (
              <a
                key={s.title}
                href={wa(s.msg)}
                target="_blank"
                rel="noreferrer"
                className="service-card group flex flex-col overflow-hidden rounded-3xl bg-card shadow-card transition duration-500 hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <h3 className="font-condensed text-xl font-semibold uppercase tracking-wider-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                  <span className="mt-auto pt-4 text-xs tracking-wider-2 uppercase text-primary">
                    Cotizar por WhatsApp →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── DEPILACIÓN LÁSER ─────────── */}
      <section
        id="laser"
        className="reveal-section relative overflow-hidden bg-nude py-24 text-foreground"
      >
        <img
          src={flowers}
          alt=""
          aria-hidden
          className="hero-flower pointer-events-none absolute -top-12 -right-12 w-72 rotate-90 opacity-50"
        />
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
          <div>
            <p className="tracking-luxury text-xs uppercase text-primary">
              ⚡ Tecnología Avanzada
            </p>
            <h2 className="mt-4 font-display text-5xl md:text-7xl">
              <span className="reveal-line">
                <span>Depilación</span>
              </span>{" "}
              <span className="reveal-line">
                <span className="font-script text-copper">Láser</span>
              </span>
            </h2>
            <p className="mt-6 max-w-lg text-foreground/80">
              Despídete del vello para siempre con la mejor tecnología del mundo a tu alcance.
              Piel suave, segura y libre de vello — para siempre.
            </p>

            <div className="mt-10 space-y-4">
              {[
                "Soprano Ice Titanium · Edición Especial",
                "Triple longitud de onda (755 · 810 · 1064 nm)",
                "Resultados visibles desde la primera sesión",
                "Seguridad garantizada para todo tipo de piel",
              ].map((b) => (
                <div key={b} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-6 flex-shrink-0 bg-gradient-copper" />
                  <p className="text-sm">{b}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={wa("Hola, quiero agendar Depilación Láser.")}
                target="_blank"
                rel="noreferrer"
                className="cta-breathe inline-flex items-center rounded-full bg-gradient-copper px-8 py-3.5 text-xs tracking-wider-2 uppercase text-primary-foreground shadow-soft"
              >
                Agenda tu cita
              </a>
              <a
                href={wa("Hola, quisiera cotizar tratamientos láser.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-foreground/30 px-8 py-3.5 text-xs tracking-wider-2 uppercase"
              >
                Ver tratamientos
              </a>
            </div>
          </div>

          <div className="wipe-image relative">
            <img
              src={sopranoAsset.url}
              alt="Soprano Ice Titanium"
              loading="lazy"
              className="mx-auto w-full max-w-lg drop-shadow-2xl"
            />
            <p className="mt-6 text-center text-xs tracking-wider-2 uppercase text-foreground/70">
              Disponible en Sede Bocagrande · Sede Castellana
            </p>
          </div>
        </div>
      </section>

      {/* ─────────── ZONAS QUE TRATAMOS ─────────── */}
      <section className="reveal-section bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="tracking-luxury text-xs uppercase text-primary">• Áreas de tratamiento •</p>
            <h2 className="mt-4 font-display text-4xl md:text-6xl">
              <span className="reveal-line">
                <span>Zonas que</span>
              </span>{" "}
              <span className="reveal-line">
                <span className="font-script text-coral-deep">tratamos</span>
              </span>
            </h2>
          </div>

          <div className="cards-grid mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ZONAS.map((z) => (
              <a
                key={z.name}
                href={wa(`Hola, quiero cotizar depilación láser de: ${z.name}`)}
                target="_blank"
                rel="noreferrer"
                className="service-card group flex flex-col gap-3 rounded-3xl border border-border bg-card p-8 transition duration-500 hover:-translate-y-1 hover:border-primary hover:shadow-card"
              >
                <span className="text-xs tracking-luxury uppercase text-copper">
                  Soprano Ice Titanium
                </span>
                <h3 className="font-condensed text-2xl font-semibold uppercase tracking-wider-2">
                  {z.name}
                </h3>
                <p className="text-sm text-muted-foreground">{z.desc}</p>
                <span className="mt-2 text-xs tracking-wider-2 uppercase text-primary opacity-0 transition group-hover:opacity-100">
                  Cotizar →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── PROCESO ─────────── */}
      <section className="reveal-section bg-secondary py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <p className="tracking-luxury text-xs uppercase text-primary">• El proceso •</p>
            <h2 className="mt-4 font-display text-4xl md:text-6xl">
              <span className="reveal-line">
                <span>¿Cómo es el</span>
              </span>{" "}
              <span className="reveal-line">
                <span className="font-script text-coral-deep">tratamiento?</span>
              </span>
            </h2>
            <p className="mt-6 text-muted-foreground">
              Un proceso simple, seguro y efectivo que te llevará a tener la piel que siempre
              has deseado.
            </p>
          </div>

          <div className="cards-grid mt-14 grid gap-8 md:grid-cols-3">
            {PROCESO.map((p) => (
              <div
                key={p.n}
                className="service-card relative rounded-3xl bg-card p-8 shadow-card"
              >
                <span className="font-display text-6xl text-gradient-copper italic">{p.n}</span>
                <h3 className="mt-4 font-condensed text-xl font-semibold uppercase tracking-wider-2">
                  {p.t}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── NOSOTROS ─────────── */}
      <section
        id="nosotros"
        className="reveal-section relative overflow-hidden bg-gradient-warm py-28 text-primary-foreground"
      >
        <img
          src={flowers}
          alt=""
          aria-hidden
          className="hero-flower pointer-events-none absolute -bottom-16 -left-10 w-80 opacity-70"
        />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <p className="tracking-luxury text-xs uppercase">• Nosotros •</p>
          <h2 className="mt-4 font-display text-4xl md:text-6xl">
            <span className="reveal-line">
              <span>Estética avanzada,</span>
            </span>{" "}
            <span className="reveal-line">
              <span className="font-script">cuidado humano</span>
            </span>
          </h2>
          <p className="mt-8 text-lg text-primary-foreground/95">
            Somos una clínica estética experta en depilación láser definitiva, estética
            avanzada y dermatología. Combinamos tecnología de gama mundial con un equipo
            cercano y profesional.
          </p>
          <a
            href={wa("Hola, quisiera agendar una cita.")}
            target="_blank"
            rel="noreferrer"
            className="cta-breathe mt-10 inline-flex items-center rounded-full bg-foreground px-10 py-4 text-xs tracking-wider-2 uppercase text-background shadow-soft"
          >
            Agenda tu cita
          </a>
        </div>
      </section>

      {/* ─────────── CONTACTO / SEDES ─────────── */}
      <section id="contacto" className="reveal-section bg-background py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="tracking-luxury text-xs uppercase text-primary">• Contáctanos •</p>
            <h2 className="mt-4 font-display text-4xl md:text-6xl">
              <span className="reveal-line">
                <span>Visítanos en</span>
              </span>{" "}
              <span className="reveal-line">
                <span className="font-script text-coral-deep">Cartagena</span>
              </span>
            </h2>
          </div>

          <div className="cards-grid mt-14 grid gap-8 md:grid-cols-2">
            {[
              {
                name: "Sede Bocagrande",
                addr: "Cra. 2 #6-137 Piso 2, Cartagena de Indias, Bolívar.",
              },
              {
                name: "Sede Castellana",
                addr: "Dg. 31 #62-57, Chipre, Cartagena de Indias, Bolívar.",
              },
            ].map((s) => (
              <div
                key={s.name}
                className="service-card rounded-3xl border border-border bg-card p-8 shadow-card"
              >
                <h3 className="font-condensed text-2xl font-semibold uppercase tracking-wider-2">
                  {s.name}
                </h3>
                <p className="mt-4 text-sm text-muted-foreground">{s.addr}</p>
                <a
                  href={wa(`Hola, quiero agendar en ${s.name}.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center rounded-full bg-gradient-copper px-6 py-3 text-xs tracking-wider-2 uppercase text-primary-foreground"
                >
                  Agendar aquí
                </a>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-3xl bg-secondary p-10 text-center">
            <p className="mx-auto max-w-xl text-muted-foreground">
              ¡Hola! Haz clic en uno de nuestros miembros para chatear en WhatsApp. Nuestro
              equipo tarda unos minutos en contestar.
            </p>
            <div className="cards-grid mt-8 grid gap-4 sm:grid-cols-3">
              {WA_CONTACTS.map((c) => (
                <a
                  key={c.waId}
                  href={waLink(c.waId, "Hola Equilibrio Clinic 👋")}
                  target="_blank"
                  rel="noreferrer"
                  className="service-card flex flex-col items-center gap-1 rounded-2xl border border-border bg-card p-5 transition hover:border-primary hover:shadow-card"
                >
                  <span className="text-xs tracking-luxury uppercase text-copper">
                    {c.label}
                  </span>
                  <span className="font-condensed text-lg">{c.phone}</span>
                  <span className="text-xs text-muted-foreground">WhatsApp →</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── FOOTER ─────────── */}
      <footer className="border-t border-border bg-card py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center gap-8 text-center">
            <img src={logoAsset.url} alt="Equilibrio Clinic" className="h-10 w-auto" />
            <p className="max-w-md text-sm text-muted-foreground">
              El lugar que tu cuerpo necesita. Cartagena de Indias, Colombia.
            </p>
            <div className="flex gap-6 text-sm tracking-wider-2 uppercase">
              <a
                href="https://www.instagram.com/equilibrio_clinic/"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground transition hover:text-primary"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/p/Equilibrio-Clinic-100092585687784/"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground transition hover:text-primary"
              >
                Facebook
              </a>
              <a
                href="https://www.tiktok.com/@equilibrio_clinic"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground transition hover:text-primary"
              >
                TikTok
              </a>
            </div>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Equilibrio Clinic. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* ─────────── Floating WhatsApp ─────────── */}
      <a
        href={wa("Hola, quiero información de Equilibrio Clinic.")}
        target="_blank"
        rel="noreferrer"
        aria-label="Chatear por WhatsApp"
        className="cta-breathe fixed right-5 bottom-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-copper text-2xl text-primary-foreground shadow-soft"
      >
        💬
      </a>
    </main>
  );
}
