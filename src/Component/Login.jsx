import { useStore } from '@nanostores/react'
import { Link, Outlet } from 'react-router-dom'
import {
  loginOnFirebase,
  LoginStore,
  setEmail,
  setPassword,
} from '../Store/Login'
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

  // Si j'ai un utilisateur dans mon état, alors pas besoin
  // d'afficher la page de login, mais plutôt le contenue
  // de la route c'est à dire : Outlet
  if (state.user) {
    return <Outlet />
  }

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
          <SendButton onClick={loginOnFirebase}>Envoyer</SendButton>
        )}
      </ButtonContainer>

      <TextContainer>
        Vous n'avez pas de compte ?
        <br />
        <Link to="/inscription">Inscrivez-vous</Link>
      </TextContainer>
    </CenteredContainer>
  )
}
