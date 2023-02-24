import { FontAwesome } from '@expo/vector-icons'
import { Text, View } from 'react-native'
import {
  BigText,
  BottomNav,
  Button,
  ButtonGroup,
  ButtonIcon,
  ButtonLabel,
  Header,
  ListThumb,
  ListThumbLabel,
  ListThumbShadow,
  MenuIcon,
  Theme,
  UserBy,
  UserIcon,
  UserName,
  UserThumb,
} from '../styles/Home.style'

/**
 * Composant d'affichage de la page d'accueil
 */
export default function Home() {
  return (
    <>
      <Header>
        <BigText>Mes Todos</BigText>
      </Header>

      <ListThumb style={ListThumbShadow}>
        <UserThumb>
          <UserIcon name="user" size={32} color={Theme.colors.greenOcean} />
          <View>
            <UserBy>Par</UserBy>
            <UserName>Rose</UserName>
          </View>
        </UserThumb>
        <ListThumbLabel>Petites courses</ListThumbLabel>
      </ListThumb>

      <ListThumb style={ListThumbShadow}>
        <UserThumb>
          <UserIcon name="user" size={32} color={Theme.colors.greenOcean} />
          <View>
            <UserBy>Par</UserBy>
            <UserName>Rose</UserName>
          </View>
        </UserThumb>
        <ListThumbLabel>Pour le dimanche</ListThumbLabel>
      </ListThumb>

      <ListThumb style={ListThumbShadow}>
        <UserThumb>
          <UserIcon name="user" size={32} color={Theme.colors.greenOcean} />
          <View>
            <UserBy>Par</UserBy>
            <UserName>Rose</UserName>
          </View>
        </UserThumb>
        <ListThumbLabel>Ménage</ListThumbLabel>
      </ListThumb>

      <ButtonGroup>
        <Button>
          <ButtonIcon name="plus-circle" size={32} color={Theme.colors.white} />
          <ButtonLabel>Nouvelle liste</ButtonLabel>
        </Button>
      </ButtonGroup>

      <BottomNav>
        <MenuIcon name="bars" size={32} color="white" />
        <MenuIcon name="user" size={32} color="white" />
      </BottomNav>
    </>
  )
}
