/**
 * Personnalisation ShaderGradient — https://shadergradient.co (gratuit)
 *
 * Modifiez ces valeurs pour ajuster le fond animé du hero.
 * Aperçu en ligne : https://www.shadergradient.co/customize?type=waterPlane
 */
export const heroShaderGradient = {
  type: "waterPlane" as const,
  animate: "on" as const,
  /** Bleu institutionnel CSM */
  color1: "#1e3a8a",
  /** Rouge accent */
  color2: "#dc2626",
  /** Blanc */
  color3: "#ffffff",
  /** Vitesse de l'animation (0.1 – 1) */
  uSpeed: 0.2,
  uStrength: 1.8,
  uDensity: 1,
  uFrequency: 5,
  uAmplitude: 0,
  brightness: 1,
  grain: "off" as const,
  cDistance: 4.5,
  cPolarAngle: 90,
  cAzimuthAngle: 180,
};

export type HeroShaderGradientConfig = typeof heroShaderGradient;

/**
 * Logo 3D (React Three Fiber) — couleurs de la croix animée.
 * Fichier scène : src/app/components/effects/LiquidLogoCanvas.tsx
 */
export const liquidLogoColors = {
  vertical: "#dc2626",
  horizontal: "#ffffff",
  metalness: 0.65,
  roughness: 0.25,
} as const;
