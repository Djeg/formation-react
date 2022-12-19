import { StrictMode } from 'react'
import { useStore } from '@nanostores/react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { nanoCalculatorStore } from '../Store/NanoCalculator'
import { MenuContainer, MenuLink } from '../Style/App'
import { GlobalStyle } from '../Style/Global'
import Calculator from './Calculator'
import Counter from './Counter'
import Hello from './Hello'
import NanoCalculator from './NanoCalculator'
import Timer from './Timer'

/**
 * Composant principal de l'application
 */
export default function App() {
  const { resultScreen } = useStore(nanoCalculatorStore)

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
          <MenuLink to="/nano-calculatrice">Nano Calculatrice</MenuLink>
          <MenuLink to="/chrono">Chronomètre</MenuLink>
          <MenuLink to="#">Résultat : {resultScreen}</MenuLink>
        </MenuContainer>

        {/* 
            On créer des routes différentes correspondant à nos
            différents écrans
        */}
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/calculatrice" element={<Calculator />} />
          <Route path="/nano-calculatrice" element={<NanoCalculator />} />
          <Route path="/chrono" element={<Timer />} />
          <Route path="/bonjour/:name/:age" element={<Hello />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  )
}
