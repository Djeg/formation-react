import styled from 'styled-components'
import { AppTheme } from './App.style'

/**
 * Contient le header de l'application
 */
export const Header = styled.header`
  display: flex;
  align-items: flex-end;
  padding: 1rem 1.4rem;
`

/**
 * Contient le titre de l'application
 */
export const AppTitle = styled.p`
  font-weight: 600;
  font-size: 1.2rem;
  margin: 0;
  padding: 0;
`

/**
 * Contient le petit point jaune
 */
export const YellowDot = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${AppTheme.colors.yellow};
  border-radius: 100%;
  margin: 4px;
  z-index: -1;
`

/**
 * Contient le splash
 */
export const Splash = styled.div`
  display: flex;
  flex-direction: row-reverse;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 10;
`

/**
 * Content l'éllipse
 */
export const Ellipse = styled.div`
  width: 320px;
  height: 320px;
  background-color: ${AppTheme.colors.green};
  border-radius: 100%;
  transform: translateX(60px);
  position: absolute;
`

/**
 * Conitent la balise img du velo
 */
export const BikeImg = styled.img`
  width: 320px;
  height: 320px;
  display: flex;
  object-fit: cover;
  transform: scale(1.2);
  position: absolute;
  z-index: 10;
`

/**
 * Titre de la page
 */
export const PageTitle = styled.h1`
  margin: 1rem 2rem;
  margin-top: calc(320px + 1.4rem);
  font-size: 2.4rem;
`

/**
 * Sous titre de la page
 */
export const PageSubTitle = styled.p`
  margin: 0px 2rem;
`

/**
 * Container pour les boutons
 */
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 2rem;
  padding: 1rem 0rem;
  align-items: stretch;
`

/**
 * Bouton
 */
export const Button = styled.button`
  border: 0;
  outline: none;
  font-family: 'Sora', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  border-radius: 40px;
  background-color: ${AppTheme.colors.lightGreen};
  color: ${AppTheme.colors.blue};
  margin-bottom: 0.8rem;
  padding: 0.8rem 0rem;

  &:last-of-type {
    margin-bottom: 0;
  }
`

/**
 * Bouton jaune
 */
export const YellowButton = styled(Button)`
  background-color: ${AppTheme.colors.yellow};
`
