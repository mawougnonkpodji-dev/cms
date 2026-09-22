import { Link } from "react-router-dom";
import { ArrowRight, Heart, Star, Users } from "lucide-react";
import { SectionHeading } from "@/app/components/shared/SectionHeading";
import { CrossMotif } from "@/app/components/shared/CrossMotif";

const pillars = [
  { icon: Star, title: "Vision", desc: "Former des jeunes chrétiens engagés, servants fidèles de l'Eucharistie." },
  { icon: Heart, title: "Mission", desc: "Animer la vie liturgique et renforcer la cohésion entre diocèses." },
  { icon: Users, title: "Valeurs", desc: "Fraternité, service, prière, formation et fidélité à l'Église." },
];

export function CommunitySection() {
  return (
    <section id="community" className="py-16 lg:py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden aspect-[4/5] bg-gradient-to-br from-primary/20 via-secondary to-accent/20">
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <CrossMotif className="w-40 h-40 text-primary" />
              </div>
            </div>
            <blockquote className="absolute -bottom-5 -right-3 lg:right-[-2rem] bg-primary text-primary-foreground rounded-lg p-5 w-52 shadow-lg border-l-4 border-accent">
              <CrossMotif className="w-7 h-7 text-accent mb-2" />
              <p className="font-serif text-sm italic text-white/90 leading-relaxed">
                « Servir à l'autel, c'est servir le Christ lui-même. »
              </p>
              <footer className="label-caps text-white/70 text-[10px] mt-2">— Saint Tarcisius</footer>
            </blockquote>
          </div>

          <div>
            <SectionHeading
              title="Qui sommes-nous ?"
              subtitle="La Communauté des Servants de Messe de la Mission de Banamè rassemble plus de 1 200 servants dans 12 diocèses du Bénin."
            />
            <p className="text-muted-foreground leading-relaxed mb-6">
              Association catholique dédiée à la formation spirituelle, liturgique et humaine des servants de messe,
              sous la protection de{" "}
              <strong className="text-foreground font-semibold">Saint Tarcisius</strong>, patron des servants de
              messe.
            </p>

            <ul className="space-y-3 mb-8">
              {pillars.map(({ icon: Icon, title, desc }) => (
                <li key={title} className="flex gap-3">
                  <div className="w-9 h-9 shrink-0 bg-secondary rounded-md flex items-center justify-center">
                    <Icon className="w-4 h-4 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">{title}</div>
                    <div className="text-muted-foreground text-sm">{desc}</div>
                  </div>
                </li>
              ))}
            </ul>

            <Link
              to="/communaute"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm rounded-md transition-colors"
            >
              Notre histoire complète <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
