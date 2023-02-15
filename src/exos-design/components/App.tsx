import { StrictMode } from 'react'
import { AppGlobalStyle } from '../styles/App.style'
import Design1 from './Design1'
import Design2 from './Design2'
import Design3 from './Design3'
import Design4 from './Design4'

/**
 * Composant principal de l'exercice de design. Il contient
 * et affiche les différents design de l'exercice.
 */
export default function App() {
  return (
    <StrictMode>
      <AppGlobalStyle />
      <Design4 />
    </StrictMode>
  )
}
