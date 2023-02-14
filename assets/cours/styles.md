# React et le style

Pour faire du style en react, nous avons plusieurs possibilité :

1. Utiliser CSS de manière classique
2. Utiliser les modules CSS
3. Utiliser un framework CSS (SASS, Bootstrap, tailwind, MaterialUI etc ...)
4. Utiliser une librairie de style : [Styled Components](https://styled-components.com/)

> On peut toutes les mélanger si l'on souhaite ! Cependant il est conseillé d'utiliser qu'une seule de ces techniques, pour des raisons de maintenance et de compréhension.

## Utiliser une feuille de style

Pour utiliser du css en react, il suffit de créer une feuille de style CSS et l'importer dans notre fichier typescript (javascript) :

#### `src/styles/mon-style.css`

```css
body,
html {
  margin: 0;
  padding: 0;
  ...;
}
```

#### `src/components/App.tsx`

```tsx
import '../styles/mon-style.css'
```

> **IMPORTANT** : Cette technique est très simple, peu très bien convenir à de toutes petites applications. Cependant, pour des applications de plus grosses elle devient très difficile à maintenir (gros fichiers CSS, conflit entre les fichiers etc ...)

## Utiliser les modules CSS

Très similaire à l'import de feuilles les modules css, permettent d'isoler le css d'un composant.

> 2 composants peuvents avoir la même classe mais dans 2 modules CSS différents, donc pas de colision !

Pour créer un module CSS, il faut tout d'abord créer un fichier se terminant par : `.module.css` :

#### `src/styles/DisplayStudent.module.css`

```css
.block {
  display: flex;
  justify-content: center;
}

.bigText {
  font-size: 3rem;
}
```

Une fois votre fichier CSS terminé, nous pouvons importer le **style** dans notre composant :

#### `src/components/DisplayStudent.tsx`

```tsx
import style from '../styles/DisplayStudent.module.css'

export default function DisplayStudent() {
  return (
    <div className={style.block}>
      <p className={style.bigText}>Lorem Ipsum</p>
    </div>
  )
}
```

> **IMPORTANT** : Cette technique permet de faire grossir nos projets sans trop se perdre. Cependant elle souffre de nombreux défaut :
>
> - Répétition de code CSS
> - Volumes de fichiers, ainsi que le nombre fichier
> - Votre éditeur ne peux pas vous aider ....

### Utiliser un framework CSS

En react il est possible d'utiliser le framework CSS de son choix :

- Bootstrap
- Tailwind
- MaterialUI
- SASS
- Stylus
- Bulma
- Etc ...

Qui plus est dans certains cas, ils viennent directement avec une extension pour React :

- React Bootstrap
- React MaterialUI
- etc ...

Ces frameworks sont très utilisé et répandu parmis les developper backend qui ne souhaite pas passer du temps sur CSS !

Parmis les developper frontend, ils ne sont pas _très_ apprécié surtout à cause :

- « Un outil de plus à apprendre » !
- La taille, ce sont des lignes de css qui allourdissent notre application
- Il est plus difficile de faire du CSS avec un framework que sans framework

## Utiliser `styled-components`

[Styled Components](https://styled-components.com/) est l'outil le plus répandu dans l'écosystème react pour faire style de manière optimal (peut de lignes CSS, réutilisation, extension, compresser, offusquer etc ...).

Ce qui lui vaut sa popularité est un idée simple :

« Et si une classe CSS, c'était un composant ? »

### Le concept

L'idée de style component est très simple : transformer une classe `css` en composant react :

Exemple :

#### `src/components/App.tsx`

```tsx
import { Box, Title } from '../styles/App.style'

export default function App() {
  return (
    <Box>
      <Title>Coucou les amis</Title>
    </Box>
  )
}
```

#### `src/components/App.style.tsx`

```tsx
import styled from 'styled-components'

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
`
```

### Installation de `styled-components`

Pour installer `styled-components` sur notre projet :

```bash
$ npm i styled-components
```

> **POUR LES UTILISATEURS TYPESCRIPT INSTALLÉ AUSSI :**
>
> ```bash
> $ npm i -D @types/styled-components
> ```

> Il éxiste un extension VSCode très sympathique (coloration syntaxique et auto-completion du css) pour styled component : [VSCode Styled Component](https://marketplace.visualstudio.com/items?itemName=styled-components.vscode-styled-components)

## Utilisation :

Pour utiliser styled components, il suffit de l'importer et de créer nos premier « composants stylisée » (c'est à dire des composants react contenant du css) :

```tsx
import styled from 'styled-components'

/**
 * Création d'un text rouge
 */
export const RedText = styled.p`
  color: red;
  font-weight: bold;
`

/**
 * Création d'une boite flex, en colone
 * tout aligner au centre !
 */
export const AllCenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
`
```

```tsx
// src/components/App.tsx
import { RedText, AllCenteredContainer } from '../styles/App.style'

export default function App() {
  return (
    <AllCenteredContainer>
      <RedText>Coucou les amis</RedText>
    </AllCenteredContainer>
  )
}
```

### Appliquer un style globale avec `styled-component`

Il peu être utile de styliser des balises HTML comme par exemple le `body`, le `html` et aussi `:root` etc ..

Pour cela nous pouvons créer un style globale :

```tsx
import { createGlobalStyle } from 'styled-component'

/**
 * Création d'un style globale
 */
const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 20px;
  }

  html, body {
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }
`

export default function App() {
  return (
    <>
      <GlobalStyle />
      <p>Lorem Ipsum</p>
      <p>Dolot sir amet</p>
    </>
  )
}
```

## Organiser son style !

Nos fichiers CSS, modules CSS ou bien nos « styled components » se range dans le dossier `src/styles`

> Vous pouvez mettre au singulier ou ajouter une majuscule (ex: `Style`, `Styles`, `style` etc ..)

Dans un dossier nous retrouvons généralement un fichier de styles par composant !

Exemple (avec `styled-components`)

```src
src/
  main.tsx
  components/
    App.tsx
    DisplayStudent.tsx
  types/
    DisplayStudent.type.tsx
  styles/
    App.style.tsx
    DisplayStudent.style.tsx
```

Les fichiers de styles peuvent exporter autant de composant stylisé de votre choix ! Il n'y pas de restriction sur le nombre de composant stylisé que peut contenir un fichier !
