import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import { PageIntro } from "@/components/PageIntro";
import "./globals.css";

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
    type: "website",
    locale: "es_CL",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-ink-50">
        <PageIntro />
        {children}
      </body>
    </html>
  );
}
