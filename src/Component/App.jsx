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
          {/* Route de la page de connexion */}
          <Route path="/" element={<Login />}>
            {/* Ces routes enfant, sont nommé les Outlet. Elles sont
            utilisé dans le composant login et affiché unqiuement lorsque nous
            sommes connécté */}
            <Route path="" element={<h1>Accueil</h1>} />
            <Route path="nouvelle-liste" element={<h1>Nouvelle liste</h1>} />
          </Route>

          {/* Route pour l'inscription */}
          <Route path="/inscription" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  )
}
