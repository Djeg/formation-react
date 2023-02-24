import { Poppins_600SemiBold } from '@expo-google-fonts/poppins'
import { FontAwesome } from '@expo/vector-icons'
import styled from 'styled-components/native'

/**
 * Contient les variables du thème d'affichage
 */
export const Theme = {
  colors: {
    white: '#F0F0F0',
    coldWhite: '#EDFFFB',
    greenOcean: '#075252',
    softBlack: '#4F4F4F',
    red: '#BB8579',
    green: '#557859',
  },
}

/**
 * Affiche un écran
 */
export const Screen = styled.View`
  min-height: 100vh;
  background-color: ${Theme.colors.coldWhite};
`

/**
 * Affiche le header
 */
export const Header = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

/**
 * Big text
 */
export const BigText = styled.Text`
  font-family: 'Lobster_400Regular';
  font-size: 32px;
  padding: 8px;
  color: ${Theme.colors.softBlack};
`

/**
 * Barre de navigation du
 */
export const BottomNav = styled.View`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${Theme.colors.greenOcean};
  flex-direction: row;
  justify-content: space-between;
`

/**
 * Icone font awesome pour le menu
 */
export const MenuIcon = styled(FontAwesome)`
  padding: 15px;
`

/**
 * Miniature d'une liste de chose à faire
 */
export const ListThumb = styled.View`
  background-color: ${Theme.colors.greenOcean};
  align-items: center;
  margin-bottom: 14px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
`

/**
 * Ombre porté d'une miniature
 */
export const ListThumbShadow = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 8,
  },
  shadowOpacity: 0.33,
  shadowRadius: 5,
  elevation: 8,
}

/**
 * Miniature d'un utilisateur
 */
export const UserThumb = styled.View`
  flex-direction: row;
  background-color: ${Theme.colors.white};
  opacity: 0.75;
  align-items: center;
  padding: 8px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`

/**
 * Icone de l'utilisateur
 */
export const UserIcon = styled(FontAwesome)`
  margin-right: 8px;
`

/**
 * Label de l'utilisat
 */
export const UserBy = styled.Text`
  color: ${Theme.colors.red};
  font-size: 10px;
  font-family: 'Poppins_400Regular';
`

/**
 * Nom de l'utilisateur
 */
export const UserName = styled.Text`
  color: ${Theme.colors.greenOcean};
  font-size: 16px;
  font-family: 'Poppins_600SemiBold';
`

/**
 * Label d'une miniature
 */
export const ListThumbLabel = styled.Text`
  text-align: center;
  padding: 20px 0px;
  font-size: 20px;
  font-family: 'Poppins_600SemiBold';
  color: ${Theme.colors.white};
`

/**
 * Groupe de bouton
 */
export const ButtonGroup = styled.View`
  align-items: center;
`

/**
 * Bouton
 */
export const Button = styled.TouchableOpacity`
  border-radius: 10px;
  background-color: ${Theme.colors.green};
  flex-direction: row;
  align-items: center;
  padding: 18px;
`

/**
 * Icon du bouton
 */
export const ButtonIcon = styled(FontAwesome)`
  margin-right: 10px;
`

/**
 * Label tu bouton
 */
export const ButtonLabel = styled.Text`
  color: ${Theme.colors.white};
  font-family: 'Poppins_600SemiBold';
  font-size: 18px;
`
