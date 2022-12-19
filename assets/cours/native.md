# React Native

React Native est une version de react un petit peu différente. Basé sur les mêmes technologies et concepts, elle permet de créer des applications mobile installable depuis les stores.

Voici le site officiel de React Native :

[https://reactnative.dev/](https://reactnative.dev/)

## Installation

Afin de commencer à utiliser React Native il faut d'abord créer un nouveau projet :

> Remplacer le nom du projet par le nom de votre choix. Cette commande créé un nouveau dossier contenant l'application react native

```bash
# Vous pouvez choisir un projet "blank" avec ou sans typescript
npx create-expo-app <nomDuProjet> --template
```

Une fois la commande terminé, il faut se rendre dans le dossier le l'application et lancer la commande :

```bash
# Démarre l'application react avec Expo
npm start
```

Cette lance le serveur expo. Il vous faut installer l'application expo sur votre téléphone ([Google Store](https://play.google.com/store/apps/details?id=host.exp.exponent&gl=US&pli=1), [Apple Store](https://apps.apple.com/us/app/expo-go/id982107779)).

Une fois installé (et votre compte créé pour les utilisateurs Apple) il faut scanner le QR code présent dans le terminal de la commande `npm start`. Un fois scanné, l'application devrais s'afficher.
