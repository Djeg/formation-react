import { useStore } from '@nanostores/react'
import { Link, Outlet } from 'react-router-dom'
import {
  changeEmail,
  changePassword,
  connect,
  googleConnect,
  UserStore,
} from '../stores/UserStore'
import {
  AllCenteredScreen,
  CenteredText,
  GreenButton,
  InputGroup,
  Title,
} from '../styles/Auth.style'

/**
 * Composant permettant de se connécter à l'application
 */
export default function Connection() {
  const {
    email,
    password,
    error,
    isSending,
    isEmailValid,
    isPasswordValid,
    user,
  } = useStore(UserStore)

  // Si je suis connécté
  if (user) {
    // Je retourne les enfants de la route
    return <Outlet />
  }

  return (
    <AllCenteredScreen>
      <Title>Connexion</Title>
      <InputGroup>
        <input
          type="email"
          value={email}
          onChange={changeEmail}
          placeholder="Email"
        />
        {isEmailValid === true ? (
          <i className="fa-solid fa-circle-check"></i>
        ) : isEmailValid === false ? (
          <i className="fa-solid fa-circle-xmark"></i>
        ) : null}
      </InputGroup>
      <InputGroup>
        <input
          type="password"
          value={password}
          onChange={changePassword}
          placeholder="Mot de passe"
        />
        {isPasswordValid === true ? (
          <i className="fa-solid fa-circle-check"></i>
        ) : isPasswordValid === false ? (
          <i className="fa-solid fa-circle-xmark"></i>
        ) : null}
      </InputGroup>
      {error ? <p>{error}</p> : null}
      {isSending ? (
        <p>Chargement</p>
      ) : (
        <>
          <GreenButton onClick={connect}>Connection</GreenButton>
          <GreenButton onClick={googleConnect}>
            <i className="fa-brands fa-google"></i>
          </GreenButton>
        </>
      )}
      <CenteredText>
        Vous n'avez pas de compte ?
        <br />
        <Link to="/inscription">Inscrivez-vous !</Link>
      </CenteredText>
    </AllCenteredScreen>
  )
}
