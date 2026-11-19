# Trail Run V7.1 — accueil fidèle au concept

La page d’accueil a été repensée sur la base du visuel validé : un coureur gravissant un **sentier en forêt**, un ciel lumineux, des reliefs et falaises au loin, des boutons bleu nuit et un grand bouton **JOUER** jaune.

## Modifications V7.1

- **Nouveau fond illustré** : `assets/trail-run-home-v71.svg` utilise une illustration bitmap pixel art intégrée (autonome, utilisable hors ligne), sans viaduc. Il remplace le décor vectoriel simple de la V7.0, conservé comme solution de secours dans `assets/trail-run-forest.svg`.
- **Compositions proportionnées** : coureur de dos intégré à l’illustration, logo « TRAIL RUN » avec emblème montagne blanc et trait jaune, menu vertical à droite, profil et pièces au-dessus, navigation en bas.
- **Icônes homogènes** : pictogrammes vectoriels de jeu, sac, trophée, progression et carte, sans emoji disparate dans les boutons.
- **Boutons réellement interactifs** : Jouer, Équipement, Défis, Progression et Courses, plus les raccourcis Accueil, Stats, Parcours et Aide.
- **Adaptation iPhone** avec tailles révisées pour petits écrans, safe areas et paysage cadré en cover.
- **Cache de l’application actualisé** pour télécharger le nouveau décor.

### Données et parcours préservés

Les fonctionnalités et sauvegardes restent inchangées : même stockage `trail-chaos-runner-v2`, mêmes pièces, équipements et records. Le parcours de Millau avec ses dernières corrections est conservé.

Les détails graphiques sont une interprétation jouable du concept, pas une copie statique de l’interface : tous les textes et boutons restent du vrai HTML/CSS et leurs actions fonctionnent.
