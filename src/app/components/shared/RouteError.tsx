import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";

export function RouteError() {
  const error = useRouteError();
  const message = isRouteErrorResponse(error)
    ? error.statusText
    : error instanceof Error
      ? error.message
      : "Une erreur inattendue s'est produite.";

  return (
    <main id="main-content" className="min-h-[60vh] flex items-center justify-center px-4 pt-24">
      <div className="max-w-md text-center">
        <p className="label-caps text-accent text-xs mb-3">Erreur</p>
        <h1 className="font-serif text-2xl font-semibold text-foreground mb-3">Impossible de charger la page</h1>
        <p className="text-sm text-muted-foreground mb-6 break-words">{message}</p>
        <Link
          to="/"
          className="inline-flex px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-md hover:bg-primary/90 transition-colors"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </main>
  );
}
