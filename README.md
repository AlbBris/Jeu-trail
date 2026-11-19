# TRAIL RUN V7.0 — interface forestière et menus modernisés

La version 7 adopte le nouveau nom **Trail Run** et une interface inspirée du concept validé : un **sentier boisé en montée** sans viaduc à l'accueil, avec un coureur pixel et des boutons jaune/or sur fond bleu nuit.

## Nouveautés principales

- Accueil plein écran, logo Trail Run, affichage du solde de pièces, prévisualisation du personnage et raccourcis.
- Nouvelle illustration originale vectorielle `assets/trail-run-forest.svg`, montagne forestière et chemin montant ; image indépendante des décors des courses.
- Boutons fonctionnels : JOUER (course sélectionnée), ÉQUIPEMENT, DÉFIS, PROGRESSION, COURSES et AIDE.
- Choix des parcours revu en cartes avec distance, niveau et informations des parcours réels ou fictifs.
- Onglet PROGRESSION : arrivées, meilleurs temps enregistrés, équipement et parcours terminés.
- Onglet DÉFIS : première arrivée, cinq arrivées, défi des 25 boucles (essai 5 boucles ou défi complet).
- Écrans existants (boutique, aide, pause, résultats et commandes) harmonisés avec la nouvelle palette bleu nuit, or et vert.
- Manifest iOS et cache de service worker actualisés.

La sauvegarde utilise toujours la clé existante `trail-chaos-runner-v2` et **ne remet pas à zéro** les pièces, équipements ou records. Les anciens parcours, notamment Millau V6.2 (village, viaduc et arrivée urbaine), restent inchangés.

## Contrôle

La syntaxe JavaScript a été validée automatiquement. Le rendu graphique sur iPhone reste à contrôler dans l'app après rafraîchissement.

Les panoramas Millau restent dans `assets/millau/`. L'atelier de personnalisation est dans `atelier-perso.html`.
