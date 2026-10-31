# 🏔️ TRAIL CHAOS — Jusqu’au dernier ravito

Mini-jeu de **stratégie et gestion de trail** : prépare ton équipement, enchaîne les kilomètres, gère ton énergie, ton hydratation, ton mental et ton estomac, et fais des choix (parfois discutables) pour rejoindre l’arrivée.

## 🎮 Jouer

Ouvrir [index.html](index.html) ou, une fois GitHub Pages activé :
**https://albbris.github.io/Jeu-trail/**

## 📱 Installer sur téléphone

1. Dans le dépôt, aller dans **Settings > Pages**.
2. Dans *Build and deployment*, choisir **Deploy from a branch**, branche **main**, dossier **/(root)**, puis enregistrer.
3. Ouvrir l’adresse du jeu ci-dessus avec **Safari** (iPhone) ou **Chrome** (Android).
4. iPhone : **Partager > Ajouter à l’écran d’accueil**. Android : **Installer l’application**.

Après la première visite en ligne, un service worker permet d’utiliser le jeu **hors connexion**, si les ressources ont été mises en cache.

## 📂 Structure

- `index.html` — jeu (HTML, styles et JavaScript réunis)
- `manifest.webmanifest` — informations d’installation de la PWA
- `sw.js` — cache des ressources / fonctionnement hors ligne
- `icons/icon-192.png` et `icons/icon-512.png` — icônes d’origine

## 💾 Sauvegarde

La progression est enregistrée dans le **stockage local** du navigateur. Elle reste sur le même appareil et la même origine web, mais ne se synchronise pas entre appareils.

Création ludique et fictive : ce jeu ne constitue pas un programme d’entraînement.
