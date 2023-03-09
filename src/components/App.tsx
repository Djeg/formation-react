import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GlobalStyle } from '../styles/App.style'
import Connection from './Connection'
import Subscription from './Subscription'

/**
 * Composant principal de l'application
 */
export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Connection />}>
          <Route path="" element={<h1>Accueil</h1>} />
          <Route path="nouvelle-liste" element={<h1>Accueil</h1>} />
        </Route>
        <Route path="/inscription" element={<Subscription />} />
      </Routes>
    </BrowserRouter>
  )
}
