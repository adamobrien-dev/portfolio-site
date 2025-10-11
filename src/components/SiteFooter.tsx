export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-white/60">
        © {new Date().getFullYear()} Adam O'Brien. Placeholders today, shipping tomorrow.
      </div>
    </footer>
  );
}

