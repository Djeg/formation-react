import { createGlobalStyle } from 'styled-components'

export const AppTheme = {
  font: {
    family: `'Sora', sans-serif`,
    size: '18px',
  },
  colors: {
    white: '#FFF',
    blue: '#1F5460',
    yellow: '#FFCA42',
    green: '#A8C0A7',
    lightGreen: '#D5E7D4',
  },
}

/**
 * Création du style globale de l'application
 * du conteur
 */
export const AppGlobaleStyle = createGlobalStyle`
  :root {
    font-size: ${AppTheme.font.size};
    font-family: ${AppTheme.font.family};
    background-color: ${AppTheme.colors.blue};
    color: ${AppTheme.colors.white};
  }

  html, body, #root {
    margin: 0;
    padding: 0;
    display: flex;
    min-width: 100vw;
    min-height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  * {
    box-sizing: border-box;
  }
`
