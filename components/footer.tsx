export function Footer() {
  return (
    <footer className="border-t border-[color:var(--line)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-faint sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>© {new Date().getFullYear()} Ephraim Iyanda</p>
        <p className="font-mono text-[11px] uppercase tracking-[0.16em]">
          Built with care & caffeine
        </p>
      </div>
    </footer>
  );
}
