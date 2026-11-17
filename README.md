# TRAIL CHAOS — V5.7 — Millau, paysage évolutif

## Nouveautés
- Cinq panoramas originaux en pixel-art qui évoluent avec la progression : vallée du Tarn, montée sous les piles, traversée du viaduc, Causse Rouge, descente vers Millau.
- Trois couches de décors aux vitesses de parallaxe différentes, avec fondus de transition kilométriques.
- Panoramas calculés une seule fois avant le lancement de Millau, dessinés depuis des canvases mis en cache ; aucun gros fichier image additionnel.
- Repères visuels et signalétique intégrés au sol pour les sections routières et le causse.
- Altimétrie, obstacles, joueurs et animations conservés : le personnage reste exactement celui de la V5.4 restauré en V5.6.
- Archive de l'ancienne version dans `side-v56.html`.

## Technique
- `MILLAU_VISUAL_ZONES`, `millauBlend`, `paintMillauArt`, `drawMillauPixelLandscape`, `drawMillauPixelProps` dans `index.html`.
- Les visuels passent progressivement d'une zone à l'autre autour des km 5, 10, 15,7 et 20.
- Aucun changement de sauvegardes, de gameplay ou de fonctionnement de la boutique.

Site : https://albbris.github.io/Jeu-trail/
