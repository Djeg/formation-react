# React et les composant

Le principe fondamental de react, c'est les `composants`. Tout est basé sur ce système !

Un composant c'est une balise HTML que nous allons pouvoir créer nous même. Cette balise HTML comporte une majuscule de départ !

> La majuscule est utilisé pour pouvoir distinguer du premier un `composant` d'une balise html

## Créer son premier composant

En react, le composant est très simple :

- C'est une **fonction** qui commence par une **majuscule** et dont l'unique objéctif est de retourner du **JSX** ou **null**

> **IMPORTANT** : Un composant n'as le droit de retourner qu'une seule balise **HTML**

Pour créer un composant, il suffit de créer une fonction et de retourner du JSX :

```tsx
/**
 * Création de mon premier composant
 */
function Hello() {
  return (
    <div>
      <h1>Salut tout le monde</h1>
      <p>J'espère que vous allez bien !</p>
    </div>
  )
}
```

Mainteant que nous avons notre composant, nous pouvons l'utiliser comme une balise JSX :

```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'

/**
 * Création de mon premier composant
 */
function Hello() {
  return (
    <div>
      <h1>Salut tout le monde</h1>
      <p>J'espère que vous allez bien !</p>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Hello></Hello>
  </React.StrictMode>,
)
```

> **IMPORTANT** : On peut utiliser un fragment, pour imiter une fausse balise html
>
> ```tsx
> /**
>  * Création de mon premier composant
>  */
> function Hello() {
>   return (
>     <>
>       <h1>Salut tout le monde</h1>
>       <p>J'espère que vous allez bien !</p>
>     </>
>   )
> }
> ```
>
> L'avantage, c'est que dans le html final, le fragment disparaitra

## Les props

Étant donnée qu'un composant c'est balise HTML, c'est aussi une fonction ... Qu'est-ce qui ce passe je j'envoie des attributs à ma balise HTMl ?

```tsx
/**
 * Création de mon premier composant
 */
function Hello() {
  return (
    <>
      <h1>Salut tout le monde</h1>
      <p>J'espère que vous allez bien !</p>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Hello name="John Doe"></Hello>
  </React.StrictMode>,
)
```

Ces attributs que l'on passe à des composants ce sont les **props**. Nous pouvons récupérer en 1er argument de notre fonction, un objet contenant toutes nos **props** :

> Typé avec le type `any` pour ne pas avoir d'erreur de compilation en typescript

```tsx
/**
 * Création de mon premier composant
 *
 * Ma fonction prend 1 paramètre, c'est un objet contenant toutes les props
 */
function Hello(props: any) {
  return (
    <>
      <h1>Salut {props.name}</h1>
      <p>Vous avez {props.age}</p>
      <p>J'espère que vous allez bien !</p>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Hello name="John Doe" age="34"></Hello>
  </React.StrictMode>,
)
```

### Quelques bonnes pratique

#### Utiliser la destructuration d'objet

Afin de rendre le code plus lisible et bien plus compréhensible par d'autre développeur, il fortement conseillé d'utiliser la destructuration lors de la déclaration de la fonction composant :

##### Sans destructuration (non conseillé)

```tsx
/**
 * Création de mon premier composant
 *
 * Ma fonction prend 1 paramètre, c'est un objet contenant toutes les props
 */
function Hello(props: any) {
  return (
    <>
      <h1>Salut {props.name}</h1>
      <p>Vous avez {props.age}</p>
      <p>J'espère que vous allez bien !</p>
    </>
  )
}
```

##### Avec destructuration (conseillé)

```tsx
/**
 * Création de mon premier composant
 *
 * Ma fonction prend 1 paramètre, c'est un objet contenant toutes les props
 */
function Hello({ name, age }: any) {
  return (
    <>
      <h1>Salut {name}</h1>
      <p>Vous avez {age}</p>
      <p>J'espère que vous allez bien !</p>
    </>
  )
}
```

#### **NE JAMAIS UTILISER `any`**

Il est très très très dangereux d'utiliser le type `any` lorsque l'on fais du typescript. C'est comme ci on désactiver **typescript** ! Si on désactive typescript alors on s'expose à tout les bugs célèbre et infernal de javascript !

Il est recommandé de créer notre propre type pour décrire ce qui se trouve dans les props :

```ts
/**
 * Création d'un type décrivant ce qui se trouve dans les props
 * de mon composant Hello
 */
type HelloProps = {
  name: string
  age: number
}

/**
 * Création de mon premier composant
 *
 * Ma fonction prend 1 paramètre, c'est un objet contenant toutes les props
 */
function Hello({ name, age }: HelloProps) {
  return (
    <>
      <h1>Salut {name}</h1>
      <p>Vous avez {age}</p>
      <p>J'espère que vous allez bien !</p>
    </>
  )
}
```

