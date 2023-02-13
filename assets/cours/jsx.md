# React & JSX/TSX

React est conçu dans l'optique de faire **l'unanimité**. Son principe est simple, créer des interfaces utilisateurs inteligente.

Comme vous le savez dèja pour afficher des choses dans un navigateur on utilise : **HTML**. Et bien react l'utilise aussi !

Cependant, nous avons quelques différences, c'est une petite extension de javascript ou typescript que l'on nomme `jsx` ou `tsx`. Cette extension permet tout simplement de rentrer du code html diréctement dans nos fichiers `js` ou `ts` !

> Pour utiliser `tsx` ou `jsx` il faut que votre fichier porte l'extension `.tsx` ou `.jsx`

## Utiliser JSX

Prenons un exemple :

```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <h1>Hello tout le monde</h1>
  </React.StrictMode>,
)
```

Dans cette exemple de code, nous avons des balises HTML ... `<h1>` ainsi que `<React.StrictMode>`. Ces balises sont ce que l'on appel du JSX.

C'est très simple, cela correspond à ce qu'il vas s'afficher à l'écran.

React utilise strictement la même syntaxe que HTML

> Essayer d'éditer le contenue de la balise `<React.StrictMode>`, tout devrait s'afficher à l'écran.

### `className` ou lieu de `class`

Pour des raisons de langage de programmation et mot reservé, react et JSX n'utilise pas l'attribut `class` mais plutôt `className` :

```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <h1 className="big-text">Hello tout le monde</h1>
  </React.StrictMode>,
)
```

### Le `JSXElement`

En faite, une balise html en react est nommé : `JSXElement`. C'est une données, comme un chaîne de caractère (en un peu plus compliqué). Ce qui veut dire que l'on peut en faire des variables !

```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'

const titre = <h1>Salut les amis !!!</h1>
const paragraph = <p>Comment allez-vous ?</p>

// Attention, dans le cas ou il y plusieurs, il faut
// mettre le JSX entre parenthése :
const block = (
  <div className="block">
    <div className="header">
      <p>Mon block !</p>
    </div>
  </div>
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <h1 className="big-text">Hello tout le monde</h1>
  </React.StrictMode>,
)
```

### Afficher des variables dans du jsx !

Il est possible d'utiliser les `{}` afin d'afficher une variable n'importe ou dans un code JSX :

```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'

// Création d'un nom et prenom
const name = 'John Doe'
const age = 29

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <h1 className="big-text">Bonjour {name} !</h1>
    <p>Vous avez {age} ans</p>
  </React.StrictMode>,
)
```

Les variables peuvent aussi être utilisé dans des attributs !

```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'

// Création d'une url d'image
const imgUrl = 'https://mon-image.com/mon-image.jpg'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <h1 className="big-text">Bonjour</h1>
    <img src={imgUrl} alt="mon image" />
  </React.StrictMode>,
)
```

### Afficher un tableaux d'élément

Lorsque l'on affiche un variable en jsx, il est aussi possible d'afficher un tableaux :

```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'

// Création d'une liste
const notes = [
  <li>Note 12 / 20</li>,
  <li>Note 08 / 20</li>,
  <li>Note 18 / 20</li>,
]

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <h1 className="big-text">Bonjour</h1>
    <ul>{notes}</ul>
  </React.StrictMode>,
)
```

Donc, un exemple un peu plus complexe devrait être facile à résoudre :

```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'

// Création d'une liste
const notes = [12, 8, 14, 16]

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <h1 className="big-text">Bonjour</h1>
    <ul>
      {notes.map((note, index) => (
        <li>
          Note n°{index + 1} : {note} / 20
        </li>
      ))}
    </ul>
  </React.StrictMode>,
)
```

#### Identifier les éléments d'un tableaux

Lorsque l'on fait une boucle en JSX, il est très important pour des raison de performances d'identifier chaque élément JSX !

Pour cela on utilise généralement l'attribut `key` ! Vous pouvez mettre dans cette atrribut, l'index de ll'élement ou possiblement un `id`.

> Important, on utilise key uniquement lors **d'une boucle** (.map, .filter etc ...)

```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'

// Création d'une liste
const notes = [12, 8, 14, 16]

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <h1 className="big-text">Bonjour</h1>
    <ul>
      {notes.map((note, index) => (
        <li key={index}>
          Note n°{index + 1} : {note} / 20
        </li>
      ))}
    </ul>
  </React.StrictMode>,
)
```

## Afficher du JSX

Pour afficher du JSX sur une page html. Il faut importer la librairie `ReactDOM` :

```tsx
import ReactDOM from 'react-dom/client'
```

> **ReactDOM** c'est l'extension de react pour les navigateur, il faut savoir qu'on peut utiliser react sur des téléphones mobile, en dehors des navigateur, ce ne sera plus **ReactDOM** pour les mobiles mais **ReactNative**

Il faut ensuite séléctionner une balise qui vas recevoir notre application react :

```tsx
const root = document.querySelector('#root') as HTMLElement
```

Maintenant nous pouvons demander à react de s'afficher dans la balise séléctionnée :

```tsx
import ReactDOM from 'react-dom/client'

// Séléctionne de la balise HTML dans lequel on souhaite afficher REACT
const root = document.querySelector('#root') as HTMLElement

// Ici on demande à react d'afficher le JSX dans la balise « root »
ReactDOM.createRoot(root).render(
  <div>
    <h1>Coucou les amis</h1>
    <p>KSHfkdshflsdkhflsdh</p>
  </div>,
)
```

> la ligne `as HTMLElement` sert forcer typescript à nous donner un HTMLElement. Car la fonction `querySelector` peut retourner null

> Comme vous avez pu le constater il existe un balise un peu particulière ... C'est la cas de `<React.StricMode>`. Ces balises un peu particulière se sont des « balises personnalisé » ! React est basé sur un concept simple : Créer nos propres balise HTML ! C'est ce qu'on appel des `Composant` (`Component`). Ils portent tous une majuscule au début ! Ici le `<React.StrictMode>` permet de tronquer un peu de performance pour pouvoir mieux débugger notre application.
