# React Router

La première pour mettre en place plusieurs écran c'est de choisir une librairie de gestion des écrans. Ce qu'on vas découvrir, c'est la librairie officiel :

[React Router](https://reactrouter.com/en/main)

## Installation

Pour pouvoir utiliser le react router :

Version web :

```bash
npm i react-router-dom
```

Version native :

```bash
npm i react-router-native
```

## Mettre en place le Router

Pour commencer à utiliser le react-router il faut tou d'abord utiliser la composant : `<Router />`

Exemple :

```tsx
import { Router } from 'react-router-dom'

export default function App() {
  return (
    <>
      <Router></Router>
    </>
  )
}
```

## Utiliser des Route et des Link

Pour pouvoir créer plusieurs écrans dans notre application (un écran de Connection, et un écran d'inscription). Il faut utiliser les composants `<Routes />`, `<Route />` et `<Link />` :

Exemple :

```tsx
import Home from './Home'
import Register from './Register'
import Connect from './Connect'
import { Router, Routes, Route, Link } from 'react-router-dom'

export default function App() {
  return (
    <>
      <Router>
        {/* Permet de mettre en place un série de routes */}
        <Routes>
          {/* Mettre en place les routes de l'application en utilisant l'URI */}
          <Route path="/" element={<Home />}>
          <Route path="/inscription" element={<Register />}>
          <Route path="/connexion" element={<Connect />}>
        </Routes>

        {/* Création d'un menu */}
        <nav>
          {/* Lien de navigation */}
          <Link to="/">Accueil</Link>
          <Link to="/inscription">Inscription</Link>
          <StyledLink to="/connexion">Connexion</StyledLink>
        </nav>
      </Router>
    </>
  )
}

/**
 * Pour stylisé une balise Link
 */
export const StyledLink = styled(Link)`
  background-color: red;
`
```
