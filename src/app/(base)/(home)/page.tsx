import MoodInput from "@/components/ui/MoodInput";
import { quoteStyles } from "@/utils/quoteStyles";
import Link from "next/link";

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

        <div className="mt-6 text-xs text-center text-gray-500 space-x-4">
          <Link href={"/about"} className="hover:underline">
            Why I Made This
          </Link>
          <span>·</span>
          <a
            href="https://trapezoidal-hill-cab.notion.site/UnoriaVerse-Roadmap-Progress-222dde6b3f988020baa2c140622fb65f?source=copy_link"
            className="hover:underline"
            target="_blank"
          >
            Roadmap
          </a>
          <span>·</span>
          <a
            href="https://tally.so/r/3NxbKb"
            className="hover:underline"
            target="_blank"
          >
            Feedback
          </a>
          <span>.</span>
          <a
            href="https://github.com/Koushik1311/unoria-verse"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </main>
  );
}
