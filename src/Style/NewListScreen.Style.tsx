import styled from 'styled-components/native'
import { theme } from './Theme.Style'

/**
 * @module NewListScreen.Style
 * @description
 *  Contient le style de l'ajout d'une nouvelle liste
 */

/**
 * Contient le formulaire de création d'une nouvelle liste
 */
export const FormContainer = styled.View`
  flex: 2;
  justify-content: center;
`

/**
 * Contient l'input permettant de remplir une chose
 * à faire
 */
export const NewListInput = styled.TextInput`
  font-family: 'Poppins_400Regular';
  color: ${theme.colors.black};
  font-size: 20px;
  padding: 10px;
  border-bottom-color: ${theme.colors.black};
  border-bottom-width: 1px;
  border-bottom-style: solid;
  margin: 0px 40px;
`
