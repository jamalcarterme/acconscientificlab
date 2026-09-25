"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    img: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=1400&auto=format&fit=crop",
    title: "Full lab fit-outs",
    caption: "Equipping a diagnostic laboratory in Lagos, from benches to analyzers.",
  },
  {
    img: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?q=80&w=1400&auto=format&fit=crop",
    title: "Hospital equipment delivery",
    caption: "Patient monitoring and ward equipment installed for a private hospital.",
  },
  {
    img: "https://images.unsplash.com/photo-1618498082410-b4aa22193b38?q=80&w=1400&auto=format&fit=crop",
    title: "On-site calibration",
    caption: "Our technicians calibrating analytical instruments after installation.",
  },
  {
    img: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1400&auto=format&fit=crop",
    title: "Sterilization units",
    caption: "Autoclaves and sterilizers commissioned for a teaching hospital lab.",
  },
];

const AUTO_MS = 4500;

export default function Slider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback((next: number, dir: number) => {
    setDirection(dir);
    setIndex(((next % slides.length) + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % slides.length);
    }, AUTO_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused]);

  return (
    <section
      id="showcase"
      className="bg-ink py-24"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-body text-[13px] font-semibold uppercase tracking-[0.2em] text-amber">
              In the field
            </p>
            <h2 className="mt-3 font-head text-[2rem] font-extrabold leading-tight text-mist sm:text-4xl">
              Recent installations & deliveries.
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              aria-label="Previous slide"
              onClick={() => go(index - 1, -1)}
              className="flex h-11 w-11 items-center justify-center border border-white/20 text-mist transition-colors hover:border-amber hover:text-amber"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              aria-label="Next slide"
              onClick={() => go(index + 1, 1)}
              className="flex h-11 w-11 items-center justify-center border border-white/20 text-mist transition-colors hover:border-amber hover:text-amber"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="relative aspect-[16/9] w-full overflow-hidden sm:aspect-[21/9]">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={index}
              custom={direction}
              initial={{ x: direction > 0 ? "100%" : "-100%", opacity: 0.4 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? "-100%" : "100%", opacity: 0.4 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={slides[index].img}
                alt={slides[index].title}
                fill
                sizes="(max-width: 1024px) 100vw, 1200px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 sm:p-10">
                <h3 className="font-head text-xl font-bold text-mist sm:text-2xl">
                  {slides[index].title}
                </h3>
                <p className="mt-2 max-w-md font-body text-[14px] text-mist/75">
                  {slides[index].caption}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Manual dot controls + auto-progress indicator */}
        <div className="mt-6 flex items-center gap-3">
          {slides.map((s, i) => (
            <button
              key={s.title}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => go(i, i > index ? 1 : -1)}
              className="relative h-1.5 flex-1 overflow-hidden bg-white/15"
            >
              {i === index && !paused && (
                <motion.span
                  key={index}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: AUTO_MS / 1000, ease: "linear" }}
                  className="absolute inset-y-0 left-0 bg-amber"
                />
              )}
              {i === index && paused && (
                <span className="absolute inset-y-0 left-0 w-full bg-amber" />
              )}
              {i < index && <span className="absolute inset-0 bg-amber/60" />}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
