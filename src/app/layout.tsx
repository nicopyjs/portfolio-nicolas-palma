import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
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
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-ink-50">{children}</body>
    </html>
  );
}
