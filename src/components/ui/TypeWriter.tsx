"use client";

import { useEffect, useState } from "react";

export default function TypeWriter({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, getRandomDelay());

      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  const getRandomDelay = () => {
    return 180 + Math.random() * 180;
  };

  return (
    <div className="bg-paper min-h-screen flex items-center justify-center p-4">
      <div className="bg-white/90 shadow-lg rounded-lg max-w-2xl w-full p-8 md:p-12 border border-gray-300 text-gray-800 font-mono text-lg whitespace-pre-wrap">
        {displayedText}
      </div>
    </div>
  );
}
