import { CommunitySection } from "@/app/components/sections/CommunitySection";
import { BackLink, PageShell } from "@/app/components/shared/PageShell";

export function CommunityPage() {
  return (
    <main id="main-content" className="pt-16 lg:pt-[4.5rem]">
      <PageShell
        title="La Communauté"
        subtitle="Mission, vision, valeurs et histoire de la CSM Mission de Banamè."
      >
        <BackLink to="/">← Retour à l&apos;accueil</BackLink>
      </PageShell>
      <CommunitySection />
    </main>
  );
}
