# Trail Run V7.2 — nouvel accueil net et fidèle au concept

La V7.2 refait le rendu de l'accueil à partir de la capture iPhone. On conserve la composition et les boutons validés en V7.1, mais on corrige le flou du paysage et du personnage.

## Améliorations

- **Décor forestier net** : `assets/trail-run-home-v71.svg` est désormais une illustration **100 % vectorielle**, construite avec reliefs, montagnes, falaises, plusieurs plans de forêt, sentier en montée, rochers, sous-bois, fleurs et feuillage. Plus de mini WebP basse qualité intégré dans un SVG.
- **Personnage séparé** : sprite original `sprites/coureur-animations.png`, affiché avec `image-rendering:pixelated` et une animation de course en 6 poses. Il ne fait plus partie du fond compressé et reste net quel que soit l'écran.
- **Logo TRAIL RUN** : montagne, lettrage et soulignement or mieux définis, ombres raccourcies.
- **Menu** : boutons bleu nuit plus contrastés, bordures et textes secondaires lisibles, bouton « JOUER » jaune mieux équilibré.
- **Navigation du bas** : plus compacte, séparateurs allégés, onglet actif mis en évidence.
- **Profil et pièces** : contraste et positionnement affinés.
- **Responsive iPhone** : tailles adaptées sur écran compact et prise en compte des marges de sécurité.
- **Accessibilité** : respecte `prefers-reduced-motion` pour désactiver l'animation de course.
- **Mise en cache PWA** : changement du nom du cache `trail-run-v72-sharp-forest-runner-20261120` afin de forcer le rechargement des ressources.

Les pages existantes, la boutique, les commandes, les parcours (dont Millau) et les sauvegardes restent en place : aucune clé de données n'a été renommée.

## Validation

La syntaxe du script JavaScript a été validée et la structure des fichiers GitHub a été contrôlée. Le rendu en situation sur un iPhone réel doit encore être confirmé à l'écran ; la capture de l'utilisateur reste la référence pour les ajustements suivants.
