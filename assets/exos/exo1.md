# Savoir manipuler le JSX

## Mise en place

1. Pour faire cette exercice, commencez par créer une application react.
2. Supprimer tout ce qu'il y as dans le répertoire `src` à l'exception de 2 fichier : `main.tsx`, `vite-env.d.ts`
3. Copier le contenue suivant dans votre fichier `main.tsx`:

```tsx
// On importe la librairie ReactDOM. Il faut savoir que react
// fonctionne aussi avec d'autre technologie que le DOM (Document Object Model)
import ReactDOM from 'react-dom/client'

// On récupére la balise #root dans lequel notre application
// react vas s'afficher
const root = document.querySelector('#root')

// On s'assure de posséder une balise root dans notre html
if (!root) {
  // Je léve une erreur fatale car l'application ne peut
  // pas fonctionner
  throw new Error(`
    Impossible de démarer l'application car la balise avec l'id #root
    n'éxiste pas dans la page HTML.
  `)
}

// On vas créer une « root » (une racine) React. Cette racine
// est utilisé pour démarrer l'application
const reactRoot = ReactDOM.createRoot(root)

// Placer les exercices ici :

// On peut afficher du JSX très simplement en utilisant la fonction
// render de la racine react :
// C'est ici que vous pouvez afficher le résultat des exercices
reactRoot.render(
  <div>
    <h1>Salut tout le monde</h1>
    <p>Comment allez-vous ?</p>
  </div>,
)
```

## 1. Afficher le nom et le prenom d'un éléve

1. Créer une constante « eleve » avec le type suivant :

```tsx
// Type définissant un éléve
type Student = {
  nom: string
  prenom: string
  age: number
  notes: number[]
}
```

2. Afficher (dans la fonction render de `reactRoot`) le nom et le prénom de l'éléve
   dans une balise `h1`

## 2. Afficher son age

1. À la suite de la balise `h1` afficher un paragraphe avec à l'intérieur l'age de l'élève

## 3. Afficher les notes

2. À la suite du paragraph, ajouter une h2 avec le titre `Notes de l'élève` et ensuite
   dans une balise `ul`, boucler sur les notes et afficher dans `li` : « Note n°{numero} : {note} »
