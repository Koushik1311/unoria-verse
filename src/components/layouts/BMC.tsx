"use client";

import { Coffee } from "lucide-react";

export default function BMC() {
  return (
    <div className="absolute top-3 right-3 z-50">
      <a
        href="https://diarist.lemonsqueezy.com/buy/ae352f83-3ef3-4ddf-b416-9c88a4fa0a17?embed=1&media=0&logo=0&discount=0"
        className="flex items-center gap-2 text-sm px-3 py-1 bg-yellow-300 rounded hover:bg-yellow-400 transition-colors lemonsqueezy-button"
      >
        <span>Buy me a Coffee</span>
        <Coffee size={18} />
      </a>
    </div>
  );
}
