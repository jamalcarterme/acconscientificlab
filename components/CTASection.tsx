import RingCTA from "./RingCTA";

export default function CTASection() {
  return (
    <section className="bg-teal">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-6 py-16 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div>
          <h2 className="max-w-lg font-head text-2xl font-extrabold leading-tight text-white sm:text-3xl">
            Need a quotation for your lab or hospital?
          </h2>
          <p className="mt-3 max-w-md font-body text-[15px] text-white/80">
            Tell us what you need and we'll respond with pricing and
            availability within one business day.
          </p>
        </div>
        <RingCTA href="#contact" label="Request a Quote" variant="solid" />
      </div>
    </section>
  );
}
