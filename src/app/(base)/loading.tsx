import React from "react";

export default function Loading() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-[#fef9f4]">
      <div className="w-16 h-16 border-4 border-t-4 border-gray-700 border-t-transparent rounded-full animate-spin mb-4" />
    </div>
  );
}
