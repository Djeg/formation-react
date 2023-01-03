import { createGlobalStyle } from 'styled-components'

/**
 * Création d'un composant permettant de personnaliser le style
 * global de l'application
 */
export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }
`
