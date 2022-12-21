import { useStore } from '@nanostores/react'
import { Link, useNavigate } from 'react-router-native'
import {
  sendSubscription,
  setEmail,
  setPassword,
  setUsername,
  SubscriptionScreenStore,
} from '../Store/SubscriptionScreen.Store'
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
 *  Module contenant le composant d'inscription à l'application
 */

/**
 * Composant affichant la page d'inscription
 */
export default function SubscriptionScreen() {
  // On récupére l'état du composant d'inscription
  const { loading, username, email, password } = useStore(
    SubscriptionScreenStore,
  )
  // on récupére la navigation du react router pour faire la redirection
  // lorsque l'utilisateur est bien inscrit
  const navigate = useNavigate()

  return (
    <>
      <CenteredContainer>
        <PageTitle>Inscription</PageTitle>
        <Input
          placeholder="Votre nom d'utilisateur ..."
          value={username}
          onChangeText={setUsername}
        ></Input>
        <Input
          placeholder="Votre email ..."
          value={email}
          onChangeText={setEmail}
        ></Input>
        <Input
          placeholder="Votre mot de passe ..."
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        ></Input>
        <SendButtonContainer>
          {loading ? (
            <LoadingButton>
              <LoadingButtonLabel>Envoie en cours ...</LoadingButtonLabel>
            </LoadingButton>
          ) : (
            <SendButton
              onPress={async () => {
                await sendSubscription()
                navigate('/')
              }}
            >
              <SendButtonLabel>Envoyer</SendButtonLabel>
            </SendButton>
          )}
        </SendButtonContainer>
        <TextContainer>
          <SubText>Vous avez dèja un compte ?</SubText>
          <Link to="/">
            <TextLinkLabel>Connéctez-vous</TextLinkLabel>
          </Link>
        </TextContainer>
      </CenteredContainer>
    </>
  )
}
