// Import de styled components
import styled, { createGlobalStyle } from 'styled-components'

/**
 * Ce fichier contient l'intégralité de nos composants
 * stylisé. Vous retrouverez TOUT le css de l'application
 * en dessous
 */

// Style Globale : Style des balises HTML nue (sans classe)
export const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    font-family: 'Nunito', sans-serif;
  }

  h1 {
    font-family: 'Lobster', sans-serif;
  }
`

// POUR LE FUN

export const MyParagraph = styled.p`
  text-align: center;
  color: #725498;
`
