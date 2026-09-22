import { Calendar, Clock, MapPin } from "lucide-react";
import { events } from "@/app/data/home";
import { BackLink, PageShell } from "@/app/components/shared/PageShell";
import { TypeBadge } from "@/app/components/shared/TypeBadge";

export function EventsPage() {
  return (
    <main id="main-content" className="pt-16 lg:pt-[4.5rem]">
      <PageShell title="Événements" subtitle="Calendrier des activités liturgiques, formations et rencontres fraternelles.">
        <BackLink to="/">← Retour à l&apos;accueil</BackLink>
        <div className="space-y-4 mt-10 max-w-3xl">
          {events.map((event) => (
            <article key={event.id} className="flex gap-4 bg-card border border-border rounded-lg p-5">
              <div className="shrink-0 w-14 h-14 bg-primary rounded-md text-primary-foreground flex flex-col items-center justify-center">
                <span className="font-serif text-xl font-semibold">{event.day}</span>
                <span className="label-caps text-[9px] text-white/80">{event.month}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h2 className="font-semibold text-foreground">{event.title}</h2>
                  <TypeBadge type={event.type} />
                </div>
                <p className="text-sm text-muted-foreground flex items-center gap-1 mb-1">
                  <MapPin className="w-3.5 h-3.5 text-primary" /> {event.location}
                </p>
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-primary" /> {event.time}
                </p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground flex items-center gap-2">
          <Calendar className="w-4 h-4 text-primary" /> Vue calendrier complet - prochainement.
        </p>
      </PageShell>
    </main>
  );
}
