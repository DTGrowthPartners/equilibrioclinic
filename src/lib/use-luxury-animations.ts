import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Single point of initialization for all GSAP animations.
 * Mounts a Lenis smooth-scroll instance, then a gsap.context()
 * scoped to the page root so cleanup is automatic on unmount.
 *
 * Easing rules: power3.out for entrances, power2.inOut for loops.
 * Durations: 0.8s–1.4s. Distances: 20–50px.
 * Respects prefers-reduced-motion.
 */
export function useLuxuryAnimations(scope: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = scope.current;
    if (!root) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    // ───── Smooth scroll (Lenis) ─────
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);
    lenis.on("scroll", ScrollTrigger.update);

    const ctx = gsap.context(() => {
      // ───── HERO entrance timeline ─────
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-flower", {
        scale: 1.1,
        opacity: 0,
        duration: 1.4,
        stagger: 0.1,
      })
        .from(
          ".hero-eyebrow",
          { opacity: 0, y: 20, duration: 1 },
          "-=1.0",
        )
        .from(
          ".hero-title",
          { opacity: 0, y: 30, filter: "blur(8px)", duration: 1.2 },
          "-=0.6",
        )
        .from(
          ".hero-sub > *",
          { opacity: 0, y: 20, duration: 1, stagger: 0.12 },
          "-=0.7",
        );

      // ───── Floating flowers (infinite, luxury idle) ─────
      gsap.to(".hero-flower-tl", {
        y: -8,
        rotation: -1.5,
        duration: 5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
      gsap.to(".hero-flower-br", {
        y: 8,
        rotation: 1.5,
        duration: 6,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      // ───── Hero image parallax ─────
      gsap.to(".hero-image", {
        yPercent: -12,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // ───── Section reveals (fade + y) ─────
      gsap.utils.toArray<HTMLElement>(".reveal-section").forEach((section) => {
        gsap.from(section, {
          opacity: 0,
          y: 40,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      });

      // ───── Display titles: line reveal (curtain rise) ─────
      gsap.utils.toArray<HTMLElement>(".reveal-line").forEach((line) => {
        const inner = line.querySelector("span");
        if (!inner) return;
        gsap.to(inner, {
          y: "0%",
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: line,
            start: "top 85%",
          },
        });
      });

      // ───── Service cards: staggered entrance + hover ─────
      gsap.utils.toArray<HTMLElement>(".cards-grid").forEach((grid) => {
        const cards = grid.querySelectorAll(".service-card");
        gsap.from(cards, {
          opacity: 0,
          y: 30,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: grid, start: "top 80%" },
        });
      });

      // ───── Promo chips entrance ─────
      gsap.from(".promo-chip", {
        opacity: 0,
        y: 20,
        duration: 0.9,
        stagger: 0.06,
        ease: "power3.out",
        scrollTrigger: { trigger: ".promo-grid", start: "top 80%" },
      });

      // ───── CTA breathing (idle micro-animation) ─────
      gsap.to(".cta-breathe", {
        scale: 1.03,
        duration: 2.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      // ───── Wipe reveal for the soprano machine image ─────
      gsap.from(".wipe-image", {
        clipPath: "inset(0 100% 0 0)",
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: { trigger: ".wipe-image", start: "top 80%" },
      });
    }, root);

    // ScrollTrigger refresh after layout settles
    ScrollTrigger.refresh();

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      ctx.revert();
      ScrollTrigger.getAll().forEach((s) => s.kill());
    };
  }, [scope]);
}
