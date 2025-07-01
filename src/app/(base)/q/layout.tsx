import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "UnoriaVerse – Start with a Feeling",
  description:
    "Type how you're feeling and let UnoriaVerse find a quote that speaks to your mood. Soft, minimal, and emotionally aware.",
  openGraph: {
    title: "UnoriaVerse – Start with a Feeling",
    description:
      "A minimal and calming space to explore your emotions through curated quotes. Built with care by an indie developer.",
    url: "https://unoriaverse.vercel.app",
    siteName: "UnoriaVerse",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "UnoriaVerse – Start with a Feeling",
    description:
      "UnoriaVerse lets you type a feeling and receive a quote that resonates. A soft emotional space for introspection.",
  },
};

export default function QLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div>{children}</div>;
}
