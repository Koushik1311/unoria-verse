import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UnoriaVerse – Quotes That Feel",
  description:
    "UnoriaVerse is a quiet space to reflect. Type how you're feeling and receive a quote that resonates. No noise. Just presence.",
  metadataBase: new URL("https://unoriaverse.vercel.app"),
  openGraph: {
    title: "UnoriaVerse – Quotes That Feel",
    description:
      "Start with a feeling. Get a quote that understands. UnoriaVerse is a calm space for introspection.",
    url: "https://unoriaverse.vercel.app",
    siteName: "UnoriaVerse",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "UnoriaVerse – Quotes That Feel",
    description:
      "A minimal emotional space where you type how you feel and receive quotes that resonate. Built by a solo dev with care.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script src="https://assets.lemonsqueezy.com/lemon.js" defer />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster position="top-right" duration={2500} />
      </body>
    </html>
  );
}
