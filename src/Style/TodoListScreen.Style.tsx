import styled from 'styled-components/native'
import { theme } from './Theme.Style'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { TodoItemProps } from '../Type/TodoListScreen.Type'

/**
 * @module TodoListScreen.Style
 *
 * @descrition
 *  Ce module contient le style de l'écran de TodoList
 */

/**
 * Voici le container du bandeaux en haut. Le header
 */
export const TopBarContainer = styled.View`
  flex-direction: row;
  padding: 10px;
  padding-top: 40px;
  padding-bottom: 10px;
  background-color: ${theme.colors.green};
  align-items: center;
  color: ${theme.colors.white};
  justify-content: space-between;
  margin: 0;
`

/**
 * Contient le bouton de retour
 */
export const BackButton = styled.TouchableOpacity`
  align-items: center;
  font-size: 30px;
`

/**
 * Contient l'icon du bouton de retour
 */
export const BackIcon = styled(FontAwesomeIcon)`
  color: ${theme.colors.white};
  width: 40px;
  height: 40px;
`

/**
 * Contient le titre de la liste
 */
export const TopBarTitle = styled.Text`
  color: ${theme.colors.white};
  font-size: 45px;
  font-family: 'Lobster_400Regular';
`

/**
 * Voici le container du contenu de la page
 */
export const ContentContainer = styled.ScrollView`
  flex: 2;
  flex-grow: 2;
`

/**
 * Voici le container de la bar de navigation en base de l'écran
 */
export const BottomNavContainer = styled.View`
  flex-direction: column;
  justify-content: space-between;
`

/**
 * Contient du text en blanc
 */
export const WhiteText = styled.Text`
  color: ${theme.colors.white};
`

/**
 * Contient du text en noir
 */
export const BlackText = styled.Text`
  color: ${theme.colors.black};
`

/**
 * Contient le petit bandeau avec le nom d'utilisateur
 */
export const UserBannerContainer = styled.View`
  align-items: center;
  margin: 0;
`

/**
 * Contient la petite bannière afichant l'utilisateur
 */
export const UserBanner = styled.View`
  background-color: ${theme.colors.coldWhite};
  padding: 10px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  flex-direction: row;
  margin: 0;
  align-items: center;
`

/**
 * Contient le petit icone d'utilisateur
 */
export const UserIcon = styled(FontAwesomeIcon)`
  color: ${theme.colors.black};
  margin-right: 10px;
`

/**
 * Contient le label et le nom d'utilisateur
 */
export const UserLabelContainer = styled.View`
  align-items: center;
  justify-content: flex-start;
`

/**
 * Contient le label
 */
export const UserLabel = styled.Text`
  color: ${theme.colors.red};
  font-family: 'Poppins_400Regular';
  font-size: 12px;
`

/**
 * Contient le nom d'utilisateur
 */
export const UserUsername = styled.Text`
  color: ${theme.colors.green};
  font-family: 'Poppins_700Bold';
  font-size: 17px;
`

/**
 * Contient l'input et l'icone d'ajout d'un chose
 * à faire
 */
export const TodoInputContainer = styled.TouchableOpacity`
  border-bottom-width: 1px;
  border-bottom-color: ${theme.colors.black};
  border-bottom-style: solid;
  margin: 0px 30px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 20px;
`

/**
 * Contient l'input permettant de remplir une chose
 * à faire
 */
export const TodoInput = styled.TextInput`
  font-family: 'Poppins_400Regular';
  color: ${theme.colors.black};
  flex: 2;
  font-size: 20px;
`

/**
 * Contient l'icone d'ajout
 */
export const TodoAddIcon = styled(FontAwesomeIcon)`
  color: ${theme.colors.green};
  margin-left: 10px;
`

/**
 * Contient une chose à faire
 */
export const TodoItem = styled.View<TodoItemProps>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ done = false }) =>
    done ? theme.colors.validGreen : theme.colors.coldWhite};
  padding: 10px 20px;
`

/**
 * Label d'un todo
 */
export const TodoLabel = styled.Text<TodoItemProps>`
  color: ${({ done = false }) =>
    done ? theme.colors.white : theme.colors.black};
  font-family: 'Poppins_700Bold';
  font-size: 16px;
  flex: 2;
  padding: 10px;
`

/**
 * Icon de supression du todo
 */
export const DeleteTodoIcon = styled(FontAwesomeIcon)`
  color: ${theme.colors.red};
  margin-right: 10px;
`

/**
 * Contient la barre de navigation principal en bas de l'écran
 */
export const BottomNav = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${theme.colors.green};
`

/**
 * Contient l'icon de menu du bas
 */
export const BottomNavIcon = styled(FontAwesomeIcon)`
  color: ${theme.colors.white};
`

/**
 * Contient le bouton de suprresion de la liste
 * complete
 */
export const DeleteListButton = styled.TouchableOpacity`
  background-color: ${theme.colors.red};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
`
