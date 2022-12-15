import { StrictMode } from 'react'
import { GlobalStyle } from '../Style/Global'
import Design4 from './Design4'
import Eleve from './Eleve'

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
      {/* Affiche le design n° 4 */}
      <Design4 />
    </StrictMode>
  )
}
