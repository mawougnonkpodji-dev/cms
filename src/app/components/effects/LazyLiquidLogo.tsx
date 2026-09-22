import { lazy, Suspense, useEffect, useState } from "react";
import { CrossMotif } from "@/app/components/shared/CrossMotif";

/** Canvas R3F — import dynamique pour ne pas bloquer le premier rendu. */
const LiquidLogoCanvas = lazy(() =>
  import("@/app/components/effects/LiquidLogoCanvas").then((m) => ({ default: m.LiquidLogoCanvas })),
);

type LazyLiquidLogoProps = {
  className?: string;
};

/**
 * Logo animé style « liquid metal » (React Three Fiber).
 * Affiche d'abord une croix SVG légère, puis le canvas 3D après idle.
 */
export function LazyLiquidLogo({ className = "w-9 h-9" }: LazyLiquidLogoProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const win = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };

    if (win.requestIdleCallback) {
      const id = win.requestIdleCallback(() => setReady(true), { timeout: 2000 });
      return () => win.cancelIdleCallback?.(id);
    }

    const timer = window.setTimeout(() => setReady(true), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  if (!ready) {
    return <CrossMotif className={`${className} text-accent shrink-0`} />;
  }

  return (
    <Suspense fallback={<CrossMotif className={`${className} text-accent shrink-0`} />}>
      <LiquidLogoCanvas className={className} />
    </Suspense>
  );
}
