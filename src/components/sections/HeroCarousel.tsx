"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LazyMotion, domAnimation, m, useReducedMotion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Slide = {
  type: "image" | "video";
  src: string;
  alt: string;
  poster?: string;
};

const slides: Slide[] = [
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1920&q=80",
    alt: "Community outreach volunteer supporting children",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1920&q=80",
    alt: "Humanitarian volunteers working together during a community support event",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1920&q=80",
    alt: "Children and families receiving support in a community setting",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1920&q=80",
    alt: "Community members and volunteers gathered together with warmth",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1920&q=80",
    alt: "Supporters and community partners gathered together",
  },
];

const AUTOPLAY_MS = 10000;

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const reduceMotion = useReducedMotion();

  const goTo = useCallback((index: number) => {
    setCurrent((index + slides.length) % slides.length);
  }, []);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    if (isPaused || reduceMotion) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(next, AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, next, reduceMotion]);

  const slide = slides[current];

  return (
    <LazyMotion features={domAnimation}>
      <section
        className="relative overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
        aria-roledescription="carousel"
        aria-label="Hero carousel"
      >
        {/* Slides */}
        <div className="relative h-[100svh] min-h-[600px] w-full">
          <AnimatePresence mode="wait">
            <m.div
              key={current}
              className="absolute inset-0"
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${current + 1} of ${slides.length}`}
            >
              {slide.type === "video" ? (
                <video
                  src={slide.src}
                  poster={slide.poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover"
                />
              ) : (
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={current === 0}
                  className="object-cover"
                  sizes="100vw"
                />
              )}
            </m.div>
          </AnimatePresence>

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/65 to-slate-950/35" />

          {/* Content overlay */}
          <div className="absolute inset-0 flex items-end pb-20 sm:items-center sm:pb-0 [@media(min-width:640px)_and_(max-height:820px)]:items-end [@media(min-width:640px)_and_(max-height:820px)]:pb-14">
            <div className="section-shell relative z-10 pt-24 sm:pt-32 [@media(min-width:640px)_and_(max-height:820px)]:pt-24">
              <m.div
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="max-w-3xl"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-300 sm:text-sm">
                  Faith-Based Humanitarian Action
                </p>
                <h1 className="mt-3 font-display text-3xl leading-tight text-white sm:mt-5 sm:text-6xl lg:text-7xl [@media(min-width:640px)_and_(max-height:820px)]:mt-3 [@media(min-width:640px)_and_(max-height:820px)]:text-6xl lg:[@media(max-height:820px)]:text-7xl">
                  Emmaus Care Foundation
                </h1>
                <p className="mt-3 max-w-2xl text-base font-semibold leading-7 text-orange-200 sm:mt-5 sm:text-2xl sm:leading-9 [@media(min-width:640px)_and_(max-height:820px)]:mt-3 [@media(min-width:640px)_and_(max-height:820px)]:text-xl [@media(min-width:640px)_and_(max-height:820px)]:leading-8">
                  Leaving No One Behind — By Giving Them Care
                </p>
                <p className="mt-3 hidden max-w-2xl text-base leading-8 text-white/85 sm:mt-5 sm:block sm:text-lg [@media(min-width:640px)_and_(max-height:820px)]:mt-3 [@media(min-width:640px)_and_(max-height:820px)]:text-base [@media(min-width:640px)_and_(max-height:820px)]:leading-7 [@media(min-width:640px)_and_(max-height:560px)]:hidden">
                  A faith-based non-profit committed to restoring hope, protecting human dignity, and improving the lives of poor and vulnerable persons through sustainable humanitarian and development initiatives.
                </p>

                <div className="mt-5 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap [@media(min-width:640px)_and_(max-height:820px)]:mt-5 [@media(min-width:640px)_and_(max-height:820px)]:gap-2.5">
                  <Link
                    href="/donate"
                    className="focus-ring inline-flex items-center justify-center rounded-full bg-orange-600 px-6 py-3.5 text-sm font-semibold text-white hover:-translate-y-0.5 hover:bg-orange-500 [@media(min-width:640px)_and_(max-height:820px)]:px-5 [@media(min-width:640px)_and_(max-height:820px)]:py-3 [@media(min-width:640px)_and_(max-height:820px)]:text-xs"
                  >
                    Donate Now
                  </Link>
                  <Link
                    href="/get-involved"
                    className="focus-ring inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur hover:-translate-y-0.5 hover:bg-white/20 [@media(min-width:640px)_and_(max-height:820px)]:px-5 [@media(min-width:640px)_and_(max-height:820px)]:py-3 [@media(min-width:640px)_and_(max-height:820px)]:text-xs"
                  >
                    Become a Volunteer
                  </Link>
                  <Link
                    href="/programs"
                    className="focus-ring inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white/90 backdrop-blur hover:-translate-y-0.5 hover:bg-white/15 [@media(min-width:640px)_and_(max-height:820px)]:px-5 [@media(min-width:640px)_and_(max-height:820px)]:py-3 [@media(min-width:640px)_and_(max-height:820px)]:text-xs"
                  >
                    Our Programs
                  </Link>
                </div>
              </m.div>
            </div>
          </div>

          {/* Arrow controls */}
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="hidden focus-ring absolute left-3 top-1/2 z-20 h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-slate-950/50 text-white backdrop-blur transition hover:bg-slate-950/70 sm:left-5 sm:h-12 sm:w-12"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="hidden focus-ring absolute right-3 top-1/2 z-20 h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-slate-950/50 text-white backdrop-blur transition hover:bg-slate-950/70 sm:right-5 sm:h-12 sm:w-12"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2 [@media(min-width:640px)_and_(max-height:820px)]:bottom-4 [@media(min-width:640px)_and_(max-height:820px)]:gap-1.5" role="tablist" aria-label="Slide controls">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                role="tab"
                aria-selected={i === current}
                aria-label={`Go to slide ${i + 1}`}
                className={`focus-ring h-2.5 rounded-full transition-all duration-300 [@media(min-width:640px)_and_(max-height:820px)]:h-2 ${
                  i === current
                    ? "w-8 bg-orange-500 [@media(min-width:640px)_and_(max-height:820px)]:w-7"
                    : "w-2.5 bg-white/50 hover:bg-white/80 [@media(min-width:640px)_and_(max-height:820px)]:w-2"
                }`}
              />
            ))}
          </div>

          {/* Autoplay progress bar */}
          {!isPaused && !reduceMotion && (
            <m.div
              key={`progress-${current}`}
              className="absolute bottom-0 left-0 z-20 h-0.5 bg-orange-500/80"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
            />
          )}
        </div>
      </section>
    </LazyMotion>
  );
}
