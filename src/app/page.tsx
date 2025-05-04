import QuoteCard from "@/components/ui/QuoteCard";

export default function Home() {
  return (
    <div>
      <QuoteCard
        quote={`<p><em>I must not fear.</em></p>
          <p><strong><em>Fear is the mind-killer.</em></strong></p>
          <p><strong><em>Fear is the little-death that brings total obliteration.</em></strong></p>
          
          <p><em>I will face my fear.</em></p>
          <p><em>I will permit it to pass over me and through me.</em></p>
          
          <p><strong><em>And when it has gone past I will turn the inner eye to see its path.</em></strong></p>
          <p><strong><em>Where the fear has gone there will be nothing.</em></strong></p>
          <p><strong><em>Only I will remain.</em></strong></p>`}
        author="Frank Herbert, Dune"
        type="motivation"
        keyId="1"
      />
    </div>
  );
}
