import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const points = [
  {
    title: "Verified equipment sources",
    body: "Every instrument is sourced from manufacturers and distributors we've vetted, with documentation supplied on request.",
  },
  {
    title: "Installation & calibration",
    body: "Our technicians install, calibrate and commission equipment on-site so your lab is running from day one.",
  },
  {
    title: "Spare parts & servicing",
    body: "We stock consumables and spare parts locally, keeping repair turnaround short and equipment downtime low.",
  },
  {
    title: "Procurement support",
    body: "We assist with specification sheets, quotations and tender documentation for hospitals and institutions.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-mist py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <div className="relative aspect-[4/5] w-full overflow-hidden lg:aspect-auto">
          <Image
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1000&auto=format&fit=crop"
            alt="Accon Scientific technician inspecting laboratory instruments"
            fill
            sizes="(max-width: 1024px) 90vw, 45vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="font-body text-[13px] font-semibold uppercase tracking-[0.2em] text-teal">
            Why labs choose Accon
          </p>
          <h2 className="mt-3 max-w-lg font-head text-[2rem] font-extrabold leading-tight text-ink sm:text-4xl">
            A supplier that stays involved after delivery.
          </h2>

          <dl className="mt-10 space-y-8">
            {points.map((p) => (
              <div key={p.title} className="flex gap-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                <div>
                  <dt className="font-head text-[16px] font-bold text-ink">
                    {p.title}
                  </dt>
                  <dd className="mt-1 font-body text-[14.5px] leading-relaxed text-slate">
                    {p.body}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
