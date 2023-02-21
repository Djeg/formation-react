import PubSub from 'pubsub-js'
import { createContext, StrictMode, useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Connect from './Connect'
import Home from './Home'

/**
 * Affiche l'application de demo de gestion d'état
 */
export default function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/connexion">Connection</Link>
        </nav>
        <Routes>
          {/* Plus besoin de props */}
          <Route path="/" element={<Home />} />
          {/* Plus besoin de props */}
          <Route path="/connexion" element={<Connect />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  )
}
