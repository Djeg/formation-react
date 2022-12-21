import { TouchableOpacity } from 'react-native'
import {
  faBars,
  faCircleArrowLeft,
  faCirclePlus,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { ButtonContainer } from '../Style/HomeScreen.Style'
import {
  BackButton,
  BackIcon,
  BottomNav,
  BottomNavContainer,
  BottomNavIcon,
  ContentContainer,
  TopBarContainer,
  TopBarTitle,
  UserBanner,
  UserBannerContainer,
  UserIcon,
  UserLabel,
  UserLabelContainer,
  UserUsername,
} from '../Style/TodoListScreen.Style'
import { FormContainer, NewListInput } from '../Style/NewListScreen.Style'
import { useStore } from '@nanostores/react'
import {
  createNewList,
  NewListScreenStore,
  setLabel,
} from '../Store/NewListScreen.Store'

/**
 * @module NewListScreen
 * @description
 *  Ce module contient le composant de création d'une nouvelle
 *  list :)
 */

/**
 * Composant de création d'une nouvelle liste
 */
export default function NewListScreen() {
  // On récupére l'état de l'écran de nouvelle liste
  const { label } = useStore(NewListScreenStore)

  return (
    <>
      {/* le petit en-tête avec le bouton de retour */}
      <TopBarContainer>
        <BackButton to="/">
          <BackIcon icon={faCircleArrowLeft} size={40} />
        </BackButton>
        <TopBarTitle>Nouvelle liste</TopBarTitle>
      </TopBarContainer>

      {/* Le contenu de la page */}
      <ContentContainer>
        {/* Contient la petite banière avec le nom d'utilisateur :) */}
        <UserBannerContainer>
          <UserBanner>
            <UserIcon icon={faUser} size={35}></UserIcon>
            <UserLabelContainer>
              <UserLabel>Par</UserLabel>
              <UserUsername>John Doe</UserUsername>
            </UserLabelContainer>
          </UserBanner>
        </UserBannerContainer>

        {/* Contient le formulaire de création d'une nouvelle liste */}
        <FormContainer>
          <NewListInput
            onChangeText={setLabel}
            value={label}
            placeholder="Nom de la liste ..."
          ></NewListInput>
        </FormContainer>
      </ContentContainer>

      {/* La barre de navigation du bas */}
      <BottomNavContainer>
        <ButtonContainer to="/todos" onPress={createNewList}>
          <BottomNavIcon icon={faCirclePlus} size={40}></BottomNavIcon>
        </ButtonContainer>
        <BottomNav>
          <TouchableOpacity>
            <BottomNavIcon icon={faBars} size={40}></BottomNavIcon>
          </TouchableOpacity>
        </BottomNav>
      </BottomNavContainer>
    </>
  )
}
