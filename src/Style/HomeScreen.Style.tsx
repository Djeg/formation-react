import { Link } from 'react-router-native'
import styled from 'styled-components/native'
import { theme } from './Theme.Style'

/**
 * @module HomeScreen.Style
 * @description
 *  Ce module contient les styles de l'ecran d'accueil
 */

/**
 * Contient le style du grand titre
 */
export const MainTitle = styled.Text`
  color: ${theme.colors.black};
  font-family: 'Lobster_400Regular';
  font-size: 50px;
  text-align: center;
  padding: 10px;
`

/**
 * Container contenant la petite carte pour une list
 */
export const ListCardContainer = styled(Link)`
  background-color: ${theme.colors.green};
  margin-bottom: 20px;
`

/**
 * Contient le titre d'un care pour une liste
 */
export const CardTitle = styled.Text`
  color: ${theme.colors.white};
  font-size: 20px;
  text-align: center;
  padding: 15px;
  font-family: 'Poppins_700Bold';
`

/**
 * Contient un bouton
 */
export const ButtonContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.validGreen};
  padding: 10px;
`

/**
 * Bouton
 */
export const Button = styled.TouchableOpacity`
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`

/**
 * Label d'un bouton
 */
export const ButtonLabel = styled.Text`
  color: ${theme.colors.white};
  font-size: 20px;
  text-align: center;
  padding: 15px;
  font-family: 'Poppins_700Bold';
`
