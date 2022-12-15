import { createGlobalStyle } from 'styled-components'

/**
 * Contient le style globale de toute l'application
 */
export const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }
`
