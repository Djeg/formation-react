import styled from 'styled-components'
import { GreenBlock } from './Design4.style'

/**
 * Contient le style du composant HeaderBar
 */
export const HeaderBar = styled.header`
  min-height: 80px;
  background-color: #361212;
  padding: 0.6rem;
  display: flex;
  justify-content: space-between;

  // On stylise tout les GreenBlock présent
  // dans le HeaderBar !
  ${GreenBlock} {
    width: 80px;
    height: 80px;
  }
`

/**
 * Contient le style du composant Content
 */
export const Content = styled.main`
  min-height: 200px;
  background-color: #dbdbdb;
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  padding: 0.6rem;
`

/**
 * Contient le style du composant footer bar !
 */
export const FooterBar = styled.footer`
  min-height: 100px;
  background-color: #361212;
  display: flex;
  flex-direction: row-reverse;
  padding: 0.6rem;

  ${GreenBlock} {
    flex-grow: 2;
  }
`
