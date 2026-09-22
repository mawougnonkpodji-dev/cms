import { Clock } from "lucide-react";
import { news } from "@/app/data/home";
import { BackLink, PageShell } from "@/app/components/shared/PageShell";
import { ImageCarousel } from "@/app/components/shared/ImageCarousel";

export function NewsPage() {
  return (
    <main id="main-content" className="pt-16 lg:pt-[4.5rem]">
      <PageShell title="Actualités" subtitle="Toutes les nouvelles de la communauté CSM Mission de Banamè.">
        <BackLink to="/">← Retour à l&apos;accueil</BackLink>
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {news.map((item, index) => (
            <article key={item.id} className="bg-card border border-border rounded-lg overflow-hidden">
              {item.images.length > 0 && (
                index === 0 && item.images.length > 1 ? (
                  <ImageCarousel images={item.images} alt={item.title} />
                ) : (
                  <div className="relative aspect-[16/9] bg-gradient-to-br from-primary/20 to-accent/20">
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                )
              )}
              <div className="p-6">
                <span className="label-caps text-accent text-xs">{item.category}</span>
                <h2 className="font-serif text-xl font-semibold mt-3 mb-2">{item.title}</h2>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <time>{item.date}</time>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {item.readTime}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </PageShell>
    </main>
  );
}
