import styled from 'styled-components'
import { AppTheme } from '../../exos-spedah/styles/App.style'

/**
 * Display the bottom bar menu
 */
export const BottomBar = styled.nav`
  display: flex;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: ${AppTheme.colors.transparentBlue};
`

/**
 * Display a burger button
 */
export const BurgerButton = styled.button`
  border: 0;
  outline: 0;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  i {
    font-size: 1.7rem;
    color: ${AppTheme.colors.white};
  }
`

/**
 * Container for the open menu
 */
export const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${AppTheme.colors.blue};
  display: flex;
  flex-direction: column;
  align-items: stretch;
`

/**
 * Header for the menu
 */
export const MenuHeader = styled.div`
  display: flex;
  padding: 1rem;
  color: ${AppTheme.colors.white};
  align-items: center;

  i {
    font-size: 1.4rem;
    display: flex;
    margin-right: 1rem;
  }

  p {
    color: ${AppTheme.colors.white};
    font-size: 2rem;
    margin: 0;
    font-weight: bold;
  }
`

/**
 * Item for a menu element
 */
export const MenuItem = styled.p`
  font-size: 1.3rem;
  color: ${AppTheme.colors.white};
  padding: 1rem;
  margin: 0;

  a {
    text-decoration: none;
    outline: none;
    border: none;
    color: ${AppTheme.colors.white};
  }
`
