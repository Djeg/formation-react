import styled from 'styled-components'

/**
 * Contient de contenue de la page du design 1.
 * C'est le block principal
 */
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100vw;
  background-color: azure;
`

/**
 * Contient la barre d'en-tête
 */
export const HeaderBar = styled.header`
  min-height: 80px;
  display: flex;
  align-items: center;
  background-color: #3f0c46;
  color: #eeeeee;
  padding: 0.6rem;
`

/**
 * Contient le contenue de la page
 */
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
  background-color: bisque;
`

/**
 * Contient le pied de page
 */
export const FooterBar = styled.footer`
  min-height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3f0c46;
  color: #eeeeee;
`
