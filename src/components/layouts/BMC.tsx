"use client";

import { useState } from "react";

export default function BMC() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <a
        href="https://diarist.lemonsqueezy.com/buy/ae352f83-3ef3-4ddf-b416-9c88a4fa0a17?embed=1&media=0&logo=0&discount=0"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 shadow-[0_4px_12px_rgba(0,0,0,0.15)] bg-[#f5e0c3] text-[#6e4b2f] hover:bg-[#ffe8d2] hover:scale-105 hover:shadow-[0_6px_16px_rgba(0,0,0,0.2)]"
      >
        {/* <span>{isHovered ? "💛 Support the calm" : "☕ Support"}</span> */}
        {isHovered
          ? "💛 If this moment mattered to you, a small tip helps me keep going."
          : "❤️ Support"}
      </a>
    </div>
  );
}
