import {
  faCirclePlus,
  faCircleXmark,
  faHome,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-native'
import { logout } from '../Store/LoginScreen.Store'
import {
  CloseButton,
  CloseButtonContainer,
  MenuContainer,
  MenuHeaderContainer,
  MenuItemContainer,
  MenuItemIcon,
  MenuItemLabel,
  MenuTitle,
  RedMenuItemContainer,
} from '../Style/Menu.Style'

/**
 * @module Menu
 * @description
 *  Ce module contient le composant du menu
 */

/**
 * Affiche la menu de l'application
 */
export default function Menu() {
  // Récupération de la fonciton de navigation du react router
  const navigate = useNavigate()

  return (
    <MenuContainer>
      {/* Affiche le header du menu */}
      <MenuHeaderContainer>
        <CloseButtonContainer
          to="/"
          onPress={e => {
            e.preventDefault()
            navigate(-1)
          }}
        >
          <CloseButton icon={faCircleXmark} size={40}></CloseButton>
        </CloseButtonContainer>
        <MenuTitle>Menu</MenuTitle>
      </MenuHeaderContainer>

      {/* Affiche les items du menu */}
      <MenuItemContainer to="/">
        <>
          <MenuItemIcon icon={faHome} size={35}></MenuItemIcon>
          <MenuItemLabel>Accueil</MenuItemLabel>
        </>
      </MenuItemContainer>
      <MenuItemContainer to="/new">
        <>
          <MenuItemIcon icon={faCirclePlus} size={35}></MenuItemIcon>
          <MenuItemLabel>Nouvelle liste</MenuItemLabel>
        </>
      </MenuItemContainer>
      <RedMenuItemContainer
        to="/"
        onPress={e => {
          e.preventDefault()
          logout()
        }}
      >
        <>
          <MenuItemIcon icon={faRightFromBracket} size={35}></MenuItemIcon>
          <MenuItemLabel>Déconnexion</MenuItemLabel>
        </>
      </RedMenuItemContainer>
    </MenuContainer>
  )
}
