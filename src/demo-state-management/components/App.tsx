import { StrictMode, useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Connect from './Connect'
import Home from './Home'

/**
 * Affiche l'application de demo de gestion d'état
 */
export default function App() {
  // Ce composant possède un état : l'email de l'utilisateur
  const [email, setEmail] = useState('john@mail.com')

  return (
    <StrictMode>
      <BrowserRouter>
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/connexion">Connection</Link>
        </nav>
        <Routes>
          {/* On passe l'email a l'écran Home */}
          <Route path="/" element={<Home email={email} />} />
          {/* On passe l'email a l'écran Connect ainsi que la fonction setEmail */}
          <Route
            path="/connexion"
            element={<Connect email={email} setEmail={setEmail} />}
          />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  )
}
