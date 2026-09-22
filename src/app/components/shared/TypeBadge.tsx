const typeStyles: Record<string, string> = {
  Spiritualité: "bg-secondary text-primary",
  Animation: "bg-red-50 text-accent",
  Formation: "bg-blue-50 text-primary",
  Liturgie: "bg-red-100 text-accent",
};

export function TypeBadge({ type }: { type: string }) {
  return (
    <span className={`label-caps shrink-0 px-2 py-0.5 rounded ${typeStyles[type] ?? "bg-muted text-muted-foreground"}`}>
      {type}
    </span>
  );
}
