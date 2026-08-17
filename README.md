# CSM Mission de Banamè — Frontend

Site institutionnel de la Communauté des Servants de Messe (Mission de Banamè).

## Stack

- **React 18** + **TypeScript** + **React Router**
- **Vite 6** — build & dev server
- **Tailwind CSS 4** — charte blanc / bleu / rouge
- **Inter** — police unique (`@fontsource/inter`)
- **ShaderGradient** — fond hero animé (gratuit, configurable)
- **React Three Fiber** — logo 3D « liquid » dans le header

## Lancer le projet

```bash
cd C:\tfe
npm install
npm run dev
```

URL : **http://localhost:5173**

## Routes

| Chemin | Page |
|--------|------|
| `/` | Accueil |
| `/don` | Faire un don |
| `/actualites` | Actualités |
| `/evenements` | Événements |
| `/communaute` | La communauté |
| `/dioceses` | Diocèses |
| `/prieres` | Prières |
| `/blog`, `/mediatheque`, `/contact` | Placeholders |

## Personnalisation visuelle

### ShaderGradient (fond hero)

Éditez `src/app/config/shader-gradient.ts` :

- `color1`, `color2`, `color3` — couleurs du dégradé
- `uSpeed`, `uStrength`, `uFrequency` — animation

Aperçu en ligne : [shadergradient.co/customize](https://www.shadergradient.co/customize?type=waterPlane)

### Logo 3D (LiquidLogo)

Couleurs dans `liquidLogoColors` (même fichier). Scène Three.js : `src/app/components/effects/LiquidLogoCanvas.tsx`.

## Performance — pourquoi c’était lent ?

| Cause | Solution appliquée |
|-------|-------------------|
| **Three.js chargé 2×** (header + footer) | Logo 3D uniquement dans le header ; croix SVG statique dans le footer |
| **Three.js au premier rendu** | `LazyLiquidLogo` : SVG d’abord, canvas après `requestIdleCallback` |
| **ShaderGradient immédiat** | Chargement différé quand le hero entre dans le viewport |
| **6 fichiers de polices** (Source Sans + Serif) | **Inter** latin 400 + 600 seulement (~2 fichiers) |
| **Pages non découpées** | `React.lazy` par route (don, actualités, etc.) |
| **Deps inutilisées** | Suppression de `camera-controls`, `three-stdlib` |

Les bibliothèques lourdes (`three`, `@shadergradient/react`) sont **exclues du pré-bundle Vite** et chargées à la demande.

## Structure

```
src/app/
├── config/shader-gradient.ts   # Config ShaderGradient + logo
├── components/effects/         # ShaderBackground, LazyLiquidLogo, LiquidLogoCanvas
├── pages/                      # Une page par route
└── data/home.ts                # Données mock
```

## Commandes

```bash
npm run build    # Production → dist/
npm run preview  # Prévisualiser le build
```
