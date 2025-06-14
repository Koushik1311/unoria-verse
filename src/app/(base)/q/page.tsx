import QuoteCard from "@/components/ui/QuoteCard";

export default function Home() {
  return (
    <div>
      <QuoteCard
        quote={`<p>I must not fear.</p>
          <p><strong>Fear is the mind-killer.</strong></p>
          <p><strong>Fear is the little-death that brings total obliteration.</strong></p>
          
          <p>I will face my fear.</p>
          <p>I will permit it to pass over me and through me.</p>
          
          <p><strong>And when it has gone past I will turn the inner eye to see its path.</strong></p>
          <p><strong>Where the fear has gone there will be nothing.</strong></p>
          <p><strong>Only I will remain.</strong></p>`}
        author="Frank Herbert, Dune"
        type="motivated"
        keyId="1"
      />
    </div>
  );
}
