import { Link } from 'react-router-dom'
import {
  ButtonContainer,
  CenteredContainer,
  InputContainer,
  InputIcon,
  SendButton,
  TextContainer,
  TextInput,
  Title,
} from '../Style/Registration'

/**
 * Composant affichant et traitant la page d'inscription
 */
export default function Registration() {
  return (
    <CenteredContainer>
      {/* Titre de la page */}
      <Title>Inscription</Title>

      {/* Le container d'un input */}
      <InputContainer>
        <TextInput type="text" placeholder="Email ..."></TextInput>
        <InputIcon className="fa-solid fa-circle-check" />
      </InputContainer>

      {/* Le second container pour le mot de passe */}
      <InputContainer>
        <TextInput type="password" placeholder="Mot de passe ..."></TextInput>
        <InputIcon className="fa-solid fa-circle-check" />
      </InputContainer>

      {/* Container pour le bouton d'envoi */}
      <ButtonContainer>
        <SendButton>Envoyer</SendButton>
      </ButtonContainer>

      {/* Contient le texte */}
      <TextContainer>
        Vous avez dèja un compte ?
        <br />
        <Link to="/connexion">Connéctez-vous</Link>
      </TextContainer>
    </CenteredContainer>
  )
}
