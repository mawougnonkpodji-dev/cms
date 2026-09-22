import { DonateSection } from "@/app/components/sections/DonateSection";
import { BackLink } from "@/app/components/shared/PageShell";

export function DonatePage() {
  return (
    <main id="main-content" className="pt-16 lg:pt-[4.5rem] bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 lg:py-14">
        <BackLink to="/">← Retour à l&apos;accueil</BackLink>
        <DonateSection />
      </div>
    </main>
  );
}
