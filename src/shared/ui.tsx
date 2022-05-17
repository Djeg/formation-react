// Import de styled components
import styled, { createGlobalStyle } from 'styled-components'

/**
 * Ce fichier contient l'intégralité de nos composants
 * stylisé. Vous retrouverez TOUT le css de l'application
 * en dessous
 */

// ============================================
// Théme : Contient le thème (couleurs etc ...)
// ============================================
export const theme = {
  colors: {
    coldWhite: '#EDFFFB',
    softBlack: '#4F4F4F',
    greenOcean: '#075252',
    validGreen: '#557859',
    red: '#BB8579',
    deepBlue: '#264F4A',
    white: '#EFEFEF',
  },
}

//=========================================================
// Style Globale : Style des balises HTML nue (sans classe)
//=========================================================

export const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    font-family: 'Nunito', sans-serif;
    background-color: ${theme.colors.coldWhite};
    color: ${theme.colors.softBlack};
  }

  h1 {
    font-family: 'Lobster', sans-serif;
  }
`

// ============
// Les gabarits
// ============

export const AppContainer = styled.main`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  min-width: 100vw;
  min-height: 100vh;
  align-items: stretch;
`

export const CenteredFlexContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const TopNav = styled.nav`
  display: flex;
  background-color: ${theme.colors.greenOcean};
  color: ${theme.colors.coldWhite};
  align-items: center;
  padding: 0px 0.6rem;
`

export const TopNavIcon = styled.i`
  font-size: 1.4rem;
  padding: 0.6rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export const TopNavTitle = styled.h1`
  text-align: right;
  flex-grow: 2;
  margin: 0.6rem 0;
`

export const Tag = styled.div`
  padding: 0.6rem;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  background-color: ${theme.colors.white};
`

export const TagIcon = styled.i`
  display: flex;
  font-size: 1.6rem;
  color: ${theme.colors.greenOcean};
`

export const TagLabel = styled.p`
  color: ${theme.colors.greenOcean};
  margin: 0;
  font-weight: 700;
  margin-left: 0.6rem;
`

// ===========
// POUR LE FUN
// ===========

export const MyParagraph = styled.p`
  text-align: center;
  color: #725498;
`
