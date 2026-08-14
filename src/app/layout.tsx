import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import { PageIntro } from "@/components/PageIntro";
import { profile } from "@/lib/data";
import "./globals.css";

const SITE_URL = "https://portfolio-nicolas-palma.vercel.app";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  description: profile.summary,
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  url: SITE_URL,
  address: {
    "@type": "PostalAddress",
    addressLocality: profile.location,
  },
  sameAs: [profile.github, profile.linkedin],
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Nicolás Palma Marín — Ingeniero en Informática",
  description:
    "Portafolio de Nicolás Palma Marín, Ingeniero en Informática especializado en Business Intelligence, desarrollo de software y automatización de procesos.",
  keywords: [
    "Nicolás Palma",
    "Ingeniero en Informática",
    "Business Intelligence",
    "Power BI",
    "Desarrollador Full Stack",
    "Chile",
  ],
  authors: [{ name: "Nicolás Palma Marín" }],
  openGraph: {
    title: "Nicolás Palma Marín — Ingeniero en Informática",
    description:
      "Business Intelligence, desarrollo de software y automatización de procesos.",
    url: SITE_URL,
    siteName: "Nicolás Palma Marín",
    type: "website",
    locale: "es_CL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nicolás Palma Marín — Ingeniero en Informática",
    description:
      "Business Intelligence, desarrollo de software y automatización de procesos.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-ink-50">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <PageIntro />
        {children}
      </body>
    </html>
  );
}
