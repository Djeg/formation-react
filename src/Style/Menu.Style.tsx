import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { Link } from 'react-router-native'
import styled from 'styled-components/native'
import { theme } from './Theme.Style'

/**
 * @module Menu.Style
 * @description
 *  Contient les styles du menu
 */

/**
 * Container générale du menu
 */
export const MenuContainer = styled.View`
  flex: 2;
  background-color: ${theme.colors.green};
  padding-top: 40px;
`

/**
 * Container pour le header du menu
 */
export const MenuHeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 20px;
  align-items: center;
  margin-bottom: 20px;
`

/**
 * Container pour le bouton de fermeture
 */
export const CloseButtonContainer = styled(Link)``

/**
 * Style du bouton de fermeture
 */
export const CloseButton = styled(FontAwesomeIcon)`
  color: ${theme.colors.white};
  width: 40px;
  height: 40px;
`

/**
 * Contient le titre du menu
 */
export const MenuTitle = styled.Text`
  color: ${theme.colors.white};
  font-size: 45px;
  font-family: 'Lobster_400Regular';
`

/**
 * Contient un item du menu
 */
export const MenuItemContainer = styled(Link)`
  flex-direction: row;
  align-items: center;
  background-color: ${theme.colors.deepBlue};
  padding: 20px 20px;
`

/**
 * Contient un item du menu tout rouge :)
 */
export const RedMenuItemContainer = styled(Link)`
  flex-direction: row;
  align-items: center;
  background-color: ${theme.colors.red};
  padding: 20px 20px;
`

/**
 * Contient l'icone du menu
 */
export const MenuItemIcon = styled(FontAwesomeIcon)`
  color: ${theme.colors.white};
  width: 40px;
  height: 40px;
  padding: 5px;
  margin-right: 20px;
`

/**
 * Contient le label du menu
 */
export const MenuItemLabel = styled.Text`
  color: ${theme.colors.white};
  font-size: 20px;
  font-family: 'Poppins_700Bold';
`
