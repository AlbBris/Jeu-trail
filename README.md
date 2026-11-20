# Trail Run V7.3 — retour au paysage illustré validé

Après la V7.2, la capture iPhone montrait un fond vectoriel à aplats, trop éloigné du visuel choisi initialement. La V7.3 remet l'**illustration forestière de V7.1** : grand arbre, lumière, reliefs lointains, chemin de montée et coureur tourné vers la montagne.

## Changements

- Nouvel actif `assets/trail-run-home-v73-illustre.svg` créé à partir de la **composition originale V7.1** (copie conservée dans l'historique Git).
- Le décor vectoriel alternatif V7.2 reste archivé dans `assets/trail-run-home-v71.svg` mais **n'est plus utilisé** sur l'accueil.
- Suppression du second coureur animé V7.2 qui se superposait au personnage illustré ; le coureur du fond fait partie de la composition.
- Conservation du logo, des panneaux du menu, des icônes et de la navigation de la V7.2, avec une palette cohérente et sans filtre de flou ajouté.
- Fond restauré derrière les zones de sécurité en haut et en bas sur iPhone.
- Nouveau cache service worker `trail-run-v73-original-art-20261120`.

**Note qualité :** l'actif V7.1 retrouvé dans l'historique du dépôt contient une version WebP très compressée de l'illustration initiale. La composition est fidèle à la référence, mais cette compression peut encore limiter la finesse du décor sur des écrans Retina. Il faudra intégrer la source haute résolution directement au dépôt pour obtenir à la fois la fidélité complète du dessin et sa netteté d'origine.

Les courses, les contrôles, l'atelier, les pièces, l'équipement, les records et les sauvegardes restent inchangés.
