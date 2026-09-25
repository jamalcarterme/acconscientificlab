const stats = [
  { value: "500+", label: "Facilities equipped" },
  { value: "1,200+", label: "Instruments supplied" },
  { value: "36", label: "States reached" },
  { value: "24/7", label: "Technical support line" },
];

export default function TrustBar() {
  return (
    <section className="border-b border-line bg-mist">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-10 sm:grid-cols-4 lg:px-10">
        {stats.map((s) => (
          <div key={s.label} className="text-center sm:text-left">
            <p className="font-head text-3xl font-extrabold text-ink">
              {s.value}
            </p>
            <p className="mt-1 font-body text-[13px] text-slate">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
