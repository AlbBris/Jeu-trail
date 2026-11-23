# Trail Run — prototype Forêt des Racines

## Statut

**Prototype jouable, séparé du jeu public.** Le fichier `prototype-foret/index.html` est totalement autonome (HTML/CSS/Canvas/JavaScript et image du coureur embarquée). La branche `dev/trail-run-foret-prototype` ne modifie pas `main` ni le site GitHub Pages actuellement en ligne.

## Objectif

Tester le cœur du gameplay **en portrait sur iPhone** avant de construire les cinq parcours et de mettre en production une nouvelle version.

### Ce qui fonctionne

- Section fictive de **1,20 km de jeu** (démo courte, ce n'est pas un GPX réel).
- Sol continu en profils doux, pentes et descentes ; le coureur suit la surface du sentier.
- Défilement horizontal et plans de forêt à vitesses distinctes (parallaxe), arbres, montagnes et détails du sol.
- **13 obstacles** : rochers, racines, troncs, branches basses, boue et ruisseau.
- **28 pièces** récupérables, score, six points de vie et invulnérabilité temporaire après choc.
- Commandes tactiles **Sauter** (impulsion), **Se baisser** (maintenir), **Sprinter** (maintenir).
- Jauges énergie et eau, consommation d'eau et de deux gels ; pause, reprise, recommencer.
- Clavier de test : Espace/flèche haut (saut), flèche bas (se baisser), Maj (sprint), P (pause).
- Coureur animé en sprites pixel intégrés dans le HTML ; sélection homme/femme de démonstration.

### Limites importantes

- La coureuse est provisoirement représentée avec une variante recolorée du sprite existant : **les sprites définitifs de la coureuse validés pendant la conception devront remplacer cette variante**.
- **V2 :** le décor intègre le panorama forestier illustré approuvé (`assets/forest_back.webp`), un sol continu enrichi avec une vraie texture pixel art (`assets/forest_dirt.png`) et un atlas de six obstacles (`assets/forest_obstacles.webp`). Leur disposition et les transitions restent à valider sur iPhone. Le rendu ne doit pas être considéré comme une reproduction pixel par pixel de la maquette.
- Les obstacles naturels visibles sont désormais rendus avec l'atlas illustré ; leurs collisions restent calculées par le moteur de jeu, indépendamment des sprites. Des réglages visuels d'échelle, de contact avec le sol et de hitboxes restent à effectuer après retour utilisateur.
- Les distances, obstacles et paramètres d'énergie sont fictifs et destinés aux tests. Aucun temps de course réel n'est représenté.
- Aucune progression n'est enregistrée pour le moment (prototype indépendant des sauvegardes du jeu public).

## Interface V2 (23 novembre 2026)

- HUD et contrôles recolorés bleu nuit / doré, plus proches de la maquette de référence.
- Les éléments vie, temps et distance sont regroupés sous le panneau de progression ; énergie/eau s'affichent à part sans chevauchement.
- Trois nouveaux assets présents **uniquement sur la branche de test** sous `prototype-foret/assets/`.
- Le prototype ne modifie aucune page du jeu publié ; ne pas fusionner sans vérification du rendu mobile.

## Comment tester

1. Ouvrir `prototype-foret/index.html` depuis la branche de développement (ou télécharger le fichier et l'ouvrir dans un navigateur).
2. Choisir le coureur, puis **Commencer le test**.
3. Tester le saut sur les rochers/racines, l'accroupissement sous les branches et le sprint.
4. Vérifier l'alignement des pieds avec les pentes et signaler les éventuels ralentissements ou défauts de collision.
5. Tester pause, reprise, dégâts, pièces, hydratation et arrivée.

**À ne pas faire avant validation :** fusionner cette branche vers `main` ou activer GitHub Pages dessus.

## Technique

Canvas en résolution logique 390 × 844, mise à l'échelle selon le mobile ; boucle via `requestAnimationFrame`, delta temporel plafonné, courbe de terrain continue par interpolation lissée, collisions gérées en coordonnées monde et par l'altitude instantanée du saut.

Les fonctions de diagnostic peuvent être consultées en console avec `window.__trailRunPrototype.state()`.
