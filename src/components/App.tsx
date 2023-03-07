import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GlobalStyle } from '../styles/App.style'
import Subscription from './Subscription'

/**
 * Composant principal de l'application
 */
export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<h1>Super Todo</h1>} />
        <Route path="/inscription" element={<Subscription />} />
      </Routes>
    </BrowserRouter>
  )
}
