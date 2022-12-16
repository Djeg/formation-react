import { StrictMode } from 'react'
import { GlobalStyle } from '../Style/Global'
import Calculator from './Calculator'
import Timer from './Timer'

/**
 * Composant principal de l'application
 */
export default function App() {
  return (
    // On active le strict mode pour pouvoir debugger
    // notre application react
    <StrictMode>
      {/* utilise le style global */}
      <GlobalStyle />
      {/* Affiche le chronométre */}
      <Timer />
    </StrictMode>
  )
}
