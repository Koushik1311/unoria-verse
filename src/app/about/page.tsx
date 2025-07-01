export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center text-[#3c2f2f]">
      <h1 className="text-3xl font-bold mb-6">🌱 How UnoriaVerse Was Born</h1>

      <p className="text-base mb-6 leading-relaxed">
        My very first project in the JavaScript ecosystem was a random quote
        generator.
        <br />
        <br />
        I didn&apos;t think much of it back then — just something small I built
        while learning.
        <br />
        Funny enough, that little project landed me my first internship.
      </p>

      <p className="text-base mb-6 leading-relaxed">
        The first two internships I got were unpaid. It was rough at times.
        <br />
        I doubted myself, felt anxious, and often wondered if I was even moving
        forward.
        <br />
        But I stuck with it — kept learning, kept building. Eventually, I got my
        first paid internship.
        <br />I just finished that recently, and now I&apos;m working on a
        freelance e-commerce project.
      </p>

      <p className="text-base mb-6 leading-relaxed">
        Somewhere in between all that, I even launched my first SaaS app.
        <br />
        It didn&apos;t go viral or anything — but it did reach 8th place on the
        daily Product Hunt ranking.
        <br />
        That might not sound like much, but I didn&apos;t do any marketing.
        <br />
        I&apos;m not very social — I&apos;m more of an introvert. So for me,
        that felt like something.
      </p>

      <p className="text-base mb-6 leading-relaxed">
        The truth is, even with all these small wins, I still get anxious.
        <br />
        Sometimes after finishing a project, I just sit there thinking:
        <br />
        <em>&quot;What now?&quot;</em>
        <br />
        <em>&quot;Will my next idea even matter?&quot;</em>
        <br />
        <em>&quot;Is building a micro-SaaS really worth it?&quot;</em>
      </p>

      <p className="text-base mb-6 leading-relaxed">
        When those thoughts pile up, it&apos;s hard to stay motivated.
        <br />
        But then I read something — a quote, a line, a voice on YouTube — and
        somehow, it helps.
        <br />
        It gives me that tiny push to keep going.
        <br />
        So I thought: what if I take my first ever project — that random quote
        generator —
        <br />
        and bring it back, but this time with feeling?
      </p>

      <p className="text-base mb-6 leading-relaxed">
        That idea became <strong>UnoriaVerse</strong>.
        <br />
        A small, quiet space where you can start with a feeling and leave with a
        thought that moves you.
        <br />
        It&apos;s simple, personal, and growing — just like me.
      </p>

      <hr className="my-8 border-[#e0cfc3]" />

      <h2 className="text-xl font-semibold mb-3">🛠 What It Offers</h2>
      <ul className="text-sm text-left mb-6 list-disc list-inside space-y-2">
        <li>Mood-based quote discovery using free AI</li>
        <li>No signups, no noise — just type how you feel</li>
        <li>Gentle design for emotional breathing room</li>
        <li>Optional support button to help it stay alive</li>
        <li>
          More features like tone-aware responses with advanced AI coming soon
        </li>
      </ul>

      <hr className="my-8 border-[#e0cfc3]" />

      <h2 className="text-xl font-semibold mb-3">🔍 Roadmap & Feedback</h2>
      <p className="text-sm mb-4">
        I believe in building openly. You can see what&apos;s coming next and
        share your thoughts.
      </p>
      <div className="flex justify-center gap-4 text-sm">
        <a
          href="https://trapezoidal-hill-cab.notion.site/UnoriaVerse-Roadmap-Progress-222dde6b3f988020baa2c140622fb65f?source=copy_link"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-yellow-600"
        >
          📌 View the Roadmap
        </a>
        <a
          href="https://tally.so/r/3NxbKb"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-yellow-600"
        >
          💬 Leave Feedback
        </a>
      </div>

      <hr className="my-8 border-[#e0cfc3]" />

      <h2 className="text-xl font-semibold mb-3">☕ Support the Project</h2>
      <p className="text-sm mb-4">
        If this little moment helped you breathe, you can help me keep it alive.
      </p>
      <a
        href="https://diarist.lemonsqueezy.com/buy/ae352f83-3ef3-4ddf-b416-9c88a4fa0a17?embed=1&media=0&logo=0&discount=0"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-yellow-300 text-[#6e4b2f] px-4 py-2 rounded-md text-sm font-medium hover:bg-yellow-400 transition-all shadow-sm"
      >
        ❤️ Support UnoriaVerse
      </a>

      <hr className="my-8 border-[#e0cfc3]" />

      <p className="text-xs text-gray-500 italic mt-6">
        Built in India by someone who feels too much — and wanted a quiet space
        to feel less alone.
      </p>
    </div>
  );
}
