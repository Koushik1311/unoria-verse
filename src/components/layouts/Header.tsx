import { Dancing_Script } from "next/font/google";
import Link from "next/link";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
});

export default function Header() {
  return (
    <div className={`${dancingScript.className} absolute top-3 left-3`}>
      <Link href={"/"} className="text-gray-800 text-3xl font-bold">
        UnoriaVerse
      </Link>
    </div>
  );
}
