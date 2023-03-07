import { createGlobalStyle } from 'styled-components'

/**
 * Création du thème de l'application
 */
export const Theme = {
  colors: {
    coldWhite: '#EDFFFB',
    softBlack: '#4F4F4F',
    greenOcean: '#075252',
    green: '#557859',
    deepBlue: '#264F4A',
    white: '#EFEFEF',
  },
}

/**
 * Création du style globale de l'application
 */
export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 18px;
    font-family: 'Poppins', sans-serif;
    color: ${Theme.colors.softBlack};
    background-color: ${Theme.colors.coldWhite};
    margin: 0;
    padding: 0;
  }

  body, #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }
`
