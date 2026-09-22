import { Link } from "react-router-dom";
import { ChevronRight, MapPin } from "lucide-react";
import { dioceses } from "@/app/data/home";
import { SectionHeading } from "@/app/components/shared/SectionHeading";

export function DiocesesSection() {
  const maxServants = Math.max(...dioceses.map((d) => d.servants));

  return (
    <section id="dioceses" className="py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          kicker="Présence nationale"
          title="Nos Diocèses"
          subtitle="La CSM est présente dans 12 diocèses à travers tout le Bénin, du littoral au Sahel."
          centered
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {dioceses.map((diocese) => (
            <Link
              key={diocese.name}
              to="/dioceses"
              className="group bg-card border border-border hover:border-primary/30 rounded-lg p-5 transition-all hover:shadow-md"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 bg-secondary rounded-md flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <MapPin className="w-4 h-4 text-primary" aria-hidden="true" />
                </div>
                <span className="label-caps text-[10px] text-muted-foreground border border-border rounded px-2 py-0.5">
                  {diocese.diocese}
                </span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                {diocese.name}
              </h3>
              <p className="text-xs text-muted-foreground">{diocese.servants} servants</p>
              <div className="mt-4 h-1 bg-muted rounded overflow-hidden" aria-hidden="true">
                <div
                  className="h-full bg-primary rounded transition-all duration-500"
                  style={{ width: `${(diocese.servants / maxServants) * 100}%` }}
                />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/dioceses"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
          >
            Voir tous les diocèses <ChevronRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
