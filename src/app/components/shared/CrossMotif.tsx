export function CrossMotif({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" fill="none" className={className} aria-hidden="true">
      <rect x="34" y="4" width="12" height="72" rx="2" fill="currentColor" />
      <rect x="4" y="28" width="72" height="12" rx="2" fill="currentColor" />
    </svg>
  );
}
