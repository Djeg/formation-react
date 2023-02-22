# Super Todo

![Logo](./public/logo.png)

Petite application de gestion de « todo list » ! Vous retrouverez le design complet de l'application sur figma juste ici :

https://www.figma.com/file/bwQ0R9kNPCcCVPqpaySbpE/Todo-App?node-id=0%3A1&t=y9GYydLkfQegBqwM-1

## Installation

Pour installer le projet, suivez les étapes suivante :

1. Cloner le repository
2. Se rendre sur la branche `session-projet/20-02-23/24-02-23`
3. Lancer les commande suivante dans un terminal :

```bash
$ npm i
$ npm run dev
```

## Qu'a t-il sous le capot ?

Ce projet utilise :

1. [React](https://beta.reactjs.org/)
2. [React Router](https://reactrouter.com/en/main)
3. [Styled Components](https://styled-components.com/)
4. [nanostores](https://github.com/nanostores/nanostores)

## Comment le projet est organisé

Dans le dossier src vous retrouverez l'arborescence suivante :

- `components/` : Contient les composants react, ou les écrans de l'application
- `styles/` : Contient le style (les composants stylisé) de chaque composant react
- `stores/` : Contient l'état et les actions des différents composants
- `lib/` : Contient de petit modules javascript avec des fonctions d'aide
