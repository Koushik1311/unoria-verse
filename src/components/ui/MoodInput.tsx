"use client";

import { useMoodStore } from "@/store/moodStore";
import { ArrowUp } from "lucide-react";
import { FormEvent, useState } from "react";
import { toast } from "sonner";

const allowedMoods = [
  "happy",
  "sad",
  "angry",
  "anxious",
  "peaceful",
  "confused",
  "inspired",
  "lonely",
  "motivated",
] as const;

export default function MoodInput() {
  const [inputValue, setInputValue] = useState("");
  const { mood, setMood } = useMoodStore();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const input = inputValue.trim();
    if (!input) {
      toast.error("Please enter your mood or feelings");
      return;
    }

    const words = input.split(/\s+/);

    if (words.length === 1) {
      const singleWord = words[0].toLowerCase();
      if (allowedMoods.includes(singleWord as (typeof allowedMoods)[number])) {
        setMood(singleWord as (typeof allowedMoods)[number]);
        setInputValue(singleWord);
      } else {
        toast.error("Invalid input");
      }
    }

    console.log("Mood: ", mood);
    console.log("Input Value: ", inputValue);

    if (words.length > 1) {
      // TODO: Call the backend api
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as unknown as FormEvent<HTMLFormElement>);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="relative">
        <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
          {allowedMoods.map((moodOption) => (
            <button
              key={moodOption}
              type="button"
              onClick={() => {
                setMood(moodOption);
                setInputValue(moodOption);
              }}
              className={`px-4 py-1.5 capitalize rounded-full text-sm font-medium transition-colors cursor-pointer
              ${
                mood === moodOption
                  ? "bg-[#d4a373] text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
            >
              {moodOption}
            </button>
          ))}
        </div>

        <textarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a mood or share how you're feeling today..."
          className={`w-full border border-[#d4a373] rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#d4a373] bg-white bg-opacity-80 placeholder-gray-500 min-h-[100px] resize-none italic font-normal`}
        />
        {inputValue.trim() && (
          <div className="absolute right-1.5 bottom-3">
            <button
              type="submit"
              className="bg-[#d4a373] text-white p-1.5 flex items-center justify-center rounded-full text-sm hover:bg-[#bc8d62] transition"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        )}
      </form>
      <p className={`text-[#D4A373] text-sm italic mt-4`}>
        Your emotions are valid. Let&apos;s start with a feeling.
      </p>
    </>
  );
}
