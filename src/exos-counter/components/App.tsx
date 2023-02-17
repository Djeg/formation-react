import { StrictMode } from 'react'
import { AppGlobaleStyle } from '../styles/App.style'
import Counter from './Counter'

/**
 * Fonction composant affichant l'application du conteur
 */
export default function App() {
  return (
    <StrictMode>
      <AppGlobaleStyle />
      <Counter>Super Compteur 2</Counter>
      <Counter>Deuxieme Compteur</Counter>
    </StrictMode>
  )
}
