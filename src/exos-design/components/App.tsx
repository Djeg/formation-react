import { StrictMode } from 'react'
import { AppGlobalStyle } from '../styles/App.style'
import Design1 from './Design1'

/**
 * Composant principal de l'exercice de design. Il contient
 * et affiche les différents design de l'exercice.
 */
export default function App() {
  return (
    <StrictMode>
      <AppGlobalStyle />
      <Design1 />
    </StrictMode>
  )
}
