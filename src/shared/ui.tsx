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

export const StretchFlexContainer = styled.div`
  display: flex;
  align-items: stretch;
  padding: 0px 1.2rem;
  margin: 0.6rem 0;
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
  padding: 0.4rem 0.8rem;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  background-color: ${theme.colors.white};
`

export const TagIcon = styled.i`
  display: flex;
  font-size: 1.4rem;
  color: ${theme.colors.greenOcean};
`

export const TagLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 0.6rem;
`

export const TagLabelEntitled = styled.p`
  color: ${theme.colors.red};
  font-size: 0.6rem;
  font-weight: bold;
  margin: 0;
`

export const TagLabel = styled.p`
  color: ${theme.colors.greenOcean};
  margin: 0;
  font-size: 0.8rem;
  font-weight: bold;
`

type InputContainerProps = {
  display?: 'white' | 'black'
}

export const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid
    ${props =>
      props.display === 'white' ? theme.colors.white : theme.colors.greenOcean};
`

type InputProps = {
  display?: 'white' | 'black'
}

export const Input = styled.input<InputProps>`
  display: flex;
  flex-grow: 2;
  background: none;
  border: none;
  padding: 0.6rem;
  color: ${props =>
    props.display === 'white' ? theme.colors.white : theme.colors.softBlack};

  &:focus {
    outline: none;
    border: none;
  }
`

export const InputIcon = styled.i`
  display: flex;
  color: ${theme.colors.validGreen};
  font-size: 1.6rem;
  padding: 0.6rem;
`

export const TodoListContainer = styled.section`
  display: flex;
  flex-direction: column;
`

export type TodoProps = {
  done?: boolean
}

export const Todo = styled.div<TodoProps>`
  display: flex;
  padding: 0.6rem 1.2rem;
  background-color: ${props =>
    props.done ? theme.colors.validGreen : theme.colors.white};
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3) inset;
  align-items: center;
  transition: all 0.5s;
  color: ${props =>
    props.done ? theme.colors.coldWhite : theme.colors.softBlack};
`

export const TodoLabel = styled.p`
  margin: 0;
  flex-grow: 2;
  font-size: 0.8rem;
  font-weight: 600;
`

export const TodoIcon = styled.i`
  color: ${theme.colors.red};
  cursor: pointer;
  font-size: 1.4rem;
`

export const BottomNav = styled.footer`
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100vw;
  box-sizing: border-box;
  background-color: ${theme.colors.greenOcean};
  color: ${theme.colors.coldWhite};
  flex-direction: column;
  align-items: stretch;
`

export const BottomNavAction = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`

export const BottomNavShare = styled.div`
  flex-basis: 50%;
  padding: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.validGreen};
  cursor: pointer;
`

export const BottomNavDelete = styled.div`
  flex-basis: 50%;
  padding: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.red};
  cursor: pointer;
`

export const BottomNavMenu = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`

export const BottomNavItem = styled.i`
  font-size: 1.2rem;
`

type GreenRightFrameProps = {
  open?: boolean
}

export const GreenRightFrame = styled.div<GreenRightFrameProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  background-color: ${theme.colors.greenOcean};
  color: ${theme.colors.white};
  transition: all 0.5s;
  transform: ${props => (props.open ? `translateX(0)` : `translateX(105vw)`)};
  z-index: 10;
  flex-direction: column;
  align-items: stretch;
`

export const GreenFrameHeader = styled.div`
  padding: 0 0.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const GreenFrameClose = styled.i`
  font-size: 1.4rem;
`

export const GreenFrameTitle = styled.p`
  text-align: right;
  font-size: 1.7rem;
  font-family: 'Lobster', sans-serif;
`

// ===========
// POUR LE FUN
// ===========

export const MyParagraph = styled.p`
  text-align: center;
  color: #725498;
`
