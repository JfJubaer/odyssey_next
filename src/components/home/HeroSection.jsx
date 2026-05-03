"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const HERO_SLIDES = [
  {
    title: "Discover Products That Fit Your Day",
    subtitle:
      "Browse a curated catalog, compare essentials quickly, and manage your shopping flow with clarity.",
    cta: "Explore Products",
    href: "/items",
  },
  {
    title: "Build Your Store Experience",
    subtitle:
      "Authenticated users can add and manage items in minutes with a clean dashboard workflow.",
    cta: "Open Dashboard",
    href: "/items/manage",
  },
  {
    title: "Designed for Light and Dark",
    subtitle:
      "Readable typography, accessible contrast, and consistent components on every screen size.",
    cta: "Read About Us",
    href: "/about",
  },
];

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  const current = HERO_SLIDES[activeSlide];

  return (
    <section className="section-shell py-8 sm:py-10">
      <div className="page-container">
        <div className="surface-soft relative overflow-hidden rounded-2xl px-6 py-12 sm:px-10 sm:py-16">
          <div className="absolute -right-20 -top-16 h-56 w-56 rounded-full bg-black/5 blur-2xl dark:bg-white/10" />
          <div className="absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-black/5 blur-2xl dark:bg-white/10" />

          <div className="relative mx-auto flex min-h-[60vh] max-w-4xl flex-col items-center justify-center text-center">
            <p className="ui-subtle mb-3 text-xs font-semibold uppercase tracking-[0.2em]">
              Zero Shop Collection
            </p>
            <h1 className="title-xl max-w-3xl">{current.title}</h1>
            <p className="ui-muted mt-4 max-w-2xl text-base leading-7 sm:text-lg">
              {current.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href={current.href} className="bw-btn bw-link-focus px-6 py-3 text-sm">
                {current.cta}
              </Link>
              <Link href="/login" className="bw-btn-ghost bw-link-focus px-6 py-3 text-sm">
                Start Free
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-2">
              {HERO_SLIDES.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === activeSlide ? "w-8 bg-current" : "w-2.5 bg-current/35"
                  }`}
                  aria-label={`Show slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

