import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { MenuContainer, MenuLink } from '../Style/App'
import { GlobalStyle } from '../Style/Global'
import Calculator from './Calculator'
import Counter from './Counter'
import Hello from './Hello'
import Timer from './Timer'

/**
 * Composant principal de l'application
 */
export default function App() {
  return (
    // On active le strict mode pour pouvoir debugger
    // notre application react
    <StrictMode>
      {/* 
          On englobe toute l'application dans le router.
          Ce dernier met en place la navigation
       */}
      <BrowserRouter>
        {/* utilise le style global */}
        <GlobalStyle />

        {/* Menu de navigation */}
        <MenuContainer>
          {/* 
              Ici, nous utilisons la balise Link de react-router afin
              de créer des liens, sans rechargement
          */}
          <MenuLink to="/">Compteur</MenuLink>
          <MenuLink to="/calculatrice">Calculatrice</MenuLink>
          <MenuLink to="/chrono">Chronomètre</MenuLink>
          <MenuLink to="/bonjour/David/34">Bonjour 1</MenuLink>
          <MenuLink to="/bonjour/John/45">Bonjour 2</MenuLink>
        </MenuContainer>

        {/* 
            On créer des routes différentes correspondant à nos
            différents écrans
        */}
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/calculatrice" element={<Calculator />} />
          <Route path="/chrono" element={<Timer />} />
          <Route path="/bonjour/:name/:age" element={<Hello />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  )
}
