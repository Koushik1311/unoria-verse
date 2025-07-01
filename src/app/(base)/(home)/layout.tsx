import Header from "@/components/layouts/Header";
import React from "react";

export default function HomeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="relative">
      <Header />
      {/* <Auth /> */}
      {children}
    </div>
  );
}
