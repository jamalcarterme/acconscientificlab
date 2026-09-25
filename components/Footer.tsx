import Link from "next/link";
import { Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ink">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <p className="font-head text-xl font-extrabold text-mist">
              ACCON
            </p>
            <p className="mt-1 font-body text-[12.5px] uppercase tracking-[0.15em] text-amber">
              Scientific / Laboratory Equipment
            </p>
            <p className="mt-4 max-w-xs font-body text-[13.5px] leading-relaxed text-mist/60">
              Supplying medical and laboratory equipment to hospitals,
              clinics and research institutions across Nigeria.
            </p>
          </div>

          <div>
            <p className="font-head text-[13px] font-bold uppercase tracking-wide text-mist/80">
              Contact
            </p>
            <div className="mt-4 space-y-3">
              <a
                href="tel:+2348037428180"
                className="flex items-center gap-2 font-body text-[13.5px] text-mist/60 hover:text-amber"
              >
                <Phone className="h-4 w-4" /> 0803 742 8180
              </a>
              <a
                href="https://maps.app.goo.gl/kGFSraVjdHFdSzy58"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 font-body text-[13.5px] text-mist/60 hover:text-amber"
              >
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" /> 16 Old Ojo Rd,
                Mazamaza, Lagos 102102
              </a>
            </div>
          </div>

          <div>
            <p className="font-head text-[13px] font-bold uppercase tracking-wide text-mist/80">
              Explore
            </p>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href="#products"
                className="font-body text-[13.5px] text-mist/60 hover:text-amber"
              >
                Equipment categories
              </a>
              <a
                href="#showcase"
                className="font-body text-[13.5px] text-mist/60 hover:text-amber"
              >
                Recent installations
              </a>
              <a
                href="#contact"
                className="font-body text-[13.5px] text-mist/60 hover:text-amber"
              >
                Request a quote
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-body text-[12.5px] text-mist/40">
            &copy; {new Date().getFullYear()} Accon Scientific/Laboratory
            Equipment. All rights reserved.
          </p>
          <p className="font-body text-[12.5px] text-mist/40">
            Mazamaza, Lagos, Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
}
