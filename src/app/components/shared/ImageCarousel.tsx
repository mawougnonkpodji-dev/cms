import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type ImageCarouselProps = {
  images: string[];
  alt: string;
  className?: string;
  intervalMs?: number;
  fallbackClassName?: string;
};

function CarouselSlide({ src, alt, active }: { src: string; alt: string; active: boolean }) {
  const [failed, setFailed] = useState(false);

  if (failed) return null;

  return (
    <img
      src={src}
      alt={alt}
      loading="eager"
      decoding="async"
      onError={() => setFailed(true)}
      className={cn(
        "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
        active ? "opacity-100 z-10" : "opacity-0 z-0",
      )}
    />
  );
}

export function ImageCarousel({
  images,
  alt,
  className,
  intervalMs = 4500,
  fallbackClassName = "bg-gradient-to-br from-primary/80 to-accent/70",
}: ImageCarouselProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [images]);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % images.length);
    }, intervalMs);
    return () => window.clearInterval(timer);
  }, [images.length, intervalMs]);

  if (images.length === 0) {
    return <div className={cn("aspect-[16/9]", fallbackClassName, className)} aria-hidden="true" />;
  }

  return (
    <div className={cn("relative aspect-[16/9] overflow-hidden", fallbackClassName, className)}>
      {images.map((src, i) => (
        <CarouselSlide key={src} src={src} alt={`${alt} — photo ${i + 1}`} active={i === index} />
      ))}

      {images.length > 1 && (
        <div
          className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-1.5"
          role="tablist"
          aria-label="Photos"
        >
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Photo ${i + 1}`}
              onClick={() => setIndex(i)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i === index ? "w-6 bg-accent" : "w-1.5 bg-white/50 hover:bg-white/80",
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
