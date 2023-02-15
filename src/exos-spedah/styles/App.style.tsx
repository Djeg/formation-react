import { createGlobalStyle } from 'styled-components'

/**
 * Création d'un theme contenant les couleurs, les polices
 * ainsi que les marges de bases
 */
export const AppTheme = {
  colors: {
    white: '#FFF',
    blue: '#1F5460',
    yellow: '#FFCA42',
    green: '#A8C0A7',
    lightGreen: '#D5E7D4',
  },
}

/**
 * Création d'un style globale permettant de styliser les balises
 * élémentaire d'une page HTML ainsi que le :root
 */
export const AppGlobalStyle = createGlobalStyle`
  :root {
    font-size: 18px;
    font-family: 'Sora', sans-serif;
    color: ${AppTheme.colors.white};
    background-color: ${AppTheme.colors.blue};
  }

  html, body, #root {
    display: flex;
    min-height: 100vh;
    min-width: 100vw;
    flex-direction: column;
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }
`
