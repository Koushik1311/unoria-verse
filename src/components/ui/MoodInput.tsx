"use client";

import { useMoodStore } from "@/store/moodStore";
import { ArrowUp } from "lucide-react";
import { useRouter } from "next/navigation";
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
  const [loading, setLoading] = useState(false);
  const { setMood } = useMoodStore();
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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

        router.push("/q");
      } else {
        toast.error("Invalid input");
      }
    }

    setLoading(true);
    try {
      const BACKEND_AI_URL = process.env.NEXT_PUBLIC_BACKEND_AI_BASE_URL;
      const res = await fetch(`${BACKEND_AI_URL}/api/ai/mood`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userInput: input }),
      });

      const data = await res.json();
      if (res.status === 200 && data.success && data.data.response) {
        setMood(data.data.response as (typeof allowedMoods)[number]);
        router.push("/q");
      } else {
        toast.error("Couldn't understand the mood.");
      }
    } catch (err) {
      toast.error("Something went wrong.");
      console.error("Something went wrong.", err);
    } finally {
      setLoading(false);
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
                inputValue === moodOption
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
              className="bg-[#d4a373] text-white p-1.5 flex items-center justify-center rounded-full text-sm hover:bg-[#bc8d62] transition cursor-pointer disabled:opacity-60"
              disabled={loading}
            >
              {loading ? (
                <svg
                  className="animate-spin h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  ></path>
                </svg>
              ) : (
                <ArrowUp size={18} />
              )}
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
