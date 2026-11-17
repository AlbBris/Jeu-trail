# TRAIL CHAOS V6.0 — Millau en HD

Le circuit **Viaduc de Millau** utilise désormais les cinq panoramas `assets/millau/panorama-1.webp` à `panorama-5.webp` (941 × 556 px) et les bandes de premier plan `vallee-1.webp` à `vallee-5.webp`, au lieu des bandes storyboard de 147–176 px de haut étirées sur tout l'écran.

## Rendu
- Cadrage des panoramas sans déformation du ratio d'origine, avec lissage haute qualité sur le décor (le sprite du coureur reste en pixels nets).
- Défilement panoramique progressif à l'avancement et transition douce entre les 5 zones.
- Sol jouable distinct du fond, tracé selon `groundY()` et texturé selon `sectionFor()` ; le coureur et les obstacles restent attachés au vrai sol du jeu.
- Les pylônes et câbles du viaduc passent dans le plan du monde pendant la traversée, derrière le coureur.
- Cache PWA mis à jour pour actualiser les fichiers sur iPhone.

| Section | Terrain et décor |
| --- | --- |
| 0–5 km | Vallée du Tarn, sentier doux |
| 5–10 km | Montée rocheuse et route d'accès |
| 10–15,7 km | Tablier du viaduc presque horizontal |
| 15,7–20 km | Causse Rouge, terrain minéral |
| 20–23,7 km | Descente et arrivée avec public |

Les profils d'altitude sont des **approximations de gameplay, pas des relevés GPS**. Les commandes, l'équipement, le sprite, les autres courses et les sauvegardes n'ont pas été modifiés.

L'ancienne version est conservée dans `side-v58.html` et les bandes storyboard restent archivées sous `assets/millau/storyboard-*.webp`.
