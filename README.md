# Puissance 4 🎮

## Sommaire

- [Aperçu](#aperçu)
- [Caractéristiques principales](#caractéristiques-principales)
- [Pré-requis](#pré-requis)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [À propos de l'auteur](#à-propos-de-lauteur)

## Aperçu

**Puissance 4** est une version web du célèbre jeu de société où deux joueurs s'affrontent pour aligner quatre jetons de leur couleur sur une grille. Ce projet est développé avec **HTML**, **CSS**, et **JavaScript**, et est conçu pour être exécuté localement sur un serveur comme **MAMP** ou **XAMPP**.

## Caractéristiques principales

- **Interface intuitive** : Une grille de jeu interactive qui réagit au clic des joueurs.
- **Système de victoire** : Le jeu détecte automatiquement quand un joueur a réussi à aligner quatre jetons horizontalement, verticalement, ou en diagonale.
- **Remise à zéro rapide** : Un bouton permet de réinitialiser la partie et de rejouer sans recharger la page.
- **Animations simples** : Animations de placement de jetons pour une meilleure expérience utilisateur.

## Pré-requis

- Serveur local tel que **MAMP** ou **XAMPP**
- Un navigateur web moderne (Chrome, Firefox, etc.)

## Installation

1. Clonez le dépôt GitHub contenant le code source du projet :

    ```bash
    git clone https://github.com/basim-el/puissance4.git
    ```

2. Déplacez le projet dans le dossier de votre serveur local :

    - Pour **MAMP** : Placez le projet dans le dossier `MAMP/htdocs/`.
    - Pour **XAMPP** : Placez le projet dans le dossier `XAMPP/htdocs/`.

3. Démarrez votre serveur local (MAMP ou XAMPP) et assurez-vous que **Apache** est bien activé.

4. Accédez au projet dans votre navigateur en allant à l'adresse suivante :

    ```bash
    http://localhost/puissance4
    ```

## Utilisation

### Jouer une partie

1. **Commencer le jeu** : Ouvrez la page du jeu dans votre navigateur. La grille s'affiche avec des colonnes interactives.
2. **Tour des joueurs** : Les joueurs cliquent à tour de rôle sur une colonne pour y déposer leur jeton. Le premier joueur utilise des jetons rouges, et le second des jetons jaunes.
3. **Conditions de victoire** : Le jeu détecte automatiquement les alignements de 4 jetons (horizontaux, verticaux ou diagonaux). Le vainqueur est annoncé à l'écran.
4. **Recommencer** : Cliquez sur le bouton "Rejouer" pour remettre la grille à zéro et débuter une nouvelle partie.

### Code et structure

- **index.html** : Contient la structure de la grille et l’interface du jeu.
- **styles.css** : Gère la mise en page, les couleurs des jetons, et le style général de la page.
- **script.js** : Contient la logique du jeu, la gestion des tours, le contrôle des conditions de victoire, et les animations des jetons.

## À propos de l'auteur

👤 **Basim El Sayed**

- [Portfolio](https://www.eldev.fr/)
- [LinkedIn](https://www.linkedin.com/in/basim-el-sayed/)
