import { useEffect } from 'react'
import { useStore } from '@nanostores/react'
import { Link, Outlet } from 'react-router-native'
import {
  initLoginScreen,
  LoginScreenStore,
  sendLogin,
  setEmail,
  setPassword,
} from '../Store/LoginScreen.Store'
import {
  CenteredContainer,
  Input,
  LoadingButton,
  LoadingButtonLabel,
  PageTitle,
  SendButton,
  SendButtonContainer,
  SendButtonLabel,
  SubText,
  TextContainer,
  TextLinkLabel,
} from '../Style/SubscriptionScreen.Style'

/**
 * @module LoginScreen
 * @description
 *  Ce module contient le composant de connexion à l'application
 */

/**
 * Affiche l'écran de connexion à l'application
 */
export default function LogginScreen() {
  // On récupére l'état du composant de connexion
  const { user, loading, email, password } = useStore(LoginScreenStore)

  // Utilisation d'un effet à l'affichage du composant afin
  // de connécté automatiquement l'utilisateur
  useEffect(() => {
    initLoginScreen()
  }, [])

  // Si il y a un utilisateur
  if (user) {
    return <Outlet></Outlet>
  }

  return (
    <>
      <CenteredContainer>
        {/* Titre de la page */}
        <PageTitle>Connexion</PageTitle>

        {/* Les inputs */}
        <Input
          placeholder="Email ..."
          value={email}
          onChangeText={setEmail}
        ></Input>
        <Input
          placeholder="Mot de passe ..."
          value={password}
          onChangeText={setPassword}
        ></Input>

        {/* Le bouton d'envoi ou de chargemen */}
        <SendButtonContainer>
          {loading ? (
            <LoadingButton>
              <LoadingButtonLabel>Envoie en cours ...</LoadingButtonLabel>
            </LoadingButton>
          ) : (
            <SendButton onPress={sendLogin}>
              <SendButtonLabel>Envoyer</SendButtonLabel>
            </SendButton>
          )}
        </SendButtonContainer>

        {/* Le texte permettant de s'inscrire */}
        <TextContainer>
          <SubText>Vous n'avez pas de compte ?</SubText>
          <Link to="/inscription">
            <TextLinkLabel>Inscrivez-vous</TextLinkLabel>
          </Link>
        </TextContainer>
      </CenteredContainer>
    </>
  )
}
