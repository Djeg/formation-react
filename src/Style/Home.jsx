import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Theme } from './Theme'

/**
 * Contient l'intégralité de l'écran d'accueil
 */
export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-height: 100vh;
`

/**
 * Contient le titre de l'écran d'accueil
 */
export const MainTitle = styled.h1`
  font-family: ${Theme.fonts.display};
  font-size: 3rem;
  color: ${Theme.colors.black};
  padding: 1rem;
  text-align: center;
  margin: 0;
`

/**
 * Contient les cartes de choses à faire
 */
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`

/**
 * Contient le design d'une carte de chose à faire
 */
export const Card = styled.div`
  background-color: ${Theme.colors.blue};
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  padding: 0px 0.6rem;
  align-items: center;
  margin-bottom: 1.2rem;
`

/**
 * Contient le label de la carte
 */
export const CardLabel = styled.p`
  font-family: ${Theme.fonts.normal};
  font-weight: bold;
  font-size: 1.2rem;
  text-align: center;
  color: ${Theme.colors.white};
`

/**
 * Affiche l'utilisateur d'une chose à faire
 */
export const CardUserContainer = styled.div`
  background-color: ${Theme.colors.white};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.4);
  padding: 0.6rem;
  opacity: 0.8;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

/**
 * Affiche l'icone d'utilisateur
 */
export const CardUserIcon = styled.i`
  font-size: 1.9rem;
  color: ${Theme.colors.black};
  margin-right: 1rem;
`

/**
 * Block contenant l'intutéle et le nom de l'utilisateur
 * d'une carte
 */
export const CardUserLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
`

/**
 * Contient l'intitulé d'un utilisateur
 */
export const CardUserLabel = styled.div`
  font-family: ${Theme.fonts.normal};
  font-weight: bold;
  color: ${Theme.colors.red};
  font-size: 0.8rem;
  margin-bottom: 0rem;
  padding-bottom: 0rem;
`

/**
 * Contient le nom d'un utilisateur
 */
export const CardUserLabelUsername = styled.div`
  font-family: ${Theme.fonts.normal};
  font-weight: bold;
  color: ${Theme.colors.black};
  font-size: 1rem;
  margin-top: 0rem;
`

/**
 * Container pour le bouton
 */
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

/**
 * Contient un bouton
 */
export const GreenButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem 1.6rem;
  background-color: ${Theme.colors.green};
  border-radius: 5px;
  outline: none;
  border: none;
  text-decoration: none;

  &:focus {
    outline: none;
  }
`

/**
 * Design l'icon d'un bouton
 */
export const ButtonIcon = styled.i`
  font-size: 1.8rem;
  color: ${Theme.colors.white};
`

/**
 * Design le label d'un bouton
 */
export const ButtonLabel = styled.p`
  font-family: ${Theme.fonts.normal};
  color: ${Theme.colors.white};
  font-weight: bold;
  padding: 0rem 0.8rem;
  font-size: 1.2rem;
`

/**
 * Contient la barre de navigation en bas de l'écran
 */
export const BottomNav = styled.nav`
  background-color: ${Theme.colors.blue};
  padding: 1rem;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

/**
 * Icon de la barre de menu
 */
export const BottomNavIcon = styled.i`
  font-size: 2rem;
  color: ${Theme.colors.white};
  padding: 0.3rem;
`
