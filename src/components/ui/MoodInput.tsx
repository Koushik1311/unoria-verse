"use client";

import { quoteStyles } from "@/utils/quoteStyles";
import Image from "next/image";
import { useState } from "react";

export default function MoodInput() {
  const [mood, setMood] = useState("");
  const style = quoteStyles.motivated;

  return (
    <>
      <input
        type="text"
        value={mood}
        onChange={(e) => setMood(e.target.value)}
        placeholder="Type something like 'I'm feeling motivated...'"
        className={`w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white bg-opacity-80 placeholder-gray-500`}
      />

      <p className={`${style.accent} text-sm italic`}>
        Your emotions are valid. Let’s start with a feeling.
      </p>

      <div className="flex justify-center mt-8">
        <Image
          width={300}
          height={300}
          quality={100}
          src={"/flowers/flowers.png"}
          alt="decorative flower"
          className="mx-auto mt-8 w-32 sm:w-40"
        />
      </div>
    </>
  );
}
