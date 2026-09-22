import { Link } from "react-router-dom";
import { Download, Share2 } from "lucide-react";
import { prayerOfDay } from "@/app/data/home";
import { CrossMotif } from "@/app/components/shared/CrossMotif";

export function PrayerSection() {
  return (
    <section id="prayers" className="py-16 lg:py-20 bg-secondary border-y border-border">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <p className="label-caps text-accent text-xs mb-3">Prière du jour</p>
        <CrossMotif className="w-9 h-9 text-primary mx-auto mb-5 opacity-90" />
        <blockquote className="font-serif text-xl sm:text-2xl lg:text-[1.75rem] text-primary font-medium italic leading-relaxed mb-5">
          « {prayerOfDay.text} »
        </blockquote>
        <cite className="label-caps text-muted-foreground text-xs not-italic">{prayerOfDay.source}</cite>
        <p className="mt-2 text-muted-foreground text-xs">{prayerOfDay.saint}</p>
        <div className="flex justify-center gap-3 mt-7">
          <Link
            to="/prieres"
            className="inline-flex items-center gap-2 px-4 py-2 border border-border hover:border-primary/30 text-foreground/80 hover:text-primary text-sm rounded-md transition-colors bg-background"
          >
            <Share2 className="w-3.5 h-3.5" aria-hidden="true" /> Voir toutes les prières
          </Link>
          <button
            type="button"
            className="inline-flex items-center gap-2 px-4 py-2 border border-border hover:border-primary/30 text-foreground/80 hover:text-primary text-sm rounded-md transition-colors bg-background"
          >
            <Download className="w-3.5 h-3.5" aria-hidden="true" /> Télécharger
          </button>
        </div>
      </div>
    </section>
  );
}