> Entrainez-vous !
>
> Voici 2 petits exerices vous permettant de pratiquer ces deux chapitres :
> https://codepen.io/djeg/pen/GRXKdeo?editors=0011
>
> https://codepen.io/djeg/pen/wvEwXwd?editors=0010

## Les `children` (les enfants)

Jusqu'à maintenant nous avons vue comment créer des composant, mais hèlas ce sont des balises simple.

Il est possible, comme en HTML de faire des balises doubles :

```html
<div>
  <p>COucou</p>
  <p>Les</p>
  <p>amis</p>
</div>
```

Le contenue d'une balise double est ce que l'on appel : `des childrens` (des enfants).

De la même un composant peut aussi recevoir des enfants :

```tsx
<GrosTitre>
  Coucou <strong>les amis</strong>
</GrosTitre>
```

Ces `children` sont passé dans les props de votre composant. Ils sont de type `ReactNode` et permettent à un composant de composé d'autre composant ...

Reprennons l'exemple du GrosTitre :

```tsx
import { ReactNode } from 'react'

export type GrosTitreProps = {
  children: ReactNode
}

function GrosTitre({ children }: GrosTitreProps) {
  return (
    <div className="super-titre">
      <section>{children}</section>
    </div>
  )
}
```

## Organiser son code !

Il est très important d'organiser corréctement son code. Un projet react peut faire des milliers de composants (cf: [bienici](https://www.bienici.com/)).

Il nous faut donc ranger ces composants !

> En react, vous n'êtes pas tenue de vous organiser d'une seule manière ! En soit, react n'impose aucune organisation. Il faut créer votre propre organisation ! Chaque projet react à des besoins différents et donc s'organise différement. Dans ce support nous allons utiliser une architecture DDD (Domain Driven Development) pouvant s'adapter à petit, moyen et gros projet. Cependant, il éxiste bien d'autre manière de s'organiser !

La plupart des projets react sépare chaque composant dans leurs propre fichiers. Si j'ai un composant `<GrosTitre />` alors je doit retrouver un fichier `GrosTitre.tsx`

> **Important** : le nom du composant doit être identique au nom du fichier

> **Note** : Nous verrons qu'il existe des exceptions ...

Les composants et leurs fichier doivent être rangé dans le dossier `src/components/`

> Le dossier `components` peut être au singulier, et porter un majuscule (`component`, `Component`, `Components` etc ...)

La fonction composant doit être **exporter par défault**

### Concernant les types

Il n'y a pas de règles précise pour ranger les types (les props etc ...). Deux solutions s'offre à vous :

1. Mettre le type au dessus du composant dans le même fichier (**conseiller pour des développeurs plus confirmé**)
2. Créer un fichier dédiée pour les types (**conseiller pour les débutants**)

Pour séparer les `types` des composants il faut créer un fichier dédié au type qui se nomme `NomDuComposant.Type.tsx`. Ces fichiers de types se range dans le dossier `src/types/`

> Le dossier `types` peut être au singulier, et porter un majuscule (`type`, `Type`, `Types` etc ...)

### Example : Le `DisplayStudent`

Dans cette exemple voici les fichiers que nous devons créer :

```
src/
  main.tsx
  components/
    App.tsx
    DisplayStudent.tsx
  types/
    DisplayStudent.type.tsx
```

#### `src/types/DisplayStudent.type.tsx`

```tsx
/**
 * Représente une étudiant dans mon application
 */
export type Student = {
  firstname: string
  lastname: string
  age: number
  notes: number[]
}

/**
 * Réprésente les props passé au composant DisplayStudent
 */
export type DisplayStudentProps = {
  student: Student
}
```

#### `src/components/DisplayStudent.tsx`

```tsx
import { DisplayStudentProps } from '../types/DisplayStudent.type'

/**
 * Affiche un étudiant à l'écran
 */
export default function DisplayStudent({ student }: DisplayStudentProps) {
  return (
    <>
      <h1>
        {student.firstname} {student.lastname} ({student.age} ans)
      </h1>
      <h2>Notes :</h2>
      <ul>
        {student.notes.map((note, index) => (
          <li key={index}>
            Note n°{index + 1} : {note} / 20
          </li>
        ))}
      </ul>
    </>
  )
}
```

#### `src/main.tsx`

```tsx
import App from './components/App'
import ReactDOM from 'react-dom/client'

const root = document.querySelector('#root') as HTMLElement

ReactDOM.createRoot(root).render(<App />)
```

#### Le `App.tsx`

Dans toutes les applications il éxiste un composant principal, c'est composant qui affiche **toute l'application**. Ce composant c'est le `App.tsx`.

Il se range dans le dossier `components/` et contient le code de l'application.

Exemple :

#### `src/components/App.tsx`

```tsx
import { StrictMode } from 'react'
import DisplayStudent from './DisplayStudent'

/**
 * Composant principal de l'application
 */
export default function App() {
  return (
    <StrictMode>
      <DisplayStudent student={...}>
    </StrictMode>
  )
}
```
