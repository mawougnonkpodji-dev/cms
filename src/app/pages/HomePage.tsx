import { lazy, Suspense } from "react";
import { HeroSection } from "@/app/components/sections/HeroSection";
import { StatsBar } from "@/app/components/sections/StatsBar";
import { NewsSection } from "@/app/components/sections/NewsSection";
import { EventsSection } from "@/app/components/sections/EventsSection";

const CommunitySection = lazy(() =>
  import("@/app/components/sections/CommunitySection").then((m) => ({ default: m.CommunitySection })),
);
const PrayerSection = lazy(() =>
  import("@/app/components/sections/PrayerSection").then((m) => ({ default: m.PrayerSection })),
);
const DiocesesSection = lazy(() =>
  import("@/app/components/sections/DiocesesSection").then((m) => ({ default: m.DiocesesSection })),
);
const NewsletterSection = lazy(() =>
  import("@/app/components/sections/NewsletterSection").then((m) => ({ default: m.NewsletterSection })),
);

function SectionFallback({ minHeight = 280 }: { minHeight?: number }) {
  return <div aria-hidden="true" style={{ minHeight }} />;
}

export function HomePage() {
  return (
    <main id="main-content">
      <HeroSection />
      <StatsBar />
      <NewsSection />
      <EventsSection />
      <Suspense fallback={<SectionFallback minHeight={520} />}>
        <CommunitySection />
      </Suspense>
      <Suspense fallback={<SectionFallback minHeight={360} />}>
        <PrayerSection />
      </Suspense>
      <Suspense fallback={<SectionFallback minHeight={480} />}>
        <DiocesesSection />
      </Suspense>
      <Suspense fallback={<SectionFallback minHeight={220} />}>
        <NewsletterSection />
      </Suspense>
    </main>
  );
}
