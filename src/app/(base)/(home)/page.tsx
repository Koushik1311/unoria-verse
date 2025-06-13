import MoodInput from "@/components/ui/MoodInput";
import { quoteStyles } from "@/utils/quoteStyles";

export default function Home() {
  const style = quoteStyles.motivated;

  return (
    <main
      className={`${style.bg} ${style.text} min-h-screen flex flex-col items-center justify-center px-4`}
    >
      <div className="max-w-xl text-center space-y-6">
        <h1 className={`text-2xl sm:text-3xl font-semibold`}>
          How are you feeling today?
        </h1>

        <MoodInput />
      </div>
    </main>
  );
}
