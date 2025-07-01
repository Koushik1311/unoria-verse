export default function BMC() {
  const checkoutUrl = process.env.LEMON_SQUEEZY_CHECKOUT_URL;

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <a
        href={checkoutUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 shadow-[0_4px_12px_rgba(0,0,0,0.15)] bg-[#f5e0c3] text-[#6e4b2f] hover:bg-[#ffe8d2] hover:scale-105 hover:shadow-[0_6px_16px_rgba(0,0,0,0.2)]"
      >
        ❤️ Support
      </a>
    </div>
  );
}
