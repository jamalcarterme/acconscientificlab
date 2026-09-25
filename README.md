# Accon Scientific/Laboratory Equipment — Homepage

A premium, SEO-optimized, lead-generation homepage built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **Motion** (the Framer Motion successor), for Accon Scientific/Laboratory Equipment, Mazamaza, Lagos.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

To build for production:

```bash
npm run build
npm run start
```

## What's included

- **Hero section** with a "ringing" call-to-action button — an expanding pulse ring animation that draws the eye without the button ever changing size or position (see `components/RingCTA.tsx`).
- **Manual + auto-scrolling slider** (`components/Slider.tsx`) showcasing recent installations — auto-advances every 4.5s, pauses on hover, with prev/next arrows and clickable progress-bar dots.
- **Equipment categories, "Why Accon," testimonial-style showcase, mid-page CTA banner, and a lead-capture enquiry form** wired to `app/api/enquiry/route.ts`.
- **SEO**: metadata + Open Graph + Twitter cards in `app/layout.tsx`, `MedicalBusiness` JSON-LD structured data (address, phone, geo, map link), `app/sitemap.ts`, `app/robots.ts`, semantic headings, descriptive alt text on every image.
- **Sticky mobile call/WhatsApp bar** (`components/FloatingContact.tsx`) for on-the-go conversions.
- Images sourced from Unsplash via `next/image` (remote pattern already configured in `next.config.js`).
- Motion animation used deliberately in one place per section (hero entrance, slide transitions) rather than scattered on every element, per modern UI best practice.

## Before going live — action items

1. **Wire the enquiry form to email/CRM.** `app/api/enquiry/route.ts` currently validates and logs submissions. Connect it to Resend, SendGrid, Nodemailer/SMTP, or a CRM webhook so leads actually reach the sales team.
2. **Replace `siteUrl`** in `app/layout.tsx` and `app/sitemap.ts` with the real production domain once one is chosen/purchased.
3. **Swap in real photography** of your own showroom, staff and equipment where possible — Unsplash stock images are used as placeholders and are great for launch, but real photos convert better long-term. Just replace the `src` URLs in `components/Hero.tsx`, `Products.tsx`, `WhyUs.tsx`, and `Slider.tsx`.
4. **Verify the phone number/WhatsApp link** (`+2348037428180`) and Google Maps link across `Header.tsx`, `Contact.tsx`, `Footer.tsx`, and `FloatingContact.tsx` if they ever change.
5. **Add Google Search Console + Analytics** (e.g. GA4 or Plausible) once deployed.
6. **Deploy** — this project deploys with zero config on Vercel, or any Node.js host that supports Next.js.

## Tech stack

- Next.js 14 (App Router, TypeScript)
- Tailwind CSS (custom design tokens in `tailwind.config.ts`)
- Motion (`motion/react`) for animation
- lucide-react for icons
