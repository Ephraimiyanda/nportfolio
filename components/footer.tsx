export function Footer() {
  return (
    <footer className="w-full flex items-center justify-center text-center py-6 text-sm text-default-500 border-black/10 dark:border-white/15 border-t-[0.5px]">
      <p>
        &copy; {new Date().getFullYear()} Ephraim Iyanda. Built with ❤️ &
        caffeine ☕
      </p>
    </footer>
  );
}
