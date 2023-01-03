import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Registration from './Registration'

/**
 * Composant principal de l'application. C'est ce composant
 * qui contient les routes de toute l'application
 */
export default function App() {
  return (
    // On active le strict mode pour debugger react
    <React.StrictMode>
      {/* La navigation sur mon navigateur */}
      <BrowserRouter>
        {/* On déclare une suite ou collection de routes */}
        <Routes>
          {/* Route d'inscription (page d'inscription ou écran d'inscription) */}
          <Route path="/" element={<Registration />} />
          {/* Route pour la connexion */}
          <Route path="/connexion" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  )
}
