import { createGlobalStyle } from 'styled-components'

/**
 * Contient le style globale de toute l'application
 */
export const GlobalStyle = createGlobalStyle`
  body, html, #root {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    min-height: 100vw;
    display: flex;
    flex-direction: column;
  }

  * {
    box-sizing: border-box;
  }
`
