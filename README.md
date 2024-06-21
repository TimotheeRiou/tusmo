# Tusmo

Bienvenue dans le dépôt GitHub de **Tusmo** !

## Description

**Tusmo** est une version open-source de Tusmo (jeu similaire à Sutom), un jeu de lettres où le but est de deviner un mot en un nombre limité de tentatives. Ce projet a été développé pour offrir une version accessible et modifiable du jeu, permettant aux développeurs d'explorer, d'améliorer et de personnaliser le jeu selon leurs besoins.

## Fonctionnalités

- Interface utilisateur intuitive et responsive
- Plusieurs niveaux de difficulté
- Mots générés aléatoirement
- Système de feedback visuel pour indiquer les lettres correctes et leur position
- Historique des parties
- Option de personnalisation des règles du jeu

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- [Node.js](https://nodejs.org/) (version 14 ou supérieure)
- [npm](https://www.npmjs.com/) (version 6 ou supérieure)

## Installation

1. Clonez le dépôt sur votre machine locale :

    ```
    git clone https://github.com/TimotheeRiou/tusmo.git
    ```

2. Accédez au répertoire du projet :

    ```
    cd tusmo
    ```

3. Installez les dépendances nécessaires :

    ```
    npm install
    ```

## Utilisation

Pour démarrer le serveur de développement, exécutez :

    ```
    npm start
    ```

Le jeu sera alors accessible sur `http://localhost:3000`.

## Tests

Pour lancer les tests avec Cypress, suivez les étapes suivantes :

1. Assurez-vous que le serveur de développement est en cours d'exécution :

    ```
    npm start
    ```

2. Ouvrez une nouvelle fenêtre de terminal et accédez au répertoire du projet :

    ```
    cd tusmo
    ```

3. Lancez Cypress en mode interactif :

    ```
    npx cypress open
    ```

   Cela ouvrira l'interface utilisateur de Cypress où vous pourrez choisir et exécuter les tests.

4. Pour lancer les tests en mode headless (sans interface graphique), exécutez :

    ```
    npx cypress run
    ```

## Contribution

Les contributions sont les bienvenues ! Si vous souhaitez contribuer au projet, veuillez suivre ces étapes :

1. Forkez le dépôt.
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`).
3. Commitez vos modifications (`git commit -m 'Add some amazing feature'`).
4. Poussez votre branche (`git push origin feature/AmazingFeature`).
5. Ouvrez une Pull Request.

Veuillez vous assurer que votre code respecte les normes de codage et qu'il est correctement documenté.

## License

Ce projet est sous licence MIT. Consultez le fichier `LICENSE` pour plus d'informations.

## Remerciements

Un grand merci à tous les contributeurs de ce projet. Votre soutien et vos contributions sont grandement appréciés.

---

**Auteur : Timothée Riou & Halil-Can Caliskan**

Pour toute question ou suggestion, n'hésitez pas à ouvrir une issue ou à contacter l'auteur directement.
