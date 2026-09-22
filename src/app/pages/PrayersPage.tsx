import { Download, Share2 } from "lucide-react";
import { prayerOfDay } from "@/app/data/home";
import { BackLink, PageShell } from "@/app/components/shared/PageShell";
import { CrossMotif } from "@/app/components/shared/CrossMotif";

export function PrayersPage() {
  return (
    <main id="main-content" className="pt-16 lg:pt-[4.5rem]">
      <PageShell title="Prières et Spiritualité" subtitle="Bibliothèque de prières pour les servants de messe.">
        <BackLink to="/">← Retour à l&apos;accueil</BackLink>
        <div className="mt-10 max-w-3xl bg-secondary border border-border rounded-xl p-8 text-center">
          <CrossMotif className="w-10 h-10 text-primary mx-auto mb-4" />
          <blockquote className="font-serif text-xl italic text-primary leading-relaxed mb-4">
            « {prayerOfDay.text} »
          </blockquote>
          <cite className="label-caps text-muted-foreground text-xs not-italic">{prayerOfDay.source}</cite>
          <p className="text-muted-foreground text-xs mt-2">{prayerOfDay.saint}</p>
          <div className="flex justify-center gap-3 mt-6">
            <button
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2 border border-border bg-background rounded-md text-sm"
            >
              <Share2 className="w-3.5 h-3.5" /> Partager
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2 border border-border bg-background rounded-md text-sm"
            >
              <Download className="w-3.5 h-3.5" /> PDF
            </button>
          </div>
        </div>
      </PageShell>
    </main>
  );
}
