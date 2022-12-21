import styled from 'styled-components/native'
import { theme } from './Theme.Style'

/**
 * @module SubscriptionScreen.Style
 * @description
 *  Ce module contient les styles du composant SubscriptionScreen
 */

/**
 * Container centré verticalement
 */
export const CenteredContainer = styled.View`
  flex: 2;
  justify-content: center;
`

/**
 * Titre de la page
 */
export const PageTitle = styled.Text`
  font-family: 'Lobster_400Regular';
  font-size: 50px;
  text-align: center;
  padding: 10px;
`

/**
 * Input pour l'email et le mote de passe
 */
export const Input = styled.TextInput`
  border-bottom-color: ${theme.colors.black};
  border-bottom-width: 1px;
  border-bottom-style: solid;
  text-align: center;
  margin: 10px 20px;
  padding: 10px;
  font-size: 16px;
`

/**
 * Container pour le bouton d'envoie
 */
export const SendButtonContainer = styled.View`
  margin: 10px 20px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

/**
 * Bouton d'envoie du formulaire
 */
export const SendButton = styled.TouchableOpacity`
  background-color: ${theme.colors.validGreen};
  padding: 15px 30px;
  border-radius: 5px;
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

/**
 * Label du bouton d'envoie
 */
export const SendButtonLabel = styled.Text`
  color: ${theme.colors.white};
  font-family: 'Poppins_700Bold';
  font-size: 20px;
  text-align: center;
`

/**
 * Contient le container pour le text
 */
export const TextContainer = styled.View`
  margin-top: 20px;
  justify-content: center;
  text-align: center;
`

/**
 * Contient un text centré
 */
export const SubText = styled.Text`
  color: ${theme.colors.black};
  font-family: 'Poppins_400Regular';
  text-align: center;
  font-size: 16px;
`

/**
 * Contient le lien
 */
export const TextLinkLabel = styled.Text`
  color: ${theme.colors.blue};
  font-family: 'Poppins_700Bold';
  text-align: center;
  font-size: 18px;
`

/**
 * Contient le container pour le bouton de chargement
 */
export const LoadingButton = styled.View`
  background-color: ${theme.colors.coldWhite};
  padding: 15px 30px;
  border-radius: 5px;
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

/**
 * Contient le label pour le bouton de chargement
 */
export const LoadingButtonLabel = styled.Text`
  color: ${theme.colors.black};
  font-family: 'Poppins_700Bold';
  font-size: 20px;
  text-align: center;
`
