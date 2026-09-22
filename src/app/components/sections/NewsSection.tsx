import { Link } from "react-router-dom";
import { ArrowRight, Clock, ChevronRight } from "lucide-react";
import { news } from "@/app/data/home";
import { SectionHeading } from "@/app/components/shared/SectionHeading";
import { ImageCarousel } from "@/app/components/shared/ImageCarousel";

const thumbGradients = [
  "from-primary/80 to-accent/70",
  "from-primary to-primary/60",
  "from-accent/80 to-primary/70",
];

function NewsThumbnail({ index, images, title }: { index: number; images: string[]; title: string }) {
  const fallback = thumbGradients[index % thumbGradients.length];

  if (index === 0 && images.length > 1) {
    return <ImageCarousel images={images} alt={title} fallbackClassName={`bg-gradient-to-br ${fallback}`} />;
  }

  if (images.length > 0) {
    return (
      <div className={`relative aspect-[16/9] overflow-hidden bg-gradient-to-br ${fallback}`}>
        <img
          src={images[0]}
          alt={title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </div>
    );
  }

  return <div className={`aspect-[16/9] bg-gradient-to-br ${fallback}`} aria-hidden="true" />;
}

export function NewsSection() {
  return (
    <section id="news" className="py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between gap-4 mb-8">
          <SectionHeading
            title="Dernières Actualités"
            subtitle="La vie de la communauté en temps réel"
            className="mb-0"
          />
          <Link
            to="/actualites"
            className="hidden sm:inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent transition-colors pb-1"
          >
            Toutes les actualités <ChevronRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <article
              key={item.id}
              className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary/20 hover:shadow-md transition-all duration-200 flex flex-col"
            >
              <NewsThumbnail index={index} images={item.images} title={item.title} />
              <div className="p-5 flex flex-col flex-1 -mt-8 relative">
                <span className="label-caps self-start px-2.5 py-1 bg-accent text-accent-foreground rounded-md mb-3">
                  {item.category}
                </span>
                <div className="flex items-center gap-3 mb-3 text-xs text-muted-foreground">
                  <time>{item.date}</time>
                  <span className="w-1 h-1 rounded-full bg-border" aria-hidden="true" />
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" aria-hidden="true" /> {item.readTime}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground leading-snug mb-3 group-hover:text-primary transition-colors flex-1">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">{item.excerpt}</p>
                <Link
                  to="/actualites"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:gap-2.5 transition-all"
                >
                  Lire la suite <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
