import { Coffee } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function BMC() {
  return (
    <div className="absolute top-3 right-3 z-50">
      <Link href={"#"} className="flex items-center gap-2">
        <span>Buy me a Coffee</span>
        <Coffee size={18} />
      </Link>
    </div>
  );
}
