import { useStore } from '@nanostores/react'
import { Link } from 'react-router-dom'
import { LoginStore, setEmail, setPassword } from '../Store/Login'
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
 * Composant affichant l'écran de connexion
 */
export default function Login() {
  // On récupére l'état contenue dans le login store
  const state = useStore(LoginStore)

  return (
    <CenteredContainer>
      <Title>Connection</Title>

      <InputContainer>
        <TextInput
          type="email"
          placeholder="email ..."
          value={state.email}
          onChange={e => setEmail(e.currentTarget.value)}
        />
        {state.emailError ? <p>{state.emailError}</p> : null}
        <InputIcon className="fa-solid fa-circle-check" />
      </InputContainer>

      <InputContainer>
        <TextInput
          type="password"
          placeholder="Mot de passe ..."
          value={state.password}
          onChange={e => setPassword(e.currentTarget.value)}
        />
        {state.passwordError ? <p>{state.passwordError}</p> : null}
        <InputIcon className="fa-solid fa-circle-check" />
      </InputContainer>

      <ButtonContainer>
        {state.loading ? (
          <p>Chargement ....</p>
        ) : (
          <SendButton>Envoyer</SendButton>
        )}
      </ButtonContainer>

      <TextContainer>
        Vous n'avez pas de compte ?
        <br />
        <Link to="/">Inscrivez-vous</Link>
      </TextContainer>
    </CenteredContainer>
  )
}
