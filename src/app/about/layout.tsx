import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About – UnoriaVerse",
  description:
    "The personal journey behind UnoriaVerse — how a simple quote generator turned into an emotional space online.",
  openGraph: {
    title: "About – UnoriaVerse",
    description:
      "Discover the human story behind UnoriaVerse, a quiet corner of the web designed for reflection and emotional presence.",
    url: "https://unoriaverse.vercel.app/about",
    siteName: "UnoriaVerse",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "About – UnoriaVerse",
    description:
      "UnoriaVerse is a soft, personal project born from anxiety, reflection, and a love of quotes. Here's why it exists.",
  },
};

export default function AboutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div>{children}</div>;
}
