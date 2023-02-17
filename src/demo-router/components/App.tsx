import { StrictMode } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Counter from '../../exos-counter/components/Counter'
import GetStarted from '../../exos-spedah/components/GetStarted'
import { AppGlobalStyle } from '../../exos-spedah/styles/App.style'

/**
 * Application de demo pour les routes
 */
export default function App() {
  return (
    <StrictMode>
      <AppGlobalStyle />
      <BrowserRouter>
        <h1>Mon application</h1>
        <p>Menu :</p>
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/contact" element={<GetStarted />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  )
}
