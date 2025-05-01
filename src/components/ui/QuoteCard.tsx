"use client";

import { quoteStyles } from "@/utils/quoteStyles";
import Image from "next/image";

interface QuoteCardProps {
  quote: string;
  author: string;
  type: keyof typeof quoteStyles;
}

export default function QuoteCard({ quote, author, type }: QuoteCardProps) {
  const style = quoteStyles[type] || quoteStyles.motivation;

  return (
    <main
      className={`min-h-screen flex items-center justify-center px-4 ${style.bg}`}
    >
      <div className="text-center max-w-md mx-auto">
        <p className={`font-serif text-lg leading-relaxed ${style.text}`}>
          {quote}
        </p>

        <p
          className={`text-xs mt-2 tracking-widest uppercase font-light ${style.accent}`}
        >
          {author}
        </p>
        <Image
          width={300}
          height={300}
          quality={100}
          src="/flowers.png"
          alt="flowers"
          className="mx-auto mt-8 w-32 sm:w-40"
        />
      </div>
    </main>
  );
}
