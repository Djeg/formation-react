import PubSub from 'pubsub-js'
import { createContext, StrictMode, useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { EmailProvider } from '../contexts/EmailContext'
import Connect from './Connect'
import Home from './Home'

/**
 * Affiche l'application de demo de gestion d'état
 */
export default function App() {
  return (
    <StrictMode>
      {/* On remplie la boite EmailContext avec le contenue de notre état */}
      <EmailProvider>
        <BrowserRouter>
          <nav>
            <Link to="/">Accueil</Link>
            <Link to="/connexion">Connection</Link>
          </nav>
          <Routes>
            {/* Plus besoin de props, la boite EmailContext qui tout ce qu'il faut */}
            <Route path="/" element={<Home />} />
            {/* Plus besoin de props, la boite EmailContext qui tout ce qu'il faut */}
            <Route path="/connexion" element={<Connect />} />
          </Routes>
        </BrowserRouter>
      </EmailProvider>
    </StrictMode>
  )
}
