# Organiser et styliser une application react

En utilisant les design présent dans un projet figma ([Lien vers les designs](https://www.figma.com/file/uqUjILdONGoXCEImw1iYqv/Untitled?node-id=8%3A12&t=LwKk7cx9ngCzoS6X-1))

Vous devez réaliser chaque design en utilisant des composants react, du css ou des styled-components.

## Si vous utiliser du css ou des modules css

Il est conseillé de créer un fichier `src/Component/Design1.tsx` contenant le html du premier design par exemple.

Il est aussi conseiller de créer une feuille de style (ou module css) à importer dans le composant Design1 et à ranger dans `src/Style/Design1.css` ou `src/Style/Design1.module.css`.

## Si vous utiliser styled-components :

1. Il vous faut installer la librairie. Dans un terminal lancer les commande :

```bash
npm i --save styled-components
npm i -D @types/styled-components
```

2. Il vous faudra ajouter les composant stylisé dans un fichier comme par exemple : `src/Style/Design1.tsx`.

## Afficher un design :

Pour afficher un design, utiliser le composant (ex: `Design1`) directement :

- Dans le `render` du fichier `main.tsx`
- Dans le composant `src/Composant/App.tsx`

## Quelques aides :

- [Les supports react](https://slides.com/davidjegat-1/react-support/fullscreen)
- [Styled Components](https://styled-components.com/)
