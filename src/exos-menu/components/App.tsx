import { StrictMode } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppGlobalStyle } from '../../exos-spedah/styles/App.style'
import About from './About'
import Accueil from './Accueil'
import Contact from './Contact'
import Menu from './Menu'

/**
 * Composant affichant l'application du menu
 */
export default function App() {
  return (
    <StrictMode>
      <AppGlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Menu />
      </BrowserRouter>
    </StrictMode>
  )
}
