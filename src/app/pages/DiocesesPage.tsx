import { DiocesesSection } from "@/app/components/sections/DiocesesSection";
import { BackLink, PageShell } from "@/app/components/shared/PageShell";

export function DiocesesPage() {
  return (
    <main id="main-content" className="pt-16 lg:pt-[4.5rem]">
      <PageShell title="Diocèses" subtitle="Présence de la CSM dans les 06 diocèses du Bénin.">
        <BackLink to="/">← Retour à l&apos;accueil</BackLink>
      </PageShell>
      <DiocesesSection />
    </main>
  );
}
