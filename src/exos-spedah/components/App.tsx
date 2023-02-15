import { StrictMode } from 'react'
import { AppGlobalStyle } from '../styles/App.style'
import GetStarted from './GetStarted'

/**
 * Composant affichant l'application Spedah
 *
 * @link https://www.figma.com/file/hgiFPL2yS7ErDON0MsACfl/Spedah_Login-%26-Sign-Up-(Community)?node-id=0%3A1&t=QzgpAtgF7MAhlnqA-1
 */
export default function App() {
  return (
    <StrictMode>
      <AppGlobalStyle />
      <GetStarted />
    </StrictMode>
  )
}
