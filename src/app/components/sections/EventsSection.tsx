import { Link } from "react-router-dom";
import { Calendar, Clock, MapPin } from "lucide-react";
import { events } from "@/app/data/home";
import { SectionHeading } from "@/app/components/shared/SectionHeading";
import { TypeBadge } from "@/app/components/shared/TypeBadge";

export function EventsSection() {
  return (
    <section id="events" className="py-16 lg:py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-2">
            <SectionHeading
              title="Prochains Événements"
              subtitle="Retraites, formations, journées sportives et célébrations liturgiques dans tout le Bénin."
            />
            <Link
              to="/evenements"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm rounded-md transition-colors"
            >
              <Calendar className="w-4 h-4" aria-hidden="true" /> Calendrier complet
            </Link>
          </div>

          <div className="lg:col-span-3 space-y-3">
            {events.map((event) => (
              <article
                key={event.id}
                className="group flex gap-4 bg-card rounded-lg p-4 border border-border hover:border-primary/25 hover:shadow-sm transition-all duration-200"
              >
                <div
                  className="shrink-0 w-14 h-14 bg-primary rounded-md text-primary-foreground flex flex-col items-center justify-center leading-none"
                  aria-hidden="true"
                >
                  <span className="font-serif text-xl font-semibold">{event.day}</span>
                  <span className="label-caps text-[9px] text-white/80 mt-0.5">{event.month}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-semibold text-foreground text-sm leading-snug">{event.title}</h3>
                    <TypeBadge type={event.type} />
                  </div>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2 text-[11px] text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-primary" aria-hidden="true" /> {event.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-primary" aria-hidden="true" /> {event.time}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
