# 🏔 Trail Chaos Runner V2

Jeu de trail **arcade / endless runner à 3 voies**, jouable sur smartphone et ordinateur, sans dépendance externe.

- **3 parcours :** Forêt des Racines (8 km), Crêtes du Vent (21 km) et Ultra Nocturne (45 km), avec durée volontairement accélérée pour des parties courtes.
- **Obstacles :** rochers à esquiver, troncs à sauter, branches basses sous lesquelles glisser.
- **Progression :** pièces sur le sentier, courses à débloquer, boutique (chaussures, gilet, gels, frontale).
- **Contrôles :** balayage gauche / droite / haut / bas ou boutons tactiles. Clavier : flèches, espace et P pour pause.
- **Sauvegarde :** navigateur localStorage, hors connexion après première ouverture grâce au service worker.

## Jouer

GitHub Pages : https://albbris.github.io/Jeu-trail/

Sur iPhone, ouvrir l'adresse dans Safari puis **Partager → Sur l'écran d'accueil**.

## Ancienne version

Le jeu d'origine fondé sur les choix stratégiques reste disponible dans [`classic.html`](./classic.html).

## Structure

- `index.html` : jeu d'arcade complet (canvas et interface)
- `classic.html` : ancienne version de stratégie
- `manifest.webmanifest` : installation mobile
- `sw.js` : cache hors ligne
- `icons/` : icônes

Projet personnel et prototype expérimental.