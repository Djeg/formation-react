import styled from 'styled-components/native'
import { theme } from './Theme.Style'

/**
 * @module App.Style
 * @description
 *  Ce module contient le style du composant application
 */

/**
 * Voici le container de base de l'application. Il contient l'intégralité
 * de l'application
 */
export const MainContainer = styled.View`
  flex: 1;
  background-color: ${theme.colors.white};
`
