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
