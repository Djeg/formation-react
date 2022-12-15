import styled from 'styled-components'

/**
 * Contient le theme de la calculatrice
 */
const theme = {
  colors: {
    dark: '#220829',
    softDark: '#4c1e58',
    white: '#eeeeee',
    gray: '#c4c4c4',
  },
  sizes: {
    s: '.4rem',
    m: '.6rem',
    n: '1rem',
    l: '1.6rem',
    xl: '2.4rem',
  },
}

/**
 * Le container principal de la micro application
 * calculcatrice
 */
export const Container = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

/**
 * En tête de l'application calculatrice
 */
export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${theme.sizes.m};
  background-color: ${theme.colors.dark};
  color: ${theme.colors.white};

  h1 {
    text-align: center;
    padding: ${theme.sizes.s};
    color: ${theme.colors.white};
  }
`

/**
 * Cotenu de l'application calculatrice
 */
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
  justify-content: center;
  align-items: center;
`

/**
 * Contient la calculatrice
 */
export const CalculatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.dark};
  color: ${theme.colors.white};
  padding: ${theme.sizes.m};
  min-width: 70%;
`

/**
 * Ecran d'affichage de la calcuatrice
 */
export const DisplayScreen = styled.p`
  text-align: right;
  padding: ${theme.sizes.s};
  margin: ${theme.sizes.s};
  color: ${theme.colors.white};
  min-height: 25px;
  font-weight: bold;
  font-size: ${theme.sizes.l};
`

/**
 * Exran de résultat
 */
export const ResultScreen = styled(DisplayScreen)`
  color: ${theme.colors.gray};
  font-size: ${theme.sizes.n};
  border-top: 1px solid ${theme.colors.softDark};
`

/**
 * Affiche une ligne du clavier
 */
export const KeyLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${theme.sizes.s};
`

/**
 * Affiche une touche
 */
export const Key = styled.p`
  cursor: pointer;
  text-align: center;
  padding: ${theme.sizes.s};
  margin: ${theme.sizes.s};
  color: ${theme.colors.white};
  font-weight: bold;
  font-size: ${theme.sizes.l};
  flex-basis: 33%;
  border: 1px solid ${theme.colors.softDark};
`
