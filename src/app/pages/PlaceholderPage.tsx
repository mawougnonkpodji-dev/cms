import { BackLink, PageShell } from "@/app/components/shared/PageShell";

export function PlaceholderPage({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <main id="main-content" className="pt-16 lg:pt-[4.5rem]">
      <PageShell title={title} subtitle={subtitle}>
        <BackLink to="/">← Retour à l&apos;accueil</BackLink>
        <p className="mt-8 text-sm text-muted-foreground">Cette section sera disponible dans une prochaine version.</p>
      </PageShell>
    </main>
  );
}
