# React Native Projet - Super Todo App

Ce projet contient le code complet d'une application react native. L'objéctif de l'application est simple, pouvoir gérer des choses à faire !

Vous retrouverez les maquettes de l'application juste ici :

[Lien figma vers les maquettes](https://www.figma.com/file/bwQ0R9kNPCcCVPqpaySbpE/Todo-App?node-id=0%3A1&t=iupgnDJhSoX7mESw-1)

N'hésitez pas à y faire un tour !

## Installation de l'application

Vous pouvez télécharger ou cloner l'application chez vous. Pour la démarrer rien de plus, simple, ouvrer un terminal et lancer les commandes :

```bash
# Install les node modules
npm install
# Lance l'application avec expo
npm start
```

## Petit tour de l'application

Le point d'entrée de l'application est le fichier [`App.tsx`](./App.tsx). Cette application utilise plusieurs librairies :

- [Styled Components](https://styled-components.com/) : Pour faire facilement du CSS et du design
- [Nanostores](https://github.com/nanostores/nanostores) : Pour gérer et globaliser l'état des composants
- [React Router](https://reactrouter.com/en/main/start/tutorial) : Pour mettre en place un système d'écran facilement
- [Firebase](https://firebase.google.com/) : Afin d'enregistrer et de récupérer les données d'un backend !

Dans le dossier `src` si situe l'intégralité du code de l'application, ce dossier s'organise comme ceci :

- `Component` : Contient les composant react sous forme de fonction. Ce sont probablement les fichiers les plus important. C'est dans ce répertoire que l'on retrouve `App.tsx` (pour les application web, en native, le fichier `App.tsx` se trouve à la racine de votre projet)
- `Lib` : Contient le code des librairies externes à React comme `Firebase`. C'est dans ce dossier que vous pourrez faire vos requêtes à firebase ou à une tout autre API !
- `Store` : Contient les stores `nanostores` ainsi que les actions :). Généralement ils portent le même nom que le composant concerné par le store !
- `Style` : Content les composants stylisé. Généralement les fichiers portent le même nom que le composant stylisé à l'éxception du thème !
- `Type` : Contient les types typescript nescessaire au bon fonctionnement de l'application. Les fichiers portent généralement le même nom que les composants
