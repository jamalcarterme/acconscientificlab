"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, Loader2, Check } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-10">
        <div>
          <p className="font-body text-[13px] font-semibold uppercase tracking-[0.2em] text-teal">
            Get in touch
          </p>
          <h2 className="mt-3 font-head text-[2rem] font-extrabold leading-tight text-ink sm:text-4xl">
            Speak with our equipment team.
          </h2>
          <p className="mt-4 max-w-sm font-body text-[15.5px] leading-relaxed text-slate">
            Send us your equipment list or requirements and we'll get back to
            you with a quotation and lead time.
          </p>

          <div className="mt-10 space-y-6">
            <div className="flex gap-4">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-teal" />
              <div>
                <p className="font-head text-[15px] font-bold text-ink">
                  Showroom & office
                </p>
                <p className="font-body text-[14.5px] text-slate">
                  16 Old Ojo Rd, Mazamaza, Lagos 102102, Nigeria
                </p>
                <a
                  href="https://maps.app.goo.gl/kGFSraVjdHFdSzy58"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block font-body text-[13.5px] font-semibold text-teal underline underline-offset-2"
                >
                  View on Google Maps
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-teal" />
              <div>
                <p className="font-head text-[15px] font-bold text-ink">
                  Phone
                </p>
                <a
                  href="tel:+2348037428180"
                  className="font-body text-[14.5px] text-slate hover:text-teal"
                >
                  0803 742 8180
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <MessageCircle className="mt-1 h-5 w-5 shrink-0 text-teal" />
              <div>
                <p className="font-head text-[15px] font-bold text-ink">
                  WhatsApp
                </p>
                <a
                  href="https://wa.me/2348037428180"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-[14.5px] text-slate hover:text-teal"
                >
                  Chat with us directly
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <Mail className="mt-1 h-5 w-5 shrink-0 text-teal" />
              <div>
                <p className="font-head text-[15px] font-bold text-ink">
                  Business hours
                </p>
                <p className="font-body text-[14.5px] text-slate">
                  Mon &ndash; Sat, 8:00am &ndash; 6:00pm
                </p>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="border border-line bg-mist p-7 sm:p-9"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label className="mb-1.5 block font-body text-[13px] font-semibold text-ink">
                Full name
              </label>
              <input
                required
                name="name"
                type="text"
                className="w-full border border-line bg-white px-4 py-3 font-body text-[14.5px] text-ink outline-none focus:border-teal"
              />
            </div>
            <div className="sm:col-span-1">
              <label className="mb-1.5 block font-body text-[13px] font-semibold text-ink">
                Phone number
              </label>
              <input
                required
                name="phone"
                type="tel"
                className="w-full border border-line bg-white px-4 py-3 font-body text-[14.5px] text-ink outline-none focus:border-teal"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1.5 block font-body text-[13px] font-semibold text-ink">
                Email address
              </label>
              <input
                required
                name="email"
                type="email"
                className="w-full border border-line bg-white px-4 py-3 font-body text-[14.5px] text-ink outline-none focus:border-teal"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1.5 block font-body text-[13px] font-semibold text-ink">
                Facility / organisation
              </label>
              <input
                name="organisation"
                type="text"
                className="w-full border border-line bg-white px-4 py-3 font-body text-[14.5px] text-ink outline-none focus:border-teal"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1.5 block font-body text-[13px] font-semibold text-ink">
                Equipment needed
              </label>
              <textarea
                required
                name="message"
                rows={4}
                className="w-full resize-none border border-line bg-white px-4 py-3 font-body text-[14.5px] text-ink outline-none focus:border-teal"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="relative mt-6 inline-flex w-full items-center justify-center gap-2 bg-ink px-6 py-4 font-head text-[15px] font-semibold text-mist transition-colors hover:bg-ink-2 disabled:opacity-70 sm:w-auto"
          >
            {status === "sending" && <Loader2 className="h-4 w-4 animate-spin" />}
            {status === "sent" && <Check className="h-4 w-4 text-amber" />}
            {status === "sending"
              ? "Sending..."
              : status === "sent"
              ? "Enquiry sent"
              : "Send enquiry"}
          </button>

          {status === "sent" && (
            <p className="mt-3 font-body text-[13.5px] text-teal">
              Thanks — a member of our team will contact you shortly.
            </p>
          )}
          {status === "error" && (
            <p className="mt-3 font-body text-[13.5px] text-red-600">
              Something went wrong. Please call 0803 742 8180 instead.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
