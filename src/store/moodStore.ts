import { create } from "zustand";

type Mood =
  | "happy"
  | "sad"
  | "angry"
  | "anxious"
  | "peaceful"
  | "confused"
  | "inspired"
  | "lonely"
  | "motivated";

interface MoodState {
  mood: Mood | "";
  setMood: (mood: Mood | "") => void;
}

export const useMoodStore = create<MoodState>((set) => ({
  mood: "",
  setMood: (mood) => set({ mood }),
}));
