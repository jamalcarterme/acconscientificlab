"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";

const links = [
  { href: "#products", label: "Equipment" },
  { href: "#why-us", label: "Why Accon" },
  { href: "#showcase", label: "In The Field" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ink/95 backdrop-blur border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-10">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-head text-xl font-extrabold tracking-tight text-mist">
            ACCON
          </span>
          <span className="hidden font-body text-xs font-medium uppercase tracking-[0.18em] text-amber sm:inline">
            Scientific / Laboratory Equipment
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body text-[14px] font-medium text-mist/80 transition-colors hover:text-amber"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href="tel:+2348037428180"
            className="flex items-center gap-2 font-body text-[14px] font-semibold text-mist hover:text-amber"
          >
            <Phone className="h-4 w-4 text-amber" />
            0803 742 8180
          </a>
          <a
            href="#contact"
            className="bg-amber px-5 py-2.5 font-head text-[14px] font-semibold text-ink hover:bg-amber-dark transition-colors"
          >
            Request a Quote
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="text-mist lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-ink px-6 py-5 lg:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-body text-[15px] font-medium text-mist/90"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:+2348037428180"
              className="flex items-center gap-2 pt-2 font-body text-[15px] font-semibold text-amber"
            >
              <Phone className="h-4 w-4" /> 0803 742 8180
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 bg-amber px-5 py-3 text-center font-head font-semibold text-ink"
            >
              Request a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
