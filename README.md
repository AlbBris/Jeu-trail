# TRAIL CHAOS — SIDE TRAIL V3.1

Jeu d'arcade de trail en **vue de côté**, jouable dans un navigateur et installable en PWA sur iPhone/Android.

## Jouer

- Sur téléphone : **glisser vers le haut = sauter**, **glisser vers le bas = se baisser**. Un tap rapide sur le décor permet également de sauter.
- Boutons tactiles en bas : **↓ se baisser**, **↑ sauter**, **⚡ sprint** (maintenir).
- Sur PC : `↑` / `Espace` pour sauter, `↓` pour se baisser, `Maj` pour sprinter, `P` pour la pause.

La course avance automatiquement. La vitesse s'adapte à la pente, au sprint et à l'énergie. Les obstacles se rencontrent sur des terrains vallonnés aux biomes changeants (forêt, ruisseau, sapinière ; alpage, pierrier, sommet ; crépuscule, forêt nocturne, crête lunaire).

## Sauvegarde et équipements

La sauvegarde existante reste compatible : `localStorage['trail-chaos-runner-v2']` conserve les pièces, les équipements, les courses débloquées et les meilleurs chronos.

## Archives jouables

- `explorer-v3.html` : prototype précédent en vue trois-quarts.
- `runner-v28.html` : ancien mode runner à trois voies.
- `classic.html` : ancien jeu stratégique.

## Publication

GitHub Pages : `main` / `(root)` → https://albbris.github.io/Jeu-trail/

Fichiers de la V3.1 : `index.html`, `sw.js`, `README.md`. Le `manifest.webmanifest` et les icônes PWA du dépôt sont conservés.