# React Router

Les routes se sont des liens vers des écrans de l'application. En react, le concept est simple nous allons avoir des « resources » (chemin) attaché à des composants :

- `/` : `Accueil.tsx`
- `/mes-articles` : `MesArticles.tsx`
- `/contact` : `Contact.tsx`

## Installation

De base, react n'as pas de routes, nous pouvons le développer nous même ou bien utiliser la libraire la plus célébre : [React Router](https://reactrouter.com/en/main)

React Router vient avec 2 versions :

- `react-router-dom` : Version pour les navigateur
- `react-router-native` : Version pour les applications mobile

Pour installer react router, on utilise npm :

```bash
$ npm i react-router react-router-dom
```

## Mise en place

Pour utiliser le react router il faut l'initialiser :

```tsx
import { BrowserRouter } from 'react-router-dom'

// App.tsx
export default function App() {
  return (
    <BrowserRouter>
      <p>Mon application</p>
    </BrowserRouter>
  )
}
```

> Pour les application mobile, il faut utiliser le `NativeRouter`

## Les routes

Pour pouvoir mettre en places plusieurs écran, il faut utiliser les routes :

```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Accueil from './Accueil'
import Contact from './Contact'

// App.tsx
export default function App() {
  return (
    <BrowserRouter>
      <h1>Mon application</h1>
      <Routes>
        <Route path="/" element={<Accueil />}>
        <Route path="/contacte" element={<Contact />}>
      </Routes>
    </BrowserRouter>
  )
}
```

## Les liens

Pour faire des liens entre nos écrans, **nous n'utilisons pas la balise `a`** ! Il faut utiliser la balise `Link` :

```tsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Accueil from './Accueil'
import Contact from './Contact'

// App.tsx
export default function App() {
  return (
    <BrowserRouter>
      <h1>Mon application</h1>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/contact">Nous contacter</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Accueil />}>
        <Route path="/contact" element={<Contact />}>
      </Routes>
    </BrowserRouter>
  )
}
```

## Des paramètres de routes

Il est possible de créer des routes « dynamique ». Dont le chemin est dynamique, peut-être un identifiant, un nom de produit etc ...

C'est ce que l'on appel des paramètres de routes :

```tsx

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Accueil from './Accueil'
import Contact from './Contact'

// App.tsx
export default function App() {
  return (
    <BrowserRouter>
      <h1>Mon application</h1>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/contact">Nous contacter</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Accueil />}>
        <Route path="/contact" element={<Contact />}>
        <Route path="/produits/:id" element={<Product />}>
      </Routes>
    </BrowserRouter>
  )
}
```

Nous pouvons récupérer un paramètre de route dans n'importe quelle composant :

```tsx
import { useParams } from 'react-router-dom'

export default function Product() {
  const { id } = useParams()

  return (
    <>
      <h1>Produit n°{id}</h1>
    </>
  )
}
```
