import { stats } from "@/app/data/home";

export function StatsBar() {
  return (
    <section className="bg-background border-b border-border py-10" aria-label="Chiffres clés">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 lg:divide-x lg:divide-border">
          {stats.map(({ value, label, icon: Icon }) => (
            <div key={label} className="text-center px-4">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Icon className="w-4 h-4 text-accent" aria-hidden="true" />
                <span className="font-serif text-3xl font-semibold text-primary">{value}</span>
              </div>
              <span className="label-caps text-muted-foreground text-xs">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
