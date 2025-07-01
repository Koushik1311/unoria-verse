import BMC from "@/components/layouts/BMC";
import React from "react";

export default function BaseLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="relative">
      <BMC />
      {children}
    </div>
  );
}
