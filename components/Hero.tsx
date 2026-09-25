"use client";

import { motion } from "motion/react";
import Image from "next/image";
import RingCTA from "./RingCTA";
import { ShieldCheck, Truck, Wrench } from "lucide-react";

const markers = [
  { icon: ShieldCheck, text: "Genuine, certified equipment" },
  { icon: Truck, text: "Nationwide delivery & installation" },
  { icon: Wrench, text: "After-sales maintenance support" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 py-20 lg:grid-cols-[1.1fr_1fr] lg:gap-10 lg:px-10 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-5 font-body text-[13px] font-semibold uppercase tracking-[0.2em] text-amber">
            Mazamaza, Lagos &middot; Serving labs &amp; hospitals nationwide
          </p>
          <h1 className="max-w-xl font-head text-[2.6rem] font-extrabold leading-[1.08] tracking-tight text-mist sm:text-[3.2rem]">
            Laboratory equipment your results can depend on.
          </h1>
          <p className="mt-6 max-w-lg font-body text-[17px] leading-relaxed text-mist/70">
            Accon Scientific/Laboratory Equipment supplies, installs and
            maintains diagnostic and research instruments for hospitals,
            clinics and laboratories across Nigeria — backed by calibration
            support and genuine spare parts.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <RingCTA href="#contact" label="Request a Quote" variant="solid" />
            <a
              href="tel:+2348037428180"
              className="font-body text-[15px] font-semibold text-mist underline decoration-amber/60 decoration-2 underline-offset-4 hover:text-amber"
            >
              Or call 0803 742 8180
            </a>
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:gap-10">
            {markers.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3">
                <Icon className="h-5 w-5 shrink-0 text-amber" />
                <span className="font-body text-[13.5px] text-mist/75">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="bracket-frame relative mx-auto aspect-[4/5] w-full max-w-md"
        >
          <Image
            src="https://images.unsplash.com/photo-1618498082410-b4aa22193b38?q=80&w=1000&auto=format&fit=crop"
            alt="Laboratory technician operating diagnostic equipment"
            fill
            priority
            sizes="(max-width: 1024px) 90vw, 480px"
            className="object-cover"
          />
          <div className="absolute -bottom-6 -left-6 hidden w-52 border border-line bg-mist p-4 shadow-card sm:block">
            <p className="font-head text-2xl font-extrabold text-ink">15+</p>
            <p className="font-body text-[13px] text-slate">
              years supplying labs across Nigeria
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
