import { useState } from "react";
import { galleryImages } from "@/app/data/media";
import { BackLink, PageShell } from "@/app/components/shared/PageShell";

function GalleryImage({ src, title }: { src: string; title: string }) {
  const [failed, setFailed] = useState(false);

  return (
    <figure className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/20 hover:shadow-md transition-all">
      <div className="relative aspect-[4/3] bg-muted overflow-hidden">
        {!failed ? (
          <img
            src={src}
            alt={title}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover group-hover:scale-100 transition-transform duration-300"
            onError={() => setFailed(true)}
          />
        ) : (
          <div className="flex h-full items-center justify-center p-4 text-center text-sm text-muted-foreground">
            Image indisponible
          </div>
        )}
      </div>
      <figcaption className="px-4 py-3">
        <h2 className="font-serif text-sm font-semibold text-foreground">{title}</h2>
      </figcaption>
    </figure>
  );
}

export default function MediathequePage() {
  return (
    <main id="main-content" className="pt-16 lg:pt-[4.5rem]">
      <PageShell
        title="Médiathèque"
        subtitle="Photothèque et vidéothèque de la communauté CSM Mission de Banamè."
      >
        <BackLink to="/">← Retour à l&apos;accueil</BackLink>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {galleryImages.map((img) => (
            <GalleryImage key={img.id} src={img.src} title={img.title} />
          ))}
        </div>
      </PageShell>
    </main>
  );
}
