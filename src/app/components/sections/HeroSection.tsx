import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { heroSlides } from "@/app/data/home";
import { ShaderBackground } from "@/app/components/effects/ShaderBackground";

export function HeroSection() {
  const [heroSlide, setHeroSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setHeroSlide((s) => (s + 1) % heroSlides.length), 6000);
    return () => window.clearInterval(timer);
  }, []);

  const current = heroSlides[heroSlide];

  return (
    <section className="relative h-[85vh] min-h-[520px] flex items-end overflow-hidden bg-primary" aria-label="Bannière principale">
      <ShaderBackground />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-14 lg:pb-20 w-full">
        <div className="max-w-2xl">
          <p className="label-caps text-white/80 text-xs mb-4">Communauté des Servants de Messe — Bénin</p>
          {current && (
            <h1
              key={heroSlide}
              className="font-serif text-white text-4xl sm:text-5xl lg:text-[3.25rem] font-semibold leading-tight mb-5 anim-fadeSlide hero-text-shadow whitespace-pre-line"
            >
              {current.headline}
            </h1>
          )}
          <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">{current?.sub}</p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/communaute"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-sm rounded-md transition-colors"
            >
              Découvrir la CSM <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link
              to="/evenements"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/40 hover:bg-white/10 text-white font-semibold text-sm rounded-md transition-colors"
            >
              <Calendar className="w-4 h-4" aria-hidden="true" /> Nos événements
            </Link>
          </div>
        </div>

        <div className="flex gap-2 mt-8" role="tablist" aria-label="Diapositives">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              type="button"
              role="tab"
              aria-selected={index === heroSlide}
              onClick={() => setHeroSlide(index)}
              className={`h-1 rounded-full transition-all duration-300 ${index === heroSlide ? "w-8 bg-accent" : "w-3 bg-white/35"}`}
              aria-label={`Diapositive ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
