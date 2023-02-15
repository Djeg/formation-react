import styled from 'styled-components'

/**
 * Design d'une div « sous boîte »
 *
 */
export const SubBox = styled.div`
  min-height: 20px;
  background-color: #fff;
  box-shadow: inset 0px 0px 2px rgba(0, 0, 0, 0.3);
  margin-bottom: 0.6rem;

  // Je reprend la balise et je rajoute le pseudo sélécteur
  // :last-child (permettant cible le dernier enfant)
  &:last-of-type {
    margin-bottom: 0;
  }
`

/**
 * Boutons s'affichant en bas à droite d'une boite ou sous boite
 */
export const Button = styled.button`
  min-width: 40px;
  min-height: 40px;
  border: 0;
  outline: none;
  background-color: black;
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0.6rem;
  border-radius: 6px;
  opacity: 0.5;
`

/**
 * Block vert
 */
export const GreenBlock = styled.div`
  background-color: #c3ffc5;
`
