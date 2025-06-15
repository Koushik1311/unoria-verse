"use client";

import React, { useCallback, useEffect, useState } from "react";
import QuoteCard from "../ui/QuoteCard";
import { Keyboard, Mouse, MoveLeft, MoveRight } from "lucide-react";
import { useMoodStore } from "@/store/moodStore";

type QuoteType = {
  id: string;
  content: string;
  mood:
    | "happy"
    | "sad"
    | "angry"
    | "anxious"
    | "peaceful"
    | "confused"
    | "inspired"
    | "lonely"
    | "motivated";
  author: {
    name: string;
  };
};

export default function Quotes() {
  const [quotes, setQuotes] = useState<QuoteType[] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { mood } = useMoodStore();

  useEffect(() => {
    const getQuotes = async () => {
      try {
        const res = await fetch(`/api/quotes/${mood}`);
        const data = await res.json();
        setQuotes(data);
        console.log(data); // 👈 Your quotes will show here
      } catch (error) {
        console.error("Error fetching quotes:", error);
      }
    };

    getQuotes();
  }, [mood]);

  // Next/Previous Handlers
  const handleNext = useCallback(() => {
    if (!quotes) return;
    setCurrentIndex((prev) => (prev + 1) % quotes.length);
  }, [quotes]);

  const handlePrevious = useCallback(() => {
    if (!quotes) return;
    setCurrentIndex((prev) => (prev - 1 + quotes.length) % quotes.length);
  }, [quotes]);

  // Keyboard Arrow Navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") handleNext();
      else if (event.key === "ArrowLeft") handlePrevious();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrevious]);

  if (!quotes || quotes.length === 0) {
    return <div>Loading...</div>;
  }

  const currentQuote = quotes[currentIndex];

  //   if (quotes === null) {
  //     return notFound();
  //   }
  return (
    <div className="relative">
      <QuoteCard
        author={currentQuote.author.name}
        keyId={currentQuote.id}
        quote={currentQuote.content}
        type={currentQuote.mood}
      />
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
        <button
          onClick={handlePrevious}
          className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20"
        >
          <MoveLeft
            size={16}
            className="cursor-pointer text-gray-400 hover:text-gray-900 transition-colors duration-300"
          />
        </button>
        <div className="flex items-center gap-1">
          <Mouse size={16} className="text-gray-400" />
          <Keyboard size={16} className="text-gray-400" />
        </div>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20"
        >
          <MoveRight
            size={16}
            className="cursor-pointer text-gray-400 hover:text-gray-900 transition-colors duration-300"
          />
        </button>
      </div>
    </div>
  );
}
