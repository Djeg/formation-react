import styled from 'styled-components'

/**
 * Affiche une sous boite (une boite dans une boite)
 */
export const SubBox = styled.div`
  padding: 0.6rem;
  border-radius: 5px;
  background-color: chocolate;
  margin: 0.6rem 0;
  min-height: 40px;
`

/**
 * Petit intrus s'affichant en bas à droite d'une boite
 */
export const Intruder = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 1rem;
  padding: 0.6rem;
  background-color: cornsilk;
`
