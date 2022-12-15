import { StrictMode } from 'react'
import { GlobalStyle } from '../Style/Global'
import Design1 from './Design1'
import Design2 from './Design2'
import Design3 from './Design3'
import Design4 from './Design4'

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
      {/* Affiche le premier design */}
      <Design4 />
    </StrictMode>
  )
}
