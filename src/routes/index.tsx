import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import flowers from "@/assets/flowers.png";

import heroImg from "@/assets/hero.jpg";
import laserImg from "@/assets/depilacionlaser.jpg";
import facialImg from "@/assets/tratamientos-faciales.jpg";
import bodyImg from "@/assets/tratamientos-corporales.jpg";
import cejasImg from "@/assets/cejas.webp";
import dermatologiaImg from "@/assets/dermatologia.webp";
import relajamientoImg from "@/assets/relajamiento.webp";
import maquinaImg from "@/assets/maquina-soprano.png";
import sedeBocagrandeImg from "@/assets/sede-bocagrande.png";
import sedeCastellanaImg from "@/assets/sede-castellana.png";
import draKathyImg from "@/assets/dra-kathy-wu.jpg";

const DERMATOLOGIA_WA =
  "https://web.whatsapp.com/send/?phone=573005410171&text=Hola%20Dra%20Kathy!%20Vengo%20de%20D%C3%ADa%20de%20las%20Madres%20Links%2C%20quiero%20agendar%20una%20cita&type=phone_number&app_absent=0";
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
    img: cejasImg,
    title: "Cejas y Pestañas",
    desc: "Micropigmentación, diseño y realce. Una mirada armónica y duradera.",
    msg: "Hola, info de Cejas y Pestañas por favor.",
  },
  {
    img: dermatologiaImg,
    title: "Dermatología",
    desc: "Atención dermatológica especializada para el cuidado y salud de tu piel.",
    msg: "Hola, quisiera información sobre Dermatología.",
  },
  {
    img: relajamientoImg,
    title: "Relajamiento",
    desc: "Masajes y terapias de relajación muscular para liberar tensión y renovar tu bienestar.",
    msg: "Hola, me interesan los servicios de Relajamiento.",
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
  const [menuOpen, setMenuOpen] = useState(false);
  useLuxuryAnimations(scope);

  return (
    <main ref={scope} className="overflow-x-hidden bg-background text-foreground">
      {/* ─────────── Top banner ─────────── */}
      <div className="bg-gradient-copper text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-2 gap-y-0.5 px-4 py-2 text-center text-[11px] sm:text-sm">
          <span>✨ Estética premium en Cartagena · Depilación láser Soprano Ice Titanium</span>
          <a
            href={wa("Hola, quisiera agendar una cita en Equilibrio Clinic.")}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4 hover:opacity-80"
          >
            Agenda aquí
          </a>
        </div>
      </div>

      {/* ─────────── Navigation ─────────── */}
      <header className="sticky top-0 z-40 border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <a href="#inicio" onClick={() => setMenuOpen(false)} className="flex items-center">
            <img src={logo} alt="Equilibrio Clinic" className="h-8 w-auto md:h-10" />
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
          <div className="flex items-center gap-2">
            <a
              href={wa("Hola, quisiera agendar una cita en Equilibrio Clinic.")}
              target="_blank"
              rel="noreferrer"
              className="cta-breathe hidden items-center rounded-full bg-gradient-copper px-5 py-2.5 text-xs font-medium tracking-wider-2 uppercase text-primary-foreground shadow-soft transition hover:opacity-95 sm:inline-flex"
            >
              Agenda tu cita
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-foreground transition hover:bg-secondary lg:hidden"
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`overflow-hidden border-border/40 bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 ease-out lg:hidden ${
            menuOpen ? "max-h-[28rem] border-t opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-1 px-4 py-4">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm tracking-wider-2 uppercase text-foreground/80 transition hover:bg-secondary hover:text-primary"
                >
                  {n.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href={wa("Hola, quisiera agendar una cita en Equilibrio Clinic.")}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center rounded-full bg-gradient-copper px-6 py-3.5 text-xs font-medium tracking-wider-2 uppercase text-primary-foreground shadow-soft"
              >
                Agenda tu cita
              </a>
            </li>
          </ul>
        </div>
      </header>

      {/* ─────────── HERO ─────────── */}
      <section id="inicio" className="hero relative min-h-[100svh] overflow-hidden bg-foreground">
        {/* Video de fondo */}
        <video
          className="hero-image absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={heroImg}
        >
          <source
            src="https://equilibrioclinic.com.co/wp-content/uploads/2025/06/Generated-File-June-16-2025-1_47PM.mp4"
            type="video/mp4"
          />
        </video>

        {/* Overlays luxury: oscurece para legibilidad + tinte de marca */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-black/25"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/45"
        />


        {/* Contenido */}
        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl items-center px-6 py-24 md:py-28">
          <div className="max-w-2xl text-white">
            <p className="hero-eyebrow tracking-luxury text-xs uppercase text-white/90">
              • Especial •
            </p>
            <h1 className="hero-title mt-4 font-display text-4xl leading-[1.05] sm:text-5xl md:text-7xl">
              El lugar que <br />
              <span className="font-script text-5xl text-white sm:text-6xl md:text-8xl">tu cuerpo</span>
              <br />
              necesita
            </h1>
            <div className="hero-sub mt-8 max-w-md space-y-6">
              <p className="text-base text-white/95 md:text-lg">
                Clínica estética premium en Cartagena. Expertos en depilación láser
                definitiva, estética avanzada y dermatología.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <a
                  href={wa("Hola, quisiera agendar una cita.")}
                  target="_blank"
                  rel="noreferrer"
                  className="cta-breathe inline-flex w-full items-center justify-center rounded-full bg-white px-8 py-3.5 text-xs tracking-wider-2 uppercase text-foreground shadow-soft transition hover:opacity-90 sm:w-auto"
                >
                  Agenda tu cita
                </a>
                <a
                  href="#servicios"
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/60 px-8 py-3.5 text-xs tracking-wider-2 uppercase text-white backdrop-blur-sm transition hover:bg-white/10 sm:w-auto"
                >
                  Ver servicios
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── SERVICIOS ─────────── */}
      <section id="servicios" className="reveal-section relative scroll-mt-20 bg-secondary py-16 md:scroll-mt-24 md:py-24">
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

          <div className="cards-grid mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <a
                key={s.title}
                href={wa(s.msg)}
                target="_blank"
                rel="noreferrer"
                className="service-card group flex flex-col overflow-hidden rounded-3xl bg-card shadow-card transition duration-500 hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[4/5]">
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

          {/* ─────────── Banner Dermatología · Dra. Kathy Wu ─────────── */}
          <a
            href={DERMATOLOGIA_WA}
            target="_blank"
            rel="noreferrer"
            className="service-card group mt-10 flex items-center gap-5 rounded-3xl bg-gradient-copper p-5 text-primary-foreground shadow-card transition duration-500 hover:-translate-y-1 hover:shadow-soft sm:gap-6 sm:p-6"
          >
            <img
              src={draKathyImg}
              alt="Dra. Kathy Wu"
              loading="lazy"
              className="h-16 w-16 flex-shrink-0 rounded-full border-2 border-primary-foreground/40 object-cover sm:h-20 sm:w-20"
            />
            <div className="flex flex-col gap-1">
              <h3 className="font-condensed text-xl font-semibold uppercase tracking-wider-2 sm:text-2xl">
                Dermatología
              </h3>
              <p className="text-sm text-primary-foreground/90 sm:text-base">
                Reserva una cita con la <strong className="font-semibold">Dra. Kathy Wu</strong>
              </p>
              <span className="mt-1 text-xs tracking-wider-2 uppercase text-primary-foreground/80">
                Agendar por WhatsApp →
              </span>
            </div>
          </a>
        </div>
      </section>

      {/* ─────────── DEPILACIÓN LÁSER ─────────── */}
      <section
        id="laser"
        className="reveal-section relative scroll-mt-20 overflow-hidden bg-nude py-16 text-foreground md:scroll-mt-24 md:py-24"
      >
        <img
          src={flowers}
          alt=""
          aria-hidden
          className="hero-flower pointer-events-none absolute -top-12 -right-12 w-72 rotate-90 opacity-50"
        />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 md:gap-16 lg:grid-cols-2">
          <div>
            <p className="tracking-luxury text-xs uppercase text-primary">
              ⚡ Tecnología Avanzada
            </p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl md:text-7xl">
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

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href={wa("Hola, quiero agendar Depilación Láser.")}
                target="_blank"
                rel="noreferrer"
                className="cta-breathe inline-flex w-full items-center justify-center rounded-full bg-gradient-copper px-8 py-3.5 text-xs tracking-wider-2 uppercase text-primary-foreground shadow-soft sm:w-auto"
              >
                Agenda tu cita
              </a>
              <a
                href={wa("Hola, quisiera cotizar tratamientos láser.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full border border-foreground/30 px-8 py-3.5 text-xs tracking-wider-2 uppercase sm:w-auto"
              >
                Ver tratamientos
              </a>
            </div>
          </div>

          <div className="wipe-image relative">
            <img
              src={maquinaImg}
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
      <section className="reveal-section bg-background py-16 md:py-24">
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
      <section className="reveal-section bg-secondary py-16 md:py-24">
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
        className="reveal-section relative scroll-mt-20 overflow-hidden bg-gradient-warm py-20 text-primary-foreground md:scroll-mt-24 md:py-28"
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
      <section id="contacto" className="reveal-section scroll-mt-20 bg-background py-16 md:scroll-mt-24 md:py-24">
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
                img: sedeBocagrandeImg,
              },
              {
                name: "Sede Castellana",
                addr: "Dg. 31 #62-57, Chipre, Cartagena de Indias, Bolívar.",
                img: sedeCastellanaImg,
              },
            ].map((s) => (
              <div
                key={s.name}
                className="service-card flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-card"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.name}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <h3 className="font-condensed text-2xl font-semibold uppercase tracking-wider-2">
                    {s.name}
                  </h3>
                  <p className="mt-4 text-sm text-muted-foreground">{s.addr}</p>
                  <a
                    href={wa(`Hola, quiero agendar en ${s.name}.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center self-start rounded-full bg-gradient-copper px-6 py-3 text-xs tracking-wider-2 uppercase text-primary-foreground"
                  >
                    Agendar aquí
                  </a>
                </div>
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
            <img src={logo} alt="Equilibrio Clinic" className="h-10 w-auto" />
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
        style={{ bottom: "calc(env(safe-area-inset-bottom, 0px) + 1.25rem)" }}
        className="cta-breathe fixed right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft transition hover:opacity-90"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden>
          <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.477-.917zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </a>
    </main>
  );
}
