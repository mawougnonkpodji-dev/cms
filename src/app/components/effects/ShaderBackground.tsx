/**
 * Fond hero — dégradé CSS léger (pas de WebGL).
 * Couleurs alignées sur src/app/config/shader-gradient.ts → heroShaderGradient
 */
export function ShaderBackground() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent/40" />
      <div className="absolute inset-0 bg-black/20" />
    </div>
  );
}
