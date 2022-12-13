# Correction : Manipuler le JSX

`src/main.tsx` :

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

type Student = {
  nom: string
  prenom: string
  age: number
  notes: number[]
}

const eleve: Student = {
  nom: 'Doe',
  prenom: 'John',
  age: 19,
  notes: [12, 15, 7, 8, 19, 15],
}

// On peut afficher du JSX très simplement en utilisant la fonction
// render de la racine react :
// C'est ici que vous pouvez afficher le résultat des exercices
reactRoot.render(
  <div>
    <h1>
      Élève {eleve.nom} {eleve.prenom}
    </h1>
    <p>Age : {eleve.age}</p>
    <h2>Notes :</h2>
    <ul>
      {eleve.notes.map((note, index) => (
        <li key={`note-${index}`}>{note} / 20</li>
      ))}
    </ul>
  </div>,
)
```
