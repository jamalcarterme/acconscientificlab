import Image from "next/image";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    name: "Diagnostic & Analysis",
    items: "Microscopes · Analyzers · Centrifuges",
    img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=900&auto=format&fit=crop",
  },
  {
    name: "Glassware & Consumables",
    items: "Beakers · Flasks · Pipettes · Reagents",
    img: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=900&auto=format&fit=crop",
  },
  {
    name: "Sterilization",
    items: "Autoclaves · Incubators · Sterilizers",
    img: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=900&auto=format&fit=crop",
  },
  {
    name: "Hospital & Clinic Equipment",
    items: "Patient monitors · Beds · Cold storage",
    img: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?q=80&w=900&auto=format&fit=crop",
  },
];

export default function Products() {
  return (
    <section id="products" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 max-w-xl">
          <h2 className="font-head text-[2rem] font-extrabold leading-tight text-ink sm:text-4xl">
            Equipment sourced for accuracy, supplied for uptime.
          </h2>
          <p className="mt-4 font-body text-[16px] leading-relaxed text-slate">
            From single instruments to full laboratory fit-outs, we supply
            equipment across every core category a modern lab or hospital
            needs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <a
              key={c.name}
              href="#contact"
              className="group relative flex aspect-[3/4] flex-col justify-end overflow-hidden bg-ink"
            >
              <Image
                src={c.img}
                alt={c.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover opacity-70 transition-opacity duration-300 group-hover:opacity-45"
              />
              <div className="relative z-10 bg-gradient-to-t from-ink via-ink/70 to-transparent p-5 pt-16">
                <h3 className="font-head text-lg font-bold text-mist">
                  {c.name}
                </h3>
                <p className="mt-1 font-body text-[12.5px] text-mist/70">
                  {c.items}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 font-body text-[13px] font-semibold text-amber opacity-0 transition-opacity group-hover:opacity-100">
                  Enquire <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
