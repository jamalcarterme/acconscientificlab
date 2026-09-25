import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-archivo",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://www.acconscientific.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Accon Scientific | Medical & Laboratory Equipment Suppliers, Lagos",
    template: "%s | Accon Scientific",
  },
  description:
    "Accon Scientific/Laboratory Equipment supplies medical and laboratory instruments, diagnostic machines, glassware and consumables to hospitals, clinics and research labs across Nigeria. Based in Mazamaza, Lagos. Request a quote today.",
  keywords: [
    "medical laboratory equipment Nigeria",
    "laboratory equipment supplier Lagos",
    "medical equipment supplier Lagos",
    "hospital equipment Nigeria",
    "diagnostic equipment supplier",
    "Accon Scientific",
    "laboratory equipment Mazamaza",
  ],
  authors: [{ name: "Accon Scientific/Laboratory Equipment" }],
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: siteUrl,
    siteName: "Accon Scientific/Laboratory Equipment",
    title: "Accon Scientific | Medical & Laboratory Equipment Suppliers, Lagos",
    description:
      "Trusted supplier of medical and laboratory equipment to hospitals, clinics and research labs across Nigeria. Get a fast, no-obligation quote.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Laboratory equipment supplied by Accon Scientific",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accon Scientific | Medical & Laboratory Equipment Suppliers, Lagos",
    description:
      "Trusted supplier of medical and laboratory equipment to hospitals, clinics and research labs across Nigeria.",
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Accon Scientific/Laboratory Equipment",
  image:
    "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1200&auto=format&fit=crop",
  "@id": siteUrl,
  url: siteUrl,
  telephone: "+2348037428180",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "16 Old Ojo Rd, Mazamaza",
    addressLocality: "Lagos",
    postalCode: "102102",
    addressRegion: "Lagos",
    addressCountry: "NG",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 6.4577,
    longitude: 3.2825,
  },
  hasMap: "https://maps.app.goo.gl/kGFSraVjdHFdSzy58",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${archivo.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
