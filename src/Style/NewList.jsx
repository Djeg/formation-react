import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Theme } from './Theme'

/**
 * Contient l'en tête de l'écran de nouvelle liste
 */
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: ${Theme.colors.blue};
  padding: 0.8rem;
  align-items: center;
`

/**
 * Contient le bouton retour sur l'en tête
 */
export const HeaderBackContainer = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  outline: none;

  i {
    font-size: 2.4rem;
    color: ${Theme.colors.white};
    padding: 0.3rem;
  }
`

/**
 * Contient le titre de l'en-tête
 */
export const HeaderTitle = styled.h1`
  font-family: ${Theme.fonts.display};
  font-size: 2.5rem;
  color: ${Theme.colors.white};
  text-align: right;
  margin: 0;
  padding: 0.3rem 0;
`

/**
 * Centre le contenu
 */
export const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 2;
`

/**
 * Contient la carte d'un utilisateur
 */
export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
